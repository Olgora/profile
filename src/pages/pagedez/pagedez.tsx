
import styles from "./pagedez.module.css";
import BlockDez from "../../components/blockdez/blockdez";
import { Helmet } from "react-helmet-async";

function PageDez() {
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

      <BlockDez></BlockDez>
    </div>
  );
}

export default PageDez;
