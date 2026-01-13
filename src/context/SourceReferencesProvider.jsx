import { createContext, useState, useEffect } from "react";
import { getSourceReferences, saveSourceReferences } from "@/utils/storage.js";

export const SourceReferencesContext = createContext();

function SourceReferencesProvider({ children }) {
  const [sourceReferences, setSourceReferences] = useState(getSourceReferences());
  const [searchQuery, setSearchQuery] = useState("");

  // If any change on 'sourceReferences', save source references to localStorage. 
  useEffect(() => {
    saveSourceReferences(sourceReferences);
  }, [sourceReferences]);

  return (
    <SourceReferencesContext.Provider value={{
      sourceReferences, setSourceReferences, searchQuery, setSearchQuery
    }}>
      {children}
    </SourceReferencesContext.Provider>
  );
}

export default SourceReferencesProvider;