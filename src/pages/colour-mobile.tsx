import { FunctionComponent } from "react";
import styles from "./colour-mobile.module.css";

const ColourMobile: FunctionComponent = () => {
  return (
    <div className={styles.colourMobile}>
      <img
        className={styles.colourMobileChild}
        alt=""
        src="/polygon-1@2x.png"
      />
      <img
        className={styles.colourMobileItem}
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
      <div className={styles.colourMobileInner} />
      <div className={styles.accessories}>Accessories</div>
      <div className={styles.summary}>Summary</div>
      <div className={styles.ellipseDiv} />
      <div className={styles.colourMobileChild1} />
      <div className={styles.colourMobileChild2} />
      <div className={styles.colourMobileChild3} />
      <div className={styles.peach}>Peach</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-4@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.colourMobileChild4} />
      <div className={styles.startEngine}>
        <p className={styles.start}>Start</p>
        <p className={styles.start}>Engine</p>
      </div>
      <div className={styles.lightsSwitch}>
        <p className={styles.start}>Lights</p>
        <p className={styles.start}>Switch</p>
      </div>
      <div className={styles.openBoot}>
        <p className={styles.start}>Open</p>
        <p className={styles.start}>Boot</p>
      </div>
      <div className={styles.openStand}>
        <p className={styles.start}>Open</p>
        <p className={styles.start}>Stand</p>
      </div>
      <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
    </div>
  );
};

export default ColourMobile;
