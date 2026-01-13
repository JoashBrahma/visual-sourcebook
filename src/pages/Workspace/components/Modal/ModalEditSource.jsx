import { useContext } from "react";
import { SourceReferencesContext } from "@/context/SourceReferencesProvider.jsx";
import { UIContext } from "@/context/UIProvider.jsx";
import Modal from "./Modal.jsx";

function ModalEditSource() {
  const { setSourceReferences } = useContext(SourceReferencesContext);
  const { editingSourceReferenceId, setEditingSourceReferenceId } = useContext(UIContext);

  const handleSaveSourceRef = (sourceRef) => {
    const editedSourceRef = { id: editingSourceReferenceId, ...sourceRef };

    setSourceReferences(prevRefs =>
      prevRefs.map(ref =>
        ref.id === editingSourceReferenceId ? editedSourceRef : ref
      )
    );

    setEditingSourceReferenceId(null);
  };

  return (
    <Modal onSaveSourceRef={handleSaveSourceRef} />
  );
}

export default ModalEditSource;
