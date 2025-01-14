# Quickstart

WovnXamarin is a powerful localization plugin for Xamarin.Android applications that enables runtime text translation without modifying resource files.

## Supported Components

WovnXamarin supports these Xamarin.Android UI elements:
- TextView
- Button
- EditText
- AlertDialog
- CheckBox
- RadioButton
- Switch
- RecyclerView

Note: Input fields and certain other components are excluded from data reporting.

## Installation Guide

### Manual Installation

Follow these four steps to manually install the SDK:

1. Create a `wovn.properties` configuration file as Android assets
   SDK will find the configuration file in the Android assets root folder.
   Make sure to place config file in `Assets/wovn.properties`.

   ```properties
   loglevel=0
   token=YOUR_PROJECT_TOKEN
   useHTTP=false
   request_timeout=15000
   local_html_domain=wovn-app.neocities.org
   ```

   If you have configured correctly, logcat will show the following message:
   ```
   WovnSettingsBundle: init: this.wovnProperties: {token=YOUR_PROJECT_TOKEN, loglevel=0, request_timeout=15000, useHTTP=false, ï»¿=, update_locale=true, local_html_domain=wovn-app.neocities.org}
   WovnSettingsBundle: assertTokenExist: projectToken is : YOUR_PROJECT_TOKEN
   ```

2. Set up the SDK files:
    - Create a `libs/WovnXamarin` folder in your project root (same level as .csproj)
    - Extract WovnXamarin.zip into the `libs/WovnXamarin` folder

   Your project structure should look like:
   ```
   Project.csproj
   Assets/
   |-- wovn.properties
   libs/
   |-- WovnXamarin/
       |-- WovnXamarin.dll
   ...
   ```

3. Initialize WovnXamarin in your MainApplication class:
   ```csharp
   + using IO.Wovn.Wovnapp;
     using Android.App;
     using System;

     namespace DemoApp
     {
         [Application]
         public class MainApplication : Application
         {
   +         public override void OnCreate()
   +         {
   +             base.OnCreate();
   +             var wovnActivityLifecycleCallbacks = new WovnActivityLifecycleCallbacks();
   +             this.RegisterActivityLifecycleCallbacks(wovnActivityLifecycleCallbacks);
   +         }
   ```

4. Add a reference to `WovnXamarin.dll`, and set `wovn.properties` as AndroidAssets in your project configuration.
   Change the HintPath to match your project structure:
   ```xml
       <ItemGroup>
         <Reference Include="WovnXamarin">
           <HintPath>libs/WovnXamarin/WovnXamarin.dll</HintPath>
         </Reference>
       </ItemGroup>
       <ItemGroup>
         <AndroidAsset Include="Assets\wovn.properties" />
       </ItemGroup>
   ```

## How It Works

### Initial Text Registration

1. After installing the SDK, launch your application on either an emulator or physical device
2. Navigate through your app's screens
3. Text content will be automatically detected and registered in the WOVN Dashboard
4. Restart your application to apply the initial translations

### Changing Display Language

#### Using System Language
1. Close your application. Maybe even delete the app from the device.
2. Change your device's system language to any supported language
3. Relaunch the application to see the translations

#### Programmatic Language Changes
You can change the display language programmatically using the `Wovn.ChangeLang`:

```csharp
Wovn.ChangeLang("languageCode");
```

Supported language codes are codes of the languages configured in your WOVN project, such as `en` (English), `fr` (French) or else.

## Troubleshooting

If you encounter issues with:
- SDK installation
- Building the application
- Translation not working as expected

Please provide the following logs to assist with troubleshooting:
- WovnXamarin SDK installation logs
- Application build logs
- Runtime logs