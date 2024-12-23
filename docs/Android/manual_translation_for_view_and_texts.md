# Translate Text feature

Most of the time, WOVN SDK will find and translate all Views automatically. However, there are cases where WOVN SDK may not be able to detect the text to translate. In such cases, you can use `Wovn.translate(View, String)` to translate Views, or `Wovn.translate(String, String)` to translate text directly.

## Translate Views

To translate a View, use the `Wovn.translate(ViewToTranslate_View, ScreenName_String)` method. This method translates the text of the specified View and updates the View with the translated text. Note that after calling this method, WOVN SDK will follow `ViewToTranslate_View` and automatically translate it if something changes.

### Example

```java
Wovn.changeLang("ja");
TextView notAutoTranslatedView1 = findViewById(R.id.not_auto_translated_text_view_1);
Wovn.translate(notAutoTranslatedView1, "ScreenName");
TextView notAutoTranslatedView2 = findViewById(R.id.not_auto_translated_text_view_2);
Wovn.translate(notAutoTranslatedView2); // ScreenName is omitable. In this case, WOVN SDK will use the current Activity's name as the ScreenName.
// [some code]
notAutoTranslatedView1.setText("This text will be translated by WOVN SDK automatically without calling Wovn.translate again!");
Logger.d(notAutoTranslatedView1.getText().toString()); // -> このテキストは、Wovn.translate を再度呼び出さなくても、WOVN SDK によって自動的に翻訳されます。
```

## Translate Texts

To translate a text directly, use the `Wovn.translate(TextToTranslate_String, ScreenName_String)` method. This method translates the specified text and returns the translated text.

```java
Wovn.changeLang("ja");
Logger.d(Wovn.translate("This text will be translated to the current language!", "ScreenName")); // -> このテキストは現在の言語に翻訳されます。
```
