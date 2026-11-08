
import styles from "./pagecinco.module.css";
import BlockCinco from "../../components/blockcinco/blockcinco";
import { Helmet } from "react-helmet-async";

function PageCinco() {
  return (
    <div className={styles.main}>
      <Helmet>
        <title>Game Programming Portfolio</title>
        <meta
          name="description"
          content="A personal game design portfolio page"
        />
        <link rel="canonical" href="https://lastyatagarasu.website/" />
      </Helmet>

      <BlockCinco></BlockCinco>
    </div>
  );
}

export default PageCinco;
