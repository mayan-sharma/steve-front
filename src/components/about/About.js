import React from 'react'
import styles from "./About.module.css";

const About = () => (
    <div className={styles.container}>
        <div className={styles.intro}>
            <div className={styles.text}>
                <h1>THIS IS <br></br> <span>STEVE</span></h1>
                <p>An open source ecommerce platform</p>
            </div>
            <div className={styles.img}></div>
        </div>
        <div className={styles.madeby}>
            <h1>MADE BY</h1>
            <div className={styles.info}>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
);

export default About;