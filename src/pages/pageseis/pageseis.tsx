
import styles from "./pageseis.module.css";
import BlockSeis from "../../components/blockseis/blockseis";
import { Helmet } from "react-helmet-async";

function PageSeis() {
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


      <BlockSeis></BlockSeis>
    </div>
  );
}

export default PageSeis;
