import React from "react";
import Card from "./Card";

export default function Cards({ items, styles }) {
  return (
    <ul className={styles.gallery__cards}>
      {items.map((item) => {
        return <Card key={item.id} item={item} style={styles} />;
      })}
    </ul>
  );
}