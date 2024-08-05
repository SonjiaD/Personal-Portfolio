import styles from './HeroStyles.module.css'
import sonja from '../../assets/sonja.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import mkLight from '../../assets/mk-light-nobkg.png'
import mkDark from '../../assets/mk-dark.png'

import CV from "../../assets/cv.pdf"

import { useTheme } from '../../common/ThemeContext'


//boiler plate component
function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme ==='light' ? sun : moon;

    // const twitterIcon = theme ==='light' ? twitterLight : twitterDark
    const githubIcon = theme ==='light' ? githubLight : githubDark;
    const linkedinIcon = theme ==='light' ? linkedinLight : linkedinDark;
    const mkIcon = theme ==='light' ? mkDark : mkLight;





  return (
    <section id = "hero" className = {styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero}
            src={sonja} 
            alt="Profile picture of Sonja"
            style={{ width: '400px', height: 'auto' }}
            />

            <img className={styles.colorMode} 
            src={themeIcon} 
            alt = "Color mode icon"
            onClick={toggleTheme}
            
            />
            
            
            </div>

            <div className={styles.info} >
                <h1>Sonja Deng
                </h1>

                <h2>
                    Frontend Developer & Web Designer
                </h2>
                <span>
                    {/* <a href='https://twitter.com/' target="_blank">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a> */}
                    <a href='https://github.com/SonjiaD' target="_blank">
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    
                    <a href='https://www.linkedin.com/in/sonja-d-0a5a79289/' target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>

                    <a href='https://monkeytype.com/profile/sonjiad' target="_blank">
                    <img src={mkIcon} alt="Monkeytype icon" />
                    </a>

                </span>

                <p className={styles.description}>
                    Hi I'm Sonja! I am an undergraduate Computer Science and Music (concentration in piano) student at the University of British Columbia (UBC). I have a passion for UX/UI design, software development, and music. I enjoy working on projects that could have a positive social impact on the world.
                </p>

                
                <a href={CV} download> 
                    <button className="hover" >
                        Resume
                    </button>
                </a>

            </div>
        </section>
  )
}
export default Hero;