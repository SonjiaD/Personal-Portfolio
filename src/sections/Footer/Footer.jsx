import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>
            {/* copyrightcode */}
            &copy; 2024 Sonja Deng. <br />

            All rights reserved.
        </p>
        
    </section>
  )
}

export default Footer