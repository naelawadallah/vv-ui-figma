import { FunctionComponent } from "react";
import styles from "./all-colours.module.css";

const AllColours: FunctionComponent = () => {
  return (
    <div className={styles.allColours}>
      <img
        className={styles.allColoursChild}
        alt=""
        src="/rectangle-5@2x.png"
      />
      <b className={styles.primavera}>Primavera</b>
      <div className={styles.allColoursItem} />
      <div className={styles.peach}>Peach</div>
      <div className={styles.matcha}>Matcha</div>
      <div className={styles.navy}>Navy</div>
      <div className={styles.stone}>Stone</div>
      <div className={styles.seashell}>Seashell</div>
      <div className={styles.charcoal}>Charcoal</div>
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <img
        className={styles.allColoursInner}
        alt=""
        src="/rectangle-4@2x.png"
      />
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
      <div className={styles.ellipseDiv} />
      <div className={styles.allColoursChild1} />
      <div className={styles.allColoursChild2} />
      <div className={styles.allColoursChild3} />
      <div className={styles.allColoursChild4} />
      <div className={styles.allColoursChild5} />
    </div>
  );
};

export default AllColours;
