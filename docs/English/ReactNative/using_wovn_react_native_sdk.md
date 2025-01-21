
# Wovn React Native SDK - Getting Started Guide

Wovn React Native SDK is a library that allows you to easily add multilingual support to your React Native app. This guide walks you through the steps to get started with Wovn React Native SDK.

## 1. Contact Support for SDK Access

Please contact our support team to obtain the Wovn React Native SDK and your Wovn API token.

## 2. Import the Wovn React Native SDK

Add the Wovn React Native SDK to your project dependencies, then re-install the dependencies.

```json
"dependencies": {
  // ...
  "@wovnio/react-native": "file:path/to/wovn-react-native.tgz",
  // ...
}
```

## 3. Initialize the Wovn React Native SDK

The [`Wovn.initWovn`](./wovn_apis#initwovn) method is an asynchronous function that initializes the SDK. It requires two arguments: your Wovn API token and an optional configuration object.

> **Note:**  
> Call this method before invoking any other Wovn SDK methods. Using `await` is recommended. Learn more about the [`Wovn.initWovn`](./wovn_apis#initwovn) method.

### Example

```javascript
import React, { useState, useEffect } from 'react';
import 'expo-router/entry';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import * as Wovn from '@wovnio/react-native';
import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';

async function initializeApp() {
  try {
    await Wovn.initWovn('YOUR_API_TOKEN', {
      enabledDebugLog: true,
      logLevel: 0,
    });
  } catch (error) {
    console.error('Initialization failed:', error);
  }
}

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function init() {
      await initializeApp();
      setIsInitialized(true);
    }
    init();
  }, []);

  if (!isInitialized) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>LOADING...</Text>
      </View>
    );
  }

  return <ExpoRoot context={require.context('./app')} />;
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

registerRootComponent(App);
```

## 4. Managing the Language

Wovn provides several methods for managing the app's language:

- **Change the language**: Use [`Wovn.changeLang`](./wovn_apis#changelang).
- **Change to system language**: Use [`Wovn.changeToSystemLang`](./wovn_apis#changetosystemlang).
- **Get the current language**: Use [`Wovn.getCurrentLang`](./wovn_apis#getcurrentlang).
- **Get the list of available languages**: Use [`Wovn.getLanguagesList`](./wovn_apis#getlanguageslist).

We recommend letting Wovn manage the language settings with `Wovn.changeToSystemLang()`. For more details, refer to the [Wovn APIs](./wovn_apis.md#changetosystemlang).

### Example

```javascript
import * as Wovn from '@wovnio/react-native';

// Initialize Wovn
await Wovn.initWovn('YOUR_API_TOKEN', {
  enabledDebugLog: true,
  logLevel: 0,
});

// Change to system language
Wovn.changeToSystemLang();
```

## 5. Translating Supported Components

To translate supported components, import them from `@wovnio/react-native` instead of `react-native`.

### Before

```javascript
import { Button, View, Text, TextInput } from 'react-native';
```

### After

```javascript
import { View } from 'react-native';
import { Button, View, Text, TextInput } from '@wovnio/react-native';
```

## 6. Translating Unsupported Components

Refer to the [Translate Unsupported Components](./translate_unsupported_components.md) documentation for guidance on translating unsupported components.

## 7. Understanding Wovn's Screen Management

Learn how Wovn controls the screen by referring to the [Screen Component](./screen_component.md) documentation.

## 8. Protecting User Privacy

To understand how to protect your users' privacy, read the [Protect User Privacy](./protect_user_privacy.md) documentation.

## 9. Additional Resources

- To enable quick reporting and refreshing of translation when developing, refer to the [Wovn Debug Mode](./debug_mode.md) documentation.
- To migrate from the WOVN React Native v1 SDK to the Wovn React Native SDK v2, refer to the [Migration Guide](./migration_from_v1_to_v2.md).
