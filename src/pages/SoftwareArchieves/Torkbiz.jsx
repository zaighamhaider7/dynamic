import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Torkbiz  = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "TORKBIZ",
        title: "MOBILE APP",
        description: "Empower your business decisions with Torkbiz—a strategic consulting platform that delivers actionable insights in finance, operations, HR, supply chain, and marketing. Built to optimize performance and unlock sustainable growth."
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
                           Torkbiz – Case Study
                        </h2>
                        <p className="text-gray-800">
                           See how Torkbiz transforms complex business challenges into strategic opportunities through smart consulting tools, financial intelligence, and operational excellence.
                        </p>
                    </div>

                    <img src='/images/laptops/5/6.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                                Torkbiz is an advanced business consulting and management software designed to streamline strategic decision-making. By combining analytics, process optimization, and expert consulting frameworks, Torkbiz empowers organizations to identify inefficiencies, reduce costs, and scale effectively.
                            </p>
                            <p className='text-xl text-white'>
                              The platform unites multiple business domains—financial advisory, operational management, HR consulting, supply chain optimization, and marketing strategy—into one cohesive ecosystem. From real-time data visualization to tailored performance recommendations, Torkbiz helps companies make confident, informed decisions that drive measurable results.
                            </p>
                            <p className='text-xl text-white mt-5'>
                                Whether supporting startups or established enterprises, Torkbiz adapts to each organization’s unique needs—delivering clarity, consistency, and control across all business functions.
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
                        <img src="/images/laptops/5/1.png" alt="" className='travelica-img' />
                        <img src="/images/laptops/5/2.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                               The goal of Torkbiz was to create a unified platform that redefines how businesses approach consulting and performance management. Instead of relying on fragmented tools and manual processes, Torkbiz centralizes data, strategy, and insights into a single, easy-to-navigate system.
                            </p>
                            <p className='text-xl text-white mb-5'>
                               By combining professional consulting methodologies with modern technology, the software ensures leaders can analyze key metrics, forecast outcomes, and execute strategies with precision. Torkbiz was designed not just to advise—but to empower businesses to act.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/laptops/5/3.png" alt="" />
                            <p className='text-3xl text-white'>
                             Unlike traditional consulting systems that focus on static analysis, Torkbiz offers a dynamic environment for continuous improvement—enabling smarter decisions, streamlined operations, and stronger performance at every level.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/laptops/5/4.png" alt="" className='travelica-img' />
                            <img src="/images/laptops/5/5.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Transforming insights into intelligent business growth.
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

export default Torkbiz  