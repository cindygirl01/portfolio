import React from 'react'

import './Home.css'

function Home() {
  return (
    <section className='styles'>
      <h1>Home</h1>
      <div className='home'>
        <h1 >Hi! I'm Cynthia Peter</h1>
        <h3>I Love Building Good and Amazing Websites.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />
          elit. Doloremque corrupti accusantium porro <br />
          temporibus enim debitis magnam suscipit architecto <br />
          delectus optio sit repellat, quas nesciunt. <br />
          Excepturi quod ea totam voluptas molestiae? <br />
        </p>
      </div>
      <div className='img'>
        <img src="/img/ijsnap.png" width={365} alt="" />
      </div>
    </section>
  )
}

export default Home