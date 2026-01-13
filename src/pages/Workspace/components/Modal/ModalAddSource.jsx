import { useContext } from "react";
import { SourceReferencesContext } from "@/context/SourceReferencesProvider.jsx";
import Modal from "./Modal.jsx";

function ModalAddSource() {
  const { setSourceReferences } = useContext(SourceReferencesContext);

  const handleSaveSourceRef = (sourceRef) => {
    const newSourceRef = { id: crypto.randomUUID(), ...sourceRef };
    setSourceReferences(prevRefs => [...prevRefs, newSourceRef]);
  };

  return (
    <Modal onSaveSourceRef={handleSaveSourceRef} />
  );
}

export default ModalAddSource;
