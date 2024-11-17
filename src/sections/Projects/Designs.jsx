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


      <h1 className={styles.sectionTitle}>Design Projects</h1>

      <div className={styles.largeGap}></div>


      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={bunnies} 
          link="https://github.com/SonjiaD/Bunnies" 
          h3="Bunnies" 
          p="Mental Health Website" 
        />
        <ProjectCard 
          src={amies} 
          link="/case-study/amies" 
          h3="Amies" 
          p="Immigration app" 
        />
        <ProjectCard 
          src={fpc} 
          link="./case-study/fpc" 
          h3="FPC" 
          p="Resource website" 
        />
    </div>

    <div className={styles.largeGap}></div>


    <div className={styles.projectsContainer}>

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