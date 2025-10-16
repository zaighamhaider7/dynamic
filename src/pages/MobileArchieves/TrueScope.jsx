import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const TrueScope = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "TRUE SCOPE",
        title: "MOBILE APP",
        description: "Stay informed with clarity. TrueScope delivers verified news, personalized insights, and real-time updates—all in one intuitive platform built to keep users connected to what truly matters."
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
                           TrueScope – Case Study
                        </h2>
                        <p className="text-gray-800">
                           Discover how TrueScope reshapes digital journalism by providing trustworthy, fast, and engaging news experiences—empowering users to stay informed without the noise.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/News App/Truescope Banner.jpeg' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                                TrueScope is a modern news app concept designed to redefine how people consume information in a fast-paced digital world. With misinformation and content overload becoming common challenges, TrueScope offers a clean, reliable, and organized way to stay updated.
                            </p>
                            <p className='text-xl text-white'>
                                The app curates stories from verified sources across politics, technology, entertainment, business, and global affairs—presented through a sleek, distraction-free interface. Users can personalize their feeds, set topic alerts, and explore in-depth coverage designed to build understanding rather than confusion.
                            </p>
                            <p className='text-xl text-white mt-5'>
                                By combining smart algorithms with editorial integrity, TrueScope ensures every user receives accurate, relevant, and timely news that fits their interests and values.
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
                        <img src="/images/appsPortfolio/News App/News 5 Screen App/2.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/News App/News 5 Screen App/3.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                               The goal of TrueScope was to create a transparent, user-first news experience that prioritizes authenticity and clarity. The design focuses on simplicity and trust—allowing readers to explore stories confidently, free from bias and clutter.
                            </p>
                            <p className='text-xl text-white mb-5'>
                               From live headlines to deep analyses, TrueScope was built to deliver information that informs, educates, and inspires, while maintaining a seamless, modern user experience across every device.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/News App/News 5 Screen App/5.png" alt="" />
                            <p className='text-3xl text-white'>
                                While many news apps chase speed and clicks, TrueScope values truth, depth, and design. It’s a space for informed minds—helping users cut through misinformation and focus on credible stories that shape the world.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/News App/News 5 Screen App/1.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/News App/News 5 Screen App/4.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Empowering truth through clarity and design.
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

export default TrueScope 