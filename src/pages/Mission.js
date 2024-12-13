// src/pages/Mission.js
import React from "react";
import styles from "../styles.module.css";

function Mission() {
    return (
        <div className={styles.aboutSection}>
            <h2>Our Mission</h2>
            <p>
                Our mission is to empower people and organizations through innovative solutions that improve their lives and businesses.
                We are dedicated to pushing the boundaries of technology, creating lasting value, and making a positive impact in the world.
            </p>
            <p>
                Key values that drive us:
            </p>
            <ul>
                <li>Innovation: Continuously creating new and better solutions.</li>
                <li>Collaboration: Working together with clients and stakeholders.</li>
                <li>Integrity: Acting with honesty and transparency in all we do.</li>
                <li>Excellence: Striving for the highest quality in everything we produce.</li>
            </ul>
        </div>
    );
}

export default Mission;
