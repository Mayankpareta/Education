import React from 'react'
import CalendarCreate2 from '../components/CalendarCreate2'

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

  const coinSecton = [
    {
      coinheading : 'O6 Super Coins on the way',
      coinsubheading : 'Lorem ipsum dolor sit amet, consectetur adi',
      coindescription : 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL',
      descriptionbgcolor : 'bg-[#49BBBD]/10'
    },
    {
      coinheading : 'O6 Super Coins on the way',
      coinsubheading : 'Lorem ipsum dolor sit amet, consectetur adi',
      coindescription : 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL',
      descriptionbgcolor : 'bg-[#F48C06]/20'
    },
    {
      coinheading : 'O6 Super Coins on the way',
      coinsubheading : 'Lorem ipsum dolor sit amet, consectetur adi',
      coindescription : 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL',
      descriptionbgcolor : 'bg-[#EE645B]/20',
      socialmedia : [
        {
          tagname : 'aTwitter'
        },
        {
          tagname : 'FaTwitter'
        },
        {
          tagname : 'FaTwitter'
        },
      ]
    },
  ]

  return (
    <div>
        <CalendarCreate2 
        lefttitle = 'Change Simplification'
        quiztitle = 'Change Simplification'
        courseindex = {courseIndex}
        quizindex = {quizindex}
        righttitle = 'Learn about Adobe XD & Prototyping'
        righsubttitle = 'Introduction about XD'
        righttitleduration = '1 hour'
        rightcontenttitle = 'Share and Refer'
        rightcontentdescription = 'Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem'
        coinsection = {coinSecton}
        />
    </div>
  )
}

export default Index