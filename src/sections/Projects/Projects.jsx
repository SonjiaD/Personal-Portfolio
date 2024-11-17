import React from 'react';
import styles from './ProjectsStyles.module.css';
import theory from '../../assets/theory.png';
import heartdisease from '../../assets/heartdisease.png';
import portfolio from '../../assets/portfolio.png';
import ikea from '../../assets/ikea.png';
import riot from '../../assets/riot.png';
import amies from '../../assets/amies.png';
import kfc from '../../assets/kfc.png';
import fpc from '../../assets/FPC-gray.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Software Projects</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={theory} 
          link="https://github.com/SonjiaD/CPSC-210-Project" 
          h3="The Muse" 
          p="Music theory learning application" 
        />
        <ProjectCard 
          src={portfolio} 
          link="https://github.com/SonjiaD/Personal-Portfolio" 
          h3="Personal E-Portfolio" 
          p="Features my software and design projects." 
        />
        <ProjectCard 
          src={fpc} 
          link="https://github.com/SonjiaD/FPC-Res" 
          h3="Families as Partners in Care" 
          p="Medical resource website for caregivers" 
        />
        <ProjectCard 
          src={heartdisease} 
          link="https://github.com/SonjiaD/DSCI-100-Project-Final-Submission-" 
          h3="Heart Disease Analysis" 
          p="Analyzing heart disease causes in Cleveland, USA" 
        />
      </div>

      <div className={styles.largeGap}></div>

      <h1 className={styles.sectionTitle}>Design Projects</h1>

      <div className={styles.largeGap}></div>


      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={amies} 
          link="/case-study/amies" 
          h3="Amies" 
          p="Immigration app" 
        />
        <ProjectCard 
          src={fpc} 
          link="./case-study/fpc" 
          h3="Families as Partners in Care" 
          p="Resource website" 
        />
        <ProjectCard 
          src={ikea} 
          link="/case-study/ikea" 
          h3="Ikea Stylescape" 
          p="Redesign of Ikea" 
        />
        <ProjectCard 
          src={riot} 
          link="/case-study/riot" 
          h3="Riot Games Stylescape" 
          p="Resdesign of Riot Games" 
        />
        <ProjectCard 
          src={kfc} 
          link="/case-study/kfc" 
          h3="KFC Stylescape" 
          p="Resdesign of KFC" 
        />
      </div>
    </section>
  );
}

export default Projects;
