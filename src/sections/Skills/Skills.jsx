import styles from './Skillsstyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        
        <div className={styles.largeGap}></div>
        <div className={styles.largeGap}></div>
        <div className={styles.largeGap}></div>
        
        <h1 className="sectionTitle" >
            Skills
        </h1>
        
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="TypeScript" />
            <SkillList src={checkMarkIcon} skill="Node.JS" />
           
        </div>
        <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="React" />
                <SkillList src={checkMarkIcon} skill="Angular" />
                <SkillList src={checkMarkIcon} skill="Vue" />
                <SkillList src={checkMarkIcon} skill="Tailwind" />
            </div>
        <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="R" />
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
            </div>
        <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Figma" />
                <SkillList src={checkMarkIcon} skill="UX/UI Design" />
            </div>
        {/* <hr />
            <div className={styles.skillList}>
            
            </div> */}
    </section>

  )
}

export default Skills;