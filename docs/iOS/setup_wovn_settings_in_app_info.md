# WOVN Settings Integration in the iOS Settings App

This document provides an overview of the WOVN Settings screen feature and step-by-step instructions to integrate it into the iOS Settings app.

## Overview

The WOVN Settings screen is a pre-configured interface embedded within the iOS Settings app. It allows users to manage translation-related settings for the app. The main feature is the `isDebugMode` toggle, which enables operator mode. When enabled, this mode increases the frequency of reporting and re-translations to every 10 seconds.

Additionally, the screen displays useful debugging information such as the reporting status, user ID, and other troubleshooting details.

## Setup Instructions

Follow these steps to integrate the WOVN Settings screen:

1. **Add a Settings Bundle:**
   - If you haven't already, add a `Settings Bundle` to your project. This can be done by navigating to:
     - `File > New > File > Settings Bundle`
   - Once added, the bundle will be included in your project structure.

   ![Create Settings Bundle](./assets/new_settings_bundle.png)

2. **Modify `Root.plist`:**
   - In the `Settings.Bundle` folder, locate the `Root.plist` file.
   - Add the following XML code to `Root.plist`. If the file already exists, copy only the section between `<!-- WOVN Settings section start -->` and `<!-- WOVN Settings section end -->`.

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
        <key>StringsTable</key>
        <string>Root</string>
        <key>PreferenceSpecifiers</key>
        <array>
            <!-- WOVN Settings section start -->
            <dict>
                <key>Type</key>
                <string>PSGroupSpecifier</string>
                <key>Title</key>
                <string>Translation Settings</string>
            </dict>
            <dict>
                <key>Type</key>
                <string>PSTextFieldSpecifier</string>
                <key>Title</key>
                <string>Validation Token</string>
                <key>Key</key>
                <string>verify_token</string>
            </dict>
            <dict>
                <key>Type</key>
                <string>PSToggleSwitchSpecifier</string>
                <key>Title</key>
                <string>Debug Mode (Enable App Operator &amp; reporting)</string>
                <key>Key</key>
                <string>debug_mode</string>
                <key>DefaultValue</key>
                <false/>
            </dict>
            <dict>
                <key>Type</key>
                <string>PSTitleValueSpecifier</string>
                <key>DefaultValue</key>
                <string>Run the app to update data</string>
                <key>Title</key>
                <string>Info</string>
                <key>Key</key>
                <string>debug_status</string>
            </dict>
            <dict>
                <key>Type</key>
                <string>PSTextFieldSpecifier</string>
                <key>Title</key>
                <string>Other Settings (&quot;key1=value1; key2=value2&quot;)</string>
                <key>Key</key>
                <string>bulk_settings</string>
            </dict>
            <!-- WOVN Settings section end -->
        </array>
    </dict>
    </plist>
    ```

   This code adds a section for WOVN Settings to the iOS Settings app. The WOVN SDK will then be able to read and apply the settings specified here.

## Demonstration

Here's a demonstration of the WOVN Settings screen integrated within the iOS Settings app:

![WOVN Settings Screen](./assets/wovn_settings_screen_inside_settings_app.gif)

## Important Notes

1. **Token Verification**: Users must enter the correct token in the `Validation Token` field. The SDK will only apply the settings if the token is valid.
