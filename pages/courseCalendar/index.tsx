import React from 'react'
import CourseCalendar from '../components/CourseCalendar'

function Index() {


  const courseIndex = [
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#9DCCFF4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#F48C064D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#9DCCFF4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#EE645B4D]'
    },
  ]

  const quizindex = [
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#9DCCFF4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#F48C064D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#9DCCFF4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#EE645B4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#9DCCFF4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#F48C064D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#9DCCFF4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#EE645B4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#9DCCFF4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#F48C064D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#9DCCFF4D]'
    },
    {
      heading: 'Lesson 01 : Introduction about XD',
      duration: '30 min',
      bgColor: 'bg-[#EE645B4D]'
    },
  ]

  return (
    <div>        
        <CourseCalendar 
        lefttitle = 'Change Simplification'
        quiztitle = 'Change Simplification'
        courseindex = {courseIndex}
        quizindex = {quizindex}
        righttitle = 'Learn about Adobe XD & Prototyping'
        righsubttitle = 'Introduction about XD'
        righttitleduration = '1 hour'
        formheading = 'Share and refer'
        formdescription = 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem'
        />
        
    </div>
  )
}

export default Index