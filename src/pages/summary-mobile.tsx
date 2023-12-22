import { FunctionComponent } from "react";
import styles from "./summary-mobile.module.css";

const SummaryMobile: FunctionComponent = () => {
  return (
    <div className={styles.summaryMobile}>
      <img
        className={styles.summaryMobileChild}
        alt=""
        src="/polygon-1@2x.png"
      />
      <img
        className={styles.summaryMobileItem}
        alt=""
        src="/rectangle-5@2x.png"
      />
      <b className={styles.primavera}>Primavera</b>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <img
        className={styles.nvf2a1lu01011Icon}
        alt=""
        src="/nvf2a1lu0101-1@2x.png"
      />
      <div className={styles.saddle}>Saddle</div>
      <div className={styles.colour}>Colour</div>
      <div className={styles.accessories}>Accessories</div>
      <img
        className={styles.summaryMobileInner}
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className={styles.rectangleDiv} />
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
      <img className={styles.layer1Icon} alt="" src="/layer-1@2x.png" />
      <div className={styles.div}>€4,999</div>
      <div className={styles.total}>Total</div>
      <div className={styles.colour1}>Colour</div>
      <div className={styles.saddle1}>Saddle</div>
      <div className={styles.peachy}>Peachy</div>
      <div className={styles.accessoriesParent}>
        <div className={styles.accessories1}>Accessories</div>
        <div className={styles.frontRack}>Front Rack</div>
        <div className={styles.rearRack}>Rear Rack</div>
        <div className={styles.flyscreen}>Flyscreen</div>
      </div>
      <div className={styles.luxuryBrown}>Luxury Brown</div>
      <div className={styles.summary}>Summary</div>
      <div className={styles.summaryMobileChild1} />
    </div>
  );
};

export default SummaryMobile;
