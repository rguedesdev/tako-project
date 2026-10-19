// Style Sheet CSS
import styles from "./home.module.css";
import { SimulatedAd } from "@/components/SimulatedAd/page";

function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.homeContainer}>
        <SimulatedAd />
      </main>
    </div>
  );
}

export default HomePage;
