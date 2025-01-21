# Translate unsupported components

There are two ways WOVN SDK can translate components that are not directly supported by WOVN SDK. Both based on [Wovn.useTranslate](./wovn_apis#usetranslate) function:

1. Use `Wovn.useTranslate` directly to translate texts in unsupported components. This is recommended for simple cases.
2. Create a new component that wraps the unsupported component and uses `Wovn.useTranslate` to translate the text. This is recommemded if your application use alot of unsupported components.

## Use `Wovn.useTranslate` directly

Read [Wovn.useTranslate](./wovn_apis#usetranslate) for more information.

Example:

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

## Create a new component

Create a new component that wraps the unsupported component and uses `Wovn.useTranslate` to translate the text. Then use the new component instead of the unsupported component.

Example with `Text` component:

```javascript
import React, { forwardRef } from 'react';
import { Text as OriginalText, type TextProps } from 'react-native';
import * as Wovn from '@wovnio/react-native';

type Props = TextProps & {
  ref?: React.Ref<OriginalText>; // Specify the correct type for the ref
};

// Use forwardRef correctly to type the ref
const Text = forwardRef<OriginalText, Props>(({ children, ...rest }, ref) => {
  return (
    <OriginalText ref={ref} {...rest}>
      {Wovn.useTranslate(children)}
    </OriginalText>
  );
});

export { Text };
```

Example with `Button` component:

```javascript
import React, { forwardRef } from 'react';
import { Button as OriginalButton, type ButtonProps } from 'react-native';
import * as Wovn from '@wovnio/react-native';

type Props = ButtonProps & {
  ref?: React.Ref<OriginalButton>; // Specify the correct type for the ref
};

// Use forwardRef correctly to type the ref
const Button = forwardRef<OriginalButton, Props>(({ title, ...rest }, ref) => {
  return (
    <OriginalButton ref={ref} title={Wovn.useTranslate(title) as string} {...rest} />
  );
});

export { Button };
```
