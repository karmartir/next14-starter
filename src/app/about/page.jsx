import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  // console.log("Let's check where it works");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About me</h2>
        <h1 className={styles.title}>
          I create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Welcome to my portfolio. In a world where technology constantly
          evolves, I thrive on harnessing its power to create meaningful
          experiences. With a blend of technical expertise and artistic vision,
          I bring ideas to life through intuitive user interfaces and seamless
          interactions. As a Software Developer, I have dedicated countless
          hours to honing my craft. From writing elegant code to building robust
          applications, I embrace the challenges that come with turning concepts
          into reality. With a keen eye for detail and a commitment to
          excellence, I strive to deliver solutions that not only meet the
          functional requirements but also exceed expectations. Coding is only a
          part of my journey. As a UI/UX designer, I understand the pivotal role
          aesthetics play in enhancing user experiences. By combining intuitive
          design principles with a deep understanding of user behavior, I aim to
          create visually captivating interfaces that engage and delight users
          at every touchpoint. Beyond my technical skills, I pride myself on
          being a collaborative team player. I believe that great ideas flourish
          when minds come together, and I value the power of effective
          communication and cooperation in achieving remarkable outcomes. This
          portfolio serves as a window into my world of innovation and
          creativity. Explore my projects and witness how my passion for
          software development and design harmoniously blend to craft seamless
          digital solutions. Thank you for taking the time to visit my
          portfolio. I look forward to the opportunity of working together to
          bring your ideas to life and make a positive impact in the digital
          realm. Warm regards, Garen Martirosyan
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about picture" fill
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 23vw"
           className={styles.img}
           />
      </div>
    </div>
  );
};
export default AboutPage;
