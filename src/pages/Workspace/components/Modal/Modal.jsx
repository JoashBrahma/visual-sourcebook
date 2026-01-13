import { useState, useEffect, useContext } from "react";
import { SourceReferencesContext } from "@/context/SourceReferencesProvider.jsx";
import { UIContext } from "@/context/UIProvider.jsx";
import styles from "./Modal.module.css";

function Modal({ onSaveSourceRef }) {
  const [sourceTitle, setSourceTitle] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [sourceTagStr, setSourceTagStr] = useState("");

  const { sourceReferences } = useContext(SourceReferencesContext);
  const { 
    setActiveModal,
    editingSourceReferenceId,
    setEditingSourceReferenceId
  } = useContext(UIContext);

  // Populate form when editing, reset when adding
  useEffect(() => {
    if (editingSourceReferenceId) {
      const sourceRef = sourceReferences.find(ref => ref.id === editingSourceReferenceId);
      if (sourceRef) {
        setSourceTitle(sourceRef.title);
        setSourceUrl(sourceRef.sourceUrl);
        setThumbnailUrl(sourceRef.thumbnailUrl);
        setSourceTagStr(sourceRef.tags.join(", "));
      }
    } else {
      setSourceTitle("");
      setSourceUrl("");
      setThumbnailUrl("");
      setSourceTagStr("");
    }
  }, [editingSourceReferenceId, sourceReferences]);

  const createSourceReference = () => ({
    title: sourceTitle.trim(),
    sourceUrl: sourceUrl,
    thumbnailUrl: thumbnailUrl,
    tags: sourceTagStr
      .split(",")
      .map(tag => tag.trim().toLowerCase())
      .filter(Boolean)
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSaveSourceRef(createSourceReference());
    setActiveModal(null);
  };

  const handleCloseModal = () => {
    setEditingSourceReferenceId(null);
    setActiveModal(null);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Add source title"
            autoComplete="off"
            spellCheck="false"
            required
            value={sourceTitle}
            onChange={(e) => setSourceTitle(e.target.value)}
          />
          <input
            type="url"
            className={styles.input}
            placeholder="Add source page URL"
            autoComplete="off"
            required
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
          />
          <input
            type="url"
            className={styles.input}
            placeholder="Add thumbnail image URL (optional)"
            autoComplete="off"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Add tags (e.g. article, news, wallpapers)"
            autoComplete="off"
            spellCheck="false"
            required
            value={sourceTagStr}
            onChange={(e) => setSourceTagStr(e.target.value)}
          />
          <div className={styles.buttons}>
            <button type="submit" className={`${styles.button} ${styles.saveButton}`}>
              Save
            </button>
            <button type="button" className={`${styles.button} ${styles.cancelButton}`} onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
