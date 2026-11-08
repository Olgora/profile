
import styles from "./pagenove.module.css";
import BlockNove from "../../components/blocknove/blocknove";
import { Helmet } from "react-helmet-async";

function PageNove() {
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


      <BlockNove></BlockNove>
    </div>
  );
}

export default PageNove;
