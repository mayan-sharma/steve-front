import React from "react";
import styles from "./CartItem.module.css";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cartAction";

const CartItem = (props) => {
  
  const removeHandler = () => {
    props.removeFromCart(props.id);
  };

  const { name, price } = props;
  
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.img}></div>
        <div className={styles.info}>
          <p>{name}</p>
          <p>Lorem Ipsum is the best</p>
          {/* <p>+ -</p> */}
          <p>${price}</p>
        </div>
      </div>
      <button className={styles.remove} onClick={removeHandler}></button>
    </div>
  );
};

export default connect(null, { removeFromCart })(CartItem);
