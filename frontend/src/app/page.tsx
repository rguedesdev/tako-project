// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import styles from "./home.module.css";

function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.homeContainer}>
        <h1>Tako Project</h1>
      </main>
    </div>
  );
}

export default HomePage;
