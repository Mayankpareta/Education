import React from 'react'
import { useMediaQuery } from 'react-responsive'
import BlogMobileNavbar from '../components/BlogMobileNav'
import BlogNav from '../components/BlogNav'
import MemberShipHeroSection from '../components/MemberShipHeroSection'
import MemberShipOnlineSection from '../components/MemberShipOnlineLearningSection'
import MemberShipStudentSection from '../components/MemberShipStudentSection'
import MemberShipTeacherSection from '../components/MemberShipTeacherSection'
import FooterSection from '../components/FooterSection'


function Index() {

    const isMobile = useMediaQuery({maxWidth : 1020})

    const priceCard = [
        {
            title: 'Like',
            price: 'Free',
            time: '/ FOREVER',
            btnText: 'Try for free',
            bgColor: "#f0f0f0",
            description: [
                {
                    description: 'Components-driven system'
                },
                {
                    description: 'Sales-boosting landing pages'
                },
                {
                    description: 'Awesome Feather icons pack'
                },
            ]           
        },
        {
            title: 'Individual',            
            best: 'BEST !',
            price: '$24',
            time: '/ MONTH',
            btnText: 'Regular license',
            bgColor: "#bd9131",
            description: [
                {
                    description: 'Components-driven system'
                },
                {
                    description: 'Sales-boosting landing pages'
                },
                {
                    description: 'Awesome Feather icons pack'
                },
                {
                    description: 'Themed into 3 different styles'
                },
                {
                    description: 'Will help to learn Figma'
                },
            ]           
        },
        {
            title: 'Corporate',
            price: '$12',
            time: '/ EDITOR',
            btnText: 'Extended license',
            bgColor: "#c1f3ff",
            description: [
                {
                    description: 'Components-driven system'
                },
                {
                    description: 'Sales-boosting landing pages'
                },
                {
                    description: 'Awesome Feather icons pack'
                },
                {
                    description: 'Themed into 3 different styles'
                },
            ]           
        },
    ]

    const onlineOption = [
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            title: 'Consectetur adipiscing elit, sed do ',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            title: 'Eiusmod tempos Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
        }
    ]

    const studentCard = [
        {
            imgsrc: '/images/blogerImage.png',
            name: 'Bulkin Simons',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            imgsrc: '/images/blogerImage.png',
            name: 'Bulkin Simons',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            imgsrc: '/images/blogerImage.png',
            name: 'Bulkin Simons',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            imgsrc: '/images/blogerImage.png',
            name: 'Bulkin Simons',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
    ]

    const teacherCard = [
        {
            imgsrc: '/images/blogMarketingThird.png',
            title:'Become a Teacher',
            description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
            btnText: 'Apply a Teacher',
        },
        {
            imgsrc: '/images/blogMarketingThird.png',
            title:'Become a Coursector',
            description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
            btnText: 'Apply a Coursector',
        }
    ]

  return (
    <div>
        { isMobile ? <BlogMobileNavbar /> : <BlogNav />}
        <MemberShipHeroSection
        heading='Affordable pricing'
        card={priceCard}
        />
        <MemberShipOnlineSection
        heading='Online coaching lessons for remote learning.'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'
        btnText='Start learning now'
        headingSec='Online coaching lessons for remote learning.'
        onlineoptions = 'true'
        option={onlineOption}
        />
        <MemberShipStudentSection 
        title='What our students have to say'
        appText='APP is available for free'
        androidBtnText='Android APP'
        iosBtnText='IOS APP'
        card= {studentCard}
        />
        <MemberShipTeacherSection
        card={teacherCard}
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

