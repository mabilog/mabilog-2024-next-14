import React from "react";
import styles from "./works.module.scss";

const Works = () => {
  return (
    <div className={styles.works}>
      <div className={styles.works__container}>
        <h2>
          If you haven&apos;t checked my homepage, here&apos;s a quick facts
          summary:
        </h2>
        <p>
          🗓 I have experience working across the full stack, with a strong focus
          on front-end development.
        </p>
        <p>
          🌱 I specialize in building dynamic, high-performance websites and
          custom themes, primarily using <strong>Shopify Liquid</strong>,{" "}
          <strong>Webflow</strong>, <strong>React</strong>, and{" "}
          <strong>Next.js</strong>.
        </p>
        <p>
          💼 I collaborate closely with UX/UI teams and cross-functional
          partners, ensuring seamless integration and optimized user
          experiences.
        </p>

        <p>
          🏆 My work demonstrates a commitment to quality and adherence to
          coding best practices, with a proven track record of delivering
          visually appealing and user-friendly web solutions.
        </p>

        <p>
          ☺️ I stay up-to-date with industry trends and emerging technologies to
          continuously enhance my skills and deliver innovative solutions.
        </p>

        <p>
          📈 I believe in creating impactful web experiences, blending technical
          expertise with design to elevate both user engagement and business
          outcomes.
        </p>
      </div>
    </div>
  );
};

export default Works;
