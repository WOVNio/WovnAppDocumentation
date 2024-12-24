# WOVN デバッグモード機能 (自動翻訳)

WOVN の `Debug Mode` 機能は、`App Operator Mode` を有効にすることでアプリの開発とテストを効率化します。これにより、`Limit reporting to only app operator` と併用することでユーザープライバシーを保護しながら、レポートや翻訳の更新を迅速に行うことができます。

要約すると、`Debug Mode` は以下の用途において有用です：

- 開発およびテスト中のフィードバックを迅速化する。
- 実際のエンドユーザーデータが WOVN に送信されるのを防ぎ、ユーザープライバシーを保護する。

---

## 機能概要

デバッグモードを有効にすると、`App Operator Mode` がアクティブになり、以下の利点が得られます：

1. **迅速なレポートと再翻訳**：
   - アプリは約 `10 秒` ごとにデータをレポートし、コンテンツを再翻訳します。これにより、開発中のフィードバックが迅速に得られます。
2. **ユーザープライバシーの保護**：
   - `Limit reporting to only app operator` と組み合わせることで、デバッグモードはエンドユーザーデータが WOVN に送信されないようにします。

---

## デバッグモードの有効化方法

デバッグモードは、プログラム的にまたはアプリ内の WOVN 設定画面から有効にすることができます。

### 1. プログラム的にデバッグモードを有効にする

アプリのコード内で直接デバッグモードを有効にするには、以下の関数を使用します：

```swift
public static func start(appGroupIdentifier: String? = nil, isDebugMode: Bool = false, autoTranslateUIKit: Bool = true)
```

`isDebugMode` に `true` を渡して `Debug Mode` を有効にし、`App Operator Mode` に入ります。一般的な使用例としては、デバッグビルドのみで `Debug Mode` を有効にする場合に `_isDebugAssertConfiguration()` を使用します。

```swift
class AppDelegate: UIResponder, UIApplicationDelegate, MessagingDelegate, UNUserNotificationCenterDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        Wovn.start(isDebugMode: _isDebugAssertConfiguration()) // デバッグビルドに基づいてデバッグモードを有効化
    }
}
```

この方法はシンプルですが、通常は開発（デバッグ）ビルドと本番（リリース）ビルドを別々に行う必要があります。

### 2. WOVN 設定画面からデバッグモードを有効にする

代わりに、アプリ内の WOVN 設定画面を通じてデバッグモードを有効にすることもできます。WOVN 設定画面を統合してアクセスする方法については、[setup_wovn_settings_in_app_info.md](./setup_wovn_settings_in_app_info.md) ドキュメントを参照してください。

WOVN 設定画面が設定されたら、以下の手順に従ってデバッグモードを有効にします：

1. アプリの **App Info** 画面内の **Translation Settings** セクションに移動します。
2. `Validation Token` フィールドに WOVN の `token` を入力します。
3. **Debug Mode** スイッチをトグルして機能を有効にします。
4. アプリはデバッグモードに入り、`App Operator Mode` が有効になり、翻訳の更新が迅速になり、レポート頻度が高くなります。

![WOVN 設定画面のデバッグモード](./assets/debug_mode_in_wovn_settings_screen.png)
