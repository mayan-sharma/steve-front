import React, { Component } from 'react';
import styles from "./Catalog.module.css";
import Loading from "../loading/Loading";
import Product from "./Product";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productAction";
import { Link } from "react-router-dom";

class Catalog extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        return (
            <div className={styles.container}>
                {this.props.isLoading ? (
                <Loading /> 
                ) : (
                products.map((product) => (
                    <Link key={product._id} to={`/catalog/${product._id}`} style={{ textDecoration: 'none', color: '#000' }}>
                        <Product
                            id={product._id}
                            name={product.name}
                            price={product.price}
                        />
                    </Link>
                ))
                )}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    products: state.products.products,
    isLoading: state.products.isLoading,
  });
  
export default connect(mapStateToProps, { getProducts })(Catalog);
  