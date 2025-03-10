# Migration From v2 to v3 Wovn iOS SDK

## Migration Guide
  
In the v3 SDK, we have made changes to simplify the SDK while significantly improving performance and stability. If you are using v2, follow these steps to migrate to v3.

### 1. Remove `completionHandler` from `Wovn.translateView`

From v3, we have improved the performance of our functions, and `Wovn.translateView` is one of them. As a result, since Wovn.translateView runs much faster now, the `completionHandler` is no longer needed.

In v2, `doSomethingAfterTranslationCompleted` needed to be inside the `completionHandler`.
```swift
Wovn.translateView(view: aView, viewController: aController, completionHandler: {
    doSomethingAfterTranslationCompleted()
})
```

In v3, you can just call `doSomethingAfterTranslationCompleted` right after `Wovn.translateView`.
```swift
Wovn.translateView(view: aView, viewController: aController)
doSomethingAfterTranslationCompleted()
```