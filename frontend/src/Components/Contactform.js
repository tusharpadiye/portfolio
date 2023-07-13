import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com'
export default function Contactform() {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_et89eqw', 'template_1xlevuh', form.current, 'ZvebXKKTos5gdfIXx')
      .then((result) => {
          
            alert("Your query has been sent.")
            e.target.reset();
          
          console.log(result.text);
      }, (error) => {
        
          alert("Please fill all the details.")
        
          console.log(error.text);
      });
  };

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text' name='name' className='round' required></input>
            <label>Email</label>
            <input type='email'name='email' className='round' required></input>
            <label>Subject</label>
            <input type='text' name='subject' className='round' required></input>
            <label>Message</label>
            <textarea name='message' rows="6" placeholder='Enter Your Message here' className='round' required/> 
            <button className='btn round'>Submit</button>
        </form>
    </div>
  )
}
