# `Screen` Component Documentation for React Native

The `Screen` component is a utility designed to provide the current screen name to WOVN-related functions via React's `Context` API. This allows developers to dynamically manage and retrieve the screen name within their applications, enhancing WOVN's translation and reporting functionalities.

## Usage

The `Screen` component wraps your application or specific screens, automatically providing the screen name to WOVN components and hooks.

```javascript
import { Text, Screen, TextInput } from '@wovnio/react-native';
import * as Wovn from '@wovnio/react-native';
import {
  Text as RNText,
  Button as RNButton,
} from 'react-native';

<Screen name="ScreenName">
    {/** WOVN's components will automatically pick up the screen name from the Screen component */}
    <Text>こんにちは、世界</Text>
    <Button title="こんにちは、世界！"/>
    
    {/** Wovn.useTranslate will also automatically pick up the screen name from the Screen component */}
    <RNText>
        {Wovn.useTranslate('こんにちは、世界')}
    </RNText>
    <RNButton title={Wovn.useTranslate('こんにちは、世界!') as string}/>
</Screen>
```

## Props

| Prop Name | Type       | Default Value | Description                                                             |
|-----------|------------|---------------|-------------------------------------------------------------------------|
| `name`    | `string`   | `_Default`    | Specifies the name of the screen for translation and reporting purposes.|

## Notes

- **Default Screen Name**: If the screen name cannot be retrieved from the `Screen` component, the default screen name `_Default` will be used.
- **Function Limitations**:  
  - `Wovn.translateText` and `Wovn.translate` do not use the `Screen` component context to determine the screen name.  
  - If no `screenName` is explicitly specified when using these functions, the reported screen name will always default to `_Default`.

## Best Practices

1. **Wrap Each Screen with the `Screen` Component**: Ensure every screen in your app is wrapped with a `Screen` component to provide an accurate `screenName` for WOVN's translation and reporting features.

   ```javascript
   <Screen name="Home">
       <Text>Welcome to the Home Screen</Text>
   </Screen>
   ```

2. **Explicitly Specify the `screenName` When Using `translateText` or `translate`**: Avoid relying on the default `_Default` screen by providing a `screenName` in these functions.

   ```javascript
   Wovn.translateText('Hello World', 'Home');
   ```

3. **Consistent Screen Naming**: Use meaningful and consistent names for your screens to ensure clarity in translations and reporting.
