import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Workspace from "./pages/Workspace/Workspace.jsx";
import SourceReferencesProvider from "@/context/SourceReferencesProvider.jsx";
import UIProvider from "@/context/UIProvider.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/workspace"
        element={
          <SourceReferencesProvider>
            <UIProvider>
              <Workspace />
            </UIProvider>
          </SourceReferencesProvider>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;