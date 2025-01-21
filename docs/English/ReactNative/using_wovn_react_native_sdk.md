# Wovn React Native SDK getting started guide

Wovn React Native SDK is a library that allows you to easily add multilingual support to your React Native app. This guide will walk you through the steps to get started with Wovn React Native SDK.

## 1. Please contact our support team to get Wovn ReactNative SDK and your Wovn API token.

## 2. Import the Wovn React Native SDK

Add the Wovn React Native SDK to your dependencies then re-install the dependencies.

```json
  "dependencies": {
    // ...
    "@wovnio/react-native": "file:path/to/wovn-react-native.tgz",
    // ...
  }
```

## 3. Initialize the Wovn React Native SDK

[Wovn.initWovn](./wovn_apis#initwovn) is an asynchronous function that initializes the Wovn React Native SDK. It takes two arguments: your Wovn API token and an optional configuration object.

Note that this method should be called before invoking any other Wovn SDK methods; using await is recommended. Read more about the [Wovn.initWovn](./wovn_apis#initwovn) method.

Example:

```javascript
import React, { useState, useEffect } from 'react';
import 'expo-router/entry';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import * as Wovn from '@wovnio/react-native';
import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';

async function initializeApp() {
  try {
    await Wovn.initWovn('TOKEN3', {
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

  // Ensure the app is not rendered until WOVN initialization is complete
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

## 4. Managaing the language

Wovn provides two functions to change the languaue which is [Wovn.changeLang](./wovn_apis#changelang) and [Wovn.changeToSystemLang](./wovn_apis#changetosystemlang).

To get the current language, you can use [Wovn.getCurrentLang](./wovn_apis#getcurrentlang).

To get the list of available languages, you can use [Wovn.getLanguagesList](./wovn_apis#getlanguageslist).

We recommend letting Wovn manage language settings using `Wovn.changeToSystemLang()`. For more details, refer to [Wovn APIs](./wovn_apis.md#changetosystemlang). Wovn will automatically detect and apply the system language.

```javascript
import * as Wovn from '@wovnio/react-native';

// Initialize Wovn first
await Wovn.initWovn('Token3', {
  enabledDebugLog: true,
  logLevel: 0,
});

// Change to system language
Wovn.changeToSystemLang();
```

## 5. How to translate supported components

Instead of importing from the `react-native` package, import from the `@wovnio/react-native` package.

Before:

```javascript
import { Button, View, Text, TextInput } from 'react-native';
```

After:

```javascript
import { View } from 'react-native';
import { Button, View, Text, TextInput } from '@wovnio/react-native';
```

## 6. How to translate unsupported components

Please refer to the [Translate Unsupported Components](./translate_unsupported_components.md) documentation to understand how to translate unsupported components.

## 7. Understand how WOVN controls screen

Please refer to the [Screen Component](./screen_component.md) documentation to understand how WOVN controls the screen.

## 8. Understand how to protect your users' privacy

Please refer to the [Protect User Privacy](./protect_user_privacy.md) documentation to understand how to protect your users' privacy.