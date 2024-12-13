// src/pages/Team.js
import React from "react";
import styles from "../styles.module.css";

function Team() {
    return (
        <div className={styles.aboutSection}>
            <h2>Our Team</h2>
            <p>
                Our team is made up of dedicated and passionate individuals from diverse backgrounds,
                each contributing their unique expertise to make our vision a reality. We believe in collaboration, innovation,
                and the power of teamwork.
            </p>
            <p>
                Meet some of our key team members:
            </p>
            <ul>
                <li>John Doe - CEO</li>
                <li>Jane Smith - CTO</li>
                <li>Emily Davis - Lead Designer</li>
                <li>Michael Brown - Product Manager</li>
            </ul>
        </div>
    );
}

export default Team;
