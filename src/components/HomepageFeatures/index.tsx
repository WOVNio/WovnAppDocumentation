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
        Documentation for React Native & Expo will be available soon.
        <hr />
        React Native & Expoのドキュメントは近日公開予定です。
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
        Start using our WovnXamarin with our quick start guide. <br />
        <a href="docs/English/Xamarin/xamarin_quick_start">Xamarin Quick Start</a>
        <hr />
        XamarinでWOVN.appを始めるには、こちらのクイックスタートガイドをご利用ください。<br />
        <a href="docs/Japanese/Xamarin/xamarin_quick_start">Xamarin クイックスタート</a>
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