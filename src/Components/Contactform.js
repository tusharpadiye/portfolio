import React from 'react'
import "./Contact.css"
export default function Contactform() {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Enter Your Message here'/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}