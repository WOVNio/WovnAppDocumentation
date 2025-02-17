import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'iOS',
    Svg: require('@site/static/img/ios.svg').default,
    description: (
      <>
        Start using WOVN.app on iOS with our quick start guide. <br />
        <a href="docs/English/iOS/ios_quick_start">iOS Quick Start</a>
        <hr />
        iOSでWOVN.appを始めるには、こちらのクイックスタートガイドをご利用ください。<br />
        <a href="docs/Japanese/iOS/ios_quick_start">iOS クイックスタート</a>
      </>
    ),
  },
  {
    title: 'Android',
    Svg: require('@site/static/img/android.svg').default,
    description: (
      <>
        Start using WOVN.app on Android with our quick start guide. <br />
        <a href="docs/English/Android/android_quick_start">Android Quick Start</a>
        <hr />
        AndroidでWOVN.appを始めるには、こちらのクイックスタートガイドをご利用ください。<br />
        <a href="docs/Japanese/Android/android_quick_start">Android クイックスタート</a>
      </>
    ),
  },
  {
    title: 'React Native & Expo',
    Svg: require('@site/static/img/react_native.svg').default,
    description: (
      <>
        Start using WOVN.app on React Native & Expo with our start guide. <br />
        <a href="docs/English/ReactNative/using_wovn_react_native_sdk">React Native Start</a>
        <hr />
        React Native & ExpoでWOVN.appを始めるには、こちらのガイドをご利用ください。<br />
        <a href="docs/Japanese/ReactNative/using_wovn_react_native_sdk">React Native スタート</a>
      </>
    ),
  },
  {
    title: 'Flutter',
    Svg: require('@site/static/img/flutter.svg').default,
    description: (
      <>
        Documentation for Flutter will be available soon.
        <hr />
        Flutterのドキュメントは近日公開予定です。
      </>
    ),
  },
  {
    title: 'Xamarin',
    Svg: require('@site/static/img/xamarin.svg').default,
    description: (
      <>
        Documentation for Xamarin will be available soon.
        <hr />
        Xamarinのドキュメントは近日公開予定です。
      </>
    ),
  },
  {
    title: 'Cordova',
    Svg: require('@site/static/img/cordova.svg').default,
    description: (
      <>
        Start using WOVN.app on Cordova with our quick start guide. <br />
        <a href="docs/English/Cordova/cordova_quick_start">Cordova Quick Start</a>
        <hr />
        CordovaでWOVN.appを始めるには、こちらのクイックスタートガイドをご利用ください。<br />
        <a href="docs/Japanese/Cordova/cordova_quick_start">Cordova クイックスタート</a>
      </>
    ),
  }

];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
