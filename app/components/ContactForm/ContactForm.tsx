"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./contactForm.module.scss";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xayrrybg");

  if (state.succeeded) {
    return <p>Thanks for writing!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Message" rows={5} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className={styles.form__btnWrapper}>
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.form__btnSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
