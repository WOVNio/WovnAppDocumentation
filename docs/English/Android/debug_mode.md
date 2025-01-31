# WOVN Debug Mode Feature

The **Debug Mode** feature in WOVN streamlines app development and testing by enabling **App Operator Mode**. This mode provides faster reporting/translation updates while ensuring user privacy when combined with the **Limit reporting to only app operator** setting.

## Key Benefits

- **Accelerated Feedback Cycle**: Enables rapid reporting and re-translation during development (updates every ~10 seconds).
- **Privacy Protection**: Prevents end-user data transmission to WOVN when used with privacy restrictions.

## Feature Overview

Enabling Debug Mode activates **App Operator Mode** with:

1. **Frequent Updates**  
   Content re-translation and data reporting every 10 seconds for real-time feedback.

2. **Privacy Safeguards**  
   Restricts data reporting exclusively to app operators in debug environments.

## Activation Methods

### Method 1: Programmatic Activation

Enable Debug Mode through code using the WOVN lifecycle callback constructor. Pass `true` to `isDebugMode` to enable `Debug Mode` and enter `App Operator Mode`. A common use case is enabling `Debug Mode` in debug builds only, using `BuildConfig.DEBUG`.

```java
public WovnActivityLifecycleCallbacks(boolean isDebugMode)
```

**Example Implementation (Java):**

```java
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        this.registerActivityLifecycleCallbacks(WovnActivityLifecycleCallbacks(BuildConfig.DEBUG)) // Enable Debug Mode based on BuildConfig.DEBUG
    }
}
```

> **BuildConfig.DEBUG Note**  
> The Android build system automatically sets this flag to:
>
> - `true` in debug builds (development/testing)
> - `false` in production releases  
>
> This ensures automatic environment separation without manual configuration.

### Method 2: WOVN Settings Screen

Enable through the app interface after initial setup:

1. Navigate to **App Info → Translation Settings**
2. Enter your WOVN token in **Validation Token**
3. Toggle **Debug Mode** switch ON

*For setup details, see [WOVN Settings Integration Guide](./setup_wovn_settings_in_app_info.md).*

## Verification (From v3.5.0)

Check activation status programmatically:

```kotlin
val debugStatus = Wovn.getDebugStatus()
// Returns human-readable status including Debug Mode state
```
