import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Sello = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "SELLO",
        title: "SOFTWARE",
        description: "Manage your business with clarity and control. Sello is an all-in-one sales dashboard that provides real-time insights, performance tracking, and seamless communication—helping sellers stay informed and in command."
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
                           Sello – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Discover how Sello empowers businesses to monitor sales, manage payouts, and track performance across custom timeframes—all through a single, intuitive dashboard designed for precision and growth.
                        </p>
                    </div>

                    <img src='/images/laptops/1/LAPTOP MOCKUP6.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                Sello is a comprehensive desktop software concept designed to simplify how sellers analyze, manage, and optimize their business performance. With multiple platforms and complex data sources, understanding sales trends can often become overwhelming. Sello solves this by consolidating everything into one smart, data-driven dashboard.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                               The platform allows users to view daily, weekly, monthly, and custom sales analytics, monitor product performance, and track payouts in real time. It also includes integrated messaging and overview features that help users stay connected and make quick, informed decisions.
                            </p>
                            <p className='text-md sm:text-xl text-white mt-5'>
                                By combining advanced analytics with a clean and modern interface, Sello transforms sales monitoring into an engaging, efficient experience.
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
                        <img src="/images/laptops/1/LAPTOP MOCKUP2.png" alt="" className='travelica-img' />
                        <img src="/images/laptops/1/LAPTOP MOCKUP4.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               The goal of Sello was to create a modern, insight-driven tool that turns complex data into clarity. The mission centered on designing a dashboard that’s not only powerful but also easy to navigate—allowing users to visualize performance, respond to messages, and manage payouts effortlessly.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               Each feature was crafted to improve visibility, enhance productivity, and simplify workflow, giving sellers full control over their operations from one centralized platform.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/laptops/1/LAPTOP MOCKUP5.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                                While most sales dashboards focus solely on numbers, Sello focuses on understanding. It brings together insights, communication, and analytics in a way that helps users make confident decisions, streamline operations, and grow with data-backed precision.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/laptops/1/LAPTOP MOCKUP3.png" alt="" className='travelica-img' />
                            <img src="/images/laptops/1/LAPTOP MOCKUP1.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Empowering sellers through data, design, and simplicity.
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

export default Sello 