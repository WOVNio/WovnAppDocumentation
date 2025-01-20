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

### 1. Debug mode is automatically enabled in the development environment (`__DEV__ === true`)

### 2. Enabling Debug Mode Programmatically

When initializing WOVN, pass `true` to the `debugMode` parameter to enable `Debug Mode`.
Note that debug mode SHOULD NEVER BE ENABLED for normal end-users. It might expose sensitive information to unauthorized users, or slow down the application due to the frequent data reporting.

```javascript
// Using __DEV__ to enable debug mode in the development environment
await Wovn.initWovn('EAuabD', {
    debugMode: __DEV__,
});

// Or you can use your own logic to enable debug mode.
await Wovn.initWovn('EAuabD', {
    debugMode: yourLogicToEnableDebugMode(),
});
```
