import React from 'react'
import { useMediaQuery } from 'react-responsive'
import BlogMobileNavbar from '../components/BlogMobileNav'
import BlogNav from '../components/BlogNav'
import CourseHeroSection from '../components/CourseHeroSection'
import Categories from '../components/Categories'
import CourseRecommendedCardSection from '../components/CourseRecommendedCardSection'
import MemberShipOnlineSection from '../components/MemberShipOnlineLearningSection'
import FooterSection from '../components/FooterSection'

function Index() {

    const isMobile = useMediaQuery({ maxWidth : 1020 })

    const heroCourseCard =[
        {
            imgsrc: '/images/blogMarketingThird.png',
            heading: 'AWS Certified Solutions Architect',
            userImageSrc: '/images/blogerImage.png',
            userName: 'Lina',
            lesson: 'Lesson 5 of 7'
        },
        {
            imgsrc: '/images/courseHeroSec.jpg',
            heading: 'AWS Certified Solutions Architect',
            userImageSrc: '/images/blogerImage.png',
            userName: 'Lina',
            lesson: 'Lesson 5 of 7'
        },
        {
            imgsrc: '/images/courseHeroThird.png',
            heading: 'AWS Certified Solutions Architect',
            userImageSrc: '/images/blogerImage.png',
            userName: 'Lina',
            lesson: 'Lesson 5 of 7'
        },
    ]
    
    const cardData = [
        {
            imgsrc: "/images/pen.svg",
            heading: "Design",
            bgcolor: "bg-[#49BBBD4D]/50",
            description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
        },
        {
            imgsrc: "/images/pc.svg",
            heading: "Development",
            bgcolor: "bg-[#5B72EE4D]/30",
            description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
        },
        {
            imgsrc: "/images/pc.svg",
            heading: "Development",
            bgcolor: "bg-[#9DCCFF4D]/30",
            description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
        },
        {
            imgsrc: "/images/pc.svg",
            heading: "Business",
            bgcolor: "bg-[#00CBB84D]/30",
            description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
        },
        {
            imgsrc: "/images/pen.svg",
            heading: "Marketing",
            bgcolor: "bg-[#2B4D4E4D]",
            description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
        },
        {
            imgsrc: "/images/pc.svg",
            heading: "Photography",
            bgcolor: "bg-[#5B72EE4D]",
            description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
        },
        {
            imgsrc: "/images/pc.svg",
            heading: "Acting",
            bgcolor: "bg-[#9DCCFF4D]",
            description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
        },
        {
            imgsrc: "/images/pc.svg",
            heading: "Business",
            bgcolor: "bg-[#00CBB84D]",
            description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
        },
    ];

    const recommendedCard = [
        {
            imgsrc: '/images/courseRecomFirst.png',
            design : 'Design',
            duretion : '3 Month',
            heading : 'AWS Certified solutions Architect',
            description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            userimgsrc : '/images/blogerImage.png',
            username : 'Lina',
            previousprice : '$100',
            newprice : '$80'
        },
        {
            imgsrc: '/images/blogMarketingThird.png',
            design : 'Design',
            duretion : '3 Month',
            heading : 'AWS Certified solutions Architect',
            description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            userimgsrc : '/images/blogerImage.png',
            username : 'Lina',
            previousprice : '$100',
            newprice : '$80'
        },
        {
            imgsrc: '/images/courseRecomFirst.png',
            design : 'Design',
            duretion : '3 Month',
            heading : 'AWS Certified solutions Architect',
            description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            userimgsrc : '/images/blogerImage.png',
            username : 'Lina',
            previousprice : '$100',
            newprice : '$80'
        },
        {
            imgsrc: '/images/blogMarketingThird.png',
            design : 'Design',
            duretion : '3 Month',
            heading : 'AWS Certified solutions Architect',
            description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            userimgsrc : '/images/blogerImage.png',
            username : 'Lina',
            previousprice : '$100',
            newprice : '$80'
        },
    ]


  return (
    <div>
        {isMobile ? <BlogMobileNavbar /> : <BlogNav />}
        <CourseHeroSection 
        title='Welcome back, ready for your next lesson?'
        card= {heroCourseCard}
        />
        <Categories
        title="Choice favourite course from top category "
        cards={cardData}
        />
        <CourseRecommendedCardSection 
        title='Recommended for you'
        slidebtn = 'true'
        seeall = 'See All'
        bgcolor='bg-[#e8f2fc]'
        card= {recommendedCard}
        />
        <CourseRecommendedCardSection 
        title='Get choice of your course'  
        seeall = 'See All'      
        card={recommendedCard}
        />
        <MemberShipOnlineSection
        heading='Online coaching lessons for remote learning.'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
        btnText='Start learning now'
        headingSec='Online coaching lessons for remote learning.'
        />
        <CourseRecommendedCardSection 
        title='The course in personal development'   
        seeall = 'See All'     
        card={recommendedCard}
        />
        <CourseRecommendedCardSection 
        title='Student are viewing'
        seeall = 'See All'
        bgcolor='bg-[#e8f2fc]'
        card= {recommendedCard}
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