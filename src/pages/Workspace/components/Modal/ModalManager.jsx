import { useContext } from "react";
import { UIContext } from "@/context/UIProvider.jsx";
import ModalAddSource from "./ModalAddSource.jsx";
import ModalEditSource from "./ModalEditSource.jsx";

function ModalManager() {
  const { activeModal } = useContext(UIContext);

  return (
    <>
      {activeModal === "add" && <ModalAddSource />}
      {activeModal === "edit" && <ModalEditSource />}
    </>
  );
}

export default ModalManager;