import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: (React.ReactNode & { type: { name: string }; props: any })[];
  src?: string;
  alt?: string;
}

export type CardType = CardProps & Omit<JSX.IntrinsicElements["div"], "ref">;

export const CardActions = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cardActions}>{children}</div>;
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cardContent}>{children}</div>;
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cardHeader}>{children}</div>;
};

export const CardImage = ({
  alt = "alt",
  ...props
}: Omit<JSX.IntrinsicElements["img"], "ref">) => {
  return <img {...props} alt={alt} />;
};

const Card = ({ children, ...props }: CardType) => {
  const cardImage = children?.find(
    (child) => React.isValidElement(child) && child?.type?.name === "CardImage"
  );
  const cardHeader = children?.find(
    (child) => React.isValidElement(child) && child?.type?.name === "CardHeader"
  );
  const cardContent = children?.find(
    (child) =>
      React.isValidElement(child) && child?.type?.name === "CardContent"
  );
  const cardActions = children?.find(
    (child) =>
      React.isValidElement(child) && child?.type?.name === "CardActions"
  );

  return (
    <div className={`${props.className || ''} ${styles.card}`} {...props}>
      {cardHeader && <CardHeader {...cardHeader.props} />}

      {cardImage && (
        <div className={styles.cardImage}>
          <CardImage {...cardImage.props} className={`${cardImage.props.className} ${!cardHeader ? styles.cardImageTop : ''}`}/>
        </div>
      )}

      {cardContent && <CardContent {...cardContent.props} />}

      {cardActions && <CardActions {...cardActions.props} />}
    </div>
  );
};

export default Card;
