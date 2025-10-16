import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Organizo = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "ORGANIZO",
        title: "MOBILE APP",
        description: "Stay organized, stay ahead. Organizo helps users manage tasks, plan schedules, and maintain a balanced lifestyle through one smart, intuitive platform built for productivity and peace of mind."
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
                           Organizo – Case Study
                        </h2>
                        <p className="text-gray-800">
                          Discover how Organizo transforms everyday task management by helping individuals and teams streamline goals, stay focused, and achieve more—without sacrificing balance or clarity.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/To do Task App/To do Task Banner.jpeg' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                              Organizo is a powerful mobile app concept crafted to simplify how users organize their personal and professional lives. In an era where multitasking and information overload are common, Organizo offers a structured yet flexible environment that combines to-do lists, calendars, reminders, and collaboration tools into one elegant solution.
                            </p>
                            <p className='text-xl text-white'>
                            The app empowers users to take control of their time—whether managing a work project, tracking personal goals, or scheduling family events. With its minimalist design, seamless sync, and intuitive flow, Organizo ensures users stay productive and focused without feeling overwhelmed.
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
                        <img src="/images/appsPortfolio/To do Task App/to-do-task-5 Screen App/2.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/To do Task App/to-do-task-5 Screen App/3.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                               The goal of Organizo was to create a modern productivity tool that blends functionality with simplicity. The design centers around clarity and usability—enabling users to prioritize tasks, set reminders, and visualize progress effortlessly.
                            </p>
                            <p className='text-xl text-white mb-5'>
                               By integrating personal and professional organization into a single platform, Organizo encourages users to achieve more with less stress, fostering both productivity and well-being through smart planning and thoughtful design.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/To do Task App/to-do-task-5 Screen App/5.png" alt="" />
                            <p className='text-3xl text-white'>
                             Most productivity apps focus solely on task lists or calendars. Organizo takes it further by merging time management with mindfulness, helping users maintain balance while achieving their goals. It’s not just about getting things done—it’s about getting them done with purpose and ease.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/To do Task App/to-do-task-5 Screen App/1.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/To do Task App/to-do-task-5 Screen App/4.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Redefining productivity through balance and simplicity.
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

export default Organizo