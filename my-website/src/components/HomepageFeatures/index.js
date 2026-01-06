import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de usar',
    Svg: require('@site/static/img/cm.svg').default,
    description: (
      <>
        Este formulario está diseñado para que se entienda el diseño del formulario de pago.
      </>
    ),
  },
  {
    title: 'Visualizacion',
    Svg: require('@site/static/img/cm.svg').default,
    description: (
      <>
        Documentación para la visualización del formulario de pago.
      </>
    ),
  },
  {
    title: 'Entiende la estructura',
    Svg: require('@site/static/img/cm.svg').default,
    description: (
      <>
        Permite comprender la estructura del formulario de pago.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
