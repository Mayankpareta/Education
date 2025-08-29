import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CreativeSection from "./components/CreativeSection";
import DesktopNav from "./components/DesktopNav";
import Categories from "./components/Categories";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./components/MobileNav";
import AboutTwoSection from "./components/AboutTwoSection";
import FeatureSection from "./components/FeatureSection";
import CourseSection from "./components/CourseSection";
import TestimonialSection from "./components/TestimonialSection";
import NewsSection from "./components/NewsSection";
import FooterSection from "./components/FooterSection";
 
const cardData = [
  {
    imgsrc: "/images/pen.svg",
    heading: "design",
    bgcolor: "bg-[#2B4D4E4D]",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
  },
  {
    imgsrc: "/images/pc.svg",
    heading: "design",
    bgcolor: "bg-[#5B72EE4D]",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
  },
  {
    imgsrc: "/images/pc.svg",
    heading: "design",
    bgcolor: "bg-[#9DCCFF4D]",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
  },
  {
    imgsrc: "/images/pc.svg",
    heading: "design",
    bgcolor: "bg-[#00CBB84D]",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
  },
  {
    imgsrc: "/images/pen.svg",
    heading: "design",
    bgcolor: "bg-[#2B4D4E4D]",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
  },
  {
    imgsrc: "/images/pc.svg",
    heading: "design",
    bgcolor: "bg-[#5B72EE4D]",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
  },
  {
    imgsrc: "/images/pc.svg",
    heading: "design",
    bgcolor: "bg-[#9DCCFF4D]",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
  },
  {
    imgsrc: "/images/pc.svg",
    heading: "design",
    bgcolor: "bg-[#00CBB84D]",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iure commodi labore blanditiis hic iste?",
  },
];

const courseCard = [
  {
    id: 1,
    title : 'Lorem Ipsum',
    SeeAll: 'SEE ALL',
    innerCard :[
      {
      imgsrc: "/images/courseImage.png",
      heading: "Integer Id Orc Sed Ante Tincidunt",
      description:
        "Cras Convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.",    
      price: '$ 450'  ,
      buttonText: 'EXPLORE'   
      },
      {
      imgsrc: "/images/courseImage.png",
      heading: "Integer Id Orc Sed Ante Tincidunt",
      description:
        "Cras Convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.",   
      price: '$ 450'  ,
      buttonText: 'EXPLORE'    
      }
  ]
  },
  {
    id: 2,
    title : 'Quisque a Consequat',
    SeeAll: 'SEE ALL',
    innerCard :[
      {
      imgsrc: "/images/couserImage2.png",
      heading: "Integer Id Orc Sed Ante Tincidunt",
      description:
        "Cras Convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.", 
      price: '$ 450'  ,
      buttonText: 'EXPLORE'    
      },
      {
      imgsrc: "/images/couserImage2.png",
      heading: "Integer Id Orc Sed Ante Tincidunt",
      description:
        "Cras Convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.",     
      price: '$ 450'  ,
      buttonText: 'EXPLORE'
      }
  ]
  },
  {
    id: 3,
    title : 'Aenean Facilisis',
    SeeAll: 'SEE ALL',
    innerCard :[
      {
      imgsrc: "/images/courseImage.png",
      heading: "Integer Id Orc Sed Ante Tincidunt",
      description:
        "Cras Convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.",    
      price: '$ 450'  ,
      buttonText: 'EXPLORE' 
      },
      {
      imgsrc: "/images/courseImage.png",
      heading: "Integer Id Orc Sed Ante Tincidunt",
      description:
        "Cras Convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.",     
      price: '$ 450'  ,
      buttonText: 'EXPLORE'
      }
  ]
  },
]

const featureData = [
  {
    imgsrc: "/images/feature.png",
    heading: "<span class='text-[#2F327D] text-2xl sm:text-4xl' >A</span> <span class='text-[#00CBB8]text-2xl sm:text-4xl' >user interface</span> <span class='text-[#2F327D] text-2xl sm:text-4xl' >designed for the classroom</span> ",
    p:"Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    p1:"TA’s and presenters can be moved to the front of the class.",
    p2:"Teachers can easily see all students and class data at one time.",
    icon:`<Image src="/images/1.svg" alt="icon" width={20} height={20} />`,
    isImageRight: false
  },
  {
    imgsrc: "/images/featureSecCard.png",
    heading: "<span class='text-[#00CBB8] text-2xl sm:text-4xl' >Tools</span> <span class='text-[#2F327D] text-2xl sm:text-4xl' >For Teachers And Learners</span> ",
    p:"Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
    p1:"",
    p2:"",
    isImageRight: true
  },
  {
    imgsrc: "/images/featureThirdCard.png",
    heading: "<span class='text-[#2F327D] text-2xl sm:text-4xl' >Assessments, </span> <span class='text-[#00CBB8] text-2xl sm:text-4xl' >Quizzes</span> <span class='text-[#2F327D] text-2xl sm:text-4xl' >, Tests</span> ",
    p:"TEasily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
    p1:"",
    p2:"",
    isImageRight: false
  },
  {
    imgsrc: "/images/featureForCard.png",
    heading: "<span class='text-[#00CBB8] text-2xl sm:text-4xl' >Class Management</span> <span class='text-[#2F327D] text-2xl sm:text-4xl' > Tools for Educators</span> ",
    p:"Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
    p1:"",
    p2:"",
    isImageRight: true
  },
  {
    imgsrc: "/images/featureFiveCard.png",
    heading: "<span class='text-[#2F327D] text-2xl sm:text-4xl' >One-on-One</span> <span class='text-[#00CBB8] text-2xl sm:text-4xl' > Discussions</span> ",
    p:"Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
    p1:"",
    p2:"",
    isImageRight: false
  },
];

const newsCard = [
  {
    imgsrc: '/images/newsSubImage.jpg',
    heading: 'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
    description: 'Class Technologies Inc., the company that created Class,...'
  },
   {
    imgsrc: '/images/newsSubImage.jpg',
    heading: 'Zoom’s earliest investors are betting millions on a better Zoom for schools',
    description: 'Zoom was never created to be a consumer product. Nonetheless, the...'
  },
   {
    imgsrc: '/images/newsSubImage.jpg',
    heading: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
    description: 'This year, investors have reaped big financial returns from betting on Zoom...'
  }
]

export default function Home() {

  const isMobile = useMediaQuery({maxWidth : 1020})

  return (
    <div className="flex flex-col ">
      {isMobile ? <MobileNavbar/> : <DesktopNav />}
      <HeroSection
        heading="Online is now much easier"
        subheading="TOTC is an interesting platform that will teach you in a more interactive way"
        buttonText="Join for free"
        iconText="Watch how it works"
      />
      <AboutSection
        heading="Our Success"
        description="Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. "
      />
      <Categories
        title="Choice favourite course from top category "
        cards={cardData}
      />
      <CreativeSection
        heading="What is CREATIVE EDUCATION?"
        description="CREATIVE EDUCATION is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
      />
      <AboutTwoSection 
      title="<span class='text-[#2F327D] text-xl md:text-2xl' >Everything you can do in a physical classroom,</span> <span class='text-[#00CBB8] text-xl md:text-2xl' >you can do with CREATIVE EDUCATION</span>"
      description="TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system."
      imgsrc="/images/aboutTwo.png"/>
      <FeatureSection
      title='<span class="text-[#2F327D] font-bold">Our</span> <span class="text-[#00CBB8] font-bold">Features</span>'
      description='This very extraordinary feature, can make learning activities more efficient'
      features={featureData}
      />
      <CourseSection 
      title="Explore Course"
      description="Ut sed eros finibus, placerat orci id, dapibus."
      cards={courseCard}
      />
      <TestimonialSection 
      title='TESTIMONIAL'
      heading='What They Say?'
      description1='TOTC has got more than 100k positive ratings from our users around the world. '
      description2='Some of the students and teachers were greatly helped by the Skilline.'
      description3='Are you too? Please give your assessment'
      buttonText='Write your assessment'
      imgSrc='/images/testimonialImage.jpg'
      imgText="Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
      imgName='Gloria Rose'
      />
      <NewsSection
      title="Lastest News and Resources"
      description="See the developments that have occurred to TOTC in the world"
      mainImg="/images/NewsMainImage.jpeg"
      heading="Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"
      information='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
      cards={newsCard}
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
  );
}
