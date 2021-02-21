import React from 'react'
import styles from "./Catalog.module.css";

const Product = (props) => (
    <div className={styles.product}>
        <img></img>
        <div>
            <h2>{props.name}</h2>
            <p>${props.price}</p>
        </div>
    </div>
);

export default Product;