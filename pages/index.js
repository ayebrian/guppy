import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    // use layout.js to wrap the whole page
   <div className={styles.home_}>
    <div className={styles.home_post}>
    <input type="text" placeholder="Enter yoru cringe" className={styles.home_input}/>
    </div>

   </div>
  );
}
