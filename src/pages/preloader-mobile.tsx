import { FunctionComponent } from "react";
import styles from "./preloader-mobile.module.css";

const PreloaderMobile: FunctionComponent = () => {
  return (
    <div className={styles.preloaderMobile}>
      <img className={styles.loadingIcon} alt="" src="/loading@2x.png" />
      <img className={styles.loadIcon} alt="" src="/load@2x.png" />
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
    </div>
  );
};

export default PreloaderMobile;
