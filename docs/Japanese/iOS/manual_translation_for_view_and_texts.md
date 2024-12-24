# Translate Text 機能 (自動翻訳)

ほとんどの場合、WOVN SDK はすべての View を自動的に検出して翻訳します。しかし、WOVN SDK が翻訳すべきテキストを検出できない場合があります。そのような場合には、`Wovn.translateView(View, String)` を使用して View を翻訳するか、`Wovn.translate(String, String)` を使用してテキストを直接翻訳することができます。

## View の翻訳

View を翻訳するには、`Wovn.translateView(ViewToTranslate_View, ScreenName_String)` メソッドを使用します。このメソッドは、指定された View のテキストを翻訳し、翻訳されたテキストで View を更新します。このメソッドを呼び出した後、WOVN SDK は `ViewToTranslate_View` を監視し、何かが変更された場合に自動的に翻訳を行います。

### 例

```swift
Wovn.changeLang("ja");
notAutoTranslatedView1 = UITextView()
notAutoTranslatedView1.text = "This is a sample TextView in iOS."
Wovn.translateView(notAutoTranslatedView1, "ScreenName");
print(notAutoTranslatedView1.text) // -> これは、iOS のサンプル TextView です。

TextView notAutoTranslatedView2 = findViewById(R.id.not_auto_translated_text_view_2);
notAutoTranslatedView2.text = "This is a sample TextView in iOS too!"
Wovn.translateView(notAutoTranslatedView2, currentViewController);
print(notAutoTranslatedView2.text) // -> これも iOS のサンプル TextView です。

notAutoTranslatedView2.setText("This text will be translated by WOVN SDK automatically without calling Wovn.translateView again!");
print(notAutoTranslatedView2.text) // -> このテキストは、Wovn.translateView を再度呼び出さなくても、WOVN SDK によって自動的に翻訳されます。
```

## テキストの翻訳

テキストを直接翻訳するには、`Wovn.translate(TextToTranslate_String, ScreenName_String)` メソッドを使用します。このメソッドは、指定されたテキストを翻訳し、翻訳されたテキストを返します。

```swift
Wovn.changeLang("ja");
print(Wovn.translate("This text will be translated to the current language!", "ScreenName")); // -> このテキストは現在の言語に翻訳されます。
```
