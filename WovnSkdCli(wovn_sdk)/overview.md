# wovn_sdk CLI Documentation

Below is comprehensive documentation intended to help developers understand and use the `wovn_sdk` CLI tool. This guide covers each available command, their purposes, and includes practical usage examples. It is assumed you have Ruby and the required environment to run the CLI available on your system.

## Overview

The `wovn_sdk` CLI simplifies setting up and managing WOVN SDK integrations for your iOS, Android, Flutter, and Xamarin projects. It provides a series of commands to configure SDK credentials, integrate WOVN into existing or new projects, and handle string resource extraction for translation.

## Installation and Setup

1. **Prerequisites**:
   - Ensure Ruby and Bundler are installed on your machine.

2. **Installation**: You can download and install the `wovn_sdk` CLI by running:

    ```bash
    gem uninstall wovn_sdk --all --executables --ignore-dependencies
    curl -fSL -o wovn_sdk.gem "https://download.wovn.app/cli/latest/wovn_sdk.gem" # You can replace 'latest' with a specific version.
    gem install ./wovn_sdk.gem
    rm wovn_sdk.gem
    wovn_sdk help
    ```

3. **Configuration**: Before using the CLI, you need to configure it with your WOVN project token and API key. Run the following command to set up your credentials:

    ```bash
    wovn_sdk config --token={wovn_project_token} --api_key={wovn_api_key}
    ```

## Commands

### 1. `config`

**Description**: Configure the WOVN SDK with your project token and API key. This should be done before other steps that require authentication.

**Usage**:

```bash
wovn_sdk config --token=YOUR_PROJECT_TOKEN [--api_key=YOUR_API_KEY] [--profile=PROFILE_NAME]
```

**Required Options**:

- `--token=YOUR_PROJECT_TOKEN`: Your WOVN project token (required).

**Optional Options**:

- `--api_key=YOUR_API_KEY`: Your WOVN API key. This is optional but recommended for some operations.
- `--profile=PROFILE_NAME`: Specify a configuration profile (default: `default`).

**What this does**:

- Authenticates with WOVN to allow for further SDK setup and resource management commands.

**Example**:

```bash
wovn_sdk config --token=T0K3NW --api_key=api_key_from_dashboard
```

### 2. `setup`

**Description**: Integrate WOVN SDK into an existing project. This command can also optionally kickstart the project and handle string resource extraction if the respective flags are set.

**Usage**:

```bash
wovn_sdk setup --platform=PLATFORM [--profile=PROFILE_NAME] [--project_path=PROJECT_PATH] [--sdk_version=VERSION] [--project_targets=TARGETS]
```

**Required Options**:

- `--platform=PLATFORM`: Specify the platform (`iOS`, `Android`, `Flutter`, `Xamarin`).
- `--project_path=PROJECT_PATH`: Path to your project file. For iOS, this should be the `.xcodeproj` file.

**Optional Options**:

- `--profile=PROFILE_NAME`: Use a specific config profile. Defaults to `default`.
- `--sdk_version=VERSION`: WOVN SDK version to use (default: `latest`).
- `--project_targets=TARGETS`: *(iOS only)* Comma-separated list of targets. E.g. `--project_targets=MyApp,MyAppTests`.
- `--with_kickstart`: Enable the kickstart functionality after setting up the SDK.
- `--with_string_resources`: Enable string resources extraction and upload after setup.
- `--auto_yes, -y`: Automatically answer "yes" to all prompts (useful with `--with_string_resources`).
- `--dry_run`: Perform a dry run of string resource extraction without uploading (used with `--with_string_resources`).

**What this does**:

- Integrates WOVN SDK into your existing project by adding necessary files, dependencies, and configurations.
- If `--with_kickstart` is provided, it will also run the kickstart logic.
- If `--with_string_resources` is provided, it will extract and handle string resources as per provided options.

**Examples**:

```bash
# Set up iOS project with default SDK version, no kickstart, no string resources
wovn_sdk setup --platform=iOS --project_path=./MyApp.xcodeproj

# Set up Android project with a specific SDK version and kickstart
wovn_sdk setup --platform=Android --project_path=./MyAndroidApp --sdk_version=v3.6.0_rc1 --with_kickstart

# Set up iOS project and run string resource extraction automatically with dry run
wovn_sdk setup --platform=iOS --project_path=./MyApp.xcodeproj --with_string_resources --dry_run
```

---

### 3. `kickstart`

**Description**: Kickstart a project, setting it up with WOVN SDK. Ideal for new projects or to quickly add necessary scaffolding.

**Usage**:

```bash
wovn_sdk kickstart --platform=PLATFORM [--project_path=PATH] [--profile=PROFILE_NAME]
```

**Required Options**:

- `--platform=PLATFORM`: Either `iOS` or `Android`.
- `--project_path=PATH`: Path to the project (if already existing).

**Optional Options**:

- `--profile=PROFILE_NAME`: Configuration profile to use (default: `default`).

**What this does**:

- Creates or updates project files and integrates WOVN SDK, providing a quick start to develop with WOVN’s localization features.

**Examples**:

```bash
# Kickstart an iOS project
wovn_sdk kickstart --platform=iOS --project_path=./MyApp.xcodeproj

# Kickstart an Android project without specifying a project path (may create a template project)
wovn_sdk kickstart --platform=Android --project_path=/path/to/MyAndroidApp
```

---

### 4. `string_resources`

**Description**: Extract and optionally upload string resources for translation to WOVN. This command can be used independently or via `setup` with `--with_string_resources`.

**Usage**:

```bash
wovn_sdk string_resources --platform=PLATFORM --project_path=PATH [--profile=PROFILE_NAME] [--auto_yes] [--dry_run]
```

**Required Options**:

- `--platform=PLATFORM`: `iOS` or `Android`.
- `--project_path=PATH`: Path to the project.

**Optional Options**:

- `--profile=PROFILE_NAME`: Configuration profile (default: `default`).
- `--auto_yes, -y`: Automatically answer "yes" to prompts.
- `--dry_run`: Show extraction results without uploading.

**What this does**:

- Scans your project’s resource files.
- Extracts found strings for translation.
- If `--dry_run` is not used, uploads them to WOVN for translation management.

**Examples**:

```bash
# Extract strings from Android project, show what would happen without uploading
wovn_sdk string_resources --platform=Android --project_path=./MyAndroidApp --dry_run

# Extract strings from iOS project and auto-confirm prompts
wovn_sdk string_resources --platform=iOS --project_path=./MyApp.xcodeproj --auto_yes
```

---

### 5. `version`

**Description**: Displays the current version of the WOVN SDK CLI.

**Usage**:

```bash
wovn_sdk version
```

**Example**:

```bash
wovn_sdk version
# Outputs: WOVN SDK CLI version X.Y.Z
```

---

### 6. `help`

**Description**: Displays help information for all commands or a specific command.

**Usage**:

```bash
wovn_sdk help [COMMAND]
```

**Examples**:

```bash
wovn_sdk help
wovn_sdk help setup
```

---

## Quick setup examples

1. **Install wovn_sdk and setup WOVN SDK into iOS and Android project using scripts**

    - **Android** (Refer to the [Android Quick Start Guide](./../Android/public/android_quick_start.md) for more details)

    ```bash
    export WOVN_PROJECT_TOKEN=wovn_project_token
    export WOVN_API_KEY=wovn_api_key
    export ANDROID_PROJECT_PATH=absolute_path_to_android_project
    export WOVN_CLI_VERSION=latest # or specific version
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/Android/public/scripts/android_install_script.sh)
    ```

    Example:

    ```bash
    export WOVN_PROJECT_TOKEN=WTOKEN
    export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
    export ANDROID_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/Android/examples/wovn-android-demoapp
    export WOVN_CLI_VERSION=latest
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/Android/public/scripts/android_install_script.sh)
    ```

    - **iOS** (Refer to the [iOS Quick Start Guide](./../iOS/public/ios_quick_start.md) for more details)

    ```bash
    export WOVN_PROJECT_TOKEN=wovn_project_token
    export WOVN_API_KEY=wovn_api_key
    export IOS_PROJECT_PATH=absolute_path_to_ios_project
    export IOS_PROJECT_TARGETS=ios_project_target1,ios_project_target2 # Optional, default is the same as project name
    export WOVN_CLI_VERSION=latest # or specific version
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/iOS/public/scripts/ios_install_script.sh)
    ```

    Example:

    ```bash
    export WOVN_PROJECT_TOKEN=WTOKEN
    export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
    export IOS_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/iOS/examples/wovn-ios-demoapp/wovn-ios-demoapp.xcodeproj
    export IOS_PROJECT_TARGETS=wovn-ios-demoapp,wovn-ios-demoappTests
    export WOVN_CLI_VERSION=latest
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/iOS/public/scripts/ios_install_script.sh)
    ```

    ```bash
    export WOVN_PROJECT_TOKEN=WTOKEN
    export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
    export IOS_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/iOS/examples/wovn-ios-demoapp/wovn-ios-demoapp.xcodeproj
    export WOVN_CLI_VERSION=latest
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/iOS/public/scripts/ios_install_script.sh)
    ```
