
import styles from "./pagesete.module.css";
import BlockSete from "../../components/blocksete/blocksete";
import { Helmet } from "react-helmet-async";

function PageSete() {
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


      <BlockSete></BlockSete>
    </div>
  );
}

export default PageSete;
