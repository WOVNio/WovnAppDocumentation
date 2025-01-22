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

### 1. Automatic Activation in Development Environment

Debug Mode is automatically enabled in the development environment when the condition `__DEV__ === true` is met.

### 2. Enabling Debug Mode Programmatically

To enable Debug Mode programmatically, pass `true` to the `debugMode` parameter during WOVN initialization. **Do not enable Debug Mode for normal end-users** as it may expose sensitive information or slow down the application due to frequent data reporting.

#### Example Code

```javascript
// Automatically enable debug mode in the development environment
await Wovn.initWovn('EAuabD', {
    debugMode: __DEV__,
});

// Enable debug mode using custom logic
await Wovn.initWovn('EAuabD', {
    debugMode: yourLogicToEnableDebugMode(),
});
```
