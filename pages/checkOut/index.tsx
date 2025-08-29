import React from 'react'
import { useMediaQuery } from 'react-responsive'
import BlogMobileNavbar from '../components/BlogMobileNav'
import BlogNav from '../components/BlogNav'
import CheckOutHeroSection from '../components/CheckOutHeroSection'
import CourseDetailOffers from '../components/CourseDetailOffers'
import FooterSection from '../components/FooterSection'

function Index() {

  const isMobile = useMediaQuery({ maxWidth : 1020})

  const summaryCard = [
    {
      imgsrc: '/images/checkoutSummary.jpg',
      heading: 'adipising elit, sed do eiusmod tempor',
      description: 'Lorem ipsum dollar...',
      price: 24.69
    },
    {
      imgsrc: '/images/checkoutSummary.jpg',
      heading: 'adipising elit, sed do eiusmod tempor',
      description: 'Lorem ipsum dollar...',
      price: 24.69
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
        { isMobile ? <BlogMobileNavbar /> : <BlogNav />}
        <CheckOutHeroSection 
        heading='Checkout'
        subHeading='Cart Type'
        paypalsrc= '/images/paypal.png'
        americanExpressSrc='/images/americanExpress.jpg'
        visaSrc='/images/visa.png'
        mastercardSrc='/images/master.png'
        cardName = 'Name on Card'
        cardNumber = 'Card Number'
        expiration = 'Expiration Date ( MM/YY )'
        cvc= 'CVC'
        save = 'Save my information for faster checkout'
        confirmBtnText = 'Confirm Payment'
        summaryCard={summaryCard}
        SubtotalText= 'Subtotal'
        CouponText = 'Coupon Discount'
        taxText = 'Tax'
        TotalText = 'Total'
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