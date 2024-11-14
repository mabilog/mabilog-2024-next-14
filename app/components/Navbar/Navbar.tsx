"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "./navbar.module.scss";
import { MLogo } from "../svg";

const Navbar: React.FC = () => {
  // Track if client is mounted to prevent SSR mismatches
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag after initial render
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render only the default navbar without JS adjustments on the server
    return (
      <header className={styles.navbar}>
        <div className={styles.navbar__container}>
          <Link href="/" className={styles.navbar__logoLink}>
            <MLogo className={styles.navbar__logo} />
          </Link>

          <nav className={styles.navbar__linksWrapper}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Link href="/" className={styles.navbar__logoLink}>
          <MLogo className={styles.navbar__logo} />
        </Link>

        <nav className={styles.navbar__linksWrapper}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
