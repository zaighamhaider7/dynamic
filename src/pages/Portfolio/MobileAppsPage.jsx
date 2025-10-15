import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'
import { Link } from 'react-router-dom'

const MobileAppsPage = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "MOBILE",
        title: "APPLICATIONS",
        description: "Feeling invisible online? A well-designed website gets you noticed and builds trust and credibility. See how we’ve transformed businesses with growth-driven website designs. "
    }

    const data = [
        {
            img: '/images/appsPortfolio/Travel App/Travel Guide Tourism App.png',
            title: 'Travelica – Case Study',
            description: "Dive into real-world examples of how we've helped brands boost visibility, drive conversions, and scale with confidence.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/Salon App/Beauty Salon App.png',
            title: 'Salona – Case Study',
            description: "Explore how Salona redefines convenience and trust in the beauty industry by helping users find, book, and enjoy salon services effortlessly while empowering salons to grow their client base with confidence.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/Gadget App/Gadget Electronic App.png',
            title: 'Equidget – Case Study',
            description: "Learn how Equidget streamlines the digital shopping experience for electronics lovers, helping users find the latest tech, compare options instantly, and shop confidently—all within a beautifully intuitive app.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/To do Task App/To Do Task Manager App.png',
            title: 'Organizo – Case Study',
            description: "Discover how Organizo transforms everyday task management by helping individuals and teams streamline goals, stay focused, and achieve more—without sacrificing balance or clarity.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/Fashion App/Fashion-Clothing-App.png',
            title: 'Fashiona – Case Study',
            description: "See how Fashiona transforms digital fashion retail by blending trend discovery with seamless eCommerce, giving users a personalized and inspiring way to shop for what suits them best.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/Insurance App/Insurance App.png',
            title: 'ZOV – Case Study',
            description: "Explore how ZOV is reshaping the insurance experience by bringing clarity, accessibility, and confidence to users who want full control over their protection—anytime, anywhere.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/Music App/Music App.png',
            title: 'Soundra – Case Study',
            description: "See how Soundra redefines the music experience by combining smart discovery with social interaction—helping users explore new sounds, share favorites, and connect through the universal language of music., accessibility, and confidence to users who want full control over their protection—anytime, anywhere.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/News App/News Mobile App.png',
            title: 'TrueScope – Case Study',
            description: "Discover how TrueScope reshapes digital journalism by providing trustworthy, fast, and engaging news experiences—empowering users to stay informed without the noise.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/Language App/Language Translation App.png',
            title: 'LinguaGo – Case Study',
            description: "See how LinguaGo empowers users to learn and speak new languages confidently through AI-powered voice recognition, instant feedback, and immersive conversational practice.",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/appsPortfolio/Parking App/Parking Finder App.png',
            title: 'Parkixg – Case Study',
            description: "Explore how Parkixg redefines urban mobility by simplifying the parking experience—helping users find, book, and manage parking spaces instantly with reliability and peace of mind.",
            link: '/digital-marketing-case-study'
        },
    ]

    return (
        <>
            <div className="service-page">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={Headdata} />
                </div>
                <img src="/images/headerCurveLeft.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>

            <div className='mob-archieve-section pb-32'>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-12 gap-8">
                        {
                            data?.map((item, index) => {
                                return (
                                    <Link to="/mob-archieves/travelica" className='mobile-app-card-sub'>
                                        <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                                        <div className='mobile-app-card-content text-center'>
                                            <h3 className='text-brand-orange font-space-grotesk text-lg lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%]'>{item.title}</h3>
                                            <p className='font-space-grotesk text-[14px] text-white'>{item.description}</p>
                                            {/* <a href={item.link} className='btn-white'>
                            View Case Study
                        </a> */}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export { MobileAppsPage }