import React from 'react'
import { Nav } from '../../common';
import { Home } from '../../common'
import { Contact } from '../../common';
import { Project } from '../../common'


import './About.css'

function About() {
  return (
    // alert('am open to correction')
    <section className='container'>
      <section id='about'>
        <div>
          <Nav />
        </div>
        <div>
          <Home />
        </div>
        <div className='about'>
          <h1>About Me</h1>
          <p>
            Hi Everyone!! <br />
            I am a Someone who is Passionate and Positive <br />
            about every aspect of life. <br />
            There are many things i like to do, see and experience. <br />
            I'd like to achieve so many things. <br />
            This is a brief introduction of myself and am a proud Biafran.
          </p>
        </div>
        <div>
          <Project />
        </div>

        <div>
          <Contact />
        </div>
      </section>
    </section >
  );
}



export default About;