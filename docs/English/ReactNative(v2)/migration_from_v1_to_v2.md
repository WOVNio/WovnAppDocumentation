# Migration From v1 to v2 Wovn React Native SDK

## Migration Guide

In v2 SDK, we have made some changes to simplify the SDK while greatly improve the performance and stability. Here are what you need to do to migrate from v1 to v2.

1. Merging `@wovnio/react-native-sdk-core` and `@wovnio/support-react-native` to `@wovnio/react-native`

    - To import Wovn's components and functions, we recommend to use the following code:

    ```javascript
    // Importing Wovn's components and functions
    import { Screen, Text, TextInput } from '@wovnio/react-native';
    import * as Wovn from '@wovnio/react-native';
    
    // To use Wovn's components and functions in your code
    // To use Wovn's functions
    Wovn.changeLang('en-US');
    let translatedText = Wovn.translate('こんにちは、世界！');
    // To use Wovn's components
    <Text>こんにちは、世界！</Text>
    ```

2. Remove `WovnContainer`: You no longer need to wrap your app inside `WovnContainer`.
3. To initialize Wovn, please use the following example instead. More detail can be found [at Wovn APIs](./wovn_apis.md#initWovn). Note that `Wovn.initWovn` have to be finished before using other Wovn functions.

    ```javascript
    import * as Wovn from '@wovnio/react-native';
    
    // Some code
    await Wovn.initWovn('Token3', {
      enabledDebugLog: true,
      logLevel: 0,
    });
    ```

4. To translate components that is not directly supported by Wovn, you can use `Wovn.translate` or `Wovn.translateText` functions. More detail can be found [at Wovn APIs](./wovn_apis.md#Translation).

    - Note the result of `Wovn.translate` and `Wovn.translateText` are not dynamically changed when the language is changed. (`WovnView` components will be added soon to dynamically update translated text when the language is changed)

    ```javascript
    import { Alert } from 'react-native';
    import * as Wovn from '@wovnio/react-native';
    
    // Some code
    Alert.alert(
      Wovn.translateText('アラート'),
      Wovn.translateText('ボタンが押されました！')
    );
    ```

5. Automatically handle translation data. As the result, you no longer need to use functions like `loadTranslation`.
6. (Optional) We recommend you to let Wovn handle language logics for you using `Wovn.changeToSystemLang()`. More detail can be found [at Wovn APIs](./wovn_apis.md#changeToSystemLang). Wovn will automatically detect the system language and change the language accordingly.

    ```javascript
    import * as Wovn from '@wovnio/react-native';
    
    // First initialize Wovn
    await Wovn.initWovn('Token3', {
      enabledDebugLog: true,
      logLevel: 0,
    });
    // After that, you can use the following code to change to system language
    Wovn.changeToSystemLang();
    ```

## V2 Improvements

1. **Performance**: The v2 SDK is much faster than the v1 SDK. The v2 SDK is designed to be more efficient and faster in translating text.
2. **More supported components**: The list of supporting components are `Text`, `Button`, and `TextInput`. More components will be added in the future.
3. **Simpler APIs**: The v2 SDK has a simpler API design that is easier to use and understand.
4. **For developer features**: More features will be automatically enabled in development mode (`__DEV__ === true`) to help you debug and develop your app:
    - Faster reporting & refreshing of translation data
    - Preview mode to see how your app looks like using saved translations, before publishing them to all users.
    - etc.
