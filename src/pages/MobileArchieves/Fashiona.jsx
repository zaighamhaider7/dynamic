import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Fashiona = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "FASHIONA",
        title: "MOBILE APP",
        description: "Redefine your style journey. Fashiona brings the world of fashion to your fingertips—featuring curated collections, trending looks, and effortless shopping experiences designed for today’s modern shopper."
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
                           Fashiona – Case Study
                        </h2>
                        <p className="text-gray-800">
                            See how Fashiona transforms digital fashion retail by blending trend discovery with seamless eCommerce, giving users a personalized and inspiring way to shop for what suits them best.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/Fashion App/Fashion Banner.jpeg' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                Fashiona is an elegantly crafted mobile app concept designed to revolutionize how people explore and shop for fashion. In a space filled with countless brands and overwhelming choices, Fashiona simplifies the experience by combining curated collections, style recommendations, and secure shopping into one intuitive platform.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                                From clothing and accessories to exclusive designer drops, the app provides users with a sleek and immersive experience. Fashiona celebrates individuality—empowering users to express their personal style through a well-organized, visually stunning interface that feels both luxurious and easy to use.
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
                        <img src="/images/appsPortfolio/Fashion App/Fashion 5 Screen App/1.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/Fashion App/Fashion 5 Screen App/2.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               The goal behind Fashiona was to create a modern fashion platform that merges aesthetics with functionality. The app was designed to deliver a premium browsing and shopping experience—one where users can discover trends, explore styles, and make confident purchases, all within a visually captivating environment.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               Every interaction, from viewing product details to completing a purchase, was refined to feel effortless and enjoyable. Fashiona aims to build trust, excitement, and connection between users and the fashion they love.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/Fashion App/Fashion 5 Screen App/5.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                                While many fashion apps focus solely on catalog listings, Fashiona focuses on experience. It blends inspiration, personalization, and convenience—helping users discover new trends, shop their favorites, and express their style with confidence.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/Fashion App/Fashion 5 Screen App/4.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/Fashion App/Fashion 5 Screen App/3.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Inspiring confidence through every look and design.
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

export default Fashiona