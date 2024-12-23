# WOVN Android SDK のインストールと設定方法 (自動翻訳)

WOVN Android SDK を使用すると、Android アプリに簡単に多言語対応を追加できます。本ガイドでは、WOVN Android SDK を Android プロジェクトにインストールして設定する方法を説明します。

## 1コマンドでの WOVN SDK インストール

以下のコマンドを使うことで、WOVN Android SDK および必要な設定をまとめてインストールできます。なお、コマンドを実行するとプロジェクトに変更が加えられるため、実行前に必ず変更をコミットしておいてください。

```bash
export WOVN_PROJECT_TOKEN=wovn_project_token
export WOVN_API_KEY=wovn_api_key
export ANDROID_PROJECT_PATH=absolute_path_to_android_project
export WOVN_CLI_VERSION=latest # または特定のバージョン
bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/Android/scripts/android_install_script.sh)
```

例:

```bash
export WOVN_PROJECT_TOKEN=WTOKEN
export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
export ANDROID_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/Android/examples/wovn-android-demoapp
export WOVN_CLI_VERSION=latest
bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/Android/scripts/android_install_script.sh)
```

## コマンドの概要

上記のコマンドを実行すると、以下のステップが行われます。

### ステップ 1: WOVN CLI ツールのダウンロードとインストール

```bash
# 常に最新バージョンの WOVN CLI ツールを使用するようにします
gem uninstall wovn_sdk --all --executables --ignore-dependencies
# gem をダウンロード
curl -o wovn_sdk.gem https://download.wovn.app/cli/$WOVN_CLI_VERSION/wovn_sdk.gem
# gem をインストール
gem install ./wovn_sdk.gem
```

### ステップ 2: WOVN プロジェクトトークンと API Key を使用して **wovn_sdk** を設定

このステップの後は、後続の `wovn_sdk` コマンドでトークンと API キーを指定する必要はありません。

```bash
wovn_sdk config --token={WOVN_PROJECT_TOKEN} --api_key={WOVN_API_KEY}
```

### ステップ 3: **wovn_sdk** を使用して WOVN Android SDK をプロジェクトにインストール

```bash
wovn_sdk setup --platform=Android --project_path={absolute_path_to_android_project} --sdk_version=latest --with_kickstart --with_string_resources -y
```
