#!/bin/bash

# Set default values
WOVN_CLI_VERSION=${WOVN_CLI_VERSION:-"latest"}

# Check if WOVN_PROJECT_TOKEN, WOVN_API_KEY, ANDROID_PROJECT_PATH are set
if [[ -z "$WOVN_PROJECT_TOKEN" || -z "$WOVN_API_KEY" || -z "$ANDROID_PROJECT_PATH" ]]; then
  echo "Error: WOVN_PROJECT_TOKEN, WOVN_API_KEY, ANDROID_PROJECT_PATH, and optionally WOVN_CLI_VERSION must be set as environment variables."
  echo "Example usage:"
  echo "  export WOVN_PROJECT_TOKEN=your_project_token_here"
  echo "  export WOVN_API_KEY=your_api_key_here"
  echo "  export ANDROID_PROJECT_PATH=/path/to/your/android/project"
  echo "  export WOVN_CLI_VERSION=latest # Optional (default: latest)"
  echo "  ./your_script_name.sh"
  exit 1
fi

# Check if ANDROID_PROJECT_PATH exists and is a valid directory
if [[ ! -d "$ANDROID_PROJECT_PATH" ]]; then
  echo "Error: ANDROID_PROJECT_PATH does not exist or is not a valid directory. Please set it correctly."
  exit 1
fi

# Step 1: Download and install the WOVN CLI tool
echo "Step 1: Uninstalling any existing versions of WOVN SDK..."
gem uninstall wovn_sdk --all --executables --ignore-dependencies || echo "No existing versions to uninstall."

echo "Downloading the WOVN SDK gem (version: $WOVN_CLI_VERSION)..."
curl -fSL -o wovn_sdk.gem "https://download.wovn.app/cli/$WOVN_CLI_VERSION/wovn_sdk.gem" || { echo "Failed to download WOVN SDK gem. Exiting."; exit 1; }

echo "Installing the downloaded WOVN SDK gem..."
gem install ./wovn_sdk.gem || { echo "Failed to install WOVN SDK gem. Exiting."; exit 1; }

echo "Cleaning up the downloaded WOVN SDK gem..."
rm wovn_sdk.gem

# Step 2: Configure the wovn_sdk with your Wovn Project Token and API Key
echo "Configuring wovn_sdk with the provided Project Token and API Key..."
wovn_sdk config --token="$WOVN_PROJECT_TOKEN" --api_key="$WOVN_API_KEY" || { echo "Failed to configure WOVN SDK. Exiting."; exit 1; }

# Step 3: Using wovn_sdk to install WOVN Android SDK into your project
echo "Installing WOVN Android SDK into your project..."
wovn_sdk setup \
  --platform=Android \
  --project_path="$ANDROID_PROJECT_PATH" \
  --sdk_version=latest \
  --with_kickstart \
  --with_string_resources \
  -y || { echo "Failed to install WOVN Android SDK. Exiting."; exit 1; }

echo "WOVN SDK installation completed successfully!"
