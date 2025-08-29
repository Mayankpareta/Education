import React from 'react'
import CourseCalendarCreate1HeroSection from '../components/CourseCalendarCreate1HeroSection'

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
        <CourseCalendarCreate1HeroSection 
        lefttitle = 'Change Simplification'
        quiztitle = 'Change Simplification'
        courseindex = {courseIndex}
        quizindex = {quizindex}
        righttitle = 'Learn about Adobe XD & Prototyping'
        righsubttitle = 'Introduction about XD'
        righttitleduration = '1 hour'
        formheading = 'Create new event'
        formdescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem'
        formeventname = 'Event Name'
        formstartdate = 'Start date / Time'
        formenddate = 'End date / Time'
        formlocation = 'Location'
        formnotification = 'Notification'
        formemail = 'Email'
        formeventdescription = 'Event Description'
        formeventdescriptionPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur '
        frombtntext = 'Save Now'
        />
        
    </div>
  )
}

export default Index