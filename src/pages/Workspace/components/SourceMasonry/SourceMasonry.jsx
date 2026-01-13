import SourceCard from "../SourceCard/SourceCard.jsx";
import styles from "./SourceMasonry.module.css";

function SourceMasonry({ sourceRefs }) {
  return (
    <div className={styles.sourceMasonry}>
      {sourceRefs.map(sourceRef => <SourceCard key={sourceRef.id} sourceRef={sourceRef} />)}
    </div>
  );
}

export default SourceMasonry;
