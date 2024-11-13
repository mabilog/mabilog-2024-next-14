import React from "react";
import styles from "./getInTouch.module.scss";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <p>Fancy building some cool stuff together?</p>
      <Link href="/contact" className={styles.getInTouch__link}>
        Get in touch
      </Link>
    </div>
  );
};

export default GetInTouch;
