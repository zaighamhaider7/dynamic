import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'
import { useLocation } from "react-router-dom";

const BASE_URL2 = 'http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy copy';
const BASE_URL = 'http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy copy/';

const SoftwareArchieves = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL2}/getSingleSoftware.php?id=${id}`)
        .then(res => res.json())
        .then(res => {
            if (!res.error) setData(res);
            else console.error(res.error);
        })
        .catch(console.error);
    }, [id]);

    if (!data) return <div className="text-white p-10">Loading...</div>;

    const Headdata = {
        pill: "Our Work",
        titleOrange: data.software_name,
        title: "SOFTWARE",
        description: data.software_description
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
                            {data.software_title}
                        </h2>
                        <p className="text-gray-800">
                            {data.software_title_description}
                        </p>
                    </div>

                    {data.software_banner_image && (
                        <img
                        src={`${BASE_URL}/${data.software_banner_image}`}
                        alt="Hero"
                        className='w-full mt-20 mb-20 rounded-2xl'
                        />
                    )}

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head text-xl sm:text-[36px] leading-[10px] sm:leading-[50px] '>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                                {data.project_overview_1}
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                               {data.project_overview_2}
                            </p>
                            <p className='text-md sm:text-xl text-white'>
                               {data.project_overview_3}
                            </p>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 lg:my-28 my-16'>

                        {data.overview_image_1 && <img src={`${BASE_URL}/${data.overview_image_1}`} alt="" className='travelica-img' />}
                        {data.overview_image_2 && <img src={`${BASE_URL}/${data.overview_image_2}`} alt="" className='travelica-img' />}

                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head text-xl sm:text-[36px]'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               {data.goal_1}
                            </p>
                            <p className='text-md sm:text-xl text-white mb-5'>
                               {data.goal_2}
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">

                        <div>

                            {data.goal_image_1 && <img className='mt-20 mb-20 rounded-2xl' src={`${BASE_URL}/${data.goal_image_1}`} alt=""  />}

                            <p className='text-md sm:text-3xl text-white'>
                                {data.last_description}
                            </p>

                        </div>

                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                    
                            {data.goal_image_2 && <img src={`${BASE_URL}/${data.goal_image_2}`} alt="" className='travelica-img' />}
                            {data.goal_image_3 && <img src={`${BASE_URL}/${data.goal_image_3}`} alt="" className='travelica-img' />}

                        </div>

                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text:xl sm:text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            {data.last_heading}
                        </h3>
                    </div>
                </div>
            </div>
             <Footer />
        </div>
    )
}

export default SoftwareArchieves