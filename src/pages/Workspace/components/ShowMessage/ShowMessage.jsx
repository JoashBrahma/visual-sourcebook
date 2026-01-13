import styles from "./ShowMessage.module.css";

export default function ShowMessage({ message }) {
  return (
    <div className={styles.message}>
      {message}
    </div>
  );
}
