# WOVN iOS SDKのインストールと設定方法 (自動翻訳)

WOVN iOS SDKを使用すると、iOSアプリに多言語サポートを簡単に追加できます。このガイドでは、iOSプロジェクトにWOVN iOS SDKをインストールおよび設定する方法を説明します。

## ワンコマンドでのWOVN SDKのインストール

以下のコマンドを使用して、必要なすべての設定を含むWOVN iOS SDKをインストールできます。コマンドはプロジェクトに変更を加えるため、実行する前に変更をコミットしておいてください。

```bash
export WOVN_PROJECT_TOKEN=wovn_project_token
export WOVN_API_KEY=wovn_api_key
export IOS_PROJECT_PATH=absolute_path_to_ios_project
export IOS_PROJECT_TARGETS=ios_project_target1,ios_project_target2 # オプション、デフォルトはプロジェクト名と同じ
export WOVN_CLI_VERSION=latest # または特定のバージョン
export WOVN_SDK_VERSION=latest # または特定のバージョン (v3.5.0 または v3.6.0_rc1 など)
bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/English/iOS/scripts/ios_install_script.sh)
```

### 例

```bash
export WOVN_PROJECT_TOKEN=WTOKEN
export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
export IOS_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/iOS/examples/wovn-ios-demoapp/wovn-ios-demoapp.xcodeproj
export IOS_PROJECT_TARGETS=wovn-ios-demoapp,wovn-ios-demoappTests
export WOVN_CLI_VERSION=latest
export WOVN_CLI_VERSION=latest
bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/English/iOS/scripts/ios_install_script.sh)
```

```bash
export WOVN_PROJECT_TOKEN=WTOKEN
export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
export IOS_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/iOS/examples/wovn-ios-demoapp/wovn-ios-demoapp.xcodeproj
export WOVN_CLI_VERSION=latest
export WOVN_CLI_VERSION=latest
bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/English/iOS/scripts/ios_install_script.sh)
```

## コマンドの内訳

上記のコマンドは、以下のステップを実行します。

### ステップ1: WOVN CLIツールのダウンロードとインストール

```bash
# 最新バージョンのWOVN CLIツールを確保
gem uninstall wovn_sdk --all --executables --ignore-dependencies
# gemをダウンロード
curl -o wovn_sdk.gem https://download.wovn.app/cli/$WOVN_CLI_VERSION/wovn_sdk.gem
# gemをインストール
gem install ./wovn_sdk.gem
```

### ステップ2: **wovn_sdk**をWOVNプロジェクトトークンとAPIキーで設定

このステップの後、以下の`wovn_sdk`コマンドでトークンとAPIキーを提供する必要はありません。

```bash
wovn_sdk config --token={WOVN_PROJECT_TOKEN} --api_key={WOVN_API_KEY}
```

### ステップ3: **wovn_sdk**を使用してWOVN iOS SDKをプロジェクトにインストール

```bash
wovn_sdk setup --platform=iOS --project_path={absolute_path_to_ios_project} --sdk_version=latest --with_kickstart --with_string_resources -y
```
