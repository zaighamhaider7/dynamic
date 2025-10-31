import React, { useRef, useState, useEffect } from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'
import { FaDownload } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong, FaXmark } from 'react-icons/fa6'

  const BASE_URL = 'http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy/';

const DigitalMarketingPage = () => {
  const [data, setData] = useState([]);

  const Headdata = {
    pill: "Our Work",
    titleOrange: "DIGITAL",
    title: "MARKETING",
    description:
      "Feeling invisible online? A well-designed website gets you noticed and builds trust and credibility. See how we’ve transformed businesses with growth-driven website designs. ",
  }

    useEffect(() => {
        fetch(`${BASE_URL}/getCases.php`)
          .then((res) =>
            res.json())
          .then((res) => {
                  console.log("API response:", res); // Add this line

            if (Array.isArray(res)) setData(res);
            else console.error('Invalid response:', res);
          })
          .catch(console.error);
    }, []);

    // const data = [
    //     {
    //         img: '/images/case studies/xpress.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Xpress Pro Labs",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/spot.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Spotlimo",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/scott.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Scott Soderstrom",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/mcc.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Middleton-CC",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/dtr.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Dtr-Company",
    //         link: '/digital-marketing-case-study'
    //     },
    //     {
    //         img: '/images/case studies/bzlap.jpeg',
    //         title: 'Digital Marketing',
    //         description: "Bzlap",
    //         link: '/digital-marketing-case-study'
    //     },
    // ]

  const sliderRef = useRef(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Keyboard navigation for lightbox
        useEffect(() => {
            if (!lightboxOpen || data.length === 0) return;

            const handleKeyDown = (event) => {
                if (event.key === 'ArrowRight') {
                    setLightboxIndex((prev) => (prev + 1) % data.length);
                } else if (event.key === 'ArrowLeft') {
                    setLightboxIndex((prev) => (prev - 1 + data.length) % data.length);
                } else if (event.key === 'Escape') {
                    setLightboxOpen(false);
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, [lightboxOpen, data]);

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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-16 gap-10">
            {data.map((item, index) => (
              <div key={index} className="px-5">
                <div className="case-study-card">
                  <img
                    src={`http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => {
                      setLightboxIndex(index)
                      setLightboxOpen(true)
                    }}
                  />
                  <div className="case-study-card-content">
                    <h3 className="text-brand-orange font-space-grotesk text-lg lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%] text-center">
                      {item.title}
                    </h3>
                    <p className="fw-thin tracking-wide text-[14px] text-gray-500 text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
            className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
        >
            {/* Close Button */}
            <div className="absolute top-4 right-4" onClick={(e) => e.stopPropagation()}>
            <button
                type="button"
                aria-label="Close"
                className="custom-slick-arrow"
                onClick={() => setLightboxOpen(false)}
            >
                <FaXmark className="text-xl text-white" />
            </button>
            </div>

            {/* Previous Button */}
            <div
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
            >
            <button
                type="button"
                aria-label="Previous image"
                className="custom-slick-arrow"
                onClick={() =>
                setLightboxIndex((prev) => (prev - 1 + data.length) % data.length)
                }
            >
                <FaArrowLeftLong className="text-xl text-white" />
            </button>
            </div>

            {/* Image Preview */}
            <div className="max-w-[90vw] max-h-[80vh] p-2" onClick={(e) => e.stopPropagation()}>
            <img
                src={`http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy/${data[lightboxIndex].image}`}
                alt={data[lightboxIndex].title}
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            </div>

            {/* Next Button */}
            <div
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
            >
            <button
                type="button"
                aria-label="Next image"
                className="custom-slick-arrow"
                onClick={() =>
                setLightboxIndex((prev) => (prev + 1) % data.length)
                }
            >
                <FaArrowRightLong className="text-xl text-white" />
            </button>
            </div>

            {/* Download Button */}
            <div className="absolute bottom-4 right-4" onClick={(e) => e.stopPropagation()}>
            <a
                href={`http://localhost/materially-free-react-admin-template-1.0.0/materially-free-react-admin-template-1.0.0/api/caseStudy/${data[lightboxIndex].image}`}
                download
                aria-label="Download image"
                className="custom-slick-arrow inline-flex items-center justify-center"
            >
                <FaDownload className="text-lg text-white" />
            </a>
            </div>
        </div>
        )}

      <Footer />
    </>
  )
}

export { DigitalMarketingPage }
