# WOVN KickStart 機能 (自動翻訳)

`Kick Start` 機能は、ローカリゼーションデータをアプリケーションに事前に読み込むことでオフライン翻訳を可能にします。これにより、インターネット接続がなくてもすべてのコンテンツにアクセスできるようになり、以下のような状況に最適です：

- 低接続環境で使用されるアプリケーション。
- アプリ初回起動時のちらつき問題を回避するため。

## WOVN データ優先順位

WOVN SDK はローカリゼーションデータを以下の3つのソースから使用し、優先順位は次の通りです：

1. **API データ**:
   - WOVN API サーバーから直接取得。
   - 最も高い優先順位を持ち、将来の使用のために自動的にキャッシュされます。

2. **キャッシュデータ**:
   - `API データ` を取得した際にローカルに保存。
   - 2番目に高い優先順位。

3. **Kick Start データ**:
   - アプリケーションビルドに含まれる事前に読み込まれたローカリゼーションデータ。
   - 最も低い優先順位で、アプリ起動時に `キャッシュデータ` と `API データ` が利用できない場合にのみ使用されます。

## WOVN KickStart 機能の使用方法

ビルドに `wovn.kickstart` ファイルが含まれている場合、`キャッシュデータ` が利用できないときに SDK が自動的にそれを読み込もうとします。`wovn_sdk` ツールを使用して `wovn.kickstart` ファイルを生成および含めることができます。

### 1. SDK セットアップ中に `wovn.kickstart` をダウンロード

SDK セットアップ中に自動的に `wovn.kickstart` ファイルをダウンロードするには、`--with_kickstart` オプションを使用します：

```bash
wovn_sdk setup --platform=iOS --project_path=./path/to/the/iOS/project.xcodeproj --sdk_version=latest --with_kickstart --with_string_resources -y
```

### 2. SDK セットアップ後に `wovn.kickstart` をダウンロード

SDK セットアップ後に `wovn.kickstart` ファイルを取得または更新する必要がある場合は、以下のコマンドを使用します。アプリケーションのビルドやリリース前に実行することを推奨します：

```bash
wovn_sdk setup --platform=iOS --project_path=./path/to/the/iOS/project.xcodeproj
```
