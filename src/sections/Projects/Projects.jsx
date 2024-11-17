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
import bunnies from '../../assets/bunnies.svg';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.largeGap}></div>
      <div className={styles.largeGap}></div>
      <div className={styles.largeGap}></div>
      <h1 className="sectionTitle">Software Projects</h1>

      <div className={styles.projectsContainer}>
      <ProjectCard 
          src={bunnies} 
          link="https://github.com/SonjiaD/Bunnies" 
          h3="Bunnies" 
          p="Mental Health Website (Vanilla.js)" 
        />
        <ProjectCard 
          src={theory} 
          link="https://github.com/SonjiaD/CPSC-210-Project" 
          h3="The Muse" 
          p="Music theory learning application (Java)" 
        />

        <ProjectCard 
          src={amies} 
          link="https://github.com/SonjiaD/ImmigrationApp" 
          h3="Amies" 
          p="Vancouver Immigration app (Java)" 
        />
        
      </div>

      <div className={styles.largeGap}></div>

      <div className = {styles.projectsContainer}>
      <ProjectCard 
          src={portfolio} 
          link="https://github.com/SonjiaD/Personal-Portfolio" 
          h3="Personal E-Portfolio" 
          p="My software/design projects. (Vite)" 
        />
        <ProjectCard 
          src={fpc} 
          link="https://github.com/SonjiaD/FPC-Res" 
          h3="UBC Medicine" 
          p="Medical caregiver website (Node.js)" 
        />
        <ProjectCard 
          src={heartdisease} 
          link="https://github.com/SonjiaD/DSCI-100-Project-Final-Submission-" 
          h3="Heart Disease Analysis" 
          p="Analyzing heart disease causes (R)" 
        />
      </div>

      <div className={styles.largeGap}></div>
    </section>
  );
}

export default Projects;
