import '../style/index.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function ContactPage() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6wkq78p', 'template_8t7pb8r', form.current, 'HS63itNEycMTpw8Hd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
    };
  
    return (
      <div className='flex margin-top padding border'>
        <div className='flex-child'>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name</label>
              <input type="text" name="from_name" />
            </div>
            <div className='margin-top-small'>
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
            <div className='margin-top-small'>
              <label>Message</label>
              <textarea
                className='textarea'
                name="message"
                />
            </div>
            <div>
              <input
              type="submit" 
              value="Send" 
              />
            </div>
          </form>
        </div>
        <div>
            <h1>my Info</h1>
            <h3>Name: Hunter Lindsay</h3>
            <h3>Email: HunterL3535@gmail.com</h3>
            <h3>phone #: 214-608-3624</h3>
        </div>
      </div>
    );
  };

export default ContactPage;