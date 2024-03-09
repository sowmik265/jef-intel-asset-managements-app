import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>JRF INTELLEGENCE ASSETS MANAGEMENT.</h1>
        <p className={styles.desc}>
        Jrf Intellegence assets management app efficiently tracks, organizes, and optimizes utilization of resources, enhancing productivity and streamlining asset-related operations effectively.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt=""
            fill
            className={styles.brandImg}
          ></Image>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}></Image>
      </div>
    </div>
  );
};

export default Home;
