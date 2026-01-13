import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { House, ImagePlus } from "lucide-react";
import { SourceReferencesContext } from "@/context/SourceReferencesProvider.jsx";
import { UIContext } from "@/context/UIProvider.jsx";
import styles from "./TopBar.module.css";

export default function TopBar() {
  const { setSearchQuery } = useContext(SourceReferencesContext);
  const { setActiveModal } = useContext(UIContext);
  
  const navigate = useNavigate();
  const [searchTag, setSearchTag] = useState("");

  return (
    <div className={styles.topBar}>
      <button className={styles.button} onClick={() => navigate("/")}>
        <House className={styles.buttonIcon} />
      </button>

      <input
        type="search"
        className={styles.searchInput}
        placeholder="Search tag"
        autoComplete="off"
        spellCheck="false"
        value={searchTag}
        onChange={(e) => {
          const value = e.target.value.toLowerCase();
          setSearchTag(value);
          setSearchQuery(value.trim());
        }}
      />

      <button className={`${styles.button} ${styles.addButton}`} onClick={() => setActiveModal("add")}>
        <ImagePlus className={styles.buttonIcon} />
      </button>
    </div>
  );
}
