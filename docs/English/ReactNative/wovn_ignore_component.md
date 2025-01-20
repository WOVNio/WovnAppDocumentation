# `WovnIgnore` Component Documentation for React Native

The `WovnIgnore` component is a utility designed to exclude specific sections of your application from WOVN's translation or reporting functionalities. By using React's `Context` API, this component dynamically provides the `isIgnore` state to child components, ensuring that marked content is ignored by WOVN's services.

## Usage

The `WovnIgnore` component wraps the parts of your application that should be excluded from WOVN's translation or reporting. The `ignore` prop allows you to specify whether the child content should be ignored.

```javascript
import React from 'react';
import { Text } from 'react-native';
import { WovnIgnore } from '@wovnio/react-native';

<WovnIgnore>
  {/** Content within this component will be ignored by WOVN */}
  <Text>This content will not be translated or reported.</Text>
</WovnIgnore>

{/** Content outside WovnIgnore will be processed by WOVN */}
<Text>This content will be translated and reported.</Text>
```

More complicated usage of `WovnIgnore`

```javascript
<Screen name="ScreenName">
    <WovnIgnore>
        <Text>This content is ignored and will NOT be translated or reported.</Text>
        <WovnIgnore ignore={false}>
            <Text>This content is NOT ignored and will be translated and reported.</Text>
        </WovnIgnore>
    </WovnIgnore>
    <WovnIgnore ignore={true}>
        <Text>This content is also ignored and will NOT be translated or reported.</Text>
    </WovnIgnore>
</Screen>
```

## Props

| Prop Name | Type       | Default Value | Description                                           |
|-----------|------------|---------------|-------------------------------------------------------|
| `ignore`  | `boolean`  | `true`        | Specifies whether the child content should be ignored.|

## Notes

1. **Nested Components**: The `isIgnore` state is inherited by child components within the `WovnIgnore` wrapper. Nested content inside a `WovnIgnore` component will respect the `ignore` state.

   ```javascript
   <WovnIgnore>
       <Text>Ignored content.</Text>
       <View>
           <Text>Nested ignored content.</Text>
       </View>
   </WovnIgnore>
   ```

2. **Default Behavior**: If the `ignore` prop is not provided, the component defaults to `true`, meaning its content will be ignored.
