# How to install and configure WOVN Android SDK

The WOVN Android SDK allows you to easily add multilingual support to your Android app. This guide explains how to install and configure the WOVN Android SDK in your Android project.

## WOVN SDK installation with one command

You can install the WOVN Android SDK with all the necessary configurations using the following command. Note that the command will make changes to your project, so make sure to commit your changes before running the command.

```bash
export WOVN_PROJECT_TOKEN=wovn_project_token
export WOVN_API_KEY`=wovn_api_key
export ANDROID_PROJECT_PATH=absolute_path_to_android_project
export WOVN_CLI_VERSION=latest # or specific version
bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/Android/public/scripts/android_install_script.sh)
```

## Command breakdown

The command above will execute the following steps:

### Step 1: Download and install the WOVN CLI tool

```bash
# Make sure you have the latest version of the WOVN CLI tool
gem uninstall wovn_sdk --all --executables --ignore-dependencies
# Download the gem
curl -o wovn_sdk.gem https://download.wovn.app/cli/$WOVN_CLI_VERSION/wovn_sdk.gem
# Install the gem
gem install ./wovn_sdk.gem
```

### Step 2: Config the **wovn_sdk** with your Wovn Project Token and API Key

Note that after this step, you don't need to provide the token and API key in the following `wovn_sdk` commands.

```bash
wovn_sdk config --token={WOVN_PROJECT_TOKEN} --api_key={WOVN_API_KEY}
```

### Step 3: Using **wovn_sdk** to install WOVN Android SDK into your project

```bash
wovn_sdk setup --platform=Android --project_path={absolute_path_to_android_project} --sdk_version=latest --with_kickstart --with_string_resources -y
```
