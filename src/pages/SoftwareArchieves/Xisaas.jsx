import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Xisaas  = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "XISAAS",
        title: "MOBILE APP",
        description: "Take full control of your digital ecosystem with Xisaas—a powerful QCRM and device management platform that centralizes activity tracking, performance monitoring, and operational control in one intelligent dashboard."
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
                        <h2 className='text-5xl font-semibold text-white'>
                           Xisaas – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Discover how Xisaas empowers businesses to streamline operations, manage devices, and monitor customer relationship activities through a single, data-driven control center.
                        </p>
                    </div>

                    <img src='/images/laptops/8/6.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                                Xisaas is an advanced SaaS-based desktop application designed to unify device management and CRM activity tracking within a single, efficient platform. Built for organizations managing multiple systems and customer interactions, Xisaas provides a seamless way to oversee performance, automate reporting, and enhance productivity.
                            </p>
                            <p className='text-xl text-white'>
                              With its intuitive QCRM Activity Dashboard, users can visualize real-time data, monitor device health, track operational metrics, and manage workflows effortlessly. The software bridges the gap between technical control and customer management—helping teams stay proactive, secure, and organized.
                            </p>
                            <p className='text-xl text-white mt-5'>
                                Whether managing internal infrastructure or client-facing operations, Xisaas ensures every process is transparent, efficient, and data-backed.
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
                        <img src="/images/laptops/8/1.png" alt="" className='travelica-img' />
                        <img src="/images/laptops/8/2.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                              The goal of Xisaas was to create a unified command center for business technology and CRM operations. Instead of switching between disconnected tools, Xisaas integrates device oversight, activity monitoring, and customer management into one streamlined system.
                            </p>
                            <p className='text-xl text-white mb-5'>
                               Its design focuses on visibility, automation, and precision—allowing teams to monitor performance, identify inefficiencies, and take quick action when needed. Xisaas transforms operational complexity into clarity, empowering users to stay in full control of their digital environment.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/laptops/8/3.png" alt="" />
                            <p className='text-3xl text-white'>
                                While most platforms focus on either CRM or device management, Xisaas combines both—creating a smarter, more efficient way to oversee technology and customer operations side by side.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/laptops/8/4.png" alt="" className='travelica-img' />
                            <img src="/images/laptops/8/5.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Total control, total insight—powered by Xisaas.
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

export default Xisaas   