import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa6'
import { FaGoogle, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import ContactUsModal from './ContactUsModal'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        // Handle email submission logic here
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
        <>
            <footer className="bg-[#0A0A0A] text-gray-700 md:pt-12 pt-5">
                <div className="container ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-5">
                        {/* Logo and Description */}
                        <div className="space-y-2 md:space-y-4">
                            <img src="/images/logo.webp" alt="" className="footer-logo h-10 w-32" />
                            <p className="">
                                We do it fast, we do it right, and we do it for people who are ready to grow.
                            </p>
                            <div className="flex items-center gap-3 pt-1">
                                <a
                                    href="#"
                                    aria-label="Google"
                                    className="size-10 grid place-items-center rounded-full border border-gray-800 bg-[#121212] text-white transition-colors hover:bg-[#DB4437] hover:border-[#DB4437]"
                                >
                                    <FaGoogle className="text-lg" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="size-10 grid place-items-center rounded-full border border-gray-800 bg-[#121212] text-white transition-colors hover:bg-[#1877F2] hover:border-[#1877F2]"
                                >
                                    <FaFacebookF className="text-lg" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="YouTube"
                                    className="size-10 grid place-items-center rounded-full border border-gray-800 bg-[#121212] text-white transition-colors hover:bg-[#FF0000] hover:border-[#FF0000]"
                                >
                                    <FaYoutube className="text-lg" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="size-10 grid place-items-center rounded-full border border-gray-800 bg-[#121212] text-white transition-colors hover:bg-[#0A66C2] hover:border-[#0A66C2]"
                                >
                                    <FaLinkedinIn className="text-lg" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-white font-bold text-lg font-space-grotesk">QUICK LINKS</h3>
                            <ul className="space-y-3 md:space-y-5">
                                <li><a href="/" className="footer-link">Home</a></li>
                                <li><a href="/service/web-development" className="footer-link">Services</a></li>
                                <li><a href="/portfolio" className="footer-link">Work</a></li>
                                <li><a href="/about-us" className="footer-link">About Us</a></li>
                                <li><a href="javascript:void(0)" className="footer-link" onClick={handleOpen}>Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="space-y-4">
                            <h3 className="text-white font-bold text-lg font-space-grotesk">SERVICES</h3>
                            <ul className="space-y-3 md:space-y-5">
                                <li><a href="/service/web-development" className="footer-link">Web Development</a></li>
                                <li><a href="/service/software-development" className="footer-link">Software Development</a></li>
                                <li><a href="/service/app-development" className="footer-link">Mobile Apps Development</a></li>
                                <li><a href="/service/digital-marketing" className="footer-link">Digital Marketing</a></li>
                                <li><a href="/service/web-development?service=wordpress" className="footer-link">SEO + Managed WordPress</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-white font-bold text-lg font-space-grotesk">CONTACT INFO</h3>
                            <div className="flex items-center space-x-2">
                                <FaEnvelope />
                                <a href="mailto:abc123@gmail.com" className="footer-link">
                                    abc123@gmail.com
                                </a>
                            </div>
                            <form onSubmit={handleEmailSubmit} className="footer-form">
                                <label htmlFor="">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your Email"
                                        required
                                    />
                                </label>
                                <button
                                    type="submit"
                                >
                                    Confirm
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-800 md:mt-12 mt-8 md:pt-8 pt-5 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-700 text-sm">© 2025 All Rights Reserved.</p>
                        <div className="flex space-x-6 mt-2 md:mt-0">
                            <a href="#" className="footer-link">Privacy Policy</a>
                            <a href="#" className="footer-link">Terms & Conditions</a>
                        </div>
                    </div>
                    <img src="/images/WIZSPEED.svg" alt="" className="footer-bg w-full mt-8" />
                </div>
            </footer>

            <ContactUsModal open={open} onClose={handleClose} />
        </>

    )
}

export default Footer