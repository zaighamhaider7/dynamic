import React, { useRef } from 'react'
import Slider from 'react-slick'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const MobileApps = () => {
    const sliderRef = useRef(null)
    const settings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        // variableWidth: true,
        arrows: false,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992, // For tablets and smaller desktops
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            },
            {
                breakpoint: 576, // For mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ]
    };
    const nextSlide = () => {
        sliderRef.current?.slickNext()
    }
    const prevSlide = () => {
        sliderRef.current?.slickPrev()
    }
    
    const data = [
        {
            img: '/images/appsPortfolio/Travel App/Travel Guide Tourism App.png',
            title: 'Travelica – Case Study',
            description: "Dive into real-world examples of how we've helped brands boost visibility, drive conversions, and scale with confidence.",
            link: '/mob-archieves/travelica'
        },
        {
            img: '/images/appsPortfolio/Salon App/Beauty Salon App.png',
            title: 'Salona – Case Study',
            description: "Explore how Salona redefines convenience and trust in the beauty industry by helping users find, book, and enjoy salon services effortlessly while empowering salons to grow their client base with confidence.",
            link: '/mob-archieves/salona'
        },
        {
            img: '/images/appsPortfolio/Gadget App/Gadget Electronic App.png',
            title: 'Equidget – Case Study',
            description: "Learn how Equidget streamlines the digital shopping experience for electronics lovers, helping users find the latest tech, compare options instantly, and shop confidently—all within a beautifully intuitive app.",
            link: '/mob-archieves/equidget'
        },
        {
            img: '/images/appsPortfolio/To do Task App/To Do Task Manager App.png',
            title: 'Organizo – Case Study',
            description: "Discover how Organizo transforms everyday task management by helping individuals and teams streamline goals, stay focused, and achieve more—without sacrificing balance or clarity.",
            link: '/mob-archieves/Organizo'
        },
        {
            img: '/images/appsPortfolio/Fashion App/Fashion-Clothing-App.png',
            title: 'Fashiona – Case Study',
            description: "See how Fashiona transforms digital fashion retail by blending trend discovery with seamless eCommerce, giving users a personalized and inspiring way to shop for what suits them best.",
            link: '/mob-archieves/Fashiona'
        },
        {
            img: '/images/appsPortfolio/Insurance App/Insurance App.png',
            title: 'ZOV – Case Study',
            description: "Explore how ZOV is reshaping the insurance experience by bringing clarity, accessibility, and confidence to users who want full control over their protection—anytime, anywhere.",
            link: '/mob-archieves/Zov'
        },
    ]

    return (
        <div className='mobile-apps-section overflow-hidden'>
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Mobile App
                    </div>
                    <h2 className="head-h2 text-[20px] sm:text-[60px]">
                        Transforming Ideas into Seamless <span className="text-orange">Mobile Experiences</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[710px] mx-auto">
                        Our mobile app process turns ideas into elegant, high-performing digital products. We focus on clean design, smooth interactions, and measurable results.
                    </p>
                </div>
                <div className="mobile-apps-slider lg:my-16 my-10 relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute md:-left-8 -left-3 top-[calc(50%-60px)] -translate-y-1/2 z-10 custom-slick-arrow"
                        aria-label="Previous"
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute md:-right-8 -right-3 top-[calc(50%-60px)] -translate-y-1/2 z-10 custom-slick-arrow"
                        aria-label="Next"
                    >
                        <FaArrowRightLong />
                    </button>
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className='px-5'>
                                <Link to={item.link} className='mobile-app-card-sub'>
                                    <div className='mobile-app-card'>
                                        <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                                        <div className='mobile-app-card-content'>
                                            <h3 className='text-center text-brand-orange font-space-grotesk text-[30px] lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%] text-center'>{item.title}</h3>
                                            {/* <p className='fw-thin tracking-wide text-[14px] text-gray-500 text-center'>{item.description}</p> */}
                                            <p className='text-[16px] font-light leading-[22px] text-white/90 text-center'>{item.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
                <a href="/portfolio/mobile-apps" className="btn-white w-fit mx-auto px-5">
                    View All Projects
                </a>
            </div>
        </div>
    )
}

export default MobileApps