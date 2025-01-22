# Preview Translation Feature

The **Preview Translation** feature allows `app operators` to preview the translated version of the app without publishing the changes. This feature is particularly useful for verifying translation quality and ensuring the layout of the translated app is correct before making the changes public.

## How It Works

When the Preview Translation feature is enabled, the SDK behaves as follows:

- **End users** see the `published` translations. These are the translations made public after clicking the `Save and Publish` button in the Wovn Dashboard.  
  ![End users see the published translations](./assets/preview_translation_public_data.png)

- **App operators** see the `saved` translations. These are the translations saved but not yet published, which can be previewed after clicking the `Save` button in the Wovn Dashboard.  
  ![App operators see the saved translations](./assets/preview_translation_saved_data.png)

## How to Enable Preview Translation

To enable the Preview Translation feature, follow these steps:

1. **Enable Debug Mode for Test Devices**  
   Refer to the [Debug Mode Documentation](./debug_mode.md) for instructions on enabling debug mode on test devices.

2. **Update the `Wovn.initWovn` call**  
   Add `enableTranslationPreviewMode: true` to the `Wovn.initWovn` call:

   ```javascript
   await Wovn.initWovn('YOUR_WOVN_PROJECT_TOKEN', {
      enableTranslationPreviewMode: true,
   });
   ```

3. **Save and Restart the App**  
   Save the changes and restart the app.

### Result

- Devices with **debug mode enabled** will display the saved translations.
- Devices without **debug mode enabled** will display the published translations.
