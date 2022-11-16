import React from 'react'


import './Nav.css'

function Nav() {
  return (
    <section>
      <section className='navbar' style={{ display: 'flex' }}>
        <div className='header-logo'>
          <img src="./img/cindy.png" width={100} alt="" />
        </div>
        <div className=''>
          <div className='navbar-item'>
            <a id='#home' href="/home">home</a>
            <a id='#about' href="/about">about</a>
            <a id='#projects' href="/projects">projects</a>
            <a id='contacts' href="/contact">contacts</a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Nav