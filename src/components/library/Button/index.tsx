import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  disabled?: boolean;
}

export type ButtonType = ButtonProps &
  Omit<JSX.IntrinsicElements["button"], "ref">;

const Button = ({ children, variant = "primary", className, ...props }: ButtonType) => {
  const classes = `${className || ''} ${styles.button} ${styles[`button-${variant}`]} ${
    props.disabled ? styles['button-disabled'] : ""
  }`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
