import Head from "next/head";
import styles from "../styles/Home.module.css";
import { TabsPanel, ItemCard } from "components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LoaF</title>
        <meta name="description" content="Lost and Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TabsPanel />
        <ItemCard imageUrl = "img/img1.jpg" title="Mobile lost" date="29/02/2022" location="Reading, UK" />
      </main>
    </div>
  );
}
