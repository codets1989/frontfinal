// src/pages/About.js
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../styles.module.css";

function About() {
    return (
        <div className={styles.page}>
            <h1>About Us</h1>
            <p>Welcome to the About Us page. Here, you can learn more about our team and our mission.</p>
            <Outlet />
        </div>
    );
}

export default About;
