import React from 'react'
import styles from './ProjectsStyles.module.css'
import theory from '../../assets/theory.png'
import heartdisease from '../../assets/heartdisease.png'
import portfolio from '../../assets/portfolio.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}> 
        <h1 className='sectionTitle'> 
            Projects
        </h1>

        <div className={styles.projectsContainer}>
            
            <ProjectCard 
                src={theory} 
                link="https://github.com/SonjiaD/CPSC-210-Project"
                h3 = 'The Muse'
                p = 'Music theory learning application for music students or those who are interested in music who would like to learn more about music and improve their basic theory skills.'
            />

            <ProjectCard 
                src={heartdisease} 
                link="https://github.com/SonjiaD/DSCI-100-Project-Final-Submission-"
                h3 = 'Heart Disease Analysis'
                p = 'Analyzing heart disease causes and predicting its likelihood in Cleveland based on factors like age, blood pressure, cholesterol levels, maximum heart rate, and ST depression from exercise.'
            />

            <ProjectCard 
                src={portfolio} 
                link="https://github.com/SonjiaD/Personal-Portfolio"
                h3 = 'Personal Portfolio'
                p = 'My personal website, which is the one you are on right now! This was created to feature my software and design projects.'
            />

        </div>
    </section>
  )
}

export default Projects;