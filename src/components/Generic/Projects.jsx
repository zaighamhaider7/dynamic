import React, { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import ProjectCard from './ProjectCard'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Projects = ({
    className,
    headData = {
        title: "Our Portfolio",
        heading: "WHAT WE DO BEST",
        description: "We don't sell our digital marketing and web design services in a hit-or-miss manner. Instead, we cater to your problems through our targeted services, including:"
    },
    data,
    showAvatars = false
}) => {
    const sliderRef = useRef(null)

    // Force re-render on window resize (React Slick bug fix)
    const [windowWidth, setWindowWidth] = useState(0)
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const sliderSettings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true, 
        arrows: false,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    variableWidth:false
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    variableWidth:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    variableWidth:false
                }
            }
        ]
    }

    const nextSlide = () => {
        sliderRef.current?.slickNext()
    }

    const prevSlide = () => {
        sliderRef.current?.slickPrev()
    }

    return (
        <section className={`projects-section ${className || ''}`}>
            <div className="project-inner overflow-hidden">
                <div className="container" >
                    {/* Header Section */}
                    <div className="projects-header flex flex-col lg:flex-row justify-between gap-4 lg:gap-0" >
                        <div>
                            <div className="projects-badge flex items-center gap-2">
                                <img src="/images/flower-orange.svg" alt="" className="w-[20px] h-[20px]" />
                                <span>{headData?.title}</span>
                            </div>
                            <h2>{headData?.heading}</h2>
                            <p className='max-w-[690px]'>{headData?.description}</p>
                        </div>
                        <div className='flex flex-col items-end'>
                            {showAvatars && (
                                <div className="flex projects-avatar">
                                    <img src='/images/headerUser.webp' />
                                    <img src='/images/headerUser-2.webp' />
                                    <img src='/images/headerUser-3.webp' />
                                    <img src='/images/headerUser-4.webp' />
                                </div>
                            )}
                            <button className="view-all-btn w-fit">View All Projects</button>
                        </div>
                    </div>

                    {/* Slider Section */}
                    <div className="projects-slider relative mt-8 px-4 sm:px-0">
                        {/* Arrows - responsive and outside slider box */}
                        <button
                            onClick={prevSlide}
                            className="absolute  top-1/2 -translate-y-1/2 z-10 
                                       custom-slick-arrow transition text-2xl sm:text-3xl"
                            aria-label="Previous" id='leftArrow'
                        >
                            <FaArrowLeftLong />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute  top-1/2 -translate-y-1/2 z-10 
                                       custom-slick-arrow transition text-2xl sm:text-3xl"
                            aria-label="Next" id='rightArrow'
                        >
                            <FaArrowRightLong />
                        </button>

                        {/* Slider */}
                        <Slider key={windowWidth} ref={sliderRef} {...sliderSettings} >
                            {data?.map((project) => (
                               <div id='bc'>
                                 <div key={project.id} className="project-slide px-2" >
                                    <ProjectCard project={project} />
                                </div>
                               </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
