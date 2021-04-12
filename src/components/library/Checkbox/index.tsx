import React from "react";
import styles from "./Checkbox.module.css";
import ICheck from "./assets/ICheck";
import IUncheck from "./assets/IUncheck";
interface CheckboxProps {
  children?: React.ReactNode;
}

export type CheckboxType = CheckboxProps &
  Omit<JSX.IntrinsicElements["input"], "ref">;

const Checkbox = ({ children, className, ...props }: CheckboxType) => {
  return (
    <div className={`${className || ''} ${styles.checkbox}`}>
      <label className={styles.checkboxLabel}>
        <input
          {...props}
          type="checkbox"
          className={styles.checkboxInput}
        />
        <span className={`mr-10 ${styles.checkmark}`}>
          {props.checked ? <ICheck /> : <IUncheck />}
        </span>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
