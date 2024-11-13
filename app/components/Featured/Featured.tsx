import styles from "./featured.module.scss";

import companies from "./companies";
import Link from "next/link";
const Featured = () => {
  return (
    <div className={styles.featured__container}>
      <div className={styles.featured__box}>
        <p>Work Featured on: </p>
        <div className={styles.featured__companies}>
          {companies.map((company) => {
            return (
              <Link href={company.url} key={company.name} target="_blank">
                <company.svg />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.featured__about}>
        <div className={styles.featured__titleContainer}>
          <h2>I design and create experiences with people in mind</h2>
          <p>
            Some of the companies I have worked with have been fast growing
            startup, working along side with brillant developers and designers
            that take pride of their craft.
          </p>
        </div>
        <div className={styles.featured__text}>
          <p>
            As a developer, I had the pleasure to build numerous projects over
            the years. I work with clear timeframe towards specific deliverables
            and outcomes.
          </p>
          <p>
            I approach all my projects with deep understanding of my
            client&apos;s vision, needs, and wants for their website or app.
          </p>
          <p>
            I help companies to build and launch their products, improve their
            UX and product performance or completely re-brand their identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
