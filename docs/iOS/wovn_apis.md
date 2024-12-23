# Wovn SDK for iOS - Public API Reference (Swift)

## Table of Contents

1. [translateNotificationContent](#translatenotificationcontentnoticontent-unmutablenotificationcontent---unmutablenotificationcontent)
2. [getCurrentLangCode](#getcurrentlangcodewaitforinstance-bool--true---string)
3. [changeToSystemLang](#changetosystemlangcallback-string---void--nil)
4. [changeLang](#changelanglang-string-callback-string---void--nil)
5. [translate (Text)](#translatesrc-string-screenname-string---string)
6. [getWovnStatus](#getwovnstatus---wovnstatus)
7. [translateView (UIView)](#translateviewview-uiview-screenname-string--nil-translationtype-translationtype--translateview-completionhandler-escaping----void--)
8. [translateView (UIView and UIViewController)](#translateviewview-uiview-viewcontroller-uiviewcontroller-translationtype-translationtype--translateview-completionhandler-escaping----void--)
9. [translate (UINavigationItem)](#translatenavigationitem-uinavigationitem-screenname-string--nil-translationtype-translationtype--translateview-completionhandler-escaping----void--)
10. [translate (UINavigationItem and UIViewController)](#translatenavigationitem-uinavigationitem-viewcontroller-uiviewcontroller-translationtype-translationtype--translateview-completionhandler-escaping----void--)
11. [start](#startappgroupidentifier-string--nil-isdebugmode-bool--false-autotranslateuikit-bool--true-isnotificationserviceenv-bool--false)
12. [setUserPermission](#setuserpermissionpermission-wovnpermission-enabled-bool)
13. [hasPermission](#haspermissionpermission-wovnpermission---bool)

## APIs

### `translateNotificationContent(notiContent: UNMutableNotificationContent) -> UNMutableNotificationContent`

Translates the `title`, `subtitle`, and `body` fields of a `UNMutableNotificationContent`.

**Parameters:**

- `notiContent`: The notification content to translate.

**Returns:** The same notification content instance with translated fields.

**Example:**

```swift
let translatedContent = Wovn.translateNotificationContent(notiContent: originalContent)
```

### `getCurrentLangCode(waitForInstance: Bool = true) -> String?`

Gets the current language code selected by the WOVN SDK.

**Parameters:**

- `waitForInstance`: Whether to wait for the WOVN instance to be ready.

**Returns:** The current language code (e.g. "en", "ja") or `nil` if not available.

**Example:**

```swift
if let langCode = Wovn.getCurrentLangCode() {
    print("Current language code: \(langCode)")
}
```

### `changeToSystemLang(callback: ((String) -> Void)? = nil)`

Changes the current language to match the system’s default language.

**Parameters:**

- `callback`: A closure that receives the new language code after the change completes. (to be deprecated)

**Example:**

```swift
Wovn.changeToSystemLang { newLang in
    print("Language changed to: \(newLang)")
}
```

### `changeLang(lang: String, callback: ((String) -> Void)? = nil)`

Changes the current language to the specified language code.

**Parameters:**

- `lang`: The target language code.
- `callback`: A closure that receives the new language code after the change completes. (to be deprecated)

**Example:**

```swift
Wovn.changeLang(lang: "fr")
```

### `translate(src: String, screenName: String) -> String`

Translates a given source text `src` using the translations for the specified `screenName`.

**Parameters:**

- `src`: The source text.
- `screenName`: The screen name associated with the translations.

**Returns:** The translated text, or the original `src` if no translation is found.

**Example:**

```swift
let translatedText = Wovn.translate(src: "Hello", screenName: "MainScreen")
```

### `getWovnStatus() -> WovnStatus`

Retrieves the current status of the WOVN SDK, including load status, data safety, permissions, and available languages.

**Returns:** A `WovnStatus` object containing detailed information about the SDK state.

**Example:**

```swift
let status = Wovn.getWovnStatus()
print("SDK load status: \(status.loadStatus)")
```

### `translateView(view: UIView, screenName: String? = nil, translationType: TranslationType = .translateView, completionHandler: @escaping () -> Void = {})`

Translates the given `UIView` to the current language. Optionally, specify a screen name and a translation type.

**Parameters:**

- `view`: The view to translate.
- `screenName`: The screen name to retrieve translations from (optional).
- `translationType`: The type of translation (default is `.translateView`).
- `completionHandler`: Called after the translation completes. (to be deprecated)

**Example:**

```swift
Wovn.translateView(view: myView, screenName: "MainScreen")
```

### `translateView(view: UIView, viewController: UIViewController, translationType: TranslationType = .translateView, completionHandler: @escaping () -> Void = {})`

Translates a `UIView` by inferring the screen name from the specified `UIViewController` class name.

**Parameters:**

- `view`: The view to translate.
- `viewController`: The view controller providing the screen name.
- `translationType`: The type of translation (default `.translateView`).
- `completionHandler`: Called after translation. (to be deprecated)

**Example:**

```swift
Wovn.translateView(view: myView, viewController: self)
```

### `translate(navigationItem: UINavigationItem, screenName: String? = nil, translationType: TranslationType = .translateView, completionHandler: @escaping () -> Void = {})`

Translates the `UINavigationItem` titles and elements using the current language.

**Parameters:**

- `navigationItem`: The navigation item to translate.
- `screenName`: (Optional) The screen name for translations.
- `translationType`: The type of translation (default `.translateView`).
- `completionHandler`: Called after translation completes. (to be deprecated)

**Example:**

```swift
Wovn.translate(navigationItem: myNavItem, screenName: "DetailView")
```

### `translate(navigationItem: UINavigationItem, viewController: UIViewController, translationType: TranslationType = .translateView, completionHandler: @escaping () -> Void = {})`

Similar to the previous method, but infers the screen name from the `UIViewController` class name.

**Parameters:**

- `navigationItem`: The navigation item to translate.
- `viewController`: The controller providing the screen name.
- `translationType`: The type of translation.
- `completionHandler`: Completion closure. (to be deprecated)

**Example:**

```swift
Wovn.translate(navigationItem: navigationItem, viewController: self)
```

### `start(appGroupIdentifier: String? = nil, isDebugMode: Bool = false, autoTranslateUIKit: Bool = true, isNotificationServiceEnv: Bool = false)`

Initializes and configures the WOVN SDK. This method sets up translation data, configurations, and optionally swizzles UIKit methods for automatic translation.

**Parameters:**

- `appGroupIdentifier`: Identifier for app groups (optional).
- `isDebugMode`: Enable debug mode for logging and testing. Recommended to use `_isDebugAssertConfiguration()` to enable debug mode only in debug builds.
- `autoTranslateUIKit`: Automatically translates UI elements by swizzling UIKit methods.
- `isNotificationServiceEnv`: If `true`, the SDK optimizes for notification translation environment.

**Example:**

```swift
Wovn.start(
    appGroupIdentifier: "group.io.wovn.workbox",
    isDebugMode: _isDebugAssertConfiguration(),
    autoTranslateUIKit: true,
    isNotificationServiceEnv: false
)
```

### `setUserPermission(permission: WovnPermission, enabled: Bool)`

Sets the permission for a specific WOVN feature (e.g. reporting, error reporting).

**Parameters:**

- `permission`: The `WovnPermission` type to set.
- `enabled`: `true` to enable the permission, `false` to disable it.

**Example:**

```swift
Wovn.setUserPermission(permission: .report, enabled: true)
```

### `hasPermission(permission: WovnPermission) -> Bool`

Checks if a certain WOVN permission is currently enabled.

**Parameters:**

- `permission`: The `WovnPermission` to check.

**Returns:** `true` if enabled, `false` otherwise.

**Example:**

```swift
let hasReportPermission = Wovn.hasPermission(permission: .report)
```
