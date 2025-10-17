import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Benefits  = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "BENEFITS",
        title: "SOFTWARE",
        description: "Unlock growth with Benefits—a powerful analytics platform designed to help businesses make smarter, data-driven decisions. Track conversions, refine campaigns, and supercharge your marketing performance with precision insights."
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
                           Benefits – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Discover how Benefits helps brands grow faster by transforming raw data into actionable intelligence. From conversion tracking to performance analytics, it empowers marketing teams to measure success and maximize ROI with confidence.
                        </p>
                    </div>

                    <img src='/images/laptops/4/6.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                Benefits is a modern analytics and marketing performance software that enables businesses to turn data into growth. Built for digital-first organizations, Benefits integrates seamlessly with Google Analytics and other key marketing tools to provide real-time insights into customer behavior, conversions, and campaign effectiveness.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                              The platform allows marketers to visualize trends, identify opportunities, and optimize strategies—all from one centralized dashboard. With intelligent automation, custom tracking, and conversion insights, Benefits eliminates guesswork and empowers teams to make informed, measurable decisions.
                            </p>
                            <p className='text-md sm:text-xl text-white mt-5'>
                                From startups to large enterprises, Benefits simplifies analytics and helps teams focus on what matters most—driving results.
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
                        <img src="/images/laptops/4/1.png" alt="" className='travelica-img' />
                        <img src="/images/laptops/4/2.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               The goal of Benefits was to bridge the gap between marketing efforts and measurable outcomes. Businesses often struggle with scattered data and unclear reporting, leading to missed opportunities. Benefits was designed to change that—by combining intuitive reporting, conversion tracking, and data visualization into a single, powerful system.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               By creating a clear and cohesive view of performance, Benefits enables businesses to move beyond assumptions and into strategic, results-driven growth.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/laptops/4/3.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                              While traditional analytics tools overwhelm users with data, Benefits simplifies it—turning complex metrics into clear insights that inspire confident decision-making and consistent growth.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/laptops/4/4.png" alt="" className='travelica-img' />
                            <img src="/images/laptops/4/5.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Empowering smarter marketing through data-driven clarity.
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

export default Benefits  