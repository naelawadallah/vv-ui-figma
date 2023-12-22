import { FunctionComponent } from "react";
import styles from "./preloader-desktop.module.css";

const PreloaderDesktop: FunctionComponent = () => {
  return (
    <div className={styles.preloaderDesktop}>
      <div className={styles.loading}>loading...</div>
      <img className={styles.loadIcon} alt="" src="/load@2x.png" />
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
    </div>
  );
};

export default PreloaderDesktop;
