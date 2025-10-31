import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { FaArrowLeftLong, FaArrowRightLong, FaXmark } from 'react-icons/fa6'
import { FaDownload } from 'react-icons/fa'

const BASE_URL = 'http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy/';

const CaseStudies = () => {
    const [data, setData] = useState([]);

    const sliderRef = useRef(null)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)

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

    // const data = [
    //     {
    //         img: '/images/case studies/xpress.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Xpress Pro Labs",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/spot.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Spotlimo",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/scott.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Scott Soderstrom",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/mcc.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Middleton-CC",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/dtr.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Dtr-Company",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/bzlap.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Bzlap",
    //         link: '/digital-marketing-case-study'
    //     },
    // ]

    // Keyboard navigation for lightbox
    
        useEffect(() => {
            fetch(`${BASE_URL}/getCases.php`)
            .then(res => res.json())
            .then(res => {
                if (Array.isArray(res)) {
                    setData(res.slice(0, 6));
                } else {
                    console.error('Invalid response:', res);
                }
            })
            .catch(console.error);
        }, []);


        useEffect(() => {
            if (!lightboxOpen || data.length === 0) return;

            const handleKeyDown = (event) => {
                if (event.key === 'ArrowRight') {
                    setLightboxIndex((prev) => (prev + 1) % data.length);
                } else if (event.key === 'ArrowLeft') {
                    setLightboxIndex((prev) => (prev - 1 + data.length) % data.length);
                } else if (event.key === 'Escape') {
                    setLightboxOpen(false);
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, [lightboxOpen, data]);





    return (
        <div className='case-studies-section overflow-hidden'>
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Our Top Rated Designs
                    </div>
                    <h2 className="head-h2 text-[20px] sm:text-[60px]">
                        digital marketing <span className="text-orange">case studies</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        Dive into real-world examples of how we’ve helped brands boost visibility, drive conversions, and scale with confidence.
                    </p>
                </div>

                <div className="case-slider lg:my-16 my-10 relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute md:-left-12 -left-4 top-[calc(50%-60px)] -translate-y-1/2 z-10 custom-slick-arrow"
                        aria-label="Previous"
                    >
                        <FaArrowLeftLong />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute md:-right-12 -right-4 top-[calc(50%-60px)] -translate-y-1/2 z-10 custom-slick-arrow"
                        aria-label="Next"
                    >
                        <FaArrowRightLong />
                    </button>
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className='px-5'>
                                <div className='case-study-card'>
                                    <img
                                        src={`http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy/${item.image}`}
                                        alt={item.title}
                                        className='w-full h-full object-cover cursor-pointer'
                                        onClick={() => { setLightboxIndex(index); setLightboxOpen(true) }}
                                    />
                                    <div className='case-study-card-content'>
                                        <h3 className='text-brand-orange font-space-grotesk text-lg lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%] text-center'>{item.title}</h3>
                                        <p className='fw-thin tracking-wide text-[14px] text-gray-500 text-center'>{item.description}</p>
                                        {/* <a href={item.link} className='btn-white'>
                                    View Case Study
                                </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <a href="/portfolio/digital-marketing" className="btn-white w-fit mx-auto px-5">
                View All Projects
            </a>

            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center"
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Close */}
                    <div className="absolute top-4 right-4" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            aria-label="Close"
                            className="custom-slick-arrow"
                            onClick={() => setLightboxOpen(false)}
                        >
                            <FaXmark className="text-xl" />
                        </button>
                    </div>

                    {/* Prev */}
                    <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            aria-label="Previous image"
                            className="custom-slick-arrow"
                            onClick={() => setLightboxIndex((prev) => (prev - 1 + data.length) % data.length)}
                        >
                            <FaArrowLeftLong className="text-xl" />
                        </button>
                    </div>

                    <div className="max-w-[90vw] max-h-[80vh] p-2" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={`http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy/${data[lightboxIndex].image}`}
                            alt={data[lightboxIndex].title}
                            className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
                        />
                    </div>

                    {/* Next */}
                    <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            aria-label="Next image"
                            className="custom-slick-arrow"
                            onClick={() => setLightboxIndex((prev) => (prev + 1) % data.length)}
                        >
                            <FaArrowRightLong className="text-xl" />
                        </button>
                    </div>

                    {/* Download */}
                    <div className="absolute bottom-4 right-4" onClick={(e) => e.stopPropagation()}>
                        <a
                            href={`http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy/${data[lightboxIndex].image}`}
                            download
                            aria-label="Download image"
                            className="custom-slick-arrow inline-flex items-center justify-center"
                        >
                            <FaDownload className="text-lg" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CaseStudies