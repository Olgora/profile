
import styles from "./pagedois.module.css";
import BlockDois from "../../components/blockdois/blockdois";
import { Helmet } from "react-helmet-async";

function PageDois() {
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


      <BlockDois></BlockDois>
    </div>
  );
}

export default PageDois;
