import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const LinguaGo = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "LINGUA GO",
        title: "MOBILE APP",
        description: "Speak, learn, and connect. LinguaGo makes language learning effortless with real-time voice input, smart translation, and interactive lessons that bring communication to life—anytime, anywhere."
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
                           LinguaGo – Case Study
                        </h2>
                        <p className="text-gray-800">
                           See how LinguaGo empowers users to learn and speak new languages confidently through AI-powered voice recognition, instant feedback, and immersive conversational practice.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/Language App/Language Banner.jpeg' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                                LinguaGo is an intelligent mobile app concept designed to make mastering new languages more natural and engaging. In a world where communication bridges cultures, LinguaGo leverages technology to create a personalized learning experience that feels intuitive and human.
                            </p>
                            <p className='text-xl text-white'>
                                Users can practice speaking through real-time voice input, receive instant pronunciation feedback, and engage in guided conversations powered by advanced speech recognition. The app supports multiple languages and adapts to individual learning styles—making it ideal for travelers, students, and professionals alike.
                            </p>
                            <p className='text-xl text-white mt-5'>
                                With its clean design and interactive learning flow, LinguaGo transforms language learning from memorization into meaningful communication.
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
                        <img src="/images/appsPortfolio/Language App/Language 5 Screen App/2.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/Language App/Language 5 Screen App/3.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                               The goal of LinguaGo was to create a platform that merges technology with human interaction. The app focuses on breaking down language barriers by offering accurate, responsive, and enjoyable learning experiences through voice-driven engagement.
                            </p>
                            <p className='text-xl text-white mb-5'>
                               Every feature—from pronunciation analysis to real-time translation—was built to help users build confidence, fluency, and connection. LinguaGo turns learning into a journey of exploration, understanding, and self-expression.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/Language App/Language 5 Screen App/4.png" alt="" />
                            <p className='text-3xl text-white'>
                                While most language apps focus on reading and repetition, LinguaGo emphasizes speaking and interaction. It helps users communicate naturally and confidently through an experience that’s smart, adaptive, and truly conversational.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/Language App/Language 5 Screen App/1.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/Language App/Language 5 Screen App/5.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Breaking language barriers through intelligent communication.
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

export default LinguaGo 