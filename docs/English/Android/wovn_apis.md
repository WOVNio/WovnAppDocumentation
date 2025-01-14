# Wovn SDK for Android - Public API Reference

This document provides an overview of the public, non-deprecated methods available in the `Wovn` class, along with usage examples. These methods allow you to integrate and control WOVN.io translation features in your Android application.

## Initialization

### `start(Context context, boolean isDebugMode)`

Initializes the WOVN SDK with a given application context and debug mode flag.
**Note:** Usually, WOVN can automatically get the application context. Use this method if it cannot.

**Parameters:**

- `context`: The application context.
- `isDebugMode`: `true` to enable debug mode. Recommned using `BuildConfig.DEBUG` for this parameter for automatic debug mode detection.

**Example:**

```java
Wovn.start(getApplicationContext(), BuildConfig.DEBUG);
```

### `start(boolean isDebugMode)`

Initializes the WOVN SDK with the given debug mode flag.

**Parameters:**

- `isDebugMode`: true to enable debug mode.

Example:

```java
Wovn.start(BuildConfig.DEBUG);
```

## View Translation

### `translateView(View view, String screen, WovnTranslateViewFunction callback)` (Will be deprecated)

Translates the given View to the current language. This is mainly useful if the SDK fails to automatically translate some views.

**Parameters:**

- view: The view to translate.
- screen: The screen name corresponding to the translations.
- callback: A callback executed when translation completes.

Example:

```java
Wovn.translateView(myView, "MainScreen", new WovnTranslateViewFunction() {
    @Override
    public void onTranslated() {
        // Handle translation completion
    }
});
```

### `translateView(View view, String screen)`

Same as above, but without a callback.

**Parameters:**

- view: The view to translate.
- screen: The screen name.

Example:

```java
Wovn.translateView(myView, "MainScreen");
```

### `translateView(View view)`

Translates the given View using the screen name from the context of the view.

**Parameters:**

- view: The view to translate.

Example:

```java
Wovn.translateView(myView);
```

### `translateView(View view, Activity activity, WovnTranslateViewFunction callback)` (Will be deprecated)

Translates a View using the Activity to determine the screen name, with a callback.

**Parameters:**

- view: The view to translate.
- activity: The activity providing the screen name.
- callback: Callback after translation completes.

Example:

```java
Wovn.translateView(myView, myActivity, new WovnTranslateViewFunction() {
    @Override
    public void onTranslated() {
        // Handle completion
    }
});
```

### `translateView(View view, Activity activity)`

Translates a View using the Activity to determine the screen name, without a callback.

**Parameters:**

- view: The view to translate.
- activity: The activity providing the screen name.

Example:

```java
Wovn.translateView(myView, myActivity);
```

## Alert Translation

### `translateAlert(AlertDialog alertDialog)`

Translates the given AlertDialog. Note that WOVN SDK will automatically translate most AlertDialogs but with very minor flicker. To avoid flicker, use this method before showing the dialog.

**Parameters:**

- alertDialog: The alert dialog to translate.

Example:

```java
AlertDialog dialog = new AlertDialog.Builder(context)
    .setTitle("Title")
    .setMessage("Message")
    .create();
Wovn.translateAlert(dialog);
dialog.show();
```

## Generic Translation Methods

### `translate(View view, Activity activity)`

Translates the given View using the provided Activity to determine the screen name. Note that WOVN SDK will follow this View and automatically translate it when changes occurs like new child views added, or text changes.

**Parameters:**

- view: The view to translate and follow.
- activity: The activity providing the screen name.

Example:

```java
Wovn.translate(myView, myActivity);
```

### `translate(View view, String screenName)`

Same as above, but with a specified screen name.

**Parameters:**

- view: The view to translate.
- screenName: The screen name.

Example:

```java
Wovn.translate(myView, "MainScreen");
```

## Language Management

### `getCurrentLangCode()`

Gets the current language code, such as "en", "ja", or "fr".

Returns: The current language code or null if not available.

Example:

```java
String currentLang = Wovn.getCurrentLangCode();
```

### `changeLang(String lang)`

Changes the current language to the specified language code.

**Parameters:**

- lang: The language code.

Example:

```java
Wovn.changeLang("ja");
```

### `changeLang(String lang, WovnLangChangeCallback callback)` (Will be deprecated)

Changes the current language and executes a callback when the operation is complete.

**Parameters:**

- lang: The language code.
- callback: A callback for completion.

Example:

```java
Wovn.changeLang("fr", new WovnLangChangeCallback() {
    @Override
    public void onChanged(String newLang) {
        // Handle language change completion
    }
});
```

### `changeToSystemLang()`

Changes the current language to match the system’s default language.

Example:

```java
Wovn.changeToSystemLang();
```

### `changeToSystemLang(WovnLangChangeCallback callback)` (Will be deprecated)

Same as above, but includes a callback.

**Parameters:**

- callback: A callback for completion.

Example:

```java
Wovn.changeToSystemLang(new WovnLangChangeCallback() {
    @Override
    public void onChanged(String systemLang) {
        // Handle language change completion
    }
});
```

## Text Translation

### `translate(String src, String screenName)`

Translates a source text to the current language using a specified screen name.

**Parameters:**

- src: The source text.
- screenName: The screen name.

Returns: The translated text.

Example:

```java
String translated = Wovn.translate("Hello, World!", "MainScreen");
```

### `translate(String src, String screenName, int timeoutMilliSec)`

Same as translate(String, String), but with a timeout for waiting on WOVN readiness. Useful to waiting for WOVN to be ready at the start of the app.

**Parameters:**

- src: The source text.
- screenName: The screen name.
- timeoutMilliSec: The maximum waiting time in milliseconds.

Returns: The translated text.

Example:

```java
String translated = Wovn.translate("Hello, World!", "MainScreen", 2000);
```

## Status and Configuration

### `getWovnStatus()`

Retrieves the current status of the WOVN SDK, including features, language settings, and reporting configurations.

Returns: WovnStatus object containing status information.

Example:

```java
WovnStatus status = Wovn.getWovnStatus();
```

### `setWovnIgnore(View view, boolean ignore)`

Sets whether a view should be ignored during translation.

**Parameters:**

- view: The view to configure.
- ignore: true to ignore the view.

Example:

```java
Wovn.setWovnIgnore(myView, true);
```

### `getWovnIgnore(View view)`

Checks if a view is ignored during translation.

**Parameters:**

- view: The view to check.

Returns: true if ignored, false otherwise.

Example:

```java
boolean isIgnored = Wovn.getWovnIgnore(myView);
```

### `setUserPermission(WovnPermission permission, boolean enable)`

Sets the permission for a specific feature of the SDK.

**Parameters:**

- permission: The WovnPermission to set.
- enable: true to enable, false to disable.

Example:

```java
Wovn.setUserPermission(WovnPermission.DATA_COLLECTION, true);
```

## Notification Translation

### `translateNotificationData(String src)`

Translates notification data (e.g., push notification text).

**Parameters:**

- src: The original notification text.

Returns: Translated notification text.

Example:

```java
String translatedNotification = Wovn.translateNotificationData(notificationMessage);
```

### translateFirebaseNotificationIntent(Intent firebaseNotiIntent)

Translates keys like "title" and "body" in a Firebase notification Intent.

**Parameters:**

- firebaseNotiIntent: The intent containing notification data.

Returns: An Intent with translated data.

Example:

```java
Intent translatedIntent = Wovn.translateFirebaseNotificationIntent(intent);
```
