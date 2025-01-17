# Migration From v1 to v2 Wovn React Native SDK

## Migration Guide

In the v2 SDK, we have made changes to simplify the SDK while significantly improving performance and stability. Follow these steps to migrate from v1 to v2.

### 1. Merge `@wovnio/react-native-sdk-core` and `@wovnio/support-react-native` into `@wovnio/react-native`

To import Wovn's components and functions, use the following code:

```javascript
// Import Wovn's components and functions
import { Screen, Text, TextInput } from '@wovnio/react-native';
import * as Wovn from '@wovnio/react-native';

// To use Wovn's components and functions in your code
// Example usage of Wovn's functions
Wovn.changeLang('en-US');
let translatedText = Wovn.translate('こんにちは、世界！');

// Example usage of Wovn's components
<Text>こんにちは、世界！</Text>
```

### 2. Remove `WovnContainer`

You no longer need to wrap your app inside `WovnContainer`.

### 3. Initialize Wovn

Use the following example to initialize Wovn. Note that `Wovn.initWovn` must be completed before using other Wovn functions. For more details, refer to [Wovn APIs](./wovn_apis.md#initwovn).

```javascript
import * as Wovn from '@wovnio/react-native';

// Example initialization
await Wovn.initWovn('Token3', {
  enabledDebugLog: true,
  logLevel: 0,
});
```

### 4. Translate Unsupported Components

To translate components not directly supported by Wovn, use `Wovn.useTranslate`. The results of these functions will dynamically change when the language changes.

```javascript
import {
  Text as RNText,
  Button as RNButton,
} from 'react-native';
import * as Wovn from '@wovnio/react-native';
import { Screen } from '@wovnio/react-native';

// Some code
<Screen name="TextScreenReactNative">
  <RNText>
    {Wovn.useTranslate('こんにちは、世界')}
  </RNText>

  <RNButton title={Wovn.useTranslate('こんにちは、世界!') as string}/>
</Screen>
  
```

### 5. Automatic Translation Data Handling

The v2 SDK automatically handles translation data, so you no longer need to use functions like `loadTranslation`.

### 6. (Optional) Handle System Language

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

## V2 Improvements

1. **Performance**: The v2 SDK is significantly faster and more efficient in translating text compared to v1.
2. **More Supported Components**: The v2 SDK supports components such as `Text`, `Button`, and `TextInput`. More components will be added in future updates.
3. **Simpler APIs**: The v2 SDK introduces a simpler and more user-friendly API design.
4. **Developer-Friendly Features**: Enhanced features for developers (When `__DEV__ === true`):
    - Faster reporting and refreshing of translation data.
    - Preview mode to test saved translations before publishing them.
    - Automatic debugging aids in development mode .
