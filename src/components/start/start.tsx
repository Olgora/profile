import Blockone from "../blockone/blockone";
import styles from "./start.module.css";
 

function Start() {
  const images = [
    "https://yepp.fun/images/img0701_.jpg",
    "https://yepp.fun/images/img0702_.jpg",
    "https://yepp.fun/images/img0703_.jpg",
  ];
  return (
    <div className={styles.main}>
      <Blockone></Blockone>
       
    </div>
  );
}

export default Start;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
