# Wovn SDK for Android - 公開 API リファレンス (自動翻訳)

このドキュメントは、`Wovn` クラスで利用可能な公開されている非廃止メソッドの概要と使用例を提供します。これらのメソッドを使用することで、Android アプリケーションに WOVN.io の翻訳機能を統合および制御できます。

## 初期化

### `start(Context context, boolean isDebugMode)`

指定されたアプリケーションコンテキストとデバッグモードフラグで WOVN SDK を初期化します。
**注意:** 通常、WOVN は自動的にアプリケーションコンテキストを取得できます。このメソッドは取得できない場合に使用してください。

**パラメータ:**

- `context`: アプリケーションコンテキスト。
- `isDebugMode`: デバッグモードを有効にする場合は `true`。このパラメータには自動デバッグモード検出のために `BuildConfig.DEBUG` の使用を推奨します。

**例:**

```java
Wovn.start(getApplicationContext(), BuildConfig.DEBUG);
```

### `start(boolean isDebugMode)`

指定されたデバッグモードフラグで WOVN SDK を初期化します。

**パラメータ:**

- `isDebugMode`: デバッグモードを有効にする場合は `true`。

**例:**

```java
Wovn.start(BuildConfig.DEBUG);
```

## ビューの翻訳

### `translateView(View view, String screen, WovnTranslateViewFunction callback)` （廃止予定）

指定された View を現在の言語に翻訳します。SDK が自動的に一部のビューを翻訳できない場合に主に有用です。

**パラメータ:**

- `view`: 翻訳するビュー。
- `screen`: 翻訳に対応する画面名。
- `callback`: 翻訳完了時に実行されるコールバック。

**例:**

```java
Wovn.translateView(myView, "MainScreen", new WovnTranslateViewFunction() {
    @Override
    public void onTranslated() {
        // 翻訳完了の処理
    }
});
```

### `translateView(View view, String screen)`

上記と同様ですが、コールバックはありません。

**パラメータ:**

- `view`: 翻訳するビュー。
- `screen`: 画面名。

**例:**

```java
Wovn.translateView(myView, "MainScreen");
```

### `translateView(View view)`

ビューのコンテキストから画面名を取得して指定された View を翻訳します。

**パラメータ:**

- `view`: 翻訳するビュー。

**例:**

```java
Wovn.translateView(myView);
```

### `translateView(View view, Activity activity, WovnTranslateViewFunction callback)` （廃止予定）

アクティビティを使用して画面名を決定し、コールバック付きでビューを翻訳します。

**パラメータ:**

- `view`: 翻訳するビュー。
- `activity`: 画面名を提供するアクティビティ。
- `callback`: 翻訳完了後のコールバック。

**例:**

```java
Wovn.translateView(myView, myActivity, new WovnTranslateViewFunction() {
    @Override
    public void onTranslated() {
        // 完了の処理
    }
});
```

### `translateView(View view, Activity activity)`

アクティビティを使用して画面名を決定し、コールバックなしでビューを翻訳します。

**パラメータ:**

- `view`: 翻訳するビュー。
- `activity`: 画面名を提供するアクティビティ。

**例:**

```java
Wovn.translateView(myView, myActivity);
```

## アラートの翻訳

### `translateAlert(AlertDialog alertDialog)`

指定された AlertDialog を翻訳します。WOVN SDK はほとんどの AlertDialog を自動的に翻訳しますが、非常に軽微なちらつきが発生することがあります。ちらつきを避けるために、ダイアログを表示する前にこのメソッドを使用してください。

**パラメータ:**

- `alertDialog`: 翻訳するアラートダイアログ。

**例:**

```java
AlertDialog dialog = new AlertDialog.Builder(context)
    .setTitle("Title")
    .setMessage("Message")
    .create();
Wovn.translateAlert(dialog);
dialog.show();
```

## 汎用翻訳メソッド

### `translate(View view, Activity activity)`

提供されたアクティビティを使用して画面名を決定し、指定された View を翻訳します。WOVN SDK はこの View を追跡し、新しい子ビューの追加やテキストの変更などの変更が発生した際に自動的に翻訳します。

**パラメータ:**

- `view`: 翻訳および追跡するビュー。
- `activity`: 画面名を提供するアクティビティ。

**例:**

```java
Wovn.translate(myView, myActivity);
```

### `translate(View view, String screenName)`

上記と同様ですが、指定された画面名を使用します。

**パラメータ:**

- `view`: 翻訳するビュー。
- `screenName`: 画面名。

**例:**

```java
Wovn.translate(myView, "MainScreen");
```

## 言語管理

### `getCurrentLangCode()`

現在の言語コード（例: "en"、"ja"、"fr"）を取得します。

**戻り値:** 現在の言語コード、または利用できない場合は `null`。

**例:**

```java
String currentLang = Wovn.getCurrentLangCode();
```

### `changeLang(String lang)`

現在の言語を指定された言語コードに変更します。

**パラメータ:**

- `lang`: 言語コード。

**例:**

```java
Wovn.changeLang("ja");
```

### `changeLang(String lang, WovnLangChangeCallback callback)` （廃止予定）

現在の言語を変更し、操作が完了したときにコールバックを実行します。

**パラメータ:**

- `lang`: 言語コード。
- `callback`: 操作完了時のコールバック。

**例:**

```java
Wovn.changeLang("fr", new WovnLangChangeCallback() {
    @Override
    public void onChanged(String newLang) {
        // 言語変更完了の処理
    }
});
```

### `changeToSystemLang()`

現在の言語をシステムのデフォルト言語に変更します。

**例:**

```java
Wovn.changeToSystemLang();
```

### `changeToSystemLang(WovnLangChangeCallback callback)` （廃止予定）

上記と同様ですが、コールバックを含みます。

**パラメータ:**

- `callback`: 操作完了時のコールバック。

**例:**

```java
Wovn.changeToSystemLang(new WovnLangChangeCallback() {
    @Override
    public void onChanged(String systemLang) {
        // 言語変更完了の処理
    }
});
```

## テキストの翻訳

### `translate(String src, String screenName)`

指定された画面名を使用して、ソーステキストを現在の言語に翻訳します。

**パラメータ:**

- `src`: ソーステキスト。
- `screenName`: 画面名。

**戻り値:** 翻訳されたテキスト。

**例:**

```java
String translated = Wovn.translate("Hello, World!", "MainScreen");
```

### `translate(String src, String screenName, int timeoutMilliSec)`

`translate(String, String)` と同様ですが、WOVN の準備完了を待つためのタイムアウトを設定します。アプリ起動時に WOVN の準備が完了するのを待つ場合に有用です。

**パラメータ:**

- `src`: ソーステキスト。
- `screenName`: 画面名。
- `timeoutMilliSec`: 最大待機時間（ミリ秒）。

**戻り値:** 翻訳されたテキスト。

**例:**

```java
String translated = Wovn.translate("Hello, World!", "MainScreen", 2000);
```

## ステータスと設定

### `getWovnStatus()`

WOVN SDK の現在のステータスを取得します。ステータス情報には機能、言語設定、レポート設定が含まれます。

**戻り値:** ステータス情報を含む `WovnStatus` オブジェクト。

**例:**

```java
WovnStatus status = Wovn.getWovnStatus();
```

### `setWovnIgnore(View view, boolean ignore)`

ビューが翻訳中に無視されるかどうかを設定します。

**パラメータ:**

- `view`: 設定するビュー。
- `ignore`: ビューを無視する場合は `true`。

**例:**

```java
Wovn.setWovnIgnore(myView, true);
```

### `getWovnIgnore(View view)`

ビューが翻訳中に無視されているかどうかを確認します。

**パラメータ:**

- `view`: 確認するビュー。

**戻り値:** 無視されている場合は `true`、それ以外は `false`。

**例:**

```java
boolean isIgnored = Wovn.getWovnIgnore(myView);
```

### `setUserPermission(WovnPermission permission, boolean enable)`

SDK の特定の機能に対する権限を設定します。

**パラメータ:**

- `permission`: 設定する `WovnPermission`。
- `enable`: 権限を有効にする場合は `true`、無効にする場合は `false`。

**例:**

```java
Wovn.setUserPermission(WovnPermission.DATA_COLLECTION, true);
```

## 通知の翻訳

### `translateNotificationData(String src)`

通知データ（例: プッシュ通知のテキスト）を翻訳します。

**パラメータ:**

- `src`: 元の通知テキスト。

**戻り値:** 翻訳された通知テキスト。

**例:**

```java
String translatedNotification = Wovn.translateNotificationData(notificationMessage);
```

### `translateFirebaseNotificationIntent(Intent firebaseNotiIntent)`

Firebase 通知 Intent の "title" や "body" といったキーを翻訳します。

**パラメータ:**

- `firebaseNotiIntent`: 通知データを含む Intent。

**戻り値:** 翻訳されたデータを含む Intent。

**例:**

```java
Intent translatedIntent = Wovn.translateFirebaseNotificationIntent(intent);
```
