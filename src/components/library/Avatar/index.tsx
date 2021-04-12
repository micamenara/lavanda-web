import React from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  children?: React.ReactNode;
  src?: string;
  alt?: string;
}

export type AvatarType = AvatarProps &
  Omit<JSX.IntrinsicElements["div"], "ref">;

const Avatar = ({ children, src, alt = "alt", className, ...props }: AvatarType) => {
  return (
    <div className={`${className || ''} ${styles.avatar}`}>
      {children && !src ? (
        <div className={styles.avatarDefault} {...props}>
          {children}
        </div>
      ) : src ? (
        <img className={styles.avatarImage} src={src} alt={alt} />
      ) : null}
    </div>
  );
};

export default Avatar;
