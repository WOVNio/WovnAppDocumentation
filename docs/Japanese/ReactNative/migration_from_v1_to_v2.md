# v1からv2へのWovn React Native SDKの移行 (自動翻訳)

## 移行ガイド

v2 SDKでは、SDKの簡素化を図ると同時に、パフォーマンスと安定性を大幅に向上させました。以下のステップに従って、v1からv2への移行を行ってください。

### 1. `@wovnio/react-native-sdk-core`と`@wovnio/support-react-native`を`@wovnio/react-native`に統合

Wovnのコンポーネントや関数をインポートするには、以下のコードを使用します。

```javascript
// Wovnのコンポーネントと関数をインポート
import { Screen, Text, TextInput } from '@wovnio/react-native';
import * as Wovn from '@wovnio/react-native';

// Wovnのコンポーネントと関数をコードで使用する例
// Wovnの関数の使用例
Wovn.changeLang('en-US');
let translatedText = Wovn.translate('こんにちは、世界！');

// Wovnのコンポーネントの使用例
<Text>こんにちは、世界！</Text>
```

### 2. `WovnContainer`の削除

アプリを`WovnContainer`でラップする必要がなくなりました。

### 3. Wovnの初期化

Wovnを初期化するには、以下の例を参考にしてください。`Wovn.initWovn`は他のWovn関数を使用する前に完了している必要があります。詳細については、[Wovn API](./wovn_apis.md#initwovn)をご参照ください。

```javascript
import * as Wovn from '@wovnio/react-native';

// 初期化の例
await Wovn.initWovn('Token3', {
  enabledDebugLog: true,
  logLevel: 0,
});
```

### 4. サポートされていないコンポーネントの翻訳

コンポーネントが Wovn に直接サポートされていない場合は、`Wovn.useTranslate` を使用してください。これらの関数の結果は、言語が変更されると動的に変更されます。

```javascript
import {
  Text as RNText,
  Button as RNButton,
} from 'react-native';
import * as Wovn from '@wovnio/react-native';
import { Screen } from '@wovnio/react-native';

// 使用例
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

### 5. 自動翻訳データの処理

v2 SDKは翻訳データを自動的に処理するため、`loadTranslation`のような関数を使用する必要がなくなりました。

### 6. （オプション）システム言語の処理

`Wovn.changeToSystemLang()`を使用して、Wovnに言語設定を管理させることをお勧めします。詳細については、[Wovn API](./wovn_apis.md#changetosystemlang)をご参照ください。Wovnはシステム言語を自動的に検出し適用します。

```javascript
import * as Wovn from '@wovnio/react-native';

// まずWovnを初期化
await Wovn.initWovn('Token3', {
  enabledDebugLog: true,
  logLevel: 0,
});

// システム言語に変更
Wovn.changeToSystemLang();
```

## v2の改善点

1. **パフォーマンス**: v2 SDKは、v1と比較してテキスト翻訳が大幅に高速かつ効率的です。
2. **対応コンポーネントの増加**: v2 SDKは、`Text`、`Button`、`TextInput`などのコンポーネントをサポートしています。今後さらに多くのコンポーネントが追加される予定です。
3. **簡素なAPI**: v2 SDKは、よりシンプルで使いやすいAPIデザインを導入しています。
4. **開発者向けの機能強化**: 開発者向け機能が強化されています（`__DEV__ === true`の場合）:
    - 翻訳データの迅速な報告と更新。
    - 翻訳を公開する前に保存済みの翻訳をテストできるプレビューモード。
    - 開発モードでの自動デバッグ支援。
