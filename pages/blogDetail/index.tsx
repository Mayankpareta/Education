import React from 'react'
import { useMediaQuery } from 'react-responsive'
import BlogMobileNavbar from '../components/BlogMobileNav'
import BlogNav from '../components/BlogNav'
import CourseDetailHeroSection from '../components/CourseDetailHeroSection'
import BlogDetailUserBlogSection from '../components/BlogDetailUserBlogSection'
import BlogCards from '../components/BlogCards'
import FooterSection from '../components/FooterSection'

function Index() {
  const isMobile = useMediaQuery({ maxWidth : 1020})

     const blogCard = [
    {
      imgsrc: '/images/Rectangle19.png',
      heading: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      writerImage: '/images/blogerImage.png',
      writerName: 'Lina',
      Description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      seenCount: 251232
    },
    {
      imgsrc: '/images/blogMarketingThird.png',
      heading: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      writerImage: '/images/blogerImage.png',
      writerName: 'Lina',
      Description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      seenCount: 251232
    }
  ]


  return (
    <div>
        {isMobile ? <BlogMobileNavbar /> : <BlogNav />}
        <CourseDetailHeroSection 
        heroimgsrc = '/images/courseDetailHeroImage.jpg'
        />
        <BlogDetailUserBlogSection 
        title = 'Why Swift UI Should Be on the Radar of Every Mobile Developer'
        descriptionFirst  = 'TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.'
        descriptionSec  = 'TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. TOTC is a platform '
        descriptionThird  = 'TOTC is a platform that allows educators to create online classes whereby they can stoTOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage '
        affordableBtnText = 'affordable'
        StunningBtnText = 'Stunning'
        makingBtnText = 'making'
        madbrawnsBtnText = 'madbrawns' 
        userImageSrc = '/images/blogerImage.png' 
        userName = 'Lina'
        followBtnText = 'Follow'
        />
        <BlogCards 
        title='Related Blog'
        cards = {blogCard}
        />       
        <FooterSection
        title='Virtual Class for Zoom'
        description='Subscribe to get our Newsletter'
        buttonText='Subscribe'
        careers='Careers'
        privacyPolicy='Privacy Policy'
        conditions='Terms & Conditions'
        lowerLine=' 2021 Class Technologies Inc.'
        />           
    </div>
  )
}

export default Index