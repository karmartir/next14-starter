/* eslint-disable react/no-unescaped-entities */
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Garen Martirosyan</h1>
        <p>
          A passionate Software Developer and creative UI/UX designer. I thrive
          at the intersection of code and design, crafting seamless digital
          experiences that captivate users.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='brands picture' fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/hero.gif' alt='hero image' fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
