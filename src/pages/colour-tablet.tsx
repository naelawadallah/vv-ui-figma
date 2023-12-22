import { FunctionComponent } from "react";
import styles from "./colour-tablet.module.css";

const ColourTablet: FunctionComponent = () => {
  return (
    <div className={styles.colourTablet}>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <b className={styles.primavera}>Primavera</b>
      <div className={styles.thisMiniRevolutionOnContainer}>
        <p className={styles.thisMiniRevolutionOn}>
          This mini-revolution on two wheels with a stunning 125 i-get engine
          promises total joy and freedom as you zip through city streets.
        </p>
      </div>
      <img
        className={styles.colourTabletChild}
        alt=""
        src="/polygon-1@2x.png"
      />
      <img
        className={styles.colourTabletItem}
        alt=""
        src="/rectangle-5@2x.png"
      />
      <img
        className={styles.nvf2a1lu01011Icon}
        alt=""
        src="/scooterwhite@2x.png"
      />
      <img
        className={styles.colourTabletInner}
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className={styles.startEngine}>
        <p className={styles.thisMiniRevolutionOn}>Start</p>
        <p className={styles.thisMiniRevolutionOn}>Engine</p>
      </div>
      <div className={styles.lightsSwitch}>
        <p className={styles.thisMiniRevolutionOn}>Lights</p>
        <p className={styles.thisMiniRevolutionOn}>Switch</p>
      </div>
      <div className={styles.openBoot}>
        <p className={styles.thisMiniRevolutionOn}>Open</p>
        <p className={styles.thisMiniRevolutionOn}>Boot</p>
      </div>
      <div className={styles.openStand}>
        <p className={styles.thisMiniRevolutionOn}>Open</p>
        <p className={styles.thisMiniRevolutionOn}>Stand</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.ellipseDiv} />
      <div className={styles.peach}>Peach</div>
      <div className={styles.saddle}>Saddle</div>
      <div className={styles.colour}>Colour</div>
      <div className={styles.accessories}>Accessories</div>
      <div className={styles.summary}>Summary</div>
      <div className={styles.colourTabletChild1} />
      <div className={styles.colourTabletChild2} />
      <div className={styles.colourTabletChild3} />
      <div className={styles.colourTabletChild4} />
      <div className={styles.colourTabletChild5} />
      <div className={styles.colourTabletChild6} />
      <div className={styles.colourTabletChild7} />
      <div className={styles.msrp}>MSRP</div>
      <div className={styles.div}>€4,999</div>
      <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
    </div>
  );
};

export default ColourTablet;
