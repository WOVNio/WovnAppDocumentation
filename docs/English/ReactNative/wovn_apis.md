# Wovn SDK Documentation

## Initialization

### `initWovn`

**Description**

Initializes the Wovn SDK with the provided token and configuration options. This setup is essential before invoking any other Wovn SDK methods. The initialization process involves fetching necessary data from the API or local storage, ensuring that the SDK is ready for use.

**Signature**

```typescript
initWovn(token: string, opts?: WovnInitOptions): Promise<void>
```

**Parameters**

- `token` (`string`): The authentication token required for loading data.
- `opts` (`WovnInitOptions`, optional): Configuration options for initialization.
  - `enabledDebugLog` (`boolean`): Enables debug logging.
  - `logLevel` (`number | LogLevel`): The log level to use for logging.
    - `0` = VERBOSE
    - `1` = DEBUG
    - `2` = INFO
    - `3` = WARN
    - `4` = ERROR
    - `5` = NONE
  - `enableTranslationPreviewMode` (`boolean`): Enables translation preview mode when app operator mode is active.
  - `debugMode` (`boolean`): Enables debug mode, which also activates app operator mode. Debug mode is enabled by default in the development environment (`__DEV__ === true`).

**Returns**

- `Promise<void>`: A promise that resolves once initialization is complete.

**Remarks**

- This method should be called before invoking any other Wovn SDK methods; using `await` is recommended.
- The first invocation fetches data from the API, which may take time. Subsequent calls load data from local storage, ensuring near-instant initialization.
- To speed up the initial load, a kickstart feature will be added in future releases.

**Examples**

*Basic usage:*

```typescript
await initWovn('your-token')
```

*React Native integration:*

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

---

## Language Management

### `changeLang`

**Description**

Changes the current language to the specified language code.

**Signature**

```typescript
changeLang(langCode: string): void
```

**Parameters**

- `langCode` (`string`): The language code to switch to (e.g., `'en'`, `'fr'`, `'es'`).

**Examples**

```typescript
changeLang('fr');
```

---

### `changeToSystemLang`

**Description**

Changes the current language to the system's default language.

**Signature**

```typescript
changeToSystemLang(): void
```

**Examples**

```typescript
changeToSystemLang();
```

---

### `getLanguagesList`

**Description**

Retrieves the list of supported language codes.

**Signature**

```typescript
getLanguagesList(): string[]
```

**Returns**

- `string[]`: An array of supported language codes.

**Examples**

```typescript
const languages = getLanguagesList();
console.log(languages); // ['en', 'fr', 'es', ...]
```

---

### `getCurrentLang`

**Description**

Gets the currently active language code.

**Signature**

```typescript
getCurrentLang(): string
```

**Returns**

- `string`: The current language code (e.g., `'en'`, `'fr'`).

**Examples**

```typescript
const currentLang = getCurrentLang();
console.log(currentLang); // 'en'
```

---

### `getSystemLang`

**Description**

Retrieves the system's default language code.

**Signature**

```typescript
getSystemLang(): string
```

**Returns**

- `string`: The system language code (e.g., `'en-US'`, `'fr-FR'`).

**Examples**

```typescript
const systemLang = getSystemLang();
console.log(systemLang); // 'en-US'
```

---

## Translation

### `useTranslate`

**Description**

A React hook that provides a translation function based on the current language settings. It automatically determines the screen name from the context and updates the translation whenever the language changes.

**Signature**

```typescript
useTranslate(srcNode: React.ReactNode): React.ReactNode
```

**Parameters**

- `srcNode` (`React.ReactNode`): The React node to be translated.

**Returns**

- `React.ReactNode`: The translated React node. If a translation is not available, it returns the original node.

**Examples**

```javascript
import {
  Text as RNText,
  Button as RNButton,
} from 'react-native';
import * as Wovn from '@wovnio/react-native';
import { Screen } from '@wovnio/react-native';

// Example usage
<Screen name="TextScreenReactNative">
  <RNText>
    {Wovn.useTranslate('こんにちは、世界')}
  </RNText>

  <RNButton title={Wovn.useTranslate('こんにちは、世界!') as string}/>
</Screen>
```

### `translateText`

**Description**

Translates a given text based on the current language settings.

**Signature**

```typescript
translateText(text: string, screenName?: string): string
```

**Parameters**

- `text` (`string`): The text to be translated.
- `screenName` (`string`, optional): The identifier for the screen or context where the translation is applied. Defaults to `'_Default'`.

**Returns**

- `string`: The translated text. If translation is not available, returns the original text.

**Examples**

```typescript
const translated = translateText('Hello, world!');
console.log(translated); // 'Bonjour le monde!' if the current language is French
```

---

### `translate`

**Description**

Translates a React node based on the current language settings.

**Signature**

```typescript
translate(node: React.ReactNode, screenName?: string): React.ReactNode
```

**Parameters**

- `node` (`React.ReactNode`): The React node to be translated.
- `screenName` (`string`, optional): The identifier for the screen or context where the translation is applied. Defaults to `'_Default'`.

**Returns**

- `React.ReactNode`: The translated React node. If translation is not available, returns the original node.

**Examples**

```typescript
const translatedNode = translate(<div>Hello, world!</div>, 'HomeScreen');
```

---

## Utility Functions

### `getToken`

**Description**

Retrieves the current project token used by the Wovn SDK.

**Signature**

```typescript
getToken(): string
```

**Returns**

- `string`: The current Wovn project token.

**Examples**

```typescript
const token = getToken();
console.log(token); // 'FToken'
```

---

### `getWovnStatus`

**Description**

Retrieves the current status of the Wovn SDK.

**Signature**

```typescript
getWovnStatus(): string
```

**Returns**

- `string`: A string representation of the Wovn SDK's current status.

**Examples**

```typescript
const status = getWovnStatus();
console.log(status); // 'Configs[token: TOKEN3]'
```
