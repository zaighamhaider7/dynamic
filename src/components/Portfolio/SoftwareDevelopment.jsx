import React, { useRef } from 'react'
import Slider from 'react-slick'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SoftwareDevelopment = () => {
    const sliderRef = useRef(null)
    const settings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        // variableWidth: true,
        arrows: false,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992, // For tablets and smaller desktops
                settings: {
                    slidesToShow: 3,
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
            img: '/images/laptops/1/Front of Software.png',
            title: 'Sello – Case Study',
            description: "Discover how Sello empowers businesses to monitor sales, manage payouts, and track performance across custom timeframes—all through a single, intuitive dashboard designed for precision and growth.",
            link: '/software-archieves/Sello'
        },
        {
            img: '/images/laptops/2/Front of Software.png',
            title: 'Friday – Case Study',
            description: "Discover how Friday transforms project management by integrating planning, execution, and tracking into one intelligent workspace—empowering teams to collaborate efficiently and deliver results with confidence.",
            link: '/software-archieves/Friday'
        },
        {
            img: '/images/laptops/3/Front of Software.png',
            title: 'Mamsek – Case Study',
            description: "Explore how Mamsek empowers restaurants to manage operations effortlessly—from reservations to revenue tracking—all within a single, intelligent platform.",
            link: '/software-archieves/Mamsek'
        },
        {
            img: '/images/laptops/4/Front of Software.png',
            title: 'Benefits – Case Study',
            description: "Discover how Benefits helps brands grow faster by transforming raw data into actionable intelligence. From conversion tracking to performance analytics, it empowers marketing teams to measure success and maximize ROI with confidence.",
            link: '/software-archieves/Benefits'
        },
        {
            img: '/images/laptops/5/Front of Software.png',
            title: 'Torkbiz – Case Study',
            description: "See how Torkbiz transforms complex business challenges into strategic opportunities through smart consulting tools, financial intelligence, and operational excellence.",
            link: '/software-archieves/Torkbiz'
        },
        {
            img: '/images/laptops/6/Front of Software.png',
            title: 'Bemax – Case Study',
            description: "Discover how Bemax bridges the gap between digital transformation and investment strategy—helping advisors and investors make confident, data-backed decisions in an ever-evolving digital landscape.",
            link: '/software-archieves/Bemax'
        },
    ]
    
    return (
        <div className='software-development-section overflow-hidden'>
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Software Development
                    </div>
                    <h2 className="head-h2 text-[20px] sm:text-[60px]">
                        End-to-End Software Development Excellence marketing <span className="text-orange">case studies</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[710px] mx-auto">
                        From architecture to deployment, we turn complex problems into powerful digital tools. Reliable code. Seamless integration. Real-world results.
                    </p>
                </div>
                <div className="software-development-slider lg:my-16 my-10 relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute md:-left-4 -left-3 top-[calc(50%-60px)] -translate-y-1/2 z-10 custom-slick-arrow"
                        aria-label="Previous"
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute md:-right-4 -right-3 top-[calc(50%-60px)] -translate-y-1/2 z-10 custom-slick-arrow"
                        aria-label="Next"
                    >
                        <FaArrowRightLong />
                    </button>
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className='px-5'>
                                <Link to={item.link} className='software-development-card-sub'>
                                    <div className='software-development-card'>
                                        <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                                        <div className='software-development-card-content'>
                                            <h3 className='text-brand-orange text-center font-space-grotesk text-[30px] lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%] text-center'>{item.title}</h3>
                                            <p className='text-[16px] font-light leading-[22px] text-white/90 text-center'>{item.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>

                <a href="/portfolio/software-development" className="btn-white w-fit mx-auto px-5">
                    View All Projects
                </a>
            </div>
        </div>
    )
}

export default SoftwareDevelopment