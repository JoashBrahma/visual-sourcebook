import { useContext, useState } from "react";
import { SquarePen, Trash } from "lucide-react";
import { SourceReferencesContext } from "@/context/SourceReferencesProvider.jsx";
import { UIContext } from "@/context/UIProvider.jsx";
import styles from "./SourceCard.module.css";

function SourceCard({ sourceRef }) {
  const { setSourceReferences } = useContext(SourceReferencesContext);
  const { setActiveModal, setEditingSourceReferenceId } = useContext(UIContext);

  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);

  const { id, title, sourceUrl, thumbnailUrl } = sourceRef;

  const handleOpenEditModal = () => {
    setEditingSourceReferenceId(id);
    setActiveModal("edit");
  };

  const handleRemoveSource = () => {
    if (!confirm("Are you sure you want to delete this source?")) return;
    setSourceReferences(refs =>
      refs.filter(ref => ref.id !== id)
    );
  };

  return (
    <div className={styles.sourceCard}>
      <div className={styles.thumbnailWrapper}>
        <a
          className={styles.sourceUrl}
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          title="Open source page in a new tab"
        >
          {thumbnailUrl ? (
            <>
              <img
                className={styles.thumbnail}
                src={thumbnailUrl}
                loading="lazy"
                alt={title}
                onLoad={() => setIsThumbnailLoaded(true)}
                onError={() => setIsThumbnailLoaded(false)}
              />

              {isThumbnailLoaded ? (
                <div className={styles.sourceTitle}>{title}</div>
              ) : (
                <div className={styles.thumbnailFallback}>{title}</div>
              )}
            </>
          ) : (
            <div className={styles.thumbnailFallback}>{title}</div>
          )}
        </a>
      </div>

      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.editButton}`} onClick={handleOpenEditModal}>
          <SquarePen className={styles.icon} />
        </button>
        <button className={`${styles.button} ${styles.deleteButton}`} onClick={handleRemoveSource}>
          <Trash className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

export default SourceCard;
