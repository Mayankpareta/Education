import React from 'react'
import { useMediaQuery } from 'react-responsive'
import BlogMobileNavbar from '../components/BlogMobileNav'
import BlogNav from '../components/BlogNav'
import SearchHeroSection from '../components/SearchHeroSection'
import CourseRecommendedCardSection from '../components/CourseRecommendedCardSection'
import SearchAboutLearning from '../components/SearchAboutLearning'
import SearchCreatorSecton from '../components/SearchCreatorSecton'
import SearchStudentSection from '../components/SearchStudentSection'
import CourseDetailOffers from '../components/CourseDetailOffers'
import FooterSection from '../components/FooterSection'

function Index() {

  const isMobile = useMediaQuery({ maxWidth : 1020})

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

  const creatorCard = [
    {
      imgsrc : '/images/meetingSec.png',
      name : 'Jane Cooper',
      description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
    },
    {
      imgsrc : '/images/searchCreactorSec.png',
      name : 'Jane Cooper',
      description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
    },
    {
      imgsrc : '/images/meetingFirst.png',
      name : 'Jane Cooper',
      description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
    },
    {
      imgsrc : '/images/meetingSec.png',
      name : 'Jane Cooper',
      description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
    },
    {
      imgsrc : '/images/meetingSec.png',
      name : 'Jane Cooper',
      description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
    },
    {
      imgsrc : '/images/meetingSec.png',
      name : 'Jane Cooper',
      description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
    },
  ]

  const OfferCard = [
      {
        bgimgsrc: '/images/blogMarketingThird.png',
        discount: '50%',
        heading: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
      },
      {
        bgimgsrc: '/images/courseRecomFirst.png',
        discount: '10%',
        heading: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
      },
      {
        bgimgsrc: '/images/checkoutDiscountThree.png',
        discount: '50%',
        heading: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor '
      },
    ]

  return (
    <div>
        {isMobile ? <BlogMobileNavbar /> : <BlogNav />}
        <SearchHeroSection 
        heroimgsrc= '/images/searchHeroImage.jpg'
        searchbtntext='Search'
        subjectbtntext='Subject'
        partnerbtntext='Partner'
        programbtntext='Program'
        languagebtntext='Language'
        Abaliabilitybtntext='Abaliality'
        learningtypebtntext = 'Learning Type'
        />
        <CourseRecommendedCardSection       
        card={recommendedCard}
        />        
        <CourseRecommendedCardSection       
        card={recommendedCard}
        />        
        <SearchAboutLearning 
        title = 'Know about learning learning platform'
        featureone = 'Free E-book, video & consolation'
        featuretwo = 'Top instructors from around world'
        featurethree = 'Top courses from your team'
        learnbtntext = 'Start learning now'
        rightimgsrc = '/images/searchLearning.png'
        />
        <CourseRecommendedCardSection 
        title='Recommended for you'
        seeall = 'See All'
        bgcolor='bg-[#e8f2fc]'
        card= {recommendedCard}
        />
        <SearchCreatorSecton 
        title = 'Classes tought by real creators'
        seeall = 'See All'
        card = {creatorCard}
        />
        <SearchStudentSection 
        title = 'What our students have to say'
        leftimgsrc='/images/searchStudent.png'
        studentname='Savannah Nguyen'
        studentemailid='tanya.hill@example.com'
        studentreviewone='Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
        studentreviewtwo='Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
        studentreviewthree='Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'
        creatorimgone = '/images/searchCreactorSec.png'
        creatorimgtwo = '/images/meetingSec.png'
        creatorimgthree = '/images/meetingFirst.png'
        creatorimgfor = '/images/meetingThird.png'
        />
        <CourseDetailOffers 
        title = 'Top Education offers and deals are listed here'
        discountBgcolor = 'bg-[#49BBBD]'
        card = {OfferCard}
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