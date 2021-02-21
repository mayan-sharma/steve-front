import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../actions/cartAction";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Loading2 from "../loading/Loading2";

class Cart extends Component {

  // state = {
  //   products: [],
  //   total: 0,
  //   loaded: false,
  // }
  
  componentDidMount() {
    if (!this.props.userLoading) {
      this.props.getCart();
    }
  }

  // componentDidUpdate() {
  //   if (!this.props.cartLoading && !this.state.loaded) {
      
  //     let total = this.props.products.reduce((acc, product) => acc + product.price, 0);
      
  //     this.setState({
  //       products: this.props.products,
  //       loaded: true,
  //       total: total,
  //     })
  //   }
  // }

  render() {
    return (
      this.props.isAuthenticaed ? (
        <div className={styles.container}>
            <div className={styles.items}>
              { this.props.cartLoading ? 
                <Loading2 /> : (
                  this.props.products.length ? (
                    this.props.products.map(product => (
                      <CartItem key={product._id} id={product._id} name={product.name} price={product.price} />
                    )) 
                  ) : (<div className={styles.noItems}>No items in cart!</div>)
              )}
            </div>
            <div className={styles.info}>
              { !this.props.cartLoading && (
                this.props.products.map(product => (
                  <div key={product._id}>
                    <h2>{product.name}</h2>
                    <h3>${product.price}</h3>
                  </div>
                ))
              ) }
              {/* <span>Proceed</span> */}
            </div>
        </div>
      ) : (
        <div className={styles.noAccess}>
          <div className={styles.noAccessImg}></div>
          <div>Login to access cart</div>
        </div>
      ) 
    )
  }
  
}

const mapStateToProps = (state) => ({
  userLoading: state.auth.isLoading,
  products: state.cart.products,
  cartLoading: state.cart.isLoading,
  isAuthenticaed: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getCart })(Cart);
