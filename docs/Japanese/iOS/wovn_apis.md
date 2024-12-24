# Wovn SDK for iOS - 公開 API リファレンス (Swift) (自動翻訳)

## APIs

### `translateNotificationContent(notiContent: UNMutableNotificationContent) -> UNMutableNotificationContent`

`UNMutableNotificationContent` の `title`、`subtitle`、および `body` フィールドを翻訳します。

**パラメータ:**

- `notiContent`: 翻訳対象の通知コンテンツ。

**戻り値:** 翻訳されたフィールドを含む同じ通知コンテンツのインスタンス。

**例:**

```swift
let translatedContent = Wovn.translateNotificationContent(notiContent: originalContent)
```

### `getCurrentLangCode(waitForInstance: Bool = true) -> String?`

WOVN SDK によって選択された現在の言語コードを取得します。

**パラメータ:**

- `waitForInstance`: WOVN インスタンスの準備が整うまで待機するかどうか。

**戻り値:** 現在の言語コード（例: "en", "ja"）または利用できない場合は `nil`。

**例:**

```swift
if let langCode = Wovn.getCurrentLangCode() {
    print("現在の言語コード: \(langCode)")
}
```

### `changeToSystemLang(callback: ((String) -> Void)? = nil)`

現在の言語をシステムのデフォルト言語に変更します。

**パラメータ:**

- `callback`: 変更完了後に新しい言語コードを受け取るクロージャ。（廃止予定）

**例:**

```swift
Wovn.changeToSystemLang { newLang in
    print("言語が変更されました: \(newLang)")
}
```

### `changeLang(lang: String, callback: ((String) -> Void)? = nil)`

現在の言語を指定された言語コードに変更します。

**パラメータ:**

- `lang`: 目標の言語コード。
- `callback`: 変更完了後に新しい言語コードを受け取るクロージャ。（廃止予定）

**例:**

```swift
Wovn.changeLang(lang: "fr")
```

### `translate(src: String, screenName: String) -> String`

指定された `screenName` の翻訳を使用して、与えられたソーステキスト `src` を翻訳します。

**パラメータ:**

- `src`: ソーステキスト。
- `screenName`: 翻訳に関連付けられた画面名。

**戻り値:** 翻訳されたテキスト、または翻訳が見つからない場合は元の `src`。

**例:**

```swift
let translatedText = Wovn.translate(src: "Hello", screenName: "MainScreen")
```

### `getWovnStatus() -> WovnStatus`

WOVN SDK の現在のステータスを取得します。これにはロードステータス、データの安全性、権限、および利用可能な言語が含まれます。

**戻り値:** SDK の状態に関する詳細情報を含む `WovnStatus` オブジェクト。

**例:**

```swift
let status = Wovn.getWovnStatus()
print("SDKのロードステータス: \(status.loadStatus)")
```

### `translateView(view: UIView, screenName: String? = nil, translationType: TranslationType = .translateView, completionHandler: @escaping () -> Void = {})`

指定された `UIView` を現在の言語に翻訳します。オプションで画面名と翻訳タイプを指定できます。

**パラメータ:**

- `view`: 翻訳対象のビュー。
- `screenName`: 翻訳を取得する画面名（オプション）。
- `translationType`: 翻訳のタイプ（デフォルトは `.translateView`）。
- `completionHandler`: 翻訳完了後に呼び出されるクロージャ。（廃止予定）

**例:**

```swift
Wovn.translateView(view: myView, screenName: "MainScreen")
```

### `translateView(view: UIView, viewController: UIViewController, translationType: TranslationType = .translateView, completionHandler: @escaping () -> Void = {})`

指定された `UIViewController` のクラス名から画面名を推測して `UIView` を翻訳します。

**パラメータ:**

- `view`: 翻訳対象のビュー。
- `viewController`: 画面名を提供するビューコントローラ。
- `translationType`: 翻訳のタイプ（デフォルトは `.translateView`）。
- `completionHandler`: 翻訳後に呼び出されるクロージャ。（廃止予定）

**例:**

```swift
Wovn.translateView(view: myView, viewController: self)
```

### `translate(navigationItem: UINavigationItem, screenName: String? = nil, translationType: TranslationType = .translateView, completionHandler: @escaping () -> Void = {})`

現在の言語を使用して `UINavigationItem` のタイトルや要素を翻訳します。

**パラメータ:**

- `navigationItem`: 翻訳対象のナビゲーションアイテム。
- `screenName`: 翻訳のための画面名（オプション）。
- `translationType`: 翻訳のタイプ（デフォルトは `.translateView`）。
- `completionHandler`: 翻訳完了後に呼び出されるクロージャ。（廃止予定）

**例:**

```swift
Wovn.translate(navigationItem: myNavItem, screenName: "DetailView")
```

### `translate(navigationItem: UINavigationItem, viewController: UIViewController, translationType: TranslationType = .translateView, completionHandler: @escaping () -> Void = {})`

前述のメソッドと似ていますが、`UIViewController` のクラス名から画面名を推測します。

**パラメータ:**

- `navigationItem`: 翻訳対象のナビゲーションアイテム。
- `viewController`: 画面名を提供するコントローラ。
- `translationType`: 翻訳のタイプ。
- `completionHandler`: 翻訳完了後に呼び出されるクロージャ。（廃止予定）

**例:**

```swift
Wovn.translate(navigationItem: navigationItem, viewController: self)
```

### `start(appGroupIdentifier: String? = nil, isDebugMode: Bool = false, autoTranslateUIKit: Bool = true, isNotificationServiceEnv: Bool = false)`

WOVN SDK を初期化および設定します。このメソッドは翻訳データや設定をセットアップし、オプションで UIKit メソッドをスウィズルして自動翻訳を行います。

**パラメータ:**

- `appGroupIdentifier`: アプリグループの識別子（オプション）。
- `isDebugMode`: ログおよびテスト用にデバッグモードを有効にします。デバッグビルドでのみデバッグモードを有効にするために `_isDebugAssertConfiguration()` を使用することを推奨します。
- `autoTranslateUIKit`: UIKit メソッドをスウィズルして UI 要素を自動的に翻訳します。
- `isNotificationServiceEnv`: `true` の場合、通知翻訳環境向けに SDK を最適化します。

**例:**

```swift
Wovn.start(
    appGroupIdentifier: "group.io.wovn.workbox",
    isDebugMode: _isDebugAssertConfiguration(),
    autoTranslateUIKit: true,
    isNotificationServiceEnv: false
)
```

### `setUserPermission(permission: WovnPermission, enabled: Bool)`

特定の WOVN 機能（例: レポート、エラーレポート）の権限を設定します。

**パラメータ:**

- `permission`: 設定する `WovnPermission` タイプ。
- `enabled`: 権限を有効にする場合は `true`、無効にする場合は `false`。

**例:**

```swift
Wovn.setUserPermission(permission: .report, enabled: true)
```

### `hasPermission(permission: WovnPermission) -> Bool`

特定の WOVN 権限が現在有効かどうかを確認します。

**パラメータ:**

- `permission`: 確認する `WovnPermission`。

**戻り値:** 有効であれば `true`、それ以外は `false`。

**例:**

```swift
let hasReportPermission = Wovn.hasPermission(permission: .report)
```
