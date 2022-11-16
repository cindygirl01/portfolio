import React from 'react'


import './Contact.css'

const handleClick =() => {
  alert('sent successfully')
  console.log('sent successfully')
}

function Contact() {
  return (
    <div className='contact' id="#contacts">
      <h1>Contact Me</h1>
      <div className='contact-me'>
        <div className='pre'>
          <form action="post">
            <div>
              <label htmlFor="name" id='name'>Name:</label> <br />
              <input type="text" className='name' autoComplete='on' required />
            </div>
            <div>
              <label htmlFor="email" id='name'>Email:</label><br />
              <input type="text" className='nam' autoComplete='on' required />
            </div>
            <div>
              <label htmlFor="message" id='name'>Message:</label><br />
              <textarea className="names" id="" cols="42" rows="12"></textarea>
            </div>
          </form>
        </div>
        <div className='cont'>
          <a href="https://www.facebook.com/cynthia.i.uchegbu"><i class="fa fa-facebook-square" aria-hidden="true"></i>Facebook</a> <br />
          <a href="https://twitter.com/IjeomaCy3">Twitter</a> <br />
          <a href="https://www.instagram.com/uchegbucynthia">Instagram</a> <br />
          <a href="http://www.github.com/cindygirl01">Github</a> <br />
          <a href="http://wa.link/7qw1dy">Whatsapp</a><br />
          <a href="https://www.gmail.com/cindypeace32">Gmail</a><br />
          <a href="tel: +2348061110486">Call Me</a>
        </div>
      </div>
      <button type='submit'className='btn' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Contact