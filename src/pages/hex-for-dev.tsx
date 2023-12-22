import { FunctionComponent } from "react";
import styles from "./hex-for-dev.module.css";

const HexForDev: FunctionComponent = () => {
  return (
    <div className={styles.hexForDev}>
      <div className={styles.hexForDevChild} />
      <div className={styles.hexForDevItem} />
      <div className={styles.hexForDevInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.hexForDevChild1} />
      <div className={styles.hexForDevChild2} />
    </div>
  );
};

export default HexForDev;
