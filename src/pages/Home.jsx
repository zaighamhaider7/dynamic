import React, { useState, useEffect } from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import TrustedBy from '../components/Generic/TrustedBy'
import AboutUs from '../components/Generic/AboutUs'
import WhatWeDo from '../components/Generic/WhatWeDo'
import Projects from '../components/Generic/Projects'
import Testomonials from '../components/Generic/Testomonials'
import LetsTalk from '../components/Generic/LetsTalk'
import FAQs from '../components/Generic/FAQs'
import Footer from '../components/Generic/Footer'
import Navbar from '../components/Generic/Navbar'

const BASE_URL = 'http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/website/';

const Home = () => {
    const [recentWork, setRecentWork] = useState([]);

    useEffect(() => {
        const fetchRecentWork = async () => {
            try {
                const res = await fetch(`${BASE_URL}/getRecentWork.php`);
                const data = await res.json();
                if (Array.isArray(data)) {
                    setRecentWork(data.slice(0, 6));
                } else {
                    console.error("Unexpected data format:", data);
                }
            } catch (err) {
                console.error("Failed to fetch recent work:", err);
            }
        };

        fetchRecentWork();
    }, []);

    return (
        <>
            <div className='home-page'>
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <HomeHeader />
                </div>
                <img src="/images/headerShadow.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>

            <TrustedBy />
            <AboutUs />
            <WhatWeDo />
            <Projects data={recentWork} />
            <Testomonials />
            <LetsTalk />
            <FAQs />
            <Footer />
        </>
    )
}

export default Home;
