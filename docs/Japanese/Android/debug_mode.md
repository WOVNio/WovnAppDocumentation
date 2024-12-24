# WOVN デバッグモード機能 (自動翻訳)

WOVN の `Debug Mode` 機能は、`App Operator Mode` を有効にすることでアプリの開発とテストを効率化します。これにより、`Limit reporting to only app operator` を使用することでユーザープライバシーを確保しつつ、より迅速なレポート作成と翻訳の更新が可能になります。

要約すると、`Debug Mode` は以下の点で貴重なツールです：

- 開発およびテスト中のフィードバックを加速します。
- 実際のエンドユーザーデータが WOVN に送信されるのを防ぐことで、ユーザープライバシーを保護します。

---

## 機能概要

デバッグモードを有効にすると、`App Operator Mode` がアクティブになり、以下の利点が得られます：

1. **迅速なレポート作成と再翻訳**：アプリは約 `10秒` ごとにデータを報告し、コンテンツを再翻訳します。これにより、開発中に迅速なフィードバックが可能になります。
2. **ユーザープライバシーの保護**：`Limit reporting to only app operator` と組み合わせることで、デバッグモードはエンドユーザーデータが WOVN に送信されないようにします。

---

## デバッグモードの有効化方法

デバッグモードは、プログラム的に、またはアプリ内の WOVN 設定画面を通じて有効化できます。

### 1. プログラムを通じてデバッグモードを有効にする

コードを通じてデバッグモードを有効にするには、以下の関数を使用します：

```java
public WovnActivityLifecycleCallbacks(boolean isDebugMode)
```

`isDebugMode` に `true` を渡すことで `Debug Mode` を有効にし、`App Operator Mode` に入ります。一般的な使用例としては、`BuildConfig.DEBUG` を使用してデバッグビルドのみで `Debug Mode` を有効にする方法があります。

Kotlin の例：

```java
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        this.registerActivityLifecycleCallbacks(WovnActivityLifecycleCallbacks(BuildConfig.DEBUG)) // BuildConfig.DEBUG に基づいて Debug Mode を有効にします
    }
}
```

この方法は簡単ですが、通常は開発（デバッグ）ビルドと本番（リリース）ビルドを分けてビルドする必要があります。

### 2. WOVN 設定画面を通じてデバッグモードを有効にする

別の方法として、WOVN 設定画面を通じてデバッグモードを有効にすることができます。この設定画面の統合方法の詳細については、[setup_wovn_settings_in_app_info.md](./setup_wovn_settings_in_app_info.md) ドキュメントを参照してください。

WOVN 設定画面がセットアップされたら、以下の手順に従ってデバッグモードを有効にします：

1. アプリの `App Info` 画面内の `Translation Settings` セクションに移動します。
2. `Validation Token` フィールドに WOVN の `token` を入力します。
3. `Debug Mode` スイッチをトグルして機能を有効にします。
4. これでアプリは `Debug Mode` に入り、`App Operator Mode` がアクティブになり、翻訳の更新が迅速になり、レポート作成の頻度が増加します。
