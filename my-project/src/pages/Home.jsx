import React from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
function Home() {
  return (
    <div className='md:mx-12 space-y-4'>
       <Navbar />
       <Content />
    </div>
  )
}

export default Home