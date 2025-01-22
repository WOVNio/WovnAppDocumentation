# Translating Unsupported Components with WOVN SDK

WOVN SDK provides two methods to translate components that are not directly supported. Both methods rely on the [`Wovn.useTranslate`](./wovn_apis#usetranslate) function:

1. **Use `Wovn.useTranslate` directly**: Best suited for simple cases.
2. **Create a new wrapper component**: Ideal when your application uses many unsupported components.

---

## 1. Using `Wovn.useTranslate` Directly

For straightforward scenarios, you can directly use the `Wovn.useTranslate` function to translate texts in unsupported components.

### Example

```javascript
import {
  Text as RNText,
  Button as RNButton,
} from 'react-native';
import * as Wovn from '@wovnio/react-native';
import { Screen } from '@wovnio/react-native';

// Usage
const CustomComponent = () => {
  return (
    <>
      <RNText>{Wovn.useTranslate('こんにちは、世界')}</RNText>
      <RNButton title={Wovn.useTranslate('こんにちは、世界!') as string}/>
    </>
  );
};

<Screen name="TextScreenReactNative">
  <CustomComponent />
</Screen>
```

For more details, refer to the [`Wovn.useTranslate`](./wovn_apis#usetranslate) documentation.

## 2. Creating a New Wrapper Component

When your application uses many unsupported components, you can create custom wrapper components that leverage `Wovn.useTranslate` for translation. Use these wrappers in place of the original components.

### Example: Wrapping the `Text` Component

Below is an example of how to create a wrapper component for the `Text` component:

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

### Example: Wrapping the `Button` Component

Similarly, you can create a wrapper component for the `Button` component:

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
