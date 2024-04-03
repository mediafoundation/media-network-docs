import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>What is Media Network</>,
    imageUrl: "/",
    description: <>Learn about the core concepts of Media Network.</>
  },
  {
    title: <>For Clients</>,
    imageUrl: "/for-clients/overview",
    description: <>Learn how to acquire P2P Cloud Services from Media Network.</>
  },
  {
    title: <>For Providers</>,
    imageUrl: "/for-providers/overview",
    description: <>Technical Reference for Web Services Providers.</>
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4 aos-init aos-animate", styles.feature)}>
      {imgUrl && (
        <Link className="navbar_link" to={imgUrl}>
          <div className="group gradient-box margin-top--lg">
            <div class="gradient-box-child"></div>
            <div class="gradient-box-content">
              <h3>{title}</h3>
              <p className="lead mb-0">{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

function Features() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
      <>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="padding-bottom--lg">
              <div className="row cards__container">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </>
  );
}

export default Features;
