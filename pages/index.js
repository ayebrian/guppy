import styles from "../styles/Home.module.css";
var loctime = Date.now();
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}
