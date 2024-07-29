import React from 'react'
import styles from './ProjectsStyles.module.css'
import theory from '../../assets/theory.png'
import heartdisease from '../../assets/heartdisease.png'
import portfolio from '../../assets/portfolio.png'
import ikea from '../../assets/ikea.png'
import riot from '../../assets/riot.png'
import amies from '../../assets/amies.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}> 
        <h1 className='sectionTitle'> 
            Software Projects
        </h1>

        <div className={styles.projectsContainer}>
            
            <ProjectCard 
                src={theory} 
                link="https://github.com/SonjiaD/CPSC-210-Project"
                h3 = 'The Muse'
                p = 'Music theory learning application'
            />

            <ProjectCard 
                src={heartdisease} 
                link="https://github.com/SonjiaD/DSCI-100-Project-Final-Submission-"
                h3 = 'Heart Disease Analysis'
                p = 'Analyzing heart disease causes in Cleveland, USA'
            />

            <ProjectCard 
                src={portfolio} 
                link="https://github.com/SonjiaD/Personal-Portfolio"
                h3 = 'Personal Portfolio'
                p = 'Features my software and design projects.'
            />

        </div>

        <div className={styles.largeGap}></div> {/* This is the added line for the gap */}

        <h1 className={styles.sectionTitle}> 
            Design Projects
        </h1>

        {/* <div className={styles.designDescriptionContainer}>
            <p className={styles.designDescription}>
                Here is the link to my design creative portfolio presentation on Canva. The projects in there include Figma UX/UI designs and marketing posts for various organizations.
            </p>
            
        </div> */}
        
        <a href='https://www.canva.com/design/DAGHh9FOUUw/YfII1v36aZyKiByKZcxTxg/edit?utm_content=DAGHh9FOUUw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' > 
                    <button className={styles.portfolio} >
                        Design Portfolio Presentation
                    </button>
        </a>

        
        <div className={styles.projectsContainer}>
            
            <ProjectCard 
                src={amies} 
                link="https://www.canva.com/design/DAGMSC4mg44/Sor3WpgGTQXmff6D1evHDQ/edit?utm_content=DAGMSC4mg44&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                h3 = 'Amies'
                p = 'Immigration app'
            />

            <ProjectCard 
                src={ikea} 
                link="https://www.canva.com/design/DAGMSKXemjg/Yo9sCtb2Dx7f3-d0DJXF6Q/edit?utm_content=DAGMSKXemjg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                h3 = 'Ikea Stylescape'
                p = 'Redesign of Ikea'
            />

            <ProjectCard 
                src={riot} 
                link="https://www.canva.com/design/DAGMSFlHnDI/AK3VzruXqU8AnqmeGQX9dw/edit?utm_content=DAGMSFlHnDI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                h3 = 'Riot Games Stylescape'
                p = 'Resdesign of Riot Games'
            />

        </div>
    </section>
    


    
  )
}

export default Projects;