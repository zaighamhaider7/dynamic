import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Mamsek = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "MAMSEK",
        title: "SOFTWARE",
        description: "Streamline your restaurant operations with Mamsek—an all-in-one system for order management, reservations, delivery tracking, and accounting. Simplify every process, boost efficiency, and deliver seamless dining experiences every time."
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
                           Mamsek – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Explore how Mamsek empowers restaurants to manage operations effortlessly—from reservations to revenue tracking—all within a single, intelligent platform.
                        </p>
                    </div>

                    <img src='/images/laptops/3/6.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                Mamsek is a comprehensive restaurant management software designed to unify every aspect of modern dining operations. Whether managing in-house reservations, online orders, deliveries, or financial accounts, Mamsek provides restaurant owners with full control and clarity.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                              The platform simplifies complex workflows by integrating real-time order updates, delivery coordination, and automated accounting in one dashboard. It not only improves operational efficiency but also enhances customer satisfaction by ensuring faster service and accurate communication.
                            </p>
                            <p className='text-md sm:text-xl text-white mt-5'>
                                With its intuitive interface and powerful analytics, Mamsek enables restaurant owners to make smarter, data-driven decisions that lead to consistent growth and better guest experiences.
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
                        <img src="/images/laptops/3/1.png" alt="" className='travelica-img' />
                        <img src="/images/laptops/3/4.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               The goal of Mamsek was to create a seamless digital solution that eliminates the fragmentation common in restaurant operations. The objective was to bring together reservations, order processing, delivery tracking, and accounting under one unified, easy-to-manage system.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               By designing an intuitive interface supported by smart automation and real-time insights, Mamsek ensures restaurant managers can focus on what truly matters—delighting guests and growing their business.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/laptops/3/5.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                               Unlike traditional systems that handle only one part of the restaurant workflow, Mamsek delivers a complete operational ecosystem. It bridges front-end service and back-end management, transforming complexity into clarity.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/laptops/3/3.png" alt="" className='travelica-img' />
                            <img src="/images/laptops/3/2.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Redefining restaurant management—one order at a time.
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

export default Mamsek 