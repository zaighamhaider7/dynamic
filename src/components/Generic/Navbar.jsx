import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import ContactUsModal from './ContactUsModal';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [activeServiceCategory, setActiveServiceCategory] = useState('web-development');
    const location = useLocation();


    const [openMobileServiceCategory, setOpenMobileServiceCategory] = useState(null);
    const handleMobileServiceToggle = (category) => {
    setOpenMobileServiceCategory(prev =>
        prev === category ? null : category
    );
};



    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMobileServices = () => {
        setIsMobileServicesOpen(!isMobileServicesOpen);
    };

    const handleCategoryClick = (category) => {
        setActiveServiceCategory(category);
    };

    // Function to check if a nav item is active
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    useEffect(() => {
        if (location.pathname.includes('/digital-marketing')) {
            setActiveServiceCategory('digital-marketing');
        } else if (location.pathname.includes('/app-development')) {
            setActiveServiceCategory('app-development');
        } else if (location.pathname.includes('/software-development')) {
            setActiveServiceCategory('software-development');
        } else {
            setActiveServiceCategory('web-development');
        }
    }, [location.pathname]);

    const serviceData = {
        'web-development': [
            {
                name: "Custom Web Design",
                route: "/service/web-development?service=custom-web-design"
            },
            {
                name: "3d Animated",
                route: "/service/web-development?service=3d-animated"
            },
            {
                name: "Webflow",
                route: "/service/web-development?service=webflow"
            },
            {
                name: "Wix",
                route: "/service/web-development?service=wix"
            },
            {
                name: "Shopify",
                route: "/service/web-development?service=shopify"
            },
            {
                name: "E-Commerce",
                route: "/service/web-development?service=e-commerce"
            },
            {
                name: "Square Space",
                route: "/service/web-development?service=square-space"
            },
            {
                name: "WordPress",
                route: "/service/web-development?service=wordpress"
            }
        ],
        'digital-marketing': [
            {
                name: "Social Media Marketing",
                route: "/service/digital-marketing?service=social-media-marketing"
            },
            {
                name: "Google Merchant Advertising",
                route: "/service/digital-marketing?service=google-merchant-advertising"
            },
            {
                name: "Corporate Branding",
                route: "/service/digital-marketing?service=corporate-branding"
            },
            {
                name: "Local SEO",
                route: "/service/digital-marketing?service=local-seo"
            },
            {
                name: "Pay-Per Click Marketing",
                route: "/service/digital-marketing?service=pay-per-click-marketing"
            },
            {
                name: "Search Engine Optimization",
                route: "/service/digital-marketing?service=search-engine-optimization"
            }
        ],
        'app-development': [
            {
                name: "iOS App Development",
                route: "/service/app-development?service=ios-app-development"
            },
            {
                name: "Android App Development",
                route: "/service/app-development?service=android-app-development"
            },
            {
                name: "Static App Development",
                route: "/service/app-development?service=static-app-development"
            },
            {
                name: "Dynamic App Development",
                route: "/service/app-development?service=dynamic-app-development"
            }
        ],
        'software-development': [
            {
                name: "Custom CRM",
                route: "/service/software-development?service=custom-crm"
            },
            {
                name: "Custom ERP",
                route: "/service/software-development?service=custom-erp"
            },
            {
                name: "POS Development",
                route: "/service/software-development?service=pos-development"
            }
        ]
    };

    return (
        <>

            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <a href="/" className="logo-link">
                            <img src="/images/logo.webp" alt="Logo" className="logo-image" />
                        </a>
                    </div>

                    <div className="navbar-menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className={`nav-link dropdown-toggle ${isActive('/service') || isActive('/digital-marketing') || isActive('/mob-archieves') || isActive('/software-development') ? 'active' : ''}`}>
                                    Services 
                                    <FaChevronDown />
                                </a>
                                <div className="dropdown-menu">
                                    <div className="dropdown-content">
                                        <div className="dropdown-left">
                                            <div
                                                className={`service-category ${activeServiceCategory === 'web-development' ? 'active' : ''}`}
                                                onClick={() => handleCategoryClick('web-development')}
                                            >
                                                <div className="category-icon">
                                                    <img src="/images/service1.svg" alt="" />
                                                </div>
                                                <span>Web Development</span>
                                            </div>
                                            <div
                                                className={`service-category ${activeServiceCategory === 'digital-marketing' ? 'active' : ''}`}
                                                onClick={() => handleCategoryClick('digital-marketing')}
                                            >
                                                <div className="category-icon">
                                                    <img src="/images/service2.svg" alt="" />
                                                </div>
                                                <span>Digital Marketing</span>
                                            </div>
                                            <div
                                                className={`service-category ${activeServiceCategory === 'app-development' ? 'active' : ''}`}
                                                onClick={() => handleCategoryClick('app-development')}
                                            >
                                                <div className="category-icon">
                                                    <img src="/images/service3.svg" alt="" />
                                                </div>
                                                <span>App Development</span>
                                            </div>
                                            <div
                                                className={`service-category ${activeServiceCategory === 'software-development' ? 'active' : ''}`}
                                                onClick={() => handleCategoryClick('software-development')}
                                            >
                                                <div className="category-icon">
                                                    <img src="/images/service4.svg" alt="" />
                                                </div>
                                                <span>Software Development</span>
                                            </div>
                                        </div>
                                        <div className="dropdown-right">
                                            <div className="service-grid">
                                                {serviceData[activeServiceCategory].map((service, index) => (
                                                    <a href={service?.route} key={index} className="service-link">{service.name}</a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-arrow"></div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>Work</a>
                            </li>
                            <li className="nav-item">
                                <a href="/about-us" className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>About Us</a>
                            </li>
                            {/* <li className="nav-item">
                                <a href="javascript:void(0)" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleOpen}>Contact Us</a>
                            </li> */}
                        </ul>
                    </div>

                    <div className="navbar-auth">
                        <a href="javascript:void(0)"  className="btn-orange px-5" onClick={handleOpen}>Contact</a>
                        {/* <a href="/" className="btn-gray px-5" >Register</a> */}
                    </div>

                    {/* Mobile menu button */}
                    <div className="mobile-menu-btn">
                        <button className="menu-icon" onClick={toggleMobileMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <ul className="mobile-nav">
                    <li><a href="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                    
                    <li className="mobile-dropdown">
                    <button
                        className={`mobile-nav-link ${isActive('/service') || isActive('/digital-marketing') || isActive('/mob-archieves') || isActive('/software-development') ? 'active' : ''}`}
                        onClick={toggleMobileServices}
                    >
                        Services <FaChevronDown />
                    </button>

                    {isMobileServicesOpen && (
                        <div
                        className="mobile-dropdown-content"
                        style={{
                            maxHeight: '70vh',
                            overflowY: 'auto',
                            paddingBottom: '10px',
                            marginTop: '5px'
                        }}
                        >
                        {Object.entries(serviceData).map(([category, services]) => {
                            const isOpen = openMobileServiceCategory === category;
                            const readableTitle = category
                            .replace(/-/g, ' ')
                            .replace(/\b\w/g, char => char.toUpperCase());

                            return (
                            <div key={category} className="mobile-service-group">
                                <button
                                className="mobile-service-title text-white w-full text-left font-semibold py-2 px-3 flex justify-between items-center"
                                onClick={() => handleMobileServiceToggle(category)}
                                >
                                {readableTitle}
                                    <FaChevronDown />
                                </button>

                                {isOpen && (
                                <div
                                    className="mobile-service-links"
                                    style={{
                                    maxHeight: '200px',
                                    overflowY: 'hidden',
                                    paddingLeft: '1rem',
                                    }}
                                >
                                    {services.map((service, index) => (
                                    <a
                                        href={service.route}
                                        key={index}
                                        className="mobile-dropdown-link block py-2"
                                        onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setOpenMobileServiceCategory(null);
                                        }}
                                    >
                                        {service.name}
                                    </a>
                                    ))}
                                </div>
                                )}
                            </div>
                            );
                        })}
                        </div>
                    )}
                    </li>

                    <li><a href="/portfolio" className={`mobile-nav-link ${isActive('/portfolio') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Work</a></li>
                    <li><a href="/about-us" className={`mobile-nav-link ${isActive('/about-us') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
                    {/* <li><a href="#" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleOpen}>Contact Us</a></li> */}
                </ul>

                {/* Login/Register - outside scroll */}
                <div className="mobile-auth flex gap-2 px-10 py-5 border-t border-gray-700">
                    {/* <a href="/" className="bg-orange-600 text-white text-center py-2 rounded w-full block mb-2" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
                    <a href="/" className="bg-transparent border-gray-700 border text-white text-center py-2 rounded w-full mb-2" onClick={() => setIsMobileMenuOpen(false)}>Register</a> */}
                    <a href="#" className={`bg-orange-600 text-white text-center py-2 rounded w-full block mb-2 mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleOpen}>Contact Us</a>
                </div>
                </div>

            </nav>
            <ContactUsModal open={open} onClose={handleClose} />
        </>
    )
}

export default Navbar