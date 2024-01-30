import React from 'react'
import {getImageUrl} from "../../utils"

import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            {/* <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" /> */}
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/education.png")} alt="Education icon" className={styles.aboutImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Education</h3>
                    <p>I'm a Co-op student at The British Columbia Institute of Technology, in the Computer System Technology program. </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/expertise.png")} alt="Expertise icon" className={styles.aboutImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Expertise</h3>
                    <p>My expertise lies in Python, Java, and C, and I thrive by working in teams and communicating effectively.</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/passion.png")} alt="Passion icon" className={styles.aboutImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Passions</h3>
                    <p>My passions are testing and programming; I enjoy solving problems and learning about anything interesting. I've also recently started getting into F1!</p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
