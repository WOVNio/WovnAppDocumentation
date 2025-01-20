# `Screen` Component Documentation for React Native

The `Screen` component is a utility designed to provide the current screen name to WOVN-related functions through React's `Context` API. It enables developers to manage and retrieve the screen name dynamically within their application.

## Usage

```javascript
import { Text, Screen, TextInput } from '@wovnio/react-native';
import * as Wovn from '@wovnio/react-native';
import {
  Text as RNText,
  Button as RNButton,
} from 'react-native';

<Screen name="ScreenName">
    {/** WOVN's components will automatically pickup the screen name from the Screen component */}
    <Text>こんにちは、世界</Text>
    <Button title="こんにちは、世界！"/>
    
    {/** Wovn.useTranslate will also automatically pickup the screen name from the Screen component */}
    <RNText>
        {Wovn.useTranslate('こんにちは、世界')}
    </RNText>
    <RNButton title={Wovn.useTranslate('こんにちは、世界!') as string}/>
</Screen>
```

## Notes

- In cases the screen name cannot be retrieved from the `Screen` component, the default screen name `_Default` will be used.
- `Wovn.translateText` and `Wovn.translate` cannot check the context to get the screen name. As the result, if you do not specify the screenName in these function, they will always report to `_Default` screen.
