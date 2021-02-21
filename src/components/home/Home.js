import React, { Component } from 'react';
import styles from './Home.module.css';
import { Link } from "react-router-dom"

const LinkStyle = {
    textDecoration: 'none',
    color: '#000',
}

const Home = () => (
    <div className={styles.container}>
        <div className={styles.text}>
            <h1>EXPLORE PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet viverra molestie. Nullam et aliquam sapien.</p>
            <Link to="/catalog" style={LinkStyle}>
                <span>View catalog</span>
            </Link>
        </div>
        <div className={styles.img}></div>
    </div>
);

export default Home;