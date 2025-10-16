import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const InsightPro  = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "INSIGHT PRO",
        title: "MOBILE APP",
        description: "Unlock smarter decision-making with Insight Pro—a modern consultation management platform that empowers professionals to deliver expert guidance, manage clients efficiently, and build lasting trust through data-driven insights."
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
                           Insight Pro – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Explore how Insight Pro revolutionizes the way consultants operate—integrating scheduling, communication, analytics, and reporting into one streamlined platform that enhances both client experience and business performance.
                        </p>
                    </div>

                    <img src='/images/laptops/7/6.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                                Insight Pro is a comprehensive consultation software designed to simplify the way professionals manage client relationships, deliver insights, and monitor outcomes. Built for consultants, coaches, and advisory teams, it centralizes scheduling, documentation, and communication—ensuring a seamless consultation process from start to finish.
                            </p>
                            <p className='text-xl text-white'>
                              The platform enables consultants to store session histories, track performance metrics, and generate actionable reports—all in a secure and user-friendly environment. With its intuitive dashboard and intelligent tools, Insight Pro helps professionals focus on what matters most: delivering real value and measurable results to their clients.
                            </p>
                            <p className='text-xl text-white mt-5'>
                                Whether for business strategy, legal advice, financial planning, or personal coaching, Insight Pro adapts to every consultation model with precision and ease.
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
                        <img src="/images/laptops/7/1.png" alt="" className='travelica-img' />
                        <img src="/images/laptops/7/2.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                              The goal of Insight Pro was to create a system that transforms traditional consultation into a dynamic, data-backed experience. Instead of relying on fragmented tools and manual tracking, Insight Pro brings everything together—client management, communication, and performance analysis—in one efficient solution.
                            </p>
                            <p className='text-xl text-white mb-5'>
                               By merging professional expertise with digital intelligence, Insight Pro empowers consultants to enhance their productivity, streamline operations, and deliver consistent value across every engagement.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/laptops/7/3.png" alt="" />
                            <p className='text-3xl text-white'>
                                Unlike generic scheduling or CRM tools, Insight Pro is purpose-built for consultants—offering a complete framework to manage clients, sessions, and insights with professionalism and precision.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/laptops/7/4.png" alt="" className='travelica-img' />
                            <img src="/images/laptops/7/5.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Elevating consultation through clarity, connection, and insight.
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

export default InsightPro   