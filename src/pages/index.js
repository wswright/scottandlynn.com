import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  // {
  //   title: 'When?',
  //   imageUrl: 'img/undraw_docusaurus_mountain.svg',
  //   description: (
  //     <>
  //       Our wedding will be on October 1st, 2021.
  //     </>
  //   ),
  // },
    {
        title: 'Details:',
        // imageUrl: 'img/calendar.jpg',
        description: (
            <>
                Our wedding will be at the 1927 Lake Lure Inn & Spa in Lake Lure, NC on October 1st, 2021 from 5:30pm-10:00pm EST.
            </>
        ),
    },
    {
      title: 'Stay:',
      imageUrl: 'img/Front-Picture-of-Lake-Lure-Inn.jpg',
      description: (
        <>
            We have a room block at the 1927 Lake Lure Inn & Spa. To book your room and get our discounted rate, you must call the Inn, at <a href="tel:8286252525">(828)-625-2525</a> , and reference the "Kitchner – Wright Wedding".
            <br /><br />
            You can also book through AirBnB or VRBO. Make sure you know which side of the lake that you're booking on relative to the 1927 Lake Lure Inn & Spa.
        </>
      ),
    },
  {
    title: 'Event Schedule:',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <ul>
            <li>Wedding Ceremony 5:30pm - 6:00pm @ Gardens Courtyard</li>
            <li>Wedding Reception 6:00pm - 10:00pm @ Tanner Dining Room</li>
        </ul>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Lynn and Scott are getting married!`}
      description="Lynn and Scott">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <script type="text/javascript" src="https://lynnandscott.rsvpify.com/embed" />
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              View our pictures!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
