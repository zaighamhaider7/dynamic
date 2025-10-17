import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Friday = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "FRIDAY",
        title: "SOFTWARE",
        description: "Plan smarter, work faster. Friday helps teams plan, execute, and track projects of any size—combining collaboration, automation, and clarity to keep every workflow on schedule and in sync."
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
                           Friday – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Discover how Friday transforms project management by integrating planning, execution, and tracking into one intelligent workspace—empowering teams to collaborate efficiently and deliver results with confidence.
                        </p>
                    </div>

                    <img src='/images/laptops/2/6.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                Friday is a powerful desktop software concept built to redefine how teams organize and complete projects. In fast-paced work environments where coordination is key, Friday serves as the central hub for planning, execution, and performance tracking.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                               The platform allows users to create structured project plans, assign tasks, automate repetitive processes, and monitor progress in real time. From small internal initiatives to large-scale operations, Friday adapts to any workflow—offering flexibility without sacrificing control.
                            </p>
                            <p className='text-md sm:text-xl text-white mt-5'>
                                With its clean design, smart automation, and collaborative tools, Friday helps teams stay focused, aligned, and productive—no matter where they work from.
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
                        <img src="/images/laptops/2/1.png" alt="" className='travelica-img' />
                        <img src="/images/laptops/2/3.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               The goal of Friday was to design an intelligent workspace that unites teams and simplifies project management. The mission was to eliminate scattered tools and create one central platform where everything—from ideas to execution—flows seamlessly.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               Each feature was developed to enhance transparency, streamline communication, and boost accountability. Whether managing deadlines or automating updates, Friday ensures that every project moves forward efficiently and every team member stays on the same page.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/laptops/2/4.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                                While many project tools complicate workflows, Friday simplifies them. It bridges planning, collaboration, and automation—allowing teams to focus less on managing tasks and more on achieving goals.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/laptops/2/2.png" alt="" className='travelica-img' />
                            <img src="/images/laptops/2/5.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Turning every project into a productive success story.
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

export default Friday 