import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={`page ${styles.notFound}`}>
      <p>Page not found</p>
      <button onClick={() => navigate("/", { replace: true })}>Go back Home</button>
    </div>
  );
}

export default NotFound;