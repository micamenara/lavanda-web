import styles from "../Input/Input.module.css";

interface InputProps {
}

export type InputType = InputProps &
  Omit<JSX.IntrinsicElements["textarea"], "ref">;

const Textarea = (props: InputType) => {
  return (
    <div className={styles.inputContainer}>
      <label className={`${props.value && styles.inputLabelTop} ${styles.inputLabel}`}>{props.placeholder}</label>
      <textarea className={styles.input} {...props} />
    </div>
  );
};
export default Textarea;
