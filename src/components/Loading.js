import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <svg className={styles.loading_circle}>
        <circle cx="50%" cy="50%" r="25"></circle>
      </svg>
    </div>
  );
};

export default Loading;
