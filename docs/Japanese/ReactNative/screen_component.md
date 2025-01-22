# `Screen` コンポーネントのドキュメント (自動翻訳)

`Screen` コンポーネントは、React の `Context` API を使用して WOVN 関連の関数に現在の画面名を提供するユーティリティです。これにより、アプリケーション内で動的に画面名を管理および取得できるようになり、WOVN の翻訳やレポート機能が向上します。

## 使用方法

`Screen` コンポーネントは、アプリケーションまたは特定の画面をラップし、WOVN のコンポーネントやフックに画面名を自動的に提供します。

```javascript
import { Text, Screen, TextInput } from '@wovnio/react-native';
import * as Wovn from '@wovnio/react-native';
import {
  Text as RNText,
  Button as RNButton,
} from 'react-native';

<Screen name="ScreenName">
    {/** WOVN のコンポーネントは Screen コンポーネントから画面名を自動的に取得します */}
    <Text>こんにちは、世界</Text>
    <Button title="こんにちは、世界！"/>
    
    {/** Wovn.useTranslate も Screen コンポーネントから画面名を自動的に取得します */}
    <RNText>
        {Wovn.useTranslate('こんにちは、世界')}
    </RNText>
    <RNButton title={Wovn.useTranslate('こんにちは、世界!') as string}/>
</Screen>
```

## プロパティ

| プロパティ名   | 型          | デフォルト値     | 説明                                                             |
|--------------|-------------|----------------|-----------------------------------------------------------------|
| `name`       | `string`    | `_Default`     | 翻訳およびレポート用に画面の名前を指定します。                          |

## 注意事項

- **デフォルト画面名**: `Screen` コンポーネントから画面名が取得できない場合、デフォルトの画面名 `_Default` が使用されます。
- **関数の制限**:  
  - `Wovn.translateText` および `Wovn.translate` は、`Screen` コンポーネントのコンテキストを使用して画面名を決定しません。  
  - これらの関数を使用する際に `screenName` が明示的に指定されない場合、報告される画面名は常に `_Default` になります。

## ベストプラクティス

1. **各画面を `Screen` コンポーネントでラップする**: アプリのすべての画面が `Screen` コンポーネントでラップされていることを確認し、WOVN の翻訳およびレポート機能に正確な `screenName` を提供してください。

   ```javascript
   <Screen name="Home">
       <Text>Welcome to the Home Screen</Text>
   </Screen>
   ```

2. **`translateText` または `translate` を使用する際に `screenName` を明示的に指定する**: デフォルトの `_Default` に依存せず、これらの関数を使用する際には `screenName` を指定してください。

   ```javascript
   Wovn.translateText('Hello World', 'Home');
   ```

3. **一貫性のある画面名の使用**: 翻訳やレポートの明確性を確保するために、意味があり一貫性のある画面名を使用してください。