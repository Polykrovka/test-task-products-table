import styles from "./page.module.css";
import ProductsTable from "./components/Table/Table";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductsTable/>
      </main>
    </div>
  );
}
