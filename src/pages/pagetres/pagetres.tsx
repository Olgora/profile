
import styles from "./pagetres.module.css";
import BlockTres from "../../components/blocktres/blocktres";
import { Helmet } from "react-helmet-async";

function PageTres() {
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


      <BlockTres></BlockTres>
    </div>
  );
}

export default PageTres;
