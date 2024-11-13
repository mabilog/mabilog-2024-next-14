"use client";
import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";

import Github from "../components/svg/Github.svg";
import Instagram from "../components/svg/Instagram.svg";
import Linkedin from "../components/svg/Linkedin.svg";

import styles from "./contact.module.scss";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__content}>
        <div className={styles.contact__textContainer}>
          <h1>Say 👋 Hi!</h1>
          <p>I would love to talk to you about new opportunities!</p>
          <p>Please let me know what we can accomplish together!</p>
        </div>

        <div className={styles.contact__socials}>
          <h2>Follow me on my socials!</h2>
          <div className={styles.contact__socialsLink}>
            <Link href="https://www.linkedin.com/in/mabilog">
              <Linkedin />
            </Link>
            <Link href="https://github.com/mabilog">
              <Github />
            </Link>
            <Link href="https://www.instagram.com/angelo.m/">
              <Instagram />
            </Link>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
