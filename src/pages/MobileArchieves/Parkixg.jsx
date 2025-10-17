import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Parkixg = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "PARKIXG",
        title: "MOBILE APP",
        description: "Park smarter, not harder. Parkixg makes parking simple with real-time availability, secure booking options, and support for multiple vehicle types—all in one seamless, easy-to-use app."
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
                           Parkixg – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Explore how Parkixg redefines urban mobility by simplifying the parking experience—helping users find, book, and manage parking spaces instantly with reliability and peace of mind.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/Parking App/Parking Banner.jpeg' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                Parkixg is an innovative mobile app concept built to solve one of the most common urban challenges—finding and managing parking efficiently. With busy cities and limited spaces, Parkixg brings clarity and convenience by showing real-time parking availability, secure reservation options, and flexible plans tailored to different vehicle types.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                               The app offers an intuitive interface that lets users search nearby parking spots, reserve spaces ahead of time, and manage payments digitally. Whether it’s a car, bike, or electric vehicle, Parkixg ensures a smooth and secure experience for every driver.
                            </p>
                            <p className='text-md sm:text-xl text-white mt-5'>
                                With its user-friendly design and data-driven features, Parkixg turns parking from a stressful chore into a quick, reliable process.
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
                        <img src="/images/appsPortfolio/Parking App/Parking 5 Screen Apps/1.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/Parking App/Parking 5 Screen Apps/2.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               The goal of Parkixg was to simplify and modernize the way people park. By creating a clean, real-time, and user-focused platform, the app aims to reduce daily frustration and improve city mobility.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               Every feature—from live spot tracking to multiple vehicle support—was designed to prioritize convenience, security, and efficiency. Parkixg empowers users to plan ahead, save time, and park with confidence, no matter where they are.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/Parking App/Parking 5 Screen Apps/5.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                                While most parking apps focus solely on location, Parkixg focuses on experience. It combines real-time data, secure booking, and flexibility—offering users a complete parking solution built for modern urban life.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/Parking App/Parking 5 Screen Apps/3.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/Parking App/Parking 5 Screen Apps/4.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Driving convenience through smart, secure parking.
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

export default Parkixg 