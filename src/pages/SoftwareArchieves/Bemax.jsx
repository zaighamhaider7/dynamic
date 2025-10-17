import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Bemax  = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "BEMAX",
        title: "SOFTWARE",
        description: "Empowering innovation through digital intelligence. Bemax is a cutting-edge digital agency platform built for investors and advisors—offering smart solutions, data insights, and tools that drive digital growth and strategic investment success."
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
                           Bemax – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Discover how Bemax bridges the gap between digital transformation and investment strategy—helping advisors and investors make confident, data-backed decisions in an ever-evolving digital landscape.
                        </p>
                    </div>

                    <img src='/images/laptops/6/6.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                Bemax is a sophisticated digital agency software crafted specifically for investors and financial advisors seeking to leverage technology for smarter investments and brand growth. The platform combines digital strategy, analytics, and advisory tools to create a unified workspace for data-driven decision-making.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                              With Bemax, users can track digital performance, evaluate portfolio potential, manage campaigns, and forecast investment outcomes—all from one streamlined dashboard. Its user-centric design and AI-supported analytics simplify complex financial data, enabling advisors to translate insights into actionable business opportunities.
                            </p>
                            <p className='text-md sm:text-xl text-white mt-5'>
                                By blending innovation with precision, Bemax empowers professionals to navigate the digital economy with confidence and clarity.
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
                        <img src="/images/laptops/6/1.png" alt="" className='travelica-img' />
                        <img src="/images/laptops/6/2.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                              The goal of Bemax was to build a next-generation agency solution that helps investors and advisors adapt to the digital era. The vision was to create a centralized hub where financial intelligence, marketing strategy, and digital performance intersect—making it easier to identify opportunities, reduce risk, and optimize returns.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               Through an intuitive interface and advanced analytics, Bemax turns complex digital data into clear insights—allowing advisors to provide stronger recommendations and investors to make smarter decisions.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/laptops/6/3.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                                While traditional advisory tools focus only on numbers, Bemax combines strategy, digital marketing, and analytics to deliver a complete growth ecosystem for modern investors and advisors.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/laptops/6/4.png" alt="" className='travelica-img' />
                            <img src="/images/laptops/6/5.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Powering digital growth through smart investment insight.
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

export default Bemax  