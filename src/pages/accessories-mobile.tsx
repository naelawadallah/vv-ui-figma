import { FunctionComponent } from "react";
import styles from "./accessories-mobile.module.css";

const AccessoriesMobile: FunctionComponent = () => {
  return (
    <div className={styles.accessoriesMobile}>
      <img
        className={styles.accessoriesMobileChild}
        alt=""
        src="/polygon-1@2x.png"
      />
      <img
        className={styles.accessoriesMobileItem}
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
      <div className={styles.accessories}>Accessories</div>
      <div className={styles.summary}>Summary</div>
      <img
        className={styles.accessoriesMobileInner}
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
      <div className={styles.rearRack}>Rear Rack</div>
      <div className={styles.bagView}>Bag view</div>
      <div className={styles.div1}>+ €389</div>
      <img className={styles.groupIcon} alt="" src="/group-12@2x.png" />
      <img
        className={styles.accessoriesMobileChild1}
        alt=""
        src="/group-13@2x.png"
      />
      <img
        className={styles.accessoriesMobileChild2}
        alt=""
        src="/group-14@2x.png"
      />
      <img
        className={styles.accessoriesMobileChild3}
        alt=""
        src="/group-15@2x.png"
      />
      <div className={styles.lineDiv} />
      <div className={styles.ellipseDiv} />
      <div className={styles.accessoriesMobileChild4} />
      <div className={styles.frontRack}>Front Rack</div>
      <div className={styles.flyscreen}>Flyscreen</div>
      <div className={styles.div2}>+ €339</div>
      <div className={styles.div3}>+ €449</div>
      <div className={styles.accessoriesMobileChild5} />
    </div>
  );
};

export default AccessoriesMobile;
