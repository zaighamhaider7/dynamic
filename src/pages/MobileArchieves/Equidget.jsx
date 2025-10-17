import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Equidget = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "EQUIDGET",
        title: "MOBILE APP",
        description: "Discover technology made simple. Equidget brings all your favorite electronic products—smartphones, gadgets, accessories, and home tech—together in one seamless shopping experience designed for convenience, trust, and speed."
    }

    return (
        <div className='travelica-page'>
            <div className="service-page">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={Headdata} />
                </div>
                <img src="/images/headerCurveLeft.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>

            {/* <TravelicaStudy /> */}
            <div className='travelica-study'>
                <div className="container">
                    <div className="head-cont">
                        <div className="head-pill w-fit">
                            <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                            Our Top Rated Designs
                        </div>
                        <h2 className='text-2xl sm:text-5xl font-semibold text-white'>
                           Equidget – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Learn how Equidget streamlines the digital shopping experience for electronics lovers, helping users find the latest tech, compare options instantly, and shop confidently—all within a beautifully intuitive app.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/Gadget App/Gadget Banner.jpeg' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                              Equidget is a thoughtfully developed mobile app concept that unifies the world of electronics into one easy-to-navigate platform. In a market overflowing with scattered listings and inconsistent pricing, Equidget simplifies discovery by providing verified products, clear categories, and real-time availability.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                            Whether a user is upgrading a smartphone, exploring new gadgets, or outfitting their home with smart tech, Equidget delivers a curated, reliable, and efficient experience. The app combines clean design with powerful functionality, allowing users to browse, compare, and purchase products effortlessly.
                            </p>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 lg:my-28 my-16'>
                        {/* <video
                            src="/images/travelica-vid-1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto lg:col-span-2 travelica-vid"
                        >
                            Your browser does not support the video tag.
                        </video> */}
                        <img src="/images/appsPortfolio/Gadget App/Gadget 5 Screen Apps/1.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/Gadget App/Gadget 5 Screen Apps/2.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               The goal of Equidget was to create a trusted digital environment where technology feels approachable, not overwhelming. The mission was to design a visually modern and user-centric interface that allows users to explore electronics confidently, supported by verified reviews, transparent pricing, and secure checkout.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               From first tap to final purchase, the focus remained on building a journey that’s fast, clear, and satisfying—bridging the gap between tech enthusiasts and quality products.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/Gadget App/Gadget 5 Screen Apps/5.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                             While many e-commerce apps focus on quantity, Equidget emphasizes quality, clarity, and confidence. The app empowers users to discover and shop smarter—offering all electronics in one organized, easy-to-use platform that reflects trust and innovation.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/Gadget App/Gadget 5 Screen Apps/3.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/Gadget App/Gadget 5 Screen Apps/4.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Empowering smarter choices in the digital world.
                        </h3>
                        {/* <video
                            src="/images/travelica-vid-4.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto travelica-vid"
                        >
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
       
    )
}

export default Equidget