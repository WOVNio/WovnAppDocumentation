# WOVN Debug Mode Feature

The `Debug Mode` feature in WOVN streamlines app development and testing by enabling `App Operator Mode`. This allows for faster reporting and translation updates while ensuring user privacy when used with `Limit reporting to only app operator`.

In summary, `Debug Mode` is a valuable tool for:

- Accelerating feedback during development and testing.
- Protecting user privacy by preventing actual end-user data from being sent to WOVN.

---

## Feature Overview

Enabling Debug Mode activates `App Operator Mode`, which includes the following benefits:

1. **Faster Reporting and Re-Translation**: The app reports data and re-translates content approximately every `10 seconds`, enabling rapid feedback during development.
2. **User Privacy Protection**: When paired with `Limit reporting to only app operator`, Debug Mode ensures that no end-user data is transmitted to WOVN.

---

## How to Enable Debug Mode

Debug Mode can be activated either programmatically or via the WOVN Settings screen in your app.

### 1. Enable Debug Mode Programmatically

To activate Debug Mode through code, use the following function:

```java
public WovnActivityLifecycleCallbacks(boolean isDebugMode)
```

Pass `true` to `isDebugMode` to enable `Debug Mode` and enter `App Operator Mode`. A common use case is enabling `Debug Mode` in debug builds only, using BuildConfig.DEBUG.

Example in Kotlin:

```java
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        this.registerActivityLifecycleCallbacks(WovnActivityLifecycleCallbacks(BuildConfig.DEBUG)) // Enable Debug Mode
    }
}
```

This method is straightforward but generally requires separate builds for development (debug) and production (release).

### 2. Enable Debug Mode via WOVN Settings Screen

Alternatively, Debug Mode can be enabled through the WOVN Settings screen. For details on integrating this screen, refer to the [setup_wovn_settings_in_app_info.md](./setup_wovn_settings_in_app_info.md) document.

Once the WOVN Settings screen is set up, follow these steps to enable Debug Mode:

1. Navigate to the `Translation Settings` section within your app’s `App Info` screen.
2. Enter your WOVN `token` into the `Validation Token` field.
3. Toggle the `Debug Mode` switch to enable the feature.
4. The app will now enter `Debug Mode`, activating `App Operator Mode` for faster translation updates and more frequent reporting.
