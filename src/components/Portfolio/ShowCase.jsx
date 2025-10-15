import React from 'react'

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

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:my-16 my-10 min-h-[600px]">
                    <div className='grid lg:grid-flow-col lg:grid-rows-2 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card'>
                            <img src='/images/portfolio/img-5-rec.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                   <a target='_blank' href="https://xpressprolabs.com/"> Xpress Pro Labs</a>
                                </span>
                                <h4 >
                                    Laboratory health
                                </h4>
                            </div>
                        </div>
                        <div className='recent-work-card' >
                            <img src='/images/portfolio/img-6-rec.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    Dtr-Company
                                </span>
                                <h4>
                                   <a target='_blank' href="https://preview.dtr-company.com/"> Construction</a> 
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='recent-work-card h-full' >
                            <img src='/images/portfolio/img-4-sqr.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    <a target='_blank' href="https://middleton-cc.com/"> OEX Capital Pro</a>
                                </span>
                                <h4>
                                    trading strategy
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className='grid lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card lg:row-span-2' >
                            <img src='/images/portfolio/img-1-sqr.webp' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                     <a target='_blank' href="https://scottsoderstrom.com/"> Scott Soderstrom</a>
                                </span>
                                <h4>
                                    Financial Advisor
                                </h4>
                            </div>
                        </div>
                        <div className='recent-work-card lg:row-span-3' >
                            <img src='/images/portfolio/img-13-rec.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    <a target='_blank' href="https://fundanyfilm.com/"> Fund Any Film</a>
                                </span>
                                <h4>
                                    Media
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className='grid lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-none grid-cols-2 gap-5'>
                        <div className='recent-work-card lg:row-span-3' >
                            <img src='/images/portfolio/img-12-rec.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    <a target='_blank' href="https://kennysmaintenance.com/"> Kennys Maintenance</a>
                                </span>
                                <h4>
                                    Cleaning
                                </h4>
                            </div>
                        </div>
                        <div className='recent-work-card lg:row-span-2' >
                            <img src='/images/portfolio/img-2-sqr.jpg' alt="" className='aspect-auto h-full' />
                            <div className="recent-content">
                                <span>
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    <a target='_blank' href="http://ipiassoc.org/"> Ipiassoc</a>
                                </span>
                                <h4>
                                    Plumbing
                                </h4>
                            </div>
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