import React from 'react'
import MeetingHeroSerction from '../components/MeetingHeroSerction'

function Index() {

    const contentAllLessons = [
        {
            getstart: 'Get Started',
            gethour: '1 Hour',
            getlesson: '5 Lessons',
            lesson:[
                {
                    title: '1. Lorem ipsum dolor sit amet',
                    duration: '65:00',
                },
                {
                    title: '2. Lorem ipsum dolor sit amet',
                    duration: '45:00',                    
                },
                {
                    title: '3. Lorem ipsum dolor sit amet',
                    duration: '30:00',
                },
                {
                    title: '4. Lorem ipsum dolor sit amet',
                    duration: '50:00',
                },
                {
                    title: '5. Lorem ipsum dolor sit amet',
                    duration: '40:00'                    
                }
            ]
        },
        {
            getstart: 'Illstarator Structuors',
            gethour: '2 Hour',
            getlesson: '3 Lessons',
            lesson: [
                {
                    title: '1. Lorem ipsum dolor sit amet',
                    duration: '65:00',
                },
                {
                    title: '2. Lorem ipsum dolor sit amet',
                    duration: '45:00',
                },
                {
                    title: '3. Lorem ipsum dolor sit amet',
                    duration: '30:00',
                }
            ]
            
        },
        {
            getstart: 'Using Illstarator',
            gethour: '1 Hour',
            getlesson: '4 Lessons',
            lesson: [
                {
                    title: '1. Lorem ipsum dolor sit amet',
                    duration: '65:00',
                },
                {
                    title: '2. Lorem ipsum dolor sit amet',
                    duration: '45:00',
                },
                {
                    title: '3. Lorem ipsum dolor sit amet',
                    duration: '30:00',
                },
                {
                    title: '4. Lorem ipsum dolor sit amet',
                    duration: '50:00',
                },
            ]
           
        },
        {
            getstart: 'What is Pandas?',
            gethour: '12:54',
            getlesson: '5 Lessons',
            lesson: [
                {
                    title: '1. Lorem ipsum dolor sit amet',
                    duration: '65:00',
                },
                {
                    title: '2. Lorem ipsum dolor sit amet',
                    duration: '45:00',                    
                },
                {
                    title: '3. Lorem ipsum dolor sit amet',
                    duration: '30:00',
                },
                {
                    title: '4. Lorem ipsum dolor sit amet',
                    duration: '50:00',
                },
                {
                    title: '5. Lorem ipsum dolor sit amet',
                    duration: '40:00'
                }
            ]
        },
        {
            getstart: 'Work with Numpy',
            gethour: '59:00',
            getlesson: '3 Lessons',
            lesson: [
                {
                    title: '1. Lorem ipsum dolor sit amet',
                    duration: '65:00',
                },
                {
                    title: '2. Lorem ipsum dolor sit amet',
                    duration: '45:00',
                },
                {
                    title: '3. Lorem ipsum dolor sit amet',
                    duration: '30:00',
                }
            ]
            
        },
    ]

    const bookCard = [
        {
            imgsrc: '/images/courseRecomFirst.png',
            heading: 'All Benefits of PLUS',
            price: '$24',
        },
        {
            imgsrc: '/images/checkoutDiscountThree.png',
            heading: 'All Benefits of PLUS',
            price: '$24',
        },
    ]

  return (
    <div>
        <MeetingHeroSerction 
        title = 'UX/UI Design Confrence Meeting'
        headinglesson = '9 lesson'
        headingduration = '6h 30min'
        meetingimgsrc = '/images/meetingMain.jpg'
        persononeimgsrc = '/images/meetingFirst.png'
        persontwoimgsrc = '/images/meetingSec.png'
        personthreeimgsrc = '/images/meetingThird.png'
        contenttitle = 'Course Contents'
        coursecompletion = '2/5 COMPLETED'
        card = {contentAllLessons}
        booktitle = 'Book for you'
        bookcard = {bookCard} 
        />
    </div>
  )
}

export default Index