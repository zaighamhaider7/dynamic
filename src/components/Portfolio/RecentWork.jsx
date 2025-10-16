import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const RecentWork = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isXLargeScreen, setIsXLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 576);
            setIsXLargeScreen(window.innerWidth >= 992);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const recentWork = [
        {
            img: '/images/portfolio/img-1-sqr.webp',
            tag: 'Financial Advisor',
            title: 'Scott Soderstrom',
            link: 'https://scottsoderstrom.com/'
        },
        {
            img: '/images/portfolio/img-2-sqr.jpg',
            tag: 'Plumbing',
            title: 'Ipiassoc',
            link: 'http://ipiassoc.org/'
        },
        {
            img: '/images/portfolio/img-3-sqr.jpg',
            tag: 'Commercial',
            title: 'Shaides Glass Tinting',
            link: 'https://shaidesprofessionalglasstinting.com/'
        },
        {
            img: '/images/portfolio/img-4-sqr.jpg',
            tag: 'trading strategy',
            title: 'OEX Capital Pro',
            link:'https://oexcapitalpro.com/'
        },
        {
            img: '/images/portfolio/img-5-rec.jpg',
            tag: 'Laboratory health',
            title: 'Xpress Pro Labs',
            link:'https://xpressprolabs.com/'
        },
        {
            img: '/images/portfolio/img-6-rec.jpg',
            tag: 'Construction',
            title: 'Dtr-Company',
            link:'https://preview.dtr-company.com/'
        },
        {
            img: '/images/portfolio/img-7-rec.jpg',
            tag: 'Middleton-CC',
            title: 'Middleton-CC',
            link:'https://middleton-cc.com/'
        },
        {
            img: '/images/portfolio/img-8-sqr.jpg',
            tag: 'House Buyers',
            title: 'Infinite Rei Group',
            link: 'https://preview.infinitereigroup.com/'
        },
        {
            img: '/images/portfolio/img-9-sqr.jpg',
            tag: 'Patricks Pet Salon',
            title: 'Pet Salon',
            link:'https://patrickspetsalon.com/'
        },
        {
            img: '/images/portfolio/img-10-sqr.jpg',
            tag: 'Clothing',
            title: 'Elanfurs',
            link:'https://elanfurs.com/'
        },
        {
            img: '/images/portfolio/img-11-sqr.jpg',
            tag: 'Online Store',
            title: 'Suf Products',
            link:'https://www.sufproducts.com/'
        },
        {
            img: '/images/portfolio/img-12-rec.jpg',
            tag: 'Cleaning',
            title: 'Kennys Maintenance',
            link:'https://kennysmaintenance.com/'
        },
        {
            img: '/images/portfolio/img-13-rec.jpg',
            tag: 'Media',
            title: 'Fund Any Film',
            link:'https://fundanyfilm.com/'
        },
        {
            img: '/images/portfolio/img-14-rec.jpg',
            tag: 'Modeling & Fashion',
            title: 'Sinkwide',
            link:'https://sinkwide.com/'
        },
        {
            img: '/images/portfolio/img-15-sqr.jpg',
            tag: 'Fitness',
            title: 'Bzlap',
            link:'https://bzlap.com/'
        },
        {
            img: '/images/portfolio/img-16-sqr.jpg',
            tag: 'Auto Accessories',
            title: 'Windi Limo',
            link:'https://windilimo.com/'
        },
        {
            img: '/images/portfolio/img-17-sqr.jpg',
            tag: 'Coffee House',
            title: 'Windy City Limo',
            link:'https://windycitylimo.net/'
        },
        {
            img: '/images/portfolio/img-18-sqr.jpg',
            tag: 'Automotive club',
            title: 'Black Carbros',
            link:'https://blackcarbros.com/'
        },
        {
            img: '/images/portfolio/img-19-rec.jpg',
            tag: 'Financial Advisor',
            title: 'Munshisaab ',
            link:'https://munshisaab.com/'
        },
        {
            img: '/images/portfolio/img-20-rec.jpg',
            tag: 'Digital Agency',
            title: 'Sale Wizz',
            link:'https://salewizz.com/#home'
        },
        {
            img: '/images/portfolio/img-21-rec.jpg',
            tag: 'Luxurious Product store',
            title: 'Pakpre',
            link:'https://pakpre.com/'
        },
        {
            img: '/images/portfolio/img-22-sqr.jpg',
            tag: 'Model & AD Agency',
            title: 'Alice Photography',
            link:'https://alice-photography.com/'
        },
        {
            img: '/images/portfolio/img-23-sqr.jpg',
            tag: 'Event Organization',
            title: 'Vidzze ',
            link:'https://vidzze.com/'
        },
        {
            img: '/images/portfolio/img-24-sqr.jpg',
            tag: 'Construction',
            title: 'Kochwan',
            link:'https://kochwan.com/'
        },
        {
            img: '/images/portfolio/img-25-sqr.jpg',
            tag: 'Digital Agency',
            title: 'Bzlad',
            link:'https://bzlad.com/#home-banner'
        },
        {
            img: '/images/portfolio/img-26-rec.jpg',
            tag: 'Digital Agency',
            title: 'Alpa Technologies',
            link:'https://alpatechnologies.com/'
        },
        {
            img: '/images/portfolio/img-27-rec.jpg',
            tag: 'Real Estate Agency',
            title: 'Prince House',
            link:'https://princehouse.net/'
        },
        {
            img: '/images/portfolio/img-28-rec.jpg',
            tag: 'Delicious Food',
            title: 'Min 8 Away',
            link:'https://min8away.com/'
        },
        {
            img: '/images/portfolio/img-29-sqr.jpg',
            tag: 'Weeding  Invitation',
            title: 'Kistan',
            link:'https://kistan.co/'
        },
        {
            img: '/images/portfolio/img-30-sqr.jpg',
            tag: 'digital Agency',
            title: 'JJ Designs ',
            link:'https://jamesjerrydesigns.com/'
        },
        {
            img: '/images/portfolio/img-31-sqr.jpg',
            tag: 'Logistics',
            title: 'Upsidelinks',
            link:'https://upsidelinks.com/'
        },
        {
            img: '/images/portfolio/img-32-sqr.jpg',
            tag: 'Luxurious Cars',
            title: 'Spotlimo ',
            link:'https://www.spotlimo.com/'
        },
    ]

    return (
        <div className='recent-work-section'>
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Recent Work
                    </div>
                    <h2 className="head-h2 text-[20px] sm:text-[60px]">
                        Transformations That <span className="text-orange">Speak for Themselves</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[710px] mx-auto">
                        From bold website redesigns to high-converting ad campaigns, discover how we turn ideas into measurable outcomes.
                    </p>
                </div>

                <div className="grid gap-3 sm:gap-3 md:gap-4 lg:gap-5 lg:mt-16 mt-10" style={{
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridAutoRows: 'auto'
                }}>
                    {
                        recentWork?.map((work, index) => {
                            // Calculate which row and position this item should be in
                            const cycle = Math.floor(index / 7); // Every 7 items (4+3) is one cycle
                            const positionInCycle = index % 7;
                            const row = cycle * 2 + (positionInCycle >= 4 ? 1 : 0); // 2 rows per cycle

                            // Responsive grid positioning
                            let gridColumn;

                            // Mobile: 1 column (spans full width)
                            if (!isLargeScreen) {
                            const isEven = index % 2 === 0;
                            gridColumn = isEven ? '1 / span 6' : '7 / span 6';
                            }
                            // Large screens: 2 columns (each spans 6 grid columns)
                            else if (!isXLargeScreen) {
                                const isEven = index % 2 === 0;
                                gridColumn = isEven ? '1 / span 6' : '7 / span 6';
                            }
                            // Extra large screens: alternating 4/3 pattern
                            else {
                                if (positionInCycle < 4) {
                                    // First 4 items in cycle: 4 columns (each spans 3 grid columns)
                                    gridColumn = `${(positionInCycle * 3) + 1} / span 3`;
                                } else {
                                    // Last 3 items in cycle: 3 columns (each spans 4 grid columns)
                                    const adjustedPosition = positionInCycle - 4;
                                    gridColumn = `${(adjustedPosition * 4) + 1} / span 4`;
                                }
                            }

                            return (
                                 
                                <div
                                    className='recent-work-card grid-recent-work'
                                    key={index}
                                    style={{
                                        gridColumn: gridColumn,
                                        gridRow: `${row + 1} / span 1`
                                    }}
                                >
                                    <Link to={work.link} className='recent-work-card ' >
                                    <img src={work.img} alt={work?.title} className='!rounded-2xl !sm:rounded-sm lg:rounded-xl'  />
                                    <div className="recent-content  ">
                                        <span>
                                            <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                          {work?.title}
                                        </span>
                                        <h4>
                                            {
                                                work?.tag
                                            }
                                        </h4>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentWork