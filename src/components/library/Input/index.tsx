import styles from "./Input.module.css";

interface InputProps {
}

export type InputType = InputProps &
  Omit<JSX.IntrinsicElements["input"], "ref">;

const Input = (props: InputType) => {
  return (
    <div className={styles.inputContainer}>
      <label className={`${props.value && styles.inputLabelTop} ${styles.inputLabel}`}>{props.placeholder}</label>
      <input className={styles.input} {...props} />
    </div>
  );
};
export default Input;
