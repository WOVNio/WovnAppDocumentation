"use strict";(self.webpackChunkwovn_app_documentation=self.webpackChunkwovn_app_documentation||[]).push([[3142],{1609:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Japanese/iOS/translate_push_notification","title":"WOVN \u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u6a5f\u80fd (\u81ea\u52d5\u7ffb\u8a33)","description":"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001\u30a2\u30d7\u30ea\u304c\u3059\u3067\u306b Apple Push Notification service (APNs) \u307e\u305f\u306f Firebase \u304b\u3089\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3067\u304d\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002","source":"@site/docs/Japanese/iOS/translate_push_notification.md","sourceDirName":"Japanese/iOS","slug":"/Japanese/iOS/translate_push_notification","permalink":"/WovnAppDocumentation/docs/Japanese/iOS/translate_push_notification","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"japaneseDocsSidebar","previous":{"title":"iOS\u8a2d\u5b9a\u30a2\u30d7\u30ea\u3078\u306eWOVN Settings\u7d71\u5408 (\u81ea\u52d5\u7ffb\u8a33)","permalink":"/WovnAppDocumentation/docs/Japanese/iOS/setup_wovn_settings_in_app_info"},"next":{"title":"Wovn SDK for iOS - \u516c\u958b API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9 (Swift) (\u81ea\u52d5\u7ffb\u8a33)","permalink":"/WovnAppDocumentation/docs/Japanese/iOS/wovn_apis"}}');var o=i(4848),s=i(8453);const c={},a="WOVN \u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u6a5f\u80fd (\u81ea\u52d5\u7ffb\u8a33)",r={},l=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u8a73\u7d30",id:"\u8a73\u7d30",level:2},{value:"1. WOVN \u304c\u901a\u77e5\u3092\u3069\u306e\u3088\u3046\u306b\u7ffb\u8a33\u3067\u304d\u308b\u304b",id:"1-wovn-\u304c\u901a\u77e5\u3092\u3069\u306e\u3088\u3046\u306b\u7ffb\u8a33\u3067\u304d\u308b\u304b",level:3},{value:"2. \u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3059\u308b\u524d\u306b\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u901a\u77e5\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u306b\u8a31\u53ef\u3059\u308b\u65b9\u6cd5",id:"2-\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3059\u308b\u524d\u306b\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u901a\u77e5\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b-wovn-\u306b\u8a31\u53ef\u3059\u308b\u65b9\u6cd5",level:3},{value:"\u30c6\u30b9\u30c8\u65b9\u6cd5",id:"\u30c6\u30b9\u30c8\u65b9\u6cd5",level:3},{value:"3. \u6a5f\u5bc6\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u542b\u3080\u901a\u77e5\u30c7\u30fc\u30bf\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5",id:"3-\u6a5f\u5bc6\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u542b\u3080\u901a\u77e5\u30c7\u30fc\u30bf\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b-wovn-\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5",level:2},{value:"4. \u30ed\u30fc\u30ab\u30eb\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5",id:"4-\u30ed\u30fc\u30ab\u30eb\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b-wovn-\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"wovn-\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u6a5f\u80fd-\u81ea\u52d5\u7ffb\u8a33",children:"WOVN \u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u6a5f\u80fd (\u81ea\u52d5\u7ffb\u8a33)"})}),"\n",(0,o.jsx)(e.p,{children:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001\u30a2\u30d7\u30ea\u304c\u3059\u3067\u306b Apple Push Notification service (APNs) \u307e\u305f\u306f Firebase \u304b\u3089\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u53d7\u4fe1\u3067\u304d\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,o.jsx)(e.p,{children:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3053\u3068\u3092\u5b66\u3073\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"WOVN \u304c\u901a\u77e5\u3092\u3069\u306e\u3088\u3046\u306b\u7ffb\u8a33\u3067\u304d\u308b\u304b"}),"\n",(0,o.jsx)(e.li,{children:"\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3059\u308b\u524d\u306b\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u901a\u77e5\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u306b\u8a31\u53ef\u3059\u308b\u65b9\u6cd5"}),"\n",(0,o.jsx)(e.li,{children:"\u6a5f\u5bc6\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u542b\u3080\u901a\u77e5\u30c7\u30fc\u30bf\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5"}),"\n",(0,o.jsx)(e.li,{children:"\u30ed\u30fc\u30ab\u30eb\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u8a73\u7d30",children:"\u8a73\u7d30"}),"\n",(0,o.jsx)(e.h3,{id:"1-wovn-\u304c\u901a\u77e5\u3092\u3069\u306e\u3088\u3046\u306b\u7ffb\u8a33\u3067\u304d\u308b\u304b",children:"1. WOVN \u304c\u901a\u77e5\u3092\u3069\u306e\u3088\u3046\u306b\u7ffb\u8a33\u3067\u304d\u308b\u304b"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u6982\u8981",src:i(9143).A+"",width:"2986",height:"1658"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"\u307e\u305a\u3001\u30c6\u30b9\u30c8\u30c7\u30d0\u30a4\u30b9\u306b\u30c6\u30b9\u30c8\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001WOVN \u304c\u901a\u77e5\u30c7\u30fc\u30bf\u3092 WOVN \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306b\u5831\u544a\u3057\u3001\u7ffb\u8a33\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.li,{children:"WOVN \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u304c\u901a\u77e5\u30c7\u30fc\u30bf\u3092\u7ffb\u8a33\u3057\u305f\u5f8c\u3001\u540c\u3058\u901a\u77e5\u3092\u518d\u5ea6\u30c6\u30b9\u30c8\u30c7\u30d0\u30a4\u30b9\u306b\u9001\u4fe1\u3057\u3066\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u901a\u77e5\u304c\u7ffb\u8a33\u3055\u308c\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u305f\u3089\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"2-\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3059\u308b\u524d\u306b\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u901a\u77e5\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b-wovn-\u306b\u8a31\u53ef\u3059\u308b\u65b9\u6cd5",children:"2. \u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3059\u308b\u524d\u306b\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u901a\u77e5\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u306b\u8a31\u53ef\u3059\u308b\u65b9\u6cd5"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u30b5\u30fc\u30d0\u30fc\u5074\u3067\u3001\u3059\u3079\u3066\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306b ",(0,o.jsx)(e.code,{children:'"mutable_content": true'})," \u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u304c\u306a\u3044\u3068\u3001Apple \u306f\u901a\u77e5\u3092\u3055\u3089\u306b\u7de8\u96c6\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u3068\u5224\u65ad\u3057\u3001\u901a\u77e5\u3092\u305d\u306e\u307e\u307e\u8868\u793a\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"UNNotificationServiceExtension"})," \u3092\u62e1\u5f35\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u30ed\u30b8\u30c3\u30af\u3092\u8ffd\u52a0\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001Apple \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\uff08",(0,o.jsx)(e.a,{href:"https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension%EF%BC%89%E3%81%AB%E5%BE%93%E3%81%A3%E3%81%A6%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82",children:"https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension\uff09\u306b\u5f93\u3063\u3066\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"UNNotificationServiceExtension"})," \u3068\u30a2\u30d7\u30ea\u306f\u5225\u3005\u306e\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u3067\u5b9f\u884c\u3055\u308c\u308b\u305f\u3081\u3001\u30c7\u30fc\u30bf\u3092\u5171\u6709\u3059\u308b\u305f\u3081\u306e\u30d6\u30ea\u30c3\u30b8\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u306f App Groups \u3092\u4f7f\u7528\u3057\u307e\u3059\uff1a"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u30e1\u30a4\u30f3\u30a2\u30d7\u30ea\u306e ",(0,o.jsx)(e.code,{children:"App Groups"})," \u306b ",(0,o.jsx)(e.code,{children:"group.io.wovn.workbox"})," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u306e\u4f8b\u3067\u306f ",(0,o.jsx)(e.code,{children:"wovn-ios-demoapp"})," \u3067\u3059\u3002 ",(0,o.jsx)(e.img,{alt:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30a2\u30d7\u30ea\u30b0\u30eb\u30fc\u30d7 \u30e1\u30a4\u30f3\u30bf\u30fc\u30b2\u30c3\u30c8",src:i(361).A+"",width:"871",height:"446"})]}),"\n",(0,o.jsxs)(e.li,{children:["Notification Service Extension \u306e ",(0,o.jsx)(e.code,{children:"App Groups"})," \u306b ",(0,o.jsx)(e.code,{children:"group.io.wovn.workbox"})," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002 ",(0,o.jsx)(e.img,{alt:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30a2\u30d7\u30ea\u30b0\u30eb\u30fc\u30d7 Notification Service Extension",src:i(3594).A+"",width:"893",height:"441"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u30e1\u30a4\u30f3\u30a2\u30d7\u30ea\u3068 ",(0,o.jsx)(e.code,{children:"UNNotificationServiceExtension"})," \u306e\u4e21\u65b9\u3067 ",(0,o.jsx)(e.code,{children:"Wovn SDK"})," \u306b App Groups ",(0,o.jsx)(e.code,{children:"group.io.wovn.workbox"})," \u3092\u901a\u77e5\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u7ffb\u8a33\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"AppDelegate.swift"})," \u3067\u3001",(0,o.jsx)(e.code,{children:"Wovn.start"})," \u306e\u30b3\u30fc\u30c9\u30d1\u30e9\u30e1\u30fc\u30bf ",(0,o.jsx)(e.code,{children:"appGroupIdentifier"})," \u3092 ",(0,o.jsx)(e.code,{children:'"group.io.wovn.workbox"'})," \u306b\u3001",(0,o.jsx)(e.code,{children:"isNotificationServiceEnv"})," \u3092 ",(0,o.jsx)(e.code,{children:"false"})," \u306b\u5909\u66f4\u3057\u307e\u3059\u3002\u4f8b\uff1a",(0,o.jsx)(e.code,{children:'Wovn.start(appGroupIdentifier: "group.io.wovn.workbox", isNotificationServiceEnv: false)'})]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-swift",children:'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    // \u4e00\u90e8\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\n    \n    // [\u5909\u66f4\u524d]\n    // Wovn.start(isDebugMode: _isDebugAssertConfiguration(), autoTranslateUIKit: true)\n\n    // [\u5909\u66f4\u5f8c]\n    Wovn.start(\n        appGroupIdentifier: "group.io.wovn.workbox",\n        isDebugMode: _isDebugAssertConfiguration(),\n        autoTranslateUIKit: true,\n        isNotificationServiceEnv: false\n    )\n    // \u4e00\u90e8\u306e WOVN \u30b3\u30fc\u30c9\n    // \u305d\u306e\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\n}\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"UNNotificationServiceExtension"})," \u30d5\u30a9\u30eb\u30c0\u5185\u306e ",(0,o.jsx)(e.code,{children:"NotificationService.swift"})," \u306b\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-swift",children:'import UserNotifications\nimport WOVNswift\n\nclass NotificationService: UNNotificationServiceExtension {\n\n    var contentHandler: ((UNNotificationContent) -> Void)?\n    var bestAttemptContent: UNMutableNotificationContent?\n\n    override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {\n        Wovn.start(appGroupIdentifier: "group.io.wovn.workbox", isNotificationServiceEnv: true)\n        self.contentHandler = contentHandler\n        bestAttemptContent = (request.content.mutableCopy() as? UNMutableNotificationContent)\n        if let bestAttemptContent = bestAttemptContent {\n            let translatedContent = Wovn.translateNotificationContent(notiContent: bestAttemptContent)\n            contentHandler(translatedContent)\n        }\n    }\n    \n    override func serviceExtensionTimeWillExpire() {\n        // \u30b7\u30b9\u30c6\u30e0\u306b\u3088\u3063\u3066\u62e1\u5f35\u6a5f\u80fd\u304c\u7d42\u4e86\u3055\u308c\u308b\u76f4\u524d\u306b\u547c\u3070\u308c\u307e\u3059\u3002\n        // \u3053\u308c\u3092\u6a5f\u4f1a\u306b\u300c\u6700\u5584\u306e\u8a66\u307f\u300d\u3068\u3057\u3066\u4fee\u6b63\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u914d\u4fe1\u3057\u307e\u3059\u3002\u305d\u3046\u3057\u306a\u3044\u3068\u3001\u5143\u306e\u30d7\u30c3\u30b7\u30e5\u30da\u30a4\u30ed\u30fc\u30c9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\n        if let contentHandler = contentHandler, let bestAttemptContent = bestAttemptContent {\n            contentHandler(bestAttemptContent)\n        }\n    }\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u30b9\u30c6\u30c3\u30d74\u306e\u5f8c\u3001\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u5185\u5bb9\u306f\u7ffb\u8a33\u3055\u308c\u3001",(0,o.jsx)(e.code,{children:"translatedContent"})," \u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u305d\u306e\u307e\u307e\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3059\u308b\u524d\u306b\u3055\u3089\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u30c6\u30b9\u30c8\u65b9\u6cd5",children:"\u30c6\u30b9\u30c8\u65b9\u6cd5"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u3001Firebase Cloud Messaging \u7d4c\u7531\u3067\u30c7\u30d0\u30a4\u30b9\u306b\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n    "to": "{YOUR TESTING DEVICE FCM TOKEN}",\n    "notification": {\n        "mutable_content": true, // \u3053\u306e\u884c\u3092\u5fd8\u308c\u305a\u306b\n        "title": "\u3053\u3093\u306b\u3061\u306f",\n        "body": "\u7d20\u6674\u3089\u3057\u3044\u65e5\u3067\u3059\u306d\uff01"\n    }\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u521d\u56de\u306f\u3001\u30c6\u30b9\u30c8\u30c7\u30d0\u30a4\u30b9\u304c\u65e5\u672c\u8a9e\u3067\u901a\u77e5\u3092\u53d7\u4fe1\u3059\u308b\u306f\u305a\u3067\u3059\u3002\u3053\u308c\u306f\u3001WOVN \u304c\u307e\u3060\u7ffb\u8a33\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u305f\u3081\u3067\u3059\u3002WOVN \u306b\u30c7\u30fc\u30bf\u306e\u5831\u544a\u3092\u8a31\u53ef\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u901a\u77e5\u306e\u30bf\u30a4\u30c8\u30eb\u3068\u672c\u6587\u3092 WOVN \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e PushNotification \u753b\u9762\u5185\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.img,{alt:"\u7ffb\u8a33\u524d\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5 iOS",src:i(5381).A+"",width:"1125",height:"328"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.img,{alt:"\u7ffb\u8a33\u5f8c\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9 iOS",src:i(701).A+"",width:"1380",height:"434"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["2\u3064\u306e\u5024\u3092\u7ffb\u8a33\u3057\u305f\u5f8c\u3001",(0,o.jsx)(e.code,{children:"Save and publish"})," \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u6b21\u56de\u304b\u3089\u540c\u3058\u901a\u77e5\u3092\u9001\u4fe1\u3057\u305f\u969b\u306b\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306e\u8a00\u8a9e\u306b\u7ffb\u8a33\u3055\u308c\u3066\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.img,{alt:"\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30c7\u30e2 iOS",src:i(2558).A+"",width:"884",height:"1920"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"3-\u6a5f\u5bc6\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u542b\u3080\u901a\u77e5\u30c7\u30fc\u30bf\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b-wovn-\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5",children:"3. \u6a5f\u5bc6\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u542b\u3080\u901a\u77e5\u30c7\u30fc\u30bf\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u901a\u77e5\u306e ",(0,o.jsx)(e.code,{children:"title"})," \u3084 ",(0,o.jsx)(e.code,{children:"body"})," \u306b\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u76f4\u63a5\u8ffd\u52a0\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001",(0,o.jsx)(e.code,{children:"%{variable_name}%"})," \u3092\u4f7f\u7528\u3057\u3001\u901a\u77e5\u30c7\u30fc\u30bf\u306e ",(0,o.jsx)(e.code,{children:"data"})," \u5185\u306b\u30c7\u30fc\u30bf\u3092\u542b\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{   \n    "to": "{YOUR TESTING DEVICE FCM TOKEN}",\n    "notification": {\n        "mutable_content": true, // \u3053\u306e\u884c\u3092\u5fd8\u308c\u305a\u306b\n        "title": "\u4eca\u6708\u306e\u8acb\u6c42\u66f8\u306e\u6e96\u5099\u304c\u3067\u304d\u307e\u3057\u305f, %name%\u3055\u3093!",\n        "body": "\u4eca\u6708\u306f%amount%\u5186\u3067\u3059\u3002 %date%\u307e\u3067\u306b\u304a\u652f\u6255\u3044\u304f\u3060\u3055\u3044"\n    },\n    "data": {\n        "name": "John Doe",\n        "amount": "10000",\n        "date": "2023/12/12"\n    }  \n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u901a\u5e38\u306e\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u30c6\u30b9\u30c8\u3059\u308b\u969b\u3068\u540c\u3058\u30d7\u30ed\u30bb\u30b9\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002\u30e6\u30fc\u30b6\u30fc\u6a5f\u5bc6\u30c7\u30fc\u30bf\u3092\u542b\u3080\u901a\u77e5\u3082\u60c5\u5831\u6f0f\u6d29\u306a\u304f\u7ffb\u8a33\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.img,{alt:"\u52d5\u7684\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u5f8c\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9 iOS",src:i(5988).A+"",width:"1399",height:"579"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.img,{alt:"\u52d5\u7684\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u30c7\u30e2 iOS",src:i(759).A+"",width:"884",height:"1920"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"4-\u30ed\u30fc\u30ab\u30eb\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b-wovn-\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5",children:"4. \u30ed\u30fc\u30ab\u30eb\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u7ffb\u8a33\u3059\u308b\u305f\u3081\u306b WOVN \u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"Wovn.translateNotificationData"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ed\u30fc\u30ab\u30eb\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u306e\u30c7\u30fc\u30bf\u3092\u8868\u793a\u524d\u306b\u7ffb\u8a33\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-swift",children:'var content = UNMutableNotificationContent()\ncontent.title = "\u3053\u3093\u306b\u3061\u306f%name%\u3055\u3093"\ncontent.subtitle = "\u304a\u91d1\u3092\u6255\u3063\u3066\u304f\u3060\u3055\u3044.%amount%\u30c9\u30eb\u3067\u3059"\ncontent.body = "\u671f\u9650\u5185\u306b\u304a\u652f\u6255\u3044\u3092\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002%amount%\u30c9\u30eb\u3067\u3059"\ncontent.userInfo.updateValue("John Doe", forKey: "name")\ncontent.userInfo.updateValue("150", forKey: "amount")\ncontent.userInfo.updateValue("2099/12/12", forKey: "date")\ncontent.sound = UNNotificationSound.default\ncontent = Wovn.translateNotificationContent(notiContent: content)\n// \u30ed\u30fc\u30ab\u30eb\u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u3092\u8868\u793a\u3059\u308b\u30b3\u30fc\u30c9\n'})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},361:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/push_notification_app_group_main_target-644b943a9d3d4e18a51f96d117798e2d.png"},3594:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/push_notification_app_group_pn_target-1b732418b0cd7c9d9f5dd393de301d24.png"},5381:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/push_notification_ios_before_translation-0943c951f49eaaef058813835045d646.png"},5988:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/push_notification_ios_dashboard_after_dynamic_push_notification-1bb5cd371d43f4f83182bb37ff1d8959.png"},701:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/push_notification_ios_dashboard_after_first_push_notification-ab45b960bb2906b112731ba043d7a4bb.png"},2558:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/push_notification_ios_demo-455dc77c12bc9b8e429e1d6b570c1d11.gif"},759:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/push_notification_ios_dynamic_pn_demo-b03e02bc68979d2f03c6201f1b72fbc6.gif"},9143:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/push_notification_overview-791b992efe5b9974e5806f4ad9f8509c.png"},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>a});var t=i(6540);const o={},s=t.createContext(o);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);