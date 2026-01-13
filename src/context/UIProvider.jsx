import { createContext, useState } from "react";

export const UIContext = createContext();

function UIProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);
  const [editingSourceReferenceId, setEditingSourceReferenceId] = useState(null);

  return (
    <UIContext.Provider value={{
      activeModal, setActiveModal, editingSourceReferenceId, setEditingSourceReferenceId
    }}>
      {children}
    </UIContext.Provider>
  );
}

export default UIProvider;