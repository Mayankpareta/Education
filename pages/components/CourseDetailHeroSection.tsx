import React from 'react'

interface Hero {
    heroimgsrc?: string;
}

const CourseDetailHeroSection:React.FC<Hero> = ({ heroimgsrc }) => {

  return (
    <section
    className='bg-cover bg-center h-[460px] sm:block hidden '
    style={{ backgroundImage :` url(${heroimgsrc})`}}
    >   
    </section>
  )
}

export default CourseDetailHeroSection