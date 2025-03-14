# v2 から v3 への Wovn iOS SDK 移行ガイド

## 移行ガイド

v3 SDK では、パフォーマンスと安定性を大幅に向上させながら、SDK をよりシンプルにするための変更を行いました。
v2 を使用している場合は、以下の手順に従って v3 へ移行してください。

### 1. Wovn.translateView の completionHandler を削除

v3 では、関数のパフォーマンスが向上し、その中の一つが `Wovn.translateView` です。その結果、Wovn.translateView の実行速度が大幅に向上したため、`completionHandler` は不要になりました。

v2 では、`doSomethingAfterTranslationCompleted` を `completionHandler` の中で実行する必要がありました。
```swift
Wovn.translateView(view: aView, viewController: aController, completionHandler: {
    doSomethingAfterTranslationCompleted()
})
```

v3 では、`Wovn.translateView` の後に `doSomethingAfterTranslationCompleted` を直接呼び出せば問題ありません。
```swift
Wovn.translateView(view: aView, viewController: aController)
doSomethingAfterTranslationCompleted()
```