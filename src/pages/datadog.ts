import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "41db56c0-952f-4314-85fb-3ed5ae844829",
  clientToken: "pub5272be864feff3b8289a502a3610391c",
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: "datadoghq.com",
  service: "wovn-app-documentation",
  env: "prod",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  defaultPrivacyLevel: "mask-user-input",
});
