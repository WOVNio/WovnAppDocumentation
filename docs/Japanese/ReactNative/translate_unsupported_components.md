# 未対応コンポーネントの翻訳方法 (自動翻訳)

WOVN SDK は、直接サポートされていないコンポーネントを翻訳するための2つの方法を提供しています。いずれの方法も [`Wovn.useTranslate`](./wovn_apis#usetranslate) 関数を利用します：

1. **`Wovn.useTranslate` を直接使用**: シンプルなケースに最適です。  
2. **新しいラッパーコンポーネントを作成**: 多数の未対応コンポーネントを使用している場合に最適です。

## 1. `Wovn.useTranslate` を直接使用

簡単なシナリオでは、未対応コンポーネント内のテキストを翻訳するために、`Wovn.useTranslate` 関数を直接使用できます。

### 例

```javascript
import {
  Text as RNText,
  Button as RNButton,
} from 'react-native';
import * as Wovn from '@wovnio/react-native';
import { Screen } from '@wovnio/react-native';

// 使用例
<Screen name="TextScreenReactNative">
  <RNText>
    {Wovn.useTranslate('こんにちは、世界')}
  </RNText>

  <RNButton title={Wovn.useTranslate('こんにちは、世界!') as string} />
</Screen>
```

詳細については、[`Wovn.useTranslate`](./wovn_apis#usetranslate) ドキュメントを参照してください。

## 2. 新しいラッパーコンポーネントを作成

多数の未対応コンポーネントを使用する場合は、`Wovn.useTranslate` を利用して翻訳を行うカスタムラッパーコンポーネントを作成できます。これらのラッパーを元のコンポーネントの代わりに使用してください。

### 例: `Text` コンポーネントのラップ

以下は、`Text` コンポーネント用のラッパーコンポーネントを作成する例です。

```javascript
import React, { forwardRef } from 'react';
import { Text as OriginalText, type TextProps } from 'react-native';
import * as Wovn from '@wovnio/react-native';

type Props = TextProps & {
  ref?: React.Ref<OriginalText>; // ref の正しい型を指定
};

// forwardRef を使用して ref の型を正確に指定
const Text = forwardRef<OriginalText, Props>(({ children, ...rest }, ref) => {
  return (
    <OriginalText ref={ref} {...rest}>
      {Wovn.useTranslate(children)}
    </OriginalText>
  );
});

export { Text };
```

### 例: `Button` コンポーネントのラップ

同様に、`Button` コンポーネント用のラッパーコンポーネントを作成できます。

```javascript
import React, { forwardRef } from 'react';
import { Button as OriginalButton, type ButtonProps } from 'react-native';
import * as Wovn from '@wovnio/react-native';

type Props = ButtonProps & {
  ref?: React.Ref<OriginalButton>; // ref の正しい型を指定
};

// forwardRef を使用して ref の型を正確に指定
const Button = forwardRef<OriginalButton, Props>(({ title, ...rest }, ref) => {
  return (
    <OriginalButton ref={ref} title={Wovn.useTranslate(title) as string} {...rest} />
  );
});

export { Button };
```