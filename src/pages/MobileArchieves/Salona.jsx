import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Salona = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "SALONA",
        title: "MOBILE APP",
        description: "Experience beauty and care like never before. Salona connects users with top-rated salons and beauty experts, enabling easy booking, real-time availability checks, and personalized service recommendations—all in one elegant app."
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
                           Salona – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Explore how Salona redefines convenience and trust in the beauty industry by helping users find, book, and enjoy salon services effortlessly while empowering salons to grow their client base with confidence.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/Salon App/Salon Banner.jpeg' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                               Salona is a sleek, user-centered mobile app concept designed to transform how people discover and book beauty and wellness services. With countless salons offering varied experiences, users often face confusion when choosing the right one. Salona brings everything together—trusted salons, expert stylists, transparent pricing, and instant booking—into a seamless digital experience.
                            </p>
                            <p className='text-xl text-white'>
                             From a quick haircut to a full spa retreat, the app makes beauty planning effortless. It emphasizes elegant design, intuitive navigation, and smart recommendations to ensure users enjoy both the process and the results.
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
                        <img src="/images/appsPortfolio/Salon App/Salon 5 Screen App/2.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/Salon App/Salon 5 Screen App/3.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                               The main objective behind Salona was to create an inspiring and functional platform that bridges the gap between clients and salons. The goal was to craft a clean, modern interface where users can easily explore services, view portfolios, compare prices, and book instantly—all without friction.
                            </p>
                            <p className='text-xl text-white mb-5'>
                               Each interaction was designed to foster confidence and convenience, ensuring that every user—from first-time visitors to regular clients—feels valued and empowered.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/Salon App/Salon 5 Screen App/5.png" alt="" />
                            <p className='text-3xl text-white'>
                               While many salon apps focus solely on listings or discounts, Salona prioritizes experience, personalization, and trust. The platform gives users control over their beauty journey—helping them discover, compare, and book services in a way that feels effortless and inspiring.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/Salon App/Salon 5 Screen App/1.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/Salon App/Salon 5 Screen App/4.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Building confidence through every style and service.
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

export default Salona