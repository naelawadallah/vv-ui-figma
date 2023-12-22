import { FunctionComponent } from "react";
import styles from "./matcha-desktop.module.css";

const MatchaDesktop: FunctionComponent = () => {
  return (
    <div className={styles.matchaDesktop}>
      <img
        className={styles.matchaDesktopChild}
        alt=""
        src="/polygon-1@2x.png"
      />
      <img
        className={styles.matchaDesktopItem}
        alt=""
        src="/rectangle-5@2x.png"
      />
      <b className={styles.primavera}>Primavera</b>
      <div className={styles.matchaDesktopInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.matchaDesktopChild1} />
      <div className={styles.matchaDesktopChild2} />
      <div className={styles.matchaDesktopChild3} />
      <div className={styles.matchaDesktopChild4} />
      <div className={styles.matchaDesktopChild5} />
      <div className={styles.matcha}>Matcha</div>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-4@2x.png" />
      <div className={styles.thisMiniRevolutionOnContainer}>
        <p className={styles.thisMiniRevolutionOn}>
          This mini-revolution on two wheels with a stunning 125 i-get engine
          promises total joy and freedom as you zip through city streets.
        </p>
      </div>
      <div className={styles.msrp}>MSRP</div>
      <div className={styles.div}>€4,999</div>
      <div className={styles.saddle}>Saddle</div>
      <div className={styles.colour}>Colour</div>
      <div className={styles.accessories}>Accessories</div>
      <div className={styles.summary}>Summary</div>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.nvf2vklu01011Icon}
        alt=""
        src="/nvf2vklu0101-1@2x.png"
      />
      <div className={styles.startEngine}>Start Engine</div>
      <div className={styles.lightsSwitch}>Lights Switch</div>
      <div className={styles.openBoot}>Open Boot</div>
      <div className={styles.openStand}>Open Stand</div>
      <div className={styles.matchaDesktopChild6} />
      <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
    </div>
  );
};

export default MatchaDesktop;
