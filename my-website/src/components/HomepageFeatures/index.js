import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de usar',
    Svg: require('@site/static/img/cm.svg').default,
    description: (
      <>
        Este Formulario esta diseñado para que pueda hacer pagos facilmente.
      </>
    ),
  },
  {
    title: 'No pierdas tiempo',
    Svg: require('@site/static/img/cm.svg').default,
    description: (
      <>
        Paga desde una misma pagina sin retrazos
      </>
    ),
  },
  {
    title: 'Todo en un solo click',
    Svg: require('@site/static/img/cm.svg').default,
    description: (
      <>
        Extiende tu negocio a otros lugares.
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
