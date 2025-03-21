const fs = require('fs');
const path = require('path');

/**
 * Recursively walks through a directory to find all .md files.
 * @param {string} dir - Directory to search in.
 * @returns {string[]} - Array of absolute file paths to .md files.
 */
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      // Recurse into subdirectory
      results = results.concat(walk(filePath));
    } else if (path.extname(file) === '.md') {
      results.push(filePath);
    }
  });
  return results;
}

// Get command-line arguments for source and output directories.
const sourceDir = process.argv[2] || '.';
const outputDir = process.argv[3] || path.join(__dirname, 'output');

// Create the output directory if it doesn't exist.
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Find all Markdown files under the source directory.
const mdFiles = walk(sourceDir);

mdFiles.forEach((filePath) => {
  // Compute the file's relative path from the source directory.
  const relativePath = path.relative(sourceDir, filePath);
  // Replace directory separators with underscores.
  const newFileName = relativePath.split(path.sep).join('_');
  const outputPath = path.join(outputDir, newFileName);
  
  // Read the file and write its content to the new output file.
  const content = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(outputPath, content, 'utf8');
  
  console.log(`Copied ${filePath} to ${outputPath}`);
});

console.log('All markdown files have been processed.');
