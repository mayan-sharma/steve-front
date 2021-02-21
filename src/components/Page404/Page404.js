import React from 'react'
import styles from "./Page404.module.css";
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: 'none',
    color: '#0057FF',
    fontSize: '1.5rem',
}

const Page404 = () => (
    <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.text}>
            <h1>404</h1>
            <p>You are not supposed <br></br> to be here.</p>
            <Link to="/" style={linkStyle}>
                <span>Go home</span>
            </Link>
        </div>
    </div>
);

export default Page404;