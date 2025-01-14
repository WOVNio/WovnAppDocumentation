# wovn_sdk CLI ドキュメント (自動翻訳)

以下に、開発者が `wovn_sdk` CLI ツールを理解し、使用するのに役立つ包括的なドキュメントを示します。このガイドでは、利用可能な各コマンドの概要、目的、および実際的な使用例を紹介します。なお、Ruby と CLI を実行するための必要な環境があらかじめシステムに整っていることを前提としています。

## 概要

`wovn_sdk` CLI は、iOS・Android・Flutter・Xamarin プロジェクトに対して、WOVN SDK のセットアップや管理を簡単にするためのツールです。SDK の認証情報を設定したり、既存あるいは新規プロジェクトに WOVN を組み込んだり、翻訳用の文字列リソースを抽出するためのコマンドを提供します。

## インストールとセットアップ

1. **前提条件**:
   - マシンに Ruby と Bundler がインストールされていることを確認してください。

2. **インストール**: 以下のコマンドを実行して、最新の `wovn_sdk` CLI をダウンロード・インストールできます。

    ```bash
    gem uninstall wovn_sdk --all --executables --ignore-dependencies
    curl -fSL -o wovn_sdk.gem "https://download.wovn.app/cli/latest/wovn_sdk.gem"
    gem install ./wovn_sdk.gem
    rm wovn_sdk.gem
    wovn_sdk help
    ```

    **補足**:
    - `gem uninstall wovn_sdk --all --executables --ignore-dependencies` は、以前インストールされているバージョンをアンインストールするためのコマンドです。
    - `curl -fSL -o wovn_sdk.gem "https://download.wovn.app/cli/latest/wovn_sdk.gem"` は CLI の最新バージョンをダウンロードします。必要に応じて `latest` を特定バージョン（例: `0.2.0`、`latest_release_candidate` など）に置き換えてください。

3. **設定**: CLI を使用する前に、WOVN のプロジェクトトークンと API キーを使って設定を行う必要があります。以下のコマンドを実行し、認証情報を登録してください。

    ```bash
    wovn_sdk config --token={wovn_project_token} --api_key={wovn_api_key}
    ```

## コマンド一覧

### 1. `config`

**説明**: WOVN のプロジェクトトークンと API キーを使用して WOVN SDK を設定します。認証が必要な手順を実行する前に行ってください。

**使用方法**:

```bash
wovn_sdk config --token=YOUR_PROJECT_TOKEN [--api_key=YOUR_API_KEY] [--profile=PROFILE_NAME]
```

**必須オプション**:

- `--token=YOUR_PROJECT_TOKEN`: WOVN のプロジェクトトークン（必須）。

**任意オプション**:

- `--api_key=YOUR_API_KEY`: WOVN の API キー。一部の操作で推奨されますが、必須ではありません。
- `--profile=PROFILE_NAME`: 設定を切り替えるためのプロファイル名（デフォルトは `default`）。

**このコマンドが行うこと**:

- WOVN との認証を行い、その後の SDK セットアップやリソース管理コマンドを使用できるようにします。

**例**:

```bash
wovn_sdk config --token=T0K3NW --api_key=api_key_from_dashboard
```

---

### 2. `setup`

**説明**: 既存のプロジェクトに WOVN SDK を組み込みます。必要に応じて、プロジェクトのキックスタートや文字列リソースの処理を同時に実行できます。

**使用方法**:

```bash
wovn_sdk setup --platform=PLATFORM [--profile=PROFILE_NAME] [--project_path=PROJECT_PATH] [--sdk_version=VERSION] [--project_targets=TARGETS]
```

**必須オプション**:

- `--platform=PLATFORM`: プラットフォームを指定（`iOS`、`Android`、`Flutter`、`Xamarin`）。
- `--project_path=PROJECT_PATH`: プロジェクトファイルへのパス（iOS の場合は `.xcodeproj` ファイル）。

**任意オプション**:

- `--profile=PROFILE_NAME`: 使用する設定プロファイル（デフォルトは `default`）。
- `--sdk_version=VERSION`: 使用する WOVN SDK のバージョン（デフォルトは `latest`）。
- `--project_targets=TARGETS`: *(iOS のみ)* カンマ区切りでターゲットを指定（例: `--project_targets=MyApp,MyAppTests`）。
- `--with_kickstart`: SDK セットアップ後にキックスタート機能も実行。
- `--with_string_resources`: セットアップ後に文字列リソースの抽出とアップロードを実行。
- `--auto_yes, -y`: すべてのプロンプトに自動的に「yes」と回答（`--with_string_resources` と併用する場合に便利）。
- `--dry_run`: 文字列リソースの抽出をアップロードなしで実行（`--with_string_resources` と併用）。

**このコマンドが行うこと**:

- 必要なファイルや依存関係、設定を追加し、既存のプロジェクトに WOVN SDK を組み込みます。
- `--with_kickstart` オプションを付けた場合、キックスタートも自動的に実行します。
- `--with_string_resources` オプションを付けた場合、文字列リソースの抽出やアップロードが行われます。

**例**:

```bash
# iOS プロジェクトにデフォルトバージョンでインストール（kickstart なし、リソース抽出なし）
wovn_sdk setup --platform=iOS --project_path=./MyApp.xcodeproj

# Android プロジェクトに特定バージョンの SDK をインストールし、kickstart を実行
wovn_sdk setup --platform=Android --project_path=./MyAndroidApp --sdk_version=v3.6.0_rc1 --with_kickstart

# iOS プロジェクトにインストールし、文字列リソース抽出を dry_run で自動実行
wovn_sdk setup --platform=iOS --project_path=./MyApp.xcodeproj --with_string_resources --dry_run
```

---

### 3. `kickstart`

**説明**: WOVN SDK を利用したプロジェクトを素早く作成・更新するためのコマンドです。新規プロジェクトや必要なファイルを一気に追加したい場合に便利です。

**使用方法**:

```bash
wovn_sdk kickstart --platform=PLATFORM [--project_path=PATH] [--profile=PROFILE_NAME]
```

**必須オプション**:

- `--platform=PLATFORM`: `iOS` または `Android`。
- `--project_path=PATH`: 既存のプロジェクトがある場合、そのパスを指定。

**任意オプション**:

- `--profile=PROFILE_NAME`: 使用する設定プロファイル（デフォルトは `default`）。

**このコマンドが行うこと**:

- プロジェクトファイルを作成または更新し、WOVN SDK を組み込んで、多言語対応の開発をすぐに始められるようにします。

**例**:

```bash
# iOS プロジェクトをキックスタート
wovn_sdk kickstart --platform=iOS --project_path=./MyApp.xcodeproj

# Android プロジェクトをキックスタート（パス指定あり）
wovn_sdk kickstart --platform=Android --project_path=/path/to/MyAndroidApp
```

---

### 4. `string_resources`

**説明**: 翻訳のために、文字列リソースを抽出して、必要に応じて WOVN へアップロードします。`setup` コマンドと `--with_string_resources` を組み合わせて実行することもできます。

**使用方法**:

```bash
wovn_sdk string_resources --platform=PLATFORM --project_path=PATH [--profile=PROFILE_NAME] [--auto_yes] [--dry_run]
```

**必須オプション**:

- `--platform=PLATFORM`: `iOS` または `Android`。
- `--project_path=PATH`: プロジェクトへのパス。

**任意オプション**:

- `--profile=PROFILE_NAME`: 使用する設定プロファイル（デフォルトは `default`）。
- `--auto_yes, -y`: プロンプトに自動的に「yes」と回答。
- `--dry_run`: 抽出結果の表示のみでアップロードしない。

**このコマンドが行うこと**:

- プロジェクトのリソースファイルをスキャンし、文字列を検出。
- 検出した文字列を翻訳用に抽出。
- `--dry_run` を使用しない場合は、WOVN にアップロードして翻訳管理を行えるようにします。

**例**:

```bash
# Android プロジェクトの文字列を抽出し、アップロードは行わない
wovn_sdk string_resources --platform=Android --project_path=./MyAndroidApp --dry_run

# iOS プロジェクトの文字列を抽出し、すべてのプロンプトに自動的に「yes」と回答
wovn_sdk string_resources --platform=iOS --project_path=./MyApp.xcodeproj --auto_yes
```

---

### 5. `version`

**説明**: 現在の WOVN SDK CLI のバージョンを表示します。

**使用方法**:

```bash
wovn_sdk version
```

**例**:

```bash
wovn_sdk version
# 出力例: WOVN SDK CLI version X.Y.Z
```

---

### 6. `help`

**説明**: すべてのコマンド、または特定のコマンドに関するヘルプ情報を表示します。

**使用方法**:

```bash
wovn_sdk help [COMMAND]
```

**例**:

```bash
wovn_sdk help
wovn_sdk help setup
```

---

## クイックセットアップ例

1. **wovn_sdk をインストールし、スクリプトを使って iOS・Android プロジェクトに WOVN SDK をセットアップ**

    - **Android**（詳細は [Android クイックスタートガイド](./../Android/android_quick_start.md) を参照）

    ```bash
    export WOVN_PROJECT_TOKEN=wovn_project_token
    export WOVN_API_KEY=wovn_api_key
    export ANDROID_PROJECT_PATH=absolute_path_to_android_project
    export WOVN_CLI_VERSION=latest # または特定のバージョン
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/English/Android/scripts/android_install_script.sh)
    ```

    **例**:

    ```bash
    export WOVN_PROJECT_TOKEN=WTOKEN
    export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
    export ANDROID_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/Android/examples/wovn-android-demoapp
    export WOVN_CLI_VERSION=latest
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/English/Android/scripts/android_install_script.sh)
    ```

    - **iOS**（詳細は [iOS クイックスタートガイド](./../iOS/ios_quick_start.md) を参照）

    ```bash
    export WOVN_PROJECT_TOKEN=wovn_project_token
    export WOVN_API_KEY=wovn_api_key
    export IOS_PROJECT_PATH=absolute_path_to_ios_project
    export IOS_PROJECT_TARGETS=ios_project_target1,ios_project_target2 # 任意。デフォルトはプロジェクト名と同じ
    export WOVN_CLI_VERSION=latest # または特定のバージョン
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/English/iOS/scripts/ios_install_script.sh)
    ```

    **例**:

    ```bash
    export WOVN_PROJECT_TOKEN=WTOKEN
    export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
    export IOS_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/iOS/examples/wovn-ios-demoapp/wovn-ios-demoapp.xcodeproj
    export IOS_PROJECT_TARGETS=wovn-ios-demoapp,wovn-ios-demoappTests
    export WOVN_CLI_VERSION=latest
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/English/iOS/scripts/ios_install_script.sh)
    ```

    ```bash
    export WOVN_PROJECT_TOKEN=WTOKEN
    export WOVN_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJwcm9qZWN0X3Rva2VuIjoiUjlFAKEvIiwidG9rZW5fdXVpZCI6IFAKETY3NTA1LWNjOWEtNDJiMS05N2YzLFAKEDA5YWIyYzJlZiJ9.BmeOFN78Qj-FAKETS16BVOFAKEwbqZgHZvYVxDjYriE
    export IOS_PROJECT_PATH=/Users/user/Documents/Projects/WovnAppRepos/iOS/examples/wovn-ios-demoapp/wovn-ios-demoapp.xcodeproj
    export WOVN_CLI_VERSION=latest
    bash <(curl -fsSL https://raw.githubusercontent.com/WOVNio/WovnAppDocumentation/main/docs/English/iOS/scripts/ios_install_script.sh)
    ```
