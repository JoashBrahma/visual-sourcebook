const STORAGE_KEY = "visual_sourcebook";

export function getSourceReferences() {
  const sourceReferences = localStorage.getItem(STORAGE_KEY);
  return sourceReferences ? JSON.parse(sourceReferences) : [];
}

export function saveSourceReferences(sourceReferences) {
  if (!sourceReferences) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sourceReferences));
}