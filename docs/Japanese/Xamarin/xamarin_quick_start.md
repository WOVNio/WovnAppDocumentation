# クイックスタート

WovnXamarin は、リソースファイルを修正することなく、実行時のテキスト翻訳を可能にする Xamarin.Android アプリケーション向けのローカライゼーションプラグインです。

## サポートされているコンポーネント

WovnXamarin は以下の Xamarin.Android UI 要素をサポートしています：
- TextView
- Button
- EditText
- AlertDialog
- CheckBox
- RadioButton
- Switch
- RecyclerView

注意：入力フィールドおよび特定のコンポーネントはデータ収集から除外されています。

## インストールガイド

### 手動インストール

以下の4ステップに従って SDK を手動でインストールしてください：

1. Android assets として `wovn.properties` 設定ファイルを作成します。
   SDK は Android assets のルートフォルダから設定ファイルを探します。
   設定ファイルを `Assets/wovn.properties` に配置してください。
   ```properties
   loglevel=0
   token=YOUR_PROJECT_TOKEN
   useHTTP=false
   request_timeout=15000
   local_html_domain=wovn-app.neocities.org
   ```
   正しく設定されていれば、logcat に以下のメッセージが表示されます：
   ```
   WovnSettingsBundle: init: this.wovnProperties: {token=YOUR_PROJECT_TOKEN, loglevel=0, request_timeout=15000, useHTTP=false, ï»¿=, update_locale=true, local_html_domain=wovn-app.neocities.org}
   WovnSettingsBundle: assertTokenExist: projectToken is : YOUR_PROJECT_TOKEN
   ```

2. SDK ファイルをセットアップします：
    - プロジェクトのルート（.csproj と同じ階層）に `libs/WovnXamarin` フォルダを作成します
    - WovnXamarin.zip を `libs/WovnXamarin` フォルダに展開します
   プロジェクト構造は以下のようになります：
   ```
   Project.csproj
   Assets/
   |-- wovn.properties
   libs/
   |-- WovnXamarin/
       |-- WovnXamarin.dll
   ...
   ```

3. MainApplication クラスで WovnXamarin を初期化します：
   ```csharp
   + using IO.Wovn.Wovnapp;
     using Android.App;
     using System;
     namespace DemoApp
     {
         [Application]
         public class MainApplication : Application
         {
   +         public override void OnCreate()
   +         {
   +             base.OnCreate();
   +             var wovnActivityLifecycleCallbacks = new WovnActivityLifecycleCallbacks();
   +             this.RegisterActivityLifecycleCallbacks(wovnActivityLifecycleCallbacks);
   +         }
   ```

4. `WovnXamarin.dll` への参照を追加し、プロジェクト設定で `wovn.properties` を AndroidAssets として設定します。
   HintPath をプロジェクト構造に合わせて変更してください：
   ```xml
       <ItemGroup>
         <Reference Include="WovnXamarin">
           <HintPath>libs/WovnXamarin/WovnXamarin.dll</HintPath>
         </Reference>
       </ItemGroup>
       <ItemGroup>
         <AndroidAsset Include="Assets\wovn.properties" />
       </ItemGroup>
   ```

## 動作の仕組み

### 初期テキスト登録

1. SDK インストール後、エミュレータまたは実機でアプリケーションを起動します
2. アプリの画面を操作します
3. テキストコンテンツは自動的に検出され、WOVN ダッシュボードに登録されます
4. 初期翻訳を適用するためにアプリケーションを再起動してください

### 表示言語の変更

#### システム言語の使用

1. アプリケーションを閉じます。デバイスからアプリを削除することをお勧めします
2. デバイスのシステム言語をサポートされている言語に変更します
3. アプリケーションを再起動すると翻訳が表示されます

#### プログラムによる言語変更

`Wovn.ChangeLang` を使用してプログラムで表示言語を変更できます：
```csharp
Wovn.ChangeLang("languageCode");
```
サポートされている言語コードは、WOVN プロジェクトで設定されている言語のコードです（例：`en`（英語）、`fr`（フランス語）など）。

## トラブルシューティング

以下の問題が発生した場合：
- SDK のインストール
- アプリケーションのビルド
- 翻訳が期待通りに動作しない

トラブルシューティングのために以下のログを提供してください：
- WovnXamarin SDK インストールログ
- アプリケーションビルドログ
- 実行時ログ