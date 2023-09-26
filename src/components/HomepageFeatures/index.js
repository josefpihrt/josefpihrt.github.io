import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Roslynator',
    imageUrl: 'https://raw.githubusercontent.com/dotnet/roslynator/main/images/roslynator-logo-large.png',
    relativeUrl: 'roslynator',
    description: (
      <>
        A set of code analysis tools for C#, powered by Roslyn
      </>
    ),
  },
  {
    title: 'DotMarkdown',
    imageUrl: 'https://raw.githubusercontent.com/josefpihrt/dotmarkdown/main/images/dotmarkdown-logo-large.png',
    relativeUrl: 'dotmarkdown',
    description: (
      <>
        Markdown framework for .NET
      </>
    ),
  },
  {
    title: 'Snippetica',
    imageUrl: 'https://raw.githubusercontent.com/josefpihrt/snippetica/main/images/snippetica-logo-large.png',
    relativeUrl: 'snippetica',
    description: (
      <>
        A collection of snippets for C++, C#, HTML, VB and other languages
      </>
    ),
  },
];

function Feature({title, imageUrl, relativeUrl, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={`docs/${relativeUrl}`}>
          <img src={imageUrl} className={styles.featureImg} />
          </Link> 
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
