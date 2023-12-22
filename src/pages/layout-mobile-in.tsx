import { FunctionComponent } from "react";
import styles from "./layout-mobile-in.module.css";

const LayoutMobileIn: FunctionComponent = () => {
  return (
    <div className={styles.layoutMobileIn}>
      <img
        className={styles.layoutMobileInChild}
        alt=""
        src="/polygon-1@2x.png"
      />
      <img
        className={styles.layoutMobileInItem}
        alt=""
        src="/rectangle-5@2x.png"
      />
      <b className={styles.primavera}>Primavera</b>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <div className={styles.msrp}>MSRP</div>
      <div className={styles.div}>€4,999</div>
      <img
        className={styles.nvf2a1lu01011Icon}
        alt=""
        src="/nvf2a1lu0101-1@2x.png"
      />
      <div className={styles.saddle}>Saddle</div>
      <div className={styles.colour}>Colour</div>
      <div className={styles.layoutMobileInInner} />
      <div className={styles.accessories}>Accessories</div>
      <div className={styles.summary}>Summary</div>
      <div className={styles.ellipseDiv} />
      <div className={styles.layoutMobileInChild1} />
      <div className={styles.layoutMobileInChild2} />
      <div className={styles.layoutMobileInChild3} />
      <div className={styles.peach}>Peach</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-4@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.layoutMobileInChild4} />
    </div>
  );
};

export default LayoutMobileIn;
