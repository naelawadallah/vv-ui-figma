import { FunctionComponent } from "react";
import styles from "./summary-tablet.module.css";

const SummaryTablet: FunctionComponent = () => {
  return (
    <div className={styles.summaryTablet}>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <b className={styles.primavera}>Primavera</b>
      <div className={styles.thisMiniRevolutionOnContainer}>
        <p className={styles.thisMiniRevolutionOn}>
          This mini-revolution on two wheels with a stunning 125 i-get engine
          promises total joy and freedom as you zip through city streets.
        </p>
      </div>
      <img
        className={styles.summaryTabletChild}
        alt=""
        src="/polygon-1@2x.png"
      />
      <img
        className={styles.summaryTabletItem}
        alt=""
        src="/rectangle-5@2x.png"
      />
      <img
        className={styles.scooterWhiteIcon}
        alt=""
        src="/scooterwhite@2x.png"
      />
      <img
        className={styles.summaryTabletInner}
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
      <div className={styles.saddle}>Saddle</div>
      <div className={styles.colour}>Colour</div>
      <div className={styles.accessories}>Accessories</div>
      <div className={styles.summary}>Summary</div>
      <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon2} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon3} alt="" src="/vector@2x.png" />
      <img className={styles.vectorIcon4} alt="" src="/vector@2x.png" />
      <img className={styles.layer1Icon} alt="" src="/layer-1@2x.png" />
      <div className={styles.colour1}>Colour</div>
      <div className={styles.accessories1}>Accessories</div>
      <div className={styles.saddle1}>Saddle</div>
      <div className={styles.peachy}>Peachy</div>
      <div className={styles.frontRack}>Front Rack</div>
      <div className={styles.rearRack}>Rear Rack</div>
      <div className={styles.flyscreen}>Flyscreen</div>
      <div className={styles.luxuryBrown}>Luxury Brown</div>
      <div className={styles.parent}>
        <div className={styles.div}>€4,999</div>
        <div className={styles.total}>Total</div>
      </div>
      <div className={styles.summaryTabletChild1} />
    </div>
  );
};

export default SummaryTablet;
