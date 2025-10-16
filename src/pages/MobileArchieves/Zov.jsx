import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Zov = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "ZOV",
        title: "MOBILE APP",
        description: "Protect what matters most. ZOV simplifies insurance management—helping users compare plans, track policies, and file claims with ease, all within a secure and user-friendly mobile app."
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
                           ZOV – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Explore how ZOV is reshaping the insurance experience by bringing clarity, accessibility, and confidence to users who want full control over their protection—anytime, anywhere.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/Insurance App/Insurance Banner.jpeg' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                                ZOV is a modern insurance app concept built to make managing policies and coverage simple, transparent, and stress-free. In a market often defined by complex paperwork and confusion, ZOV bridges the gap between insurers and users through a clean, digital-first experience.
                            </p>
                            <p className='text-xl text-white'>
                                The app allows users to browse and compare multiple insurance options—from health and vehicle to property and travel—while offering instant policy tracking, renewal reminders, and secure digital document storage. Designed for both ease and trust, ZOV puts users in control of their coverage through a seamless and visually clear interface.
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
                        <img src="/images/appsPortfolio/Insurance App/Insurance 5 Screen App/2.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/Insurance App/Insurance 5 Screen App/3.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                               The goal of ZOV was to redefine how people interact with insurance by focusing on clarity, accessibility, and confidence. The mission was to design an app that simplifies complex processes, helping users make informed decisions without confusion or delay.
                            </p>
                            <p className='text-xl text-white mb-5'>
                               From comparing policies to managing claims, every feature was crafted to remove friction and build trust—turning what used to be a tedious process into a smooth, intuitive experience.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/Insurance App/Insurance 5 Screen App/5.png" alt="" />
                            <p className='text-3xl text-white'>
                                While traditional insurance systems are often complicated and slow, ZOV prioritizes simplicity and user empowerment. It transforms the insurance journey into one that’s efficient, transparent, and accessible—helping users feel secure and supported every step of the way.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/Insurance App/Insurance 5 Screen App/1.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/Insurance App/Insurance 5 Screen App/4.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Building trust and protection in a digital-first world.
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

export default Zov