import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id='contact' className={styles.container}> 
        <h1 className='sectionTitle'>
           Contact Form
        </h1>
        <form action="https://formspree.io/f/meojadwo" method='post'>

            {/* input for the name in contact box */}
            
            <div className='formGroup'>
                <label htmlFor='name' hidden>
                    Name
                </label>
                <input type='text' name='name' id='name' placeholder='Name' required/>
                
            </div>

            {/* input for the Email in contact box */}

            <div className='formGroup'>
                <label htmlFor='email' hidden>
                    Email
                </label>
                <input type='text' name='email' id='email' placeholder='Email' required/>
                
            </div>

            {/* input for the Message in contact box */}

            <div className='formGroup'>
                <label htmlFor='message' hidden>
                    Message
                </label>
                <textarea type='text' name='message' id='message' placeholder='Message' required>

                </textarea>
                
            </div>

            <input className="hover btn" type="submit" value='Submit'/>

        </form>
    </section>
  )
}

export default Contact