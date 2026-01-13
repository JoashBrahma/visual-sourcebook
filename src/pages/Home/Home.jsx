import { useNavigate } from "react-router-dom";
import { RiGithubFill } from "@remixicon/react";
import styles from "./Home.module.css";
import HeroImage from "/hero.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={`page ${styles.home}`}>
      <header className={styles.header}>
        <h1 className={styles.logoText}>Visual SourceBook</h1>
        <nav className={styles.nav}>
          <a href="#guide">How to Use</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.left}>
          <h2>Visual SourceBook</h2>
          <p>
            Save source page links, add tags — with optional thumbnails for quick reference.
          </p>
          <button className={styles.getStartedButton} onClick={() => navigate("/workspace")}>Get Started</button>
        </div>
        <div className={styles.right}>
          <div className={styles.overlay}></div>
          <img src={HeroImage} alt="Hero image" />
        </div>
      </section>

      <section className={styles.guide} id="guide">
        <h2>How to Use</h2>
        <ol>
          <li>Click <strong>Get Started</strong> to open your workspace.</li>
          <li>Use the <strong>Add</strong> button to save a new source.</li>
          <li> Paste the source URL, add a title, tags, and an optional thumbnail image URL.</li>
          <li>Find saved sources quickly using search tag.</li>
        </ol>
      </section>

      <footer className={styles.footer}>
        <a href="#">
          <RiGithubFill className={styles.footerIcon} />
        </a>
      </footer>
    </div>
  );
}

export default Home;
