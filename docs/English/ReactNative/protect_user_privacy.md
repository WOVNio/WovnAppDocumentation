# Protect User Privacy

To ensure that sensitive information is not reported to WOVN, the WOVN SDK offers two key features for safeguarding user privacy:

1. **Debug Mode** with **Limit reporting to only app operator**:
   - Activates `App Operator Mode` for faster reporting and translations while ensuring no actual end-user data is sent to WOVN.
   - Protects user privacy by limiting data reporting to app operators only.

2. **Wovn.setWovnIgnore**:
   - Allows you to specify views that should not be translated.
   - Useful for excluding sensitive information from translation and protecting user privacy.

## 1. Debug Mode with Limit Reporting to Only App Operator

1. Follow the instructions in the [WOVN Debug Mode](./debug_mode.md) document to enable Debug Mode.
2. **Limit reporting to only app operator** is enabled by default. For changes to this behavior, please contact WOVN support.

**Note:**  
This approach is highly recommended for its simplicity. It guarantees 100% user privacy while enabling other development and testing features.

## 2. WovnIgnore Component

To exclude sensitive information from translation, you can wrap `<WovnIgnore></WovnIgnore>` around the content you want to protect. This component allows you to specify whether the child content should be ignored by WOVN's translation and reporting functionalities.

More details on the `WovnIgnore` component can be found in the [WOVNIgnore Component](./wovn_ignore_component.md) document.
