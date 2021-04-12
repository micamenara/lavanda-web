import React from "react";
import styles from "./FloatContainer.module.css";

const FloatContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.floatContainer}>
      <div className={styles.floatContainerContent}>{children}</div>
    </div>
  );
};

export default FloatContainer;
