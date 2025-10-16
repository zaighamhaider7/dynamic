import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Home from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { AppDevelopment, DigitalMarketing, SoftwareDevelopment, WebDevelopment } from './pages/Services'
import { OurPortfolio, Portfolio, SoftwareDevelopmentPage, MobileAppsPage, DigitalMarketingPage } from './pages/Portfolio'
import MobArchieves from './pages/MobileArchieves/MobArchieves'
import Travelica from './pages/MobileArchieves/Travelica'
import Salona from './pages/MobileArchieves/Salona'
import Equidget from './pages/MobileArchieves/Equidget'
import Organizo from './pages/MobileArchieves/Organizo'
import Fashiona from './pages/MobileArchieves/Fashiona'
import Zov from './pages/MobileArchieves/Zov'
import Soundra from './pages/MobileArchieves/Soundra'
import TrueScope from './pages/MobileArchieves/TrueScope'
import LinguaGo from './pages/MobileArchieves/LinguaGo'
import Parkixg from './pages/MobileArchieves/Parkixg'
import Sello from './pages/SoftwareArchieves/Sello'
import Friday from './pages/SoftwareArchieves/Friday'
import Mamsek from './pages/SoftwareArchieves/Mamsek'
import InsightPro from './pages/SoftwareArchieves/InsightPro'
import Benefits from './pages/SoftwareArchieves/Benefits'
import Torkbiz from './pages/SoftwareArchieves/Torkbiz'
import Bemax from './pages/SoftwareArchieves/Bemax'
import Xisaas from './pages/SoftwareArchieves/Xisaas'
import AboutUs from './pages/AboutUs/AboutUs'
import Scrollbar from 'smooth-scrollbar';

function App() {
  useEffect(() => {
    const element = document.querySelector('#smooth-scrollbar');
    if (element) {
      const scrollbarInstance = Scrollbar.init(element);
      // Store the scrollbar instance globally so other components can access it
      window.smoothScrollbarInstance = scrollbarInstance;
    }
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route path="/service/software-development" element={<SoftwareDevelopment />} />
          <Route path="service/digital-marketing" element={<DigitalMarketing />} />
          <Route path="service/app-development" element={<AppDevelopment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/our-portfolio" element={<OurPortfolio />} />
          <Route path="/portfolio/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/portfolio/mobile-apps" element={<MobileAppsPage />} />
          <Route path="/portfolio/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/mob-archieves" element={<MobArchieves />} />
          <Route path="/mob-archieves/travelica" element={<Travelica />} />
          <Route path="/mob-archieves/salona" element={<Salona />} />
          <Route path="/mob-archieves/equidget" element={<Equidget />} />
          <Route path="/mob-archieves/organizo" element={<Organizo />} />
          <Route path="/mob-archieves/fashiona" element={<Fashiona />} />
          <Route path="/mob-archieves/zov" element={<Zov />} />
          <Route path="/mob-archieves/soundra" element={<Soundra />} />
          <Route path="/mob-archieves/TrueScope" element={<TrueScope />} />
          <Route path="/mob-archieves/LinguaGo" element={<LinguaGo />} />
          <Route path="/mob-archieves/Parkixg" element={<Parkixg />} />
          <Route path="/software-archieves/Sello" element={<Sello />} />
          <Route path="/software-archieves/Friday" element={<Friday />} />
          <Route path="/software-archieves/Mamsek" element={<Mamsek />} />
          <Route path="/software-archieves/Xisaas" element={<Xisaas />} />
          <Route path="/software-archieves/Bemax" element={<Bemax />} />
          <Route path="/software-archieves/Torkbiz" element={<Torkbiz />} />
          <Route path="/software-archieves/Benefits" element={<Benefits />} />
          <Route path="/software-archieves/InsightPro" element={<InsightPro />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
