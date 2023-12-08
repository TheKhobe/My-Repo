import React from 'react'

import web from '../images/image-web-3-desktop.jpg'
import mobile from '../images/image-web-3-mobile.jpg'
import Gaming from '../images/image-gaming-growth.jpg'
import Retro from '../images/image-retro-pcs.jpg'
import Laptops from '../images/image-top-laptops.jpg'
function Content() {
  return (
    <div>
     <div className='flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4 md:ml-12 mx-8 md:mx-0'>
  <div className='flex flex-col md:w-2/3 md:space-y-4'>
  <div className='mt-40 md:mt-0'>
  <img src={web} alt='webkit' className='md:visible invisible'/>
  <img src={mobile} alt='webkit' className='md:hidden block -mt-72'/>
  
  </div>
    <div className='flex md:flex-row flex-col md:space-x-4 space-y-4'>
    <div className='flex md:w-1/2'>
      <h1 className='md:text-6xl text-4xl font-bold'>The Bright Future of Web 3.0?</h1>
    </div>
    <div className='flex flex-col md:w-1/2 space-y-4'>
      <p className='text-darkGrayishBlue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
      <div className='flex'>
      <button className='bg-softRed text-offWhite px-4 py-2 uppercase hover:bg-veryDarkBlue'>Read More</button> 
      </div>
    </div>
    </div>
  </div>
  <div className='flex flex-col bg-veryDarkBlue md:w-1/3 p-4 space-y-8'>
  <h1 className='text-softOrange text-3xl font-bold'>New</h1>
  <div>
<h2 className='text-offWhite font-bold text-2xl hover:text-softOrange'>
Hydrogen VS Electric Cars
</h2>
<p className='text-grayishBlue'>Will hydrogen-fueled cars ever catch up to EVs?</p>
</div>
<hr />
  <div>
<h2 className='text-offWhite font-bold text-2xl hover:text-softOrange'>
The Downsides of AI Artistry
</h2>
<p className='text-grayishBlue'>What are the possible adverse effects of on-demand AI image generation?</p>
</div>
<hr />
  <div>
<h2 className='text-offWhite font-bold text-2xl hover:text-softOrange'>
Is VC Funding Drying Up?
</h2>
<p className='text-grayishBlue'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
</div>
  </div>
</div>
<div className='flex md:flex-row flex-col md:space-x-6 space-x-0 space-y-4 ml-8'>
  <div className='flex flex-row items-center md:w-1/3 space-x-4'>
    <img src={Retro} alt='Retro' className='w-20'/>
    <div className='flex flex-col'>
    <h1 className='text-grayishBlue font-bold text-2xl'>01</h1>
    <h2 className='text-2xl font-bold hover:text-softRed'>Reviving Retro PCs</h2>
    <p className='text-darkGrayishBlue'>What happens when old PCs are given modern upgrades?</p>
  </div>
  </div>
  <div className='flex flex-row items-center md:w-1/3 space-x-4'>
    <img src={Laptops} alt='Top 10 Laptops of 2022' className='w-20'/>
    <div className='flex flex-col'>
    <h1 className='text-grayishBlue font-bold text-2xl'>02</h1>
    <h2 className='text-2xl font-bold hover:text-softRed'>Top 10 Laptops of 2022</h2>
    <p className='text-darkGrayishBlue'>Our best picks for various needs an budgets.</p>
  </div>
  </div>
  <div className='flex flex-row items-center md:w-1/3 space-x-4'>
    <img src={Gaming} alt='Gaming' className='w-20'/>
    <div className='flex flex-col'>
    <h1 className='text-grayishBlue font-bold text-2xl'>03</h1>
    <h2 className='text-2xl font-bold hover:text-softRed'>The Growth of Gaming</h2>
    <p className='text-darkGrayishBlue'>How the pandemic has sparked fresh opportunities</p>
  </div>
  </div>
</div>
    </div>
  )
}

export default Content
