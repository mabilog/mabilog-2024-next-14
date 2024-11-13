import React from "react";
import styles from "./aboutHero.module.scss";
import Image from "next/image";

import ProfilePic from "@/public/IMG_7072.png";

const AboutHero = () => {
  return (
    <div className={styles.aboutHero}>
      <div className={styles.aboutHero__textContainer}>
        <h1>Hello,</h1>
        <p>
          I&apos;m Gabriel Angelo Mabilog, though most people call me Angelo.
          I&apos;m 28 and originally from the Philippines, but Canada has been
          home since I was 8. I can handle the winters, but don&apos;t expect me
          to say I actually enjoy them.
        </p>

        <p>
          My background is in Business Technology Management from Concordia, a
          mix of business insight and technical know-how that made sense for
          someone who loves diving into tech, understanding how things work, and
          turning ideas into tangible solutions. But while I&apos;m grateful for
          the business foundation, my true passion lies in the creative,
          hands-on side of web development.
        </p>

        <p>
          As a front-end web developer, I believe that design isn&apos;t just
          about looking good—it&apos;s about crafting seamless user experiences
          that work beautifully. I take pride in ensuring every detail is just
          right. And if something doesn&apos;t meet my standard? I&apos;ll be
          the first to overhaul it until it does.
        </p>

        <p>
          Beyond my work, I&apos;m a genuine tech enthusiast. Mobile phones,
          laptops, desktops, cars—if it&apos;s cutting-edge and consumer-driven,
          I&apos;m probably into it. I also love gaming, especially Overwatch,
          which satisfies both my competitive spirit and my fascination with
          complex, well-designed systems.
        </p>
        <p>
          In an industry that never stops changing, I&apos;m constantly learning
          and pushing to improve. Whether it&apos;s exploring the latest
          front-end framework or figuring out what makes users tick, I&apos;m
          committed to growth and innovation. Enough about me, though—let&apos;s
          talk about what I can bring to your next project!
        </p>
      </div>
      <div className={styles.aboutHero__imageContainer}>
        <Image src={ProfilePic} alt="Angelo's Profile Picture" />
      </div>
    </div>
  );
};

export default AboutHero;
