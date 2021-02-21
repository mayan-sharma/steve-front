import React, { Component } from 'react'
import Loading from "../loading/Loading";
import styles from "./ProductPage.module.css";
import { connect } from "react-redux";
import { getProduct } from "../../actions/productAction";
import { addToCart, getCart } from "../../actions/cartAction";

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name: '',
            price: '',
            loaded: false,
        };

        this.addToCartHandler = this.addToCartHandler.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;    
        this.props.getProduct(id);
        this.props.getCart();
    }

    componentDidUpdate() {
        if (!this.props.isLoading && !this.state.loaded) {
          const { _id, name, price } = this.props.product;
          console.log(this.props.product);
          this.setState({ _id, name, price, loaded: true });
        }
    }

    inCart() {
        return this.props.cartProducts.find(product => product._id === this.state._id) ? true : false;
    }

    addToCartHandler() {
        this.props.addToCart(this.state._id);
    }

    render() {
        return this.props.isLoading ? (
            <Loading />
            ) : (
                <div className={styles.container}>
                <div className={styles.img}></div>
                <div className={styles.info}>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h2>${this.state.price}</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet viverra molestie. Nullam et aliquam sapien.ed laoreet viverra molestie</p>
                    <div>
                        <button 
                            onClick={this.addToCartHandler}
                            disabled={!this.props.isAuthenticated || this.inCart()}
                        >
                        Add to cart</button>
                        {!this.props.isAuthenticated && (
                            <p className={styles.disclaimer}>*Login to access cart</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.products.activeProduct,
    isLoading: state.products.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    cartProducts: state.cart.products,
});

export default connect(mapStateToProps, { getProduct, addToCart, getCart })(ProductPage);