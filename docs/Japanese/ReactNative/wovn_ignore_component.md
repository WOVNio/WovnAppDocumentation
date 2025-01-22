# `WovnIgnore` コンポーネントのドキュメント (自動翻訳)

`WovnIgnore` コンポーネントは、アプリケーション内の特定のセクションを WOVN の翻訳またはレポート機能から除外するためのユーティリティです。このコンポーネントは React の `Context` API を使用しており、子コンポーネントに動的に `isIgnore` 状態を提供することで、マークされたコンテンツが WOVN のサービスで無視されるようにします。

## 使用方法

`WovnIgnore` コンポーネントは、WOVN の翻訳またはレポートから除外する必要があるアプリケーションの部分をラップするために使用されます。`ignore` プロパティを使用して、子コンテンツを無視するかどうかを指定できます。

```javascript
import React from 'react';
import { Text } from 'react-native';
import { WovnIgnore } from '@wovnio/react-native';

<WovnIgnore>
  {/** このコンポーネント内のコンテンツは WOVN によって無視されます */}
  <Text>このコンテンツは翻訳もレポートもされません。</Text>
</WovnIgnore>

{/** WovnIgnore の外側のコンテンツは WOVN に処理されます */}
<Text>このコンテンツは翻訳およびレポートされます。</Text>
```

`WovnIgnore` のより複雑な使用例:

```javascript
<Screen name="ScreenName">
    <WovnIgnore>
        <Text>このコンテンツは無視され、翻訳もレポートもされません。</Text>
        <WovnIgnore ignore={false}>
            <Text>このコンテンツは無視されず、翻訳およびレポートされます。</Text>
        </WovnIgnore>
    </WovnIgnore>
    <WovnIgnore ignore={true}>
        <Text>このコンテンツも無視され、翻訳もレポートもされません。</Text>
    </WovnIgnore>
</Screen>
```

## プロパティ

| プロパティ名 | 型        | デフォルト値  | 説明                                   |
|--------------|-----------|---------------|----------------------------------------|
| `ignore`     | `boolean` | `true`        | 子コンテンツを無視するかどうかを指定します。|

## 注意事項

1. **ネストされたコンポーネント**: `isIgnore` 状態は `WovnIgnore` ラッパー内の子コンポーネントに継承されます。`WovnIgnore` コンポーネント内のネストされたコンテンツは `ignore` 状態を尊重します。

   ```javascript
   <WovnIgnore>
       <Text>無視されるコンテンツ。</Text>
       <View>
           <Text>ネストされた無視されるコンテンツ。</Text>
       </View>
   </WovnIgnore>
   ```

2. **デフォルト動作**: `ignore` プロパティが指定されない場合、コンポーネントはデフォルトで `true` に設定され、内容は無視されます。