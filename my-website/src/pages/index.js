import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageHeader2() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner2)}>
      <div className="container">
        <h1>
          <font color="black">Getting Started</font>
        </h1>
        <p className="hero__subtitle"></p>
        <div className={styles.buttons2}>
          <Link className="button button--secondary button--lg" to="/docs/Introduction/1000">
            <img src="/img/book.svg" height="80" width="80" />
            <h1 />
            <font color="black">Documentation</font>
            <h1 />
            <font color="white">____________________</font>
            <h1 />
          </Link>
          <font color="white">.</font>
          <Link className="button button--secondary button--lg" to="/docs/API/6000">
            <img src="/img/cloud.svg" height="80" width="80" />
            <h1 />
            <font color="black">API</font>
            <h1 />
            <font color="white">____________________</font>
            <h1 />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <h1/>
      <HomepageHeader2 />
    </Layout>
  );
}