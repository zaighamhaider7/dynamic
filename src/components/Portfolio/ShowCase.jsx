import React from 'react'
import { Link } from 'react-router-dom'

const ShowCase = () => {
    return (
        <div className='showcase-section'>
            <div className="container">
                <div className="head-cont gap-5">

                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white " />
                        Recent Work
                    </div>
                    <h2 className="head-h2">
                        Website <span className="text-orange">ShowCase</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[560px]">
                        From bold website redesigns to high-converting ad campaigns, discover how we turn ideas into measurable outcomes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:my-16 my-10 min-h-[600px] gap-3 sm:gap-3 md:gap-4 lg:gap-5">
                    <div className='grid lg:grid-flow-col lg:grid-rows-2 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card'>
                             <Link to='https://xpressprolabs.com/' className='recent-work-card' >
                                <img src='/images/portfolio/img-5-rec.jpg' alt="" className='aspect-auto h-full !rounded-2xl !sm:rounded-sm lg:rounded-2xl' />
                                <div className="recent-content">
                                    <span>
                                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                        Xpress Pro Labs
                                    </span>
                                    <h4 >
                                        Laboratory health
                                    </h4>
                                </div>
                            </Link>
                        </div>
                        <div className='recent-work-card' >
                            <Link to='https://preview.dtr-company.com/' className='recent-work-card' >
                                <img src='/images/portfolio/img-6-rec.jpg' alt="" className='aspect-auto h-full !rounded-2xl !sm:rounded-sm lg:rounded-2xl' />
                                <div className="recent-content">
                                    <span>
                                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                        Dtr-Company
                                    </span>
                                    <h4>
                                        Construction
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className=''>
                        <div className='recent-work-card h-full' >
                             <Link to='https://oexcapitalpro.com/' className='recent-work-card' >
                                <img src='/images/portfolio/img-4-sqr.jpg' alt="" className='aspect-auto h-full !rounded-2xl !sm:rounded-sm lg:rounded-2xl' />
                                <div className="recent-content">
                                    <span>
                                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                        OEX Capital Pro
                                    </span>
                                    <h4>
                                        trading strategy
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='grid lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card lg:row-span-2' >
                            <Link to='https://scottsoderstrom.com/' className='recent-work-card' >
                                <img src='/images/portfolio/img-1-sqr.webp' alt="" className='aspect-auto h-full !rounded-2xl !sm:rounded-sm lg:rounded-2xl' />
                                <div className="recent-content">
                                    <span>
                                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                        Scott Soderstrom
                                    </span>
                                    <h4>
                                        Financial Advisor
                                    </h4>
                                </div>
                            </Link>
                        </div>
                        <div className='recent-work-card lg:row-span-3' >
                            <Link to='https://fundanyfilm.com/' className='recent-work-card' >
                                <img src='/images/portfolio/img-13-rec.jpg' alt="" className='aspect-auto h-full !rounded-2xl !sm:rounded-sm lg:rounded-2xl' />
                                <div className="recent-content">
                                    <span>
                                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                         Fund Any Film
                                    </span>
                                    <h4>
                                        Media
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='grid lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card lg:row-span-3' >
                            <Link to='https://kennysmaintenance.com/' className='recent-work-card' >
                                <img src='/images/portfolio/img-12-rec.jpg' alt="" className='aspect-auto h-full !rounded-2xl !sm:rounded-sm lg:rounded-2xl' />
                                <div className="recent-content">
                                    <span>
                                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                         Kennys Maintenance
                                    </span>
                                    <h4>
                                        Cleaning
                                    </h4>
                                </div>
                            </Link>
                        </div>
                        <div className='recent-work-card lg:row-span-2' >
                            <Link to='http://ipiassoc.org/' className='recent-work-card' >
                                <img src='/images/portfolio/img-2-sqr.jpg' alt="" className='aspect-auto h-full !rounded-2xl !sm:rounded-sm lg:rounded-2xl' />
                                <div className="recent-content">
                                    <span>
                                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                        Ipiassoc
                                    </span>
                                    <h4>
                                        Plumbing
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <a href="/portfolio/our-portfolio" className="btn-white w-fit mx-auto px-5">
                    View All Projects
                </a>
            </div>
        </div>
    )
}

export default ShowCase