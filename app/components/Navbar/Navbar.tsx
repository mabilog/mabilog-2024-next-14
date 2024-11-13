"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import styles from "./navbar.module.scss";
import { MLogo } from "../svg";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  // Track if client is mounted to prevent SSR mismatches
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag after initial render
    setIsClient(true);

    const scrollFunction = () => {
      if (navbarRef.current && logoRef.current) {
        if (window.scrollY > 80) {
          navbarRef.current.style.padding = "0";
          logoRef.current.style.transform = "scale(0.7)";
        } else {
          navbarRef.current.style.padding = "1rem";
          logoRef.current.style.transform = "scale(1)";
        }
      }
    };

    // Add scroll listener only on client side
    window.addEventListener("scroll", scrollFunction);

    // Call the function once to set initial client-side styles
    scrollFunction();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
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
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className={styles.navbar} ref={navbarRef}>
      <div className={styles.navbar__container}>
        <Link href="/" className={styles.navbar__logoLink}>
          <MLogo className={styles.navbar__logo} ref={logoRef} />
        </Link>

        <nav
          className={`${styles.navbar__linksWrapper} ${styles.navbar__desktopMenu}`}
        >
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
