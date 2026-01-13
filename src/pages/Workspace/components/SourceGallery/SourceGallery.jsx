import { useContext, useState, useEffect } from "react";
import { SourceReferencesContext } from "@/context/SourceReferencesProvider.jsx";
import SourceMasonry from "../SourceMasonry/SourceMasonry.jsx";
import ShowMessage from "../ShowMessage/ShowMessage.jsx";
import styles from "./SourceGallery.module.css";

function SourceGallery() {
  const { sourceReferences, searchQuery } = useContext(SourceReferencesContext);

  const [displaySourceRefs, setDisplaySourceRefs] = useState([]);
  const [message, setMessage] = useState("");

  const filterSourceRefs = (sourceRefs, searchQuery) => {
    return sourceRefs.filter(ref =>
      ref.tags.some(tag =>
        tag.startsWith(searchQuery)
      )
    );
  };

  useEffect(() => {
    if (searchQuery) {
      setDisplaySourceRefs(filterSourceRefs(sourceReferences, searchQuery));
      setMessage("No sources match your search");
    } else {
      setDisplaySourceRefs(sourceReferences);
      setMessage("No sources added yet");
    }
  }, [sourceReferences, searchQuery]);

  return (
    <div className={styles.sourceGallery}>
      {
        displaySourceRefs.length
          ? <SourceMasonry sourceRefs={displaySourceRefs} />
          : <ShowMessage message={message} />
      }
    </div>
  );
}

export default SourceGallery; 
