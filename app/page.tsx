import HeroCarosel from '@/components/HeroCarosel';
import Searchbar from '@/components/Searchbar';
import Image from 'next/image';
import React from 'react'

const Home = () => {
  return(
<>
<section className='px-6 md:px-20 py-24 '>
  <div className='flex max-xl:flex-col gap-16'>
    <div className='flex flex-col justify-center'>
     <p className='small-text'>Smart shopping starts here!</p>
     <Image 
     src="/assets/icons/arrow-right.svg"
     alt="arrow-right"
     width={26}
     height={26}
     />
     <h1 className='head-text'>
      Unleash the power of 
      <span className='text-primary'> PricePal</span>
     </h1>
     <p className='mt-6'>
     Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
     </p>

     <Searchbar />
    </div>
    <HeroCarosel />
  </div>
</section>
<section className='trending-section'>
<h2 className='section-text'>Trending</h2>
<div className='flex flex-wrap gap-x-8 gap-y-16'>
  {['Apple Iphone','book','sneakers','ps5'].map((product)=>(
    <div>{product}</div>
  ))}
</div>
</section>
</>
  )
}

export default Home;