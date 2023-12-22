import { FunctionComponent } from "react";
import styles from "./charcoal-desktop.module.css";

const CharcoalDesktop: FunctionComponent = () => {
  return (
    <div className={styles.charcoalDesktop}>
      <img
        className={styles.charcoalDesktopChild}
        alt=""
        src="/polygon-1@2x.png"
      />
      <div className={styles.charcoalDesktopItem}></div>
      <b className={styles.primavera}>Primavera</b>
      <div className={styles.charcoalDesktopInner} />
      <div className={styles.charcoal}>Charcoal</div>
      <img className={styles.vectorIcon} alt="" src="/logo.svg" />
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
        className={styles.nvf2xnqu01011Icon}
        alt=""
        src="/nvf2xnqu0101-1@2x.png"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.charcoalDesktopChild1} />
      <div className={styles.charcoalDesktopChild2} />
      <div className={styles.charcoalDesktopChild3} />
      <div className={styles.charcoalDesktopChild4} />
      <div className={styles.charcoalDesktopChild5} />
      <div className={styles.startEngine}>Start Engine</div>
      <div className={styles.lightsSwitch}>Lights Switch</div>
      <div className={styles.openBoot}>Open Boot</div>
      <div className={styles.openStand}>Open Stand</div>
      <div className={styles.charcoalDesktopChild6} />
      <img className={styles.vectorIcon1} alt="" src="/vector1@2x.png" />
      <img className={styles.vectorIcon2} alt="" src="/vector2@2x.png" />
      <img className={styles.vectorIcon3} alt="" src="/vector3@2x.png" />
      <img className={styles.vectorIcon4} alt="" src="/vector4@2x.png" />
    </div>
  );
};

export default CharcoalDesktop;
