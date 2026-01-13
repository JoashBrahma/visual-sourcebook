import { useContext } from "react";
import { UIContext } from "@/context/UIProvider.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import SourceGallery from "./components/SourceGallery/SourceGallery.jsx";
import ModalManager from "./components/Modal/ModalManager.jsx";

function Workspace() {
  const { activeModal } = useContext(UIContext);

  return (
    <div>
      <TopBar />
      <SourceGallery />
      {activeModal && <ModalManager />}
    </div>
  );
}

export default Workspace;