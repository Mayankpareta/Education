import React from 'react'
import { useMediaQuery } from 'react-responsive'
import BlogMobileNavbar from '../components/BlogMobileNav'
import BlogNav from '../components/BlogNav'
import LiteratureCourseHeroSection from '../components/LiteratureCourseHeroSection'
import LiteratureBookSection from '../components/LiteratureBookSection'
import FooterSection from '../components/FooterSection'

function Index() {

  const isMobile = useMediaQuery({ maxWidth : 1020})  
    
  const bookCard = [
    {
      imgsrc : '/images/bookCardFirst.jpg',
      bookname : 'All Benefits of PLUS',
      bookprice : '$24'
    },
    {
      imgsrc : '/images/bookCardSec.jpg',
      bookname : 'All Benefits of PLUS',
      bookprice : '$24'
    },
    {
      imgsrc : '/images/bookCardThird.jpg',
      bookname : 'All Benefits of PLUS',
      bookprice : '$24'
    },
    {
      imgsrc : '/images/bookCardFour.jpg',
      bookname : 'All Benefits of PLUS',
      bookprice : '$24'
    },
    {
      imgsrc : '/images/bookCardFive.png',
      bookname : 'All Benefits of PLUS',
      bookprice : '$24'
    },
    {
      imgsrc : '/images/bookCardSec.jpg',
      bookname : 'All Benefits of PLUS',
      bookprice : '$24'
    }
  ]

  return (
    <div>
        {isMobile ? <BlogMobileNavbar /> : <BlogNav />}
        <LiteratureCourseHeroSection
        bgimgsrc = '/images/literatureHeroBGImage.jpg'
        userimgsrc = '/images/meetingFirst.png'
        username = 'John Anderson'
        universityposition = 'Assistant Professor at Mcmaster University'
        description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud'
        enrollbtntext = 'Enroll Now'
        rating = '4.9 instructor Rating'
        viewstudents = '1,592 Students'
        course = 'Courses'
        />
        <LiteratureBookSection 
        aboutbtntext = 'About'
        coursebtntext = 'Course'
        notesbtntext = 'Notes'
        projectbtntext = 'Project'
        podcastbtntext = 'Podcast'
        bookbtntext = 'Book'
        reviewbtntext = 'Review'
        coursetitle = 'Literature course'
        bookcard = {bookCard}
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