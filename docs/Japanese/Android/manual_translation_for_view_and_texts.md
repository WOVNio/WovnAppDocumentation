# テキスト翻訳機能 (自動翻訳)

ほとんどの場合、WOVN SDK はすべての View を自動的に検出して翻訳します。しかし、WOVN SDK が翻訳するテキストを検出できない場合もあります。そのような場合は、`Wovn.translate(View, String)` を使用して View を翻訳するか、`Wovn.translate(String, String)` を使用してテキストを直接翻訳することができます。

## View の翻訳

View を翻訳するには、`Wovn.translate(ViewToTranslate_View, ScreenName_String)` メソッドを使用します。このメソッドは指定された View のテキストを翻訳し、翻訳されたテキストで View を更新します。このメソッドを呼び出した後、WOVN SDK は `ViewToTranslate_View` を監視し、何かが変更された場合に自動的に翻訳を行います。

### 例

```java
Wovn.changeLang("ja");
TextView notAutoTranslatedView1 = findViewById(R.id.not_auto_translated_text_view_1);
Wovn.translate(notAutoTranslatedView1, "ScreenName");
TextView notAutoTranslatedView2 = findViewById(R.id.not_auto_translated_text_view_2);
Wovn.translate(notAutoTranslatedView2); // ScreenName は省略可能です。この場合、WOVN SDK は現在の Activity の名前を ScreenName として使用します。
// [some code]
notAutoTranslatedView1.setText("This text will be translated by WOVN SDK automatically without calling Wovn.translate again!");
Logger.d(notAutoTranslatedView1.getText().toString()); // -> このテキストは、WOVN SDK によって Wovn.translate を再度呼び出さなくても自動的に翻訳されます。
```

## テキストの翻訳

テキストを直接翻訳するには、`Wovn.translate(TextToTranslate_String, ScreenName_String)` メソッドを使用します。このメソッドは指定されたテキストを翻訳し、翻訳されたテキストを返します。

```java
Wovn.changeLang("ja");
Logger.d(Wovn.translate("This text will be translated to the current language!", "ScreenName")); // -> このテキストは現在の言語に翻訳されます。
```
