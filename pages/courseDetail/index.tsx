import React from 'react'
import { useMediaQuery } from 'react-responsive'
import BlogNav from '../components/BlogNav'
import BlogMobileNavbar from '../components/BlogMobileNav'
import CourseDetailHeroSection from '../components/CourseDetailHeroSection'
import CourseDetailReview from '../components/CourseDetailReview'
import CourseRecommendedCardSection from '../components/CourseRecommendedCardSection'
import AboutTwoSection from '../components/AboutTwoSection'
import CourseDetailOffers from '../components/CourseDetailOffers'
import FooterSection from '../components/FooterSection'
 
function Index() {

    const isMobile = useMediaQuery({ maxWidth : 1020})

    const personReview = [
      {
        userimgsrc : '/images/blogerImage.png',
        username : 'Lina',
        raiting : '5',
        time : '3 Month',
        description : 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
      },
      {
        userimgsrc : '/images/blogerImage.png',
        username : 'Lina',
        raiting : '5',
        time : '3 Month',
        description : 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
      }
    ]

  const reviewDesplay = [
    {
      star : '5 Star',
      raiting : '4.3',
    },
    {
      star : '4 Star',
      raiting : '3.9',
    },
    {
      star : '3 Star',
      raiting : '4',
    },
    {
      star : '2 Star',
      raiting : '3.2',
    },
    {
      star : '1 Star',
      raiting : '3.7',
    }
  ]

  const marketingCard = [
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

    const OfferCard = [
      {
        bgimgsrc: '/images/Rectangle19.png',
        discount: '50%',
        heading: 'FOR INSTRUCTORS',
        description: 'TOTC’s school management software helps traditional and online schools manage scheduling,'
      },
      {
        bgimgsrc: '/images/Rectangle19.png',
        discount: '50%',
        heading: 'FOR INSTRUCTORS',
        description: 'TOTC’s school management software helps traditional and online schools manage scheduling,'
      },
      {
        bgimgsrc: '/images/Rectangle19.png',
        discount: '50%',
        heading: 'FOR INSTRUCTORS',
        description: 'TOTC’s school management software helps traditional and online schools manage scheduling,'
      },
    ]

  return (
    <div>
        { isMobile ? <BlogMobileNavbar /> : <BlogNav/> }
        <CourseDetailHeroSection 
        heroimgsrc = '/images/courseDetailHeroImage.jpg'
        />
        <CourseDetailReview 
        overviewone ='Overview'
        overviewtwo ='Overview'
        overviewthre ='Overview'
        overviewfor ='Overview'
        averageRating = '4'
        priceImage = '/images/courseDetailHeroImage.jpg'
        mainPrice = '$ 99.99'
        disPrice = '$ 49.65'
        discount = '50%'
        discountPriceTime = '11 hour left at this price'
        buyBtnText = 'Buy Now'
        courseDetailHeading = 'This Course included'
        moneyBack = 'Money Back Guarantee'
        deviceAccess = 'Access on all devices'
        certification = 'Certification of completion'
        moduls = '32 Moduls'
        trainingHeading = 'Training 5 or more people'
        trainingDesc = 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
        shareHeading = 'Share this course'
        raitingDisplay={reviewDesplay}
        personReviews={personReview}
        />
        <CourseRecommendedCardSection
        title='Student are viewing'
        seeall = 'See All'
        bgcolor='bg-[#e8f2fc]'
        card= {marketingCard}
        />
       <AboutTwoSection 
        title="<span class='text-[#2F327D] text-xl md:text-2xl' >Everything you can do in a physical classroom,</span> <span class='text-[#00CBB8] text-xl md:text-xl' > you can do with TOTC</span>"
        description="TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system."
        imgsrc="/images/aboutTwo.png"
        />  
        <CourseDetailOffers
        title = 'Top  Education offers and deals are listed here'
        discountBgcolor='bg-[#ff0000c2]'
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