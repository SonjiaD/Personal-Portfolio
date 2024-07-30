import React from 'react'
import styles from './ProjectsStyles.module.css'
import theory from '../../assets/theory.png'
import heartdisease from '../../assets/heartdisease.png'
import portfolio from '../../assets/portfolio.png'
import ikea from '../../assets/ikea.png'
import riot from '../../assets/riot.png'
import amies from '../../assets/amies.png'
import kfc from '../../assets/kfc.png'
import fpc from '../../assets/FPC-gray.png'

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
                src={portfolio} 
                link="https://github.com/SonjiaD/Personal-Portfolio"
                h3 = 'Personal E-Portfolio'
                p = 'Features my software and design projects.'
            />

            <ProjectCard 
                src={fpc} 
                link="https://github.com/StephanieQuon/ResourcesforFamilyCaregivers"
                h3 = 'Families as Partners in Care'
                p = 'Medical resource website for caregivers'
            />

            <ProjectCard 
                src={heartdisease} 
                link="https://github.com/SonjiaD/DSCI-100-Project-Final-Submission-"
                h3 = 'Heart Disease Analysis'
                p = 'Analyzing heart disease causes in Cleveland, USA'
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
                src={fpc} 
                link="https://www.figma.com/proto/h5CZYdqQOWploz87lqjGMh/FPC---Web-Design-Drafts?node-id=75-319&t=6AYOTXJNpd0EW43v-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=75%3A319&show-proto-sidebar=1"
                h3 = 'Families as Partners in Care'
                p = 'Resource website'
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

            <ProjectCard 
                src={kfc} 
                link="https://www.canva.com/design/DAFEqzwi9Jg/UtZRAEmwtF4iaU80eg2Aww/edit?utm_content=DAFEqzwi9Jg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                h3 = 'KFC Stylescape'
                p = 'Resdesign of KFC'
            />

        </div>
    </section>
    


    
  )
}

export default Projects;