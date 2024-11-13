import React from "react";
import AboutHero from "../components/AboutHero/AboutHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Works from "../components/Works/Works";

import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <AboutHero />
      <Works />
      <GetInTouch />
    </div>
  );
};

export default About;
