import React from 'react'
import { useMediaQuery } from 'react-responsive'
import BlogHeroSection from '../components/BlogHeroSection'
import BlogTachStack from '../components/BlogTachStack'
import BlogCards from '../components/BlogCards'
import BlogMarketingSection from '../components/BlogMarketingSection'
import FooterSection from '../components/FooterSection'
import BlogNav from '../components/BlogNav'
import BlogMobileNavbar from '../components/BlogMobileNav'

function Index() {

  const isMobile = useMediaQuery({maxWidth : 1020})

  const blogTachStackData = [
    {
      id: 1,
      imgsrc: '/images/blogTachStackFirst.png',
      alt: 'UI/UX image'
    },
    {
      id: 2,
      imgsrc: '/images/blogTachStackSec.png',
      alt: 'React image'
    },
    {
      id: 3,
      imgsrc: '/images/blogTachStackthird.png',
      alt: 'PHP image'
    },
    {
      id: 4,
      imgsrc: '/images/blogTachStackfor.png',
      alt: 'javascript image'
    }
  ]

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
      imgsrc: '/images/BlogHeroImage.jpg',
      heading: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      writerImage: '/images/blogerImage.png',
      writerName: 'Lina',
      Description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      seenCount: 251232
    }
  ]

  const marketingCard = [
    {
      id: 1,
      imgsrc: '/images/blogMarketingFirst.jpg',
      duretion: '3 Month',
      heading: 'AWS Certified solutions Architect',
      writerImage: '/images/blogerImage.png',
      writerName: 'Lina',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      priviousPrice: "$ 100",
      price: "$ 80",
    },
    {
      id: 2,
      imgsrc: '/images/blogHeroImage.jpg',
      duretion: '3 Month',
      heading: 'AWS Certified solutions Architect',
      writerImage: '/images/blogerImage.png',
      writerName: 'Lina',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      priviousPrice: "$ 100",
      price: "$ 80",
    },
    {
      id: 3,
      imgsrc: '/images/blogMarketingThird.png',
      duretion: '3 Month',
      heading: 'AWS Certified solutions Architect',
      writerImage: '/images/blogerImage.png',
      writerName: 'Lina',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      priviousPrice: "$ 100",
      price: " $ 80",
    },
    {
      id: 4,
      imgsrc: '/images/blogMarketingFor.jpg',
      duretion: '3 Month',
      heading: 'AWS Certified solutions Architect',
      writerImage: '/images/blogerImage.png',
      writerName: 'Lina',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      priviousPrice: "$ 100",
      price: "$ 80",
    },
  ]

  return (
    <div className="flex flex-col ">
       {isMobile ? <BlogMobileNavbar/> : <BlogNav />}
       <BlogHeroSection 
       title='<span> By Themadbrains in </span><span class="text-[#00CBB8]"> inspiration </span>'
       heading='Why Swift UI Should Be on the Radar of Every Mobile Developer'
       description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
       buttonText='Start learning now'
       imgsrc='/images/BlogHeroImage.jpg'
       />
       <BlogTachStack
       title='Reading blog list'
       techStack={blogTachStackData}
       />
       <BlogCards 
       title='Related Blog'
       cards = {blogCard}
       />
       <BlogMarketingSection
       title='Marketing Articles'
       cards={marketingCard}
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