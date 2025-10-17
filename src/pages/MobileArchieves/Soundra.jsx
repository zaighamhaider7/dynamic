import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const Soundra = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "SOUNDRA",
        title: "MOBILE APP",
        description: "Listen. Share. Connect. Soundra transforms how users discover and enjoy music—bringing personalized playlists, song recommendations, and community-driven sharing into one elegant and immersive experience."
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
                           Soundra – Case Study
                        </h2>
                        <p className="text-gray-800">
                           See how Soundra redefines the music experience by combining smart discovery with social interaction—helping users explore new sounds, share favorites, and connect through the universal language of music.
                        </p>
                    </div>

                    <img src='/images/appsPortfolio/Music App/Music App.png' className='w-full mt-20 mb-20 rounded-2xl' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px]'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                Soundra is a next-generation music app concept designed to make discovering and sharing music more intuitive and human. In a digital world driven by algorithms, Soundra brings back the personal touch—allowing users to create, suggest, and explore songs through meaningful social connections.
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                                The app offers a seamless interface where users can follow friends, build collaborative playlists, and uncover trending tracks that match their moods and preferences. With its clean design and interactive features, Soundra bridges the gap between technology and emotion—turning music streaming into a shared journey.
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
                        <img src="/images/appsPortfolio/Music App/Music 5 Screen App/2.png" alt="" className='travelica-img' />
                        <img src="/images/appsPortfolio/Music App/Music 5 Screen App/3.png" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               The goal of Soundra was to design a platform that makes music feel personal again. Rather than focusing solely on automated playlists, Soundra encourages human connection and curation—giving users the power to share songs, inspire others, and experience music together.
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               Every screen and feature was built around interaction, simplicity, and discovery, ensuring that users not only listen but also connect through the soundtracks that define their moments.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img className='mt-20 mb-20 rounded-2xl' src="/images/appsPortfolio/Music App/Music 5 Screen App/5.png" alt="" />
                            <p className='text-md sm:text-3xl text-white'>
                                Most music apps revolve around consumption. Soundra celebrates connection—allowing users to discover, share, and experience music together in a space that’s personal, expressive, and inspiring. It’s not just about listening—it’s about belonging.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/appsPortfolio/Music App/Music 5 Screen App/1.png" alt="" className='travelica-img' />
                            <img src="/images/appsPortfolio/Music App/Music 5 Screen App/4.png" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Where music meets connection.
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

export default Soundra 