# Wovn SDK ドキュメント (自動翻訳)

## 初期化

### `initWovn`

**説明**

指定されたトークンと設定オプションを使用してWovn SDKを初期化します。このセットアップは、他のWovn SDKメソッドを呼び出す前に必須です。初期化プロセスでは、必要なデータをAPIまたはローカルストレージから取得し、SDKが使用可能な状態にします。

**シグネチャ**

```typescript
initWovn(token: string, opts?: WovnInitOptions): Promise<void>
```

**パラメータ**

- `token` (`string`): データのロードに必要な認証トークン。
- `opts` (`WovnInitOptions`, 任意): 初期化の設定オプション。
  - `enabledDebugLog` (`boolean`): デバッグログを有効にします。
  - `logLevel` (`number | LogLevel`): ログの出力レベル。
    - `0` = VERBOSE
    - `1` = DEBUG
    - `2` = INFO
    - `3` = WARN
    - `4` = ERROR
    - `5` = NONE
  - `enableTranslationPreviewMode` (`boolean`): アプリ運用者モードが有効な場合に翻訳プレビューモードを有効にします。
  - `debugMode` (`boolean`): デバッグモードを有効にします。このモードは開発環境（`__DEV__ === true`）ではデフォルトで有効です。

**戻り値**

- `Promise<void>`: 初期化が完了した後に解決されるプロミス。

**備考**

- このメソッドは他のWovn SDKメソッドを呼び出す前に実行する必要があります。`await`を使用することを推奨します。
- 最初の呼び出しではAPIからデータを取得するため時間がかかる可能性があります。2回目以降の呼び出しではローカルストレージからデータをロードし、ほぼ即座に初期化が完了します。
- 初回ロードを高速化する「キックスタート機能」は将来のリリースで追加予定です。

**例**

*基本的な使用例:*

```typescript
await initWovn('your-token', { __overrideInstance: true });
```

*React Nativeでの統合例:*

```javascript
import React, { useState, useEffect } from 'react';
import 'expo-router/entry';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import * as Wovn from '@wovnio/react-native';
import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';

async function initializeApp() {
  try {
    await Wovn.initWovn('TOKEN3', {
      enabledDebugLog: true,
      logLevel: 0,
    });
  } catch (error) {
    console.error('初期化失敗:', error);
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

  // Wovnの初期化が完了するまでアプリをレンダリングしない
  if (!isInitialized) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>読み込み中...</Text>
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

---

## 言語管理

### `changeLang`

**説明**

指定された言語コードに現在の言語を変更します。

**シグネチャ**

```typescript
changeLang(langCode: string): void
```

**パラメータ**

- `langCode` (`string`): 切り替える言語コード（例: `'en'`, `'fr'`, `'es'`）。

**例**

```typescript
changeLang('fr');
```

---

### `changeToSystemLang`

**説明**

現在の言語をシステムのデフォルト言語に変更します。

**シグネチャ**

```typescript
changeToSystemLang(): void
```

**例**

```typescript
changeToSystemLang();
```

---

### `getLanguagesList`

**説明**

サポートされている言語コードのリストを取得します。

**シグネチャ**

```typescript
getLanguagesList(): string[]
```

**戻り値**

- `string[]`: サポートされている言語コードの配列。

**例**

```typescript
const languages = getLanguagesList();
console.log(languages); // ['en', 'fr', 'es', ...]
```

---

### `getCurrentLang`

**説明**

現在アクティブな言語コードを取得します。

**シグネチャ**

```typescript
getCurrentLang(): string
```

**戻り値**

- `string`: 現在の言語コード（例: `'en'`, `'fr'`）。

**例**

```typescript
const currentLang = getCurrentLang();
console.log(currentLang); // 'en'
```

---

### `getSystemLang`

**説明**

システムのデフォルト言語コードを取得します。

**シグネチャ**

```typescript
getSystemLang(): string
```

**戻り値**

- `string`: システムの言語コード（例: `'en-US'`, `'fr-FR'`）。

**例**

```typescript
const systemLang = getSystemLang();
console.log(systemLang); // 'en-US'
```

---

## 翻訳

### `translateText`

**説明**

現在の言語設定に基づいて指定されたテキストを翻訳します。

**シグネチャ**

```typescript
translateText(text: string, screenName?: string): string
```

**パラメータ**

- `text` (`string`): 翻訳対象のテキスト。
- `screenName` (`string`, 任意): 翻訳を適用する画面またはコンテキストの識別子。デフォルトは`'_Default'`。

**戻り値**

- `string`: 翻訳されたテキスト。翻訳が利用できない場合は元のテキストを返します。

**例**

```typescript
const translated = translateText('Hello, world!');
console.log(translated); // 現在の言語がフランス語の場合 'Bonjour le monde!'
```

---

### `translate`

**説明**

現在の言語設定に基づいてReactノードを翻訳します。

**シグネチャ**

```typescript
translate(node: React.ReactNode, screenName?: string): React.ReactNode
```

**パラメータ**

- `node` (`React.ReactNode`): 翻訳対象のReactノード。
- `screenName` (`string`, 任意): 翻訳を適用する画面またはコンテキストの識別子。デフォルトは`'_Default'`。

**戻り値**

- `React.ReactNode`: 翻訳されたReactノード。翻訳が利用できない場合は元のノードを返します。

**例**

```typescript
const translatedNode = translate(<div>Hello, world!</div>, 'HomeScreen');
```

---

## ユーティリティ関数

### `getToken`

**説明**

Wovn SDKで使用されている現在のプロジェクトトークンを取得します。

**シグネチャ**

```typescript
getToken(): string
```

**戻り値**

- `string`: 現在のWovnプロジェクトトークン。

**例**

```typescript
const token = getToken();
console.log(token); // 'FToken'
```

---

### `getWovnStatus`

**説明**

Wovn SDKの現在のステータスを取得します。

**シグネチャ**

```typescript
getWovnStatus(): string
```

**戻り値**

- `string`: Wovn SDKの現在のステータスを表す文字列。

**例**

```typescript
const status = getWovnStatus();
console.log(status); // 'Configs[token: TOKEN3]'
```
