import { useEffect, useState } from 'react';
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'
import { Link } from 'react-router-dom'

const BASE_URL = 'http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy copy';


const SoftwareDevelopmentPage = () => {

    const [data, setData] = useState([]);

    const Headdata = {
        pill: "Our Work",
        titleOrange: "SOFTWARE",
        title: "DEVELOPMENT",
        description: "Feeling invisible online? A well-designed website gets you noticed and builds trust and credibility. See how we’ve transformed businesses with growth-driven website designs. "
    }

    useEffect(() => {
        fetch(`${BASE_URL}/getCase.php`)
        .then((res) =>
            res.json())
        .then((res) => {
                console.log("API response:", res); 

            if (Array.isArray(res)) setData(res);
            else console.error('Invalid response:', res);
        })
        .catch(console.error);
    }, []);

    // const data = [
    //     {
    //         img: '/images/laptops/1/Front of Software.png',
    //         title: 'Sello – Case Study',
    //         description: "Discover how Sello empowers businesses to monitor sales, manage payouts, and track performance across custom timeframes—all through a single, intuitive dashboard designed for precision and growth.",
    //         link: '/software-archieves/Sello'
    //     },
    //     {
    //         img: '/images/laptops/2/Front of Software.png',
    //         title: 'Friday – Case Study',
    //         description: "Discover how Friday transforms project management by integrating planning, execution, and tracking into one intelligent workspace—empowering teams to collaborate efficiently and deliver results with confidence.",
    //         link: '/software-archieves/Friday'
    //     },
    //     {
    //         img: '/images/laptops/3/Front of Software.png',
    //         title: 'Mamsek – Case Study',
    //         description: "Explore how Mamsek empowers restaurants to manage operations effortlessly—from reservations to revenue tracking—all within a single, intelligent platform.",
    //         link: '/software-archieves/Mamsek'
    //     },
    //     {
    //         img: '/images/laptops/4/Front of Software.png',
    //         title: 'Benefits – Case Study',
    //         description: "Discover how Benefits helps brands grow faster by transforming raw data into actionable intelligence. From conversion tracking to performance analytics, it empowers marketing teams to measure success and maximize ROI with confidence.",
    //         link: '/software-archieves/Benefits'
    //     },
    //     {
    //         img: '/images/laptops/5/Front of Software.png',
    //         title: 'Torkbiz – Case Study',
    //         description: "See how Torkbiz transforms complex business challenges into strategic opportunities through smart consulting tools, financial intelligence, and operational excellence.",
    //         link: '/software-archieves/Torkbiz'
    //     },
    //     {
    //         img: '/images/laptops/6/Front of Software.png',
    //         title: 'Bemax – Case Study',
    //         description: "Discover how Bemax bridges the gap between digital transformation and investment strategy—helping advisors and investors make confident, data-backed decisions in an ever-evolving digital landscape.",
    //         link: '/software-archieves/Bemax'
    //     },
    //     {
    //         img: '/images/laptops/7/Front of Software.png',
    //         title: 'Insight Pro – Case Study',
    //         description: "Explore how Insight Pro revolutionizes the way consultants operate—integrating scheduling, communication, analytics, and reporting into one streamlined platform that enhances both client experience and business performance.",
    //         link: '/software-archieves/InsightPro'
    //     },
    //     {
    //         img: '/images/laptops/8/Front of Software.png',
    //         title: 'Xisaas – Case Study',
    //         description: "Discover how Xisaas empowers businesses to streamline operations, manage devices, and monitor customer relationship activities through a single, data-driven control center.",
    //         link: '/software-archieves/Xisaas'
    //     },
    // ]

    return (
        <>
            <div className="service-page">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={Headdata} />
                </div>
                <img src="/images/headerCurveLeft.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>

            <div className="soft-dev-section">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10">
                        {data.map((item, index) => (
                            <div key={index} className='px-5'>
                                <Link
                                key={item.id}
                                to={`/software-archieves/${item.id}`} 
                                 className='software-development-card-sub'>
                                    <div className='software-development-card-sub'>
                                        <img src={`http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy copy/${item.software_front_image}`} 
                                         alt={item.software_title} className='w-full h-full object-cover' />
                                        <div className='software-development-card-content text-center'>
                                            <h3 className='text-brand-orange font-space-grotesk text-[30px] lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%]'>{item.software_title}</h3>
                                            <p className='text-[16px] font-light leading-[22px] text-white/90 text-center'>{item.software_title_description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export { SoftwareDevelopmentPage }