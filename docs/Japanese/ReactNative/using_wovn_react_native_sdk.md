# Wovn React Native SDK - はじめに (自動翻訳)

Wovn React Native SDK は、React Native アプリに多言語対応を簡単に追加できるライブラリです。このガイドでは、Wovn React Native SDK を使い始めるための手順を説明します。

## 1. SDK のアクセスについてサポートチームに連絡する

Wovn React Native SDK と Wovn API トークンを取得するには、サポートチームにお問い合わせください。

## 2. Wovn React Native SDK をインポートする

Wovn React Native SDK をプロジェクトの依存関係に追加し、依存関係を再インストールします。

```json
"dependencies": {
  // ...
  "@wovnio/react-native": "file:path/to/wovn-react-native.tgz",
  // ...
}
```

## 3. Wovn React Native SDK を初期化する

[`Wovn.initWovn`](./wovn_apis#initwovn) メソッドは、非同期で SDK を初期化する関数です。Wovn API トークンとオプションの設定オブジェクトの2つの引数が必要です。

> **注:**  
> 他の Wovn SDK メソッドを呼び出す前に、このメソッドを呼び出してください。`await` を使用することをお勧めします。[`Wovn.initWovn`](./wovn_apis#initwovn) メソッドについて詳しくは、ドキュメントをご覧ください。

### サンプルコード

```javascript
import React, { useState, useEffect } from 'react';
import 'expo-router/entry';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import * as Wovn from '@wovnio/react-native';
import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';

async function initializeApp() {
  try {
    await Wovn.initWovn('YOUR_API_TOKEN', {
      enabledDebugLog: true,
      logLevel: 0,
    });
  } catch (error) {
    console.error('Initialization failed:', error);
  }
}

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function init() {
      await initializeApp();
      setIsInitialized(true);
    }
    init();
  }, []);

  if (!isInitialized) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>LOADING...</Text>
      </View>
    );
  }

  return <ExpoRoot context={require.context('./app')} />;
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

registerRootComponent(App);
```

## 4. 言語管理

Wovn では、アプリの言語を管理するためのいくつかのメソッドを提供しています。

- **言語を変更する**: [`Wovn.changeLang`](./wovn_apis#changelang) を使用
- **システム言語に変更する**: [`Wovn.changeToSystemLang`](./wovn_apis#changetosystemlang) を使用
- **現在の言語を取得する**: [`Wovn.getCurrentLang`](./wovn_apis#getcurrentlang) を使用
- **利用可能な言語リストを取得する**: [`Wovn.getLanguagesList`](./wovn_apis#getlanguageslist) を使用

`Wovn.changeToSystemLang()` を使用して Wovn に言語設定を管理させることをお勧めします。詳細については [Wovn APIs](./wovn_apis.md#changetosystemlang) をご覧ください。

### サンプルコード

```javascript
import * as Wovn from '@wovnio/react-native';

// Wovn を初期化
await Wovn.initWovn('YOUR_API_TOKEN', {
  enabledDebugLog: true,
  logLevel: 0,
});

// システム言語に変更
Wovn.changeToSystemLang();
```

## 5. 対応コンポーネントの翻訳

対応コンポーネントを翻訳するには、`react-native` ではなく `@wovnio/react-native` からインポートしてください。

### 変更前

```javascript
import { Button, View, Text, TextInput } from 'react-native';
```

### 変更後

```javascript
import { View } from 'react-native';
import { Button, View, Text, TextInput } from '@wovnio/react-native';
```

## 6. 非対応コンポーネントの翻訳

非対応コンポーネントの翻訳に関するガイドは、[Translate Unsupported Components](./translate_unsupported_components.md) を参照してください。

## 7. Wovn の画面管理について

Wovn が画面を管理する方法については、[Screen Component](./screen_component.md) ドキュメントを参照してください。

## 8. ユーザープライバシーの保護

ユーザーのプライバシーを保護する方法については、[Protect User Privacy](./protect_user_privacy.md) をご覧ください。

## 9. 追加リソース

- 開発時に翻訳の迅速なレポートとリフレッシュを有効にするには、[Wovn Debug Mode](./debug_mode.md) ドキュメントを参照してください。
- WOVN React Native v1 SDK から Wovn React Native SDK v2 への移行については、[Migration Guide](./migration_from_v1_to_v2.md) をご覧ください。
