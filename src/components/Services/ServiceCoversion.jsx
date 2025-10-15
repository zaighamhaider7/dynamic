import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const ServiceCoversion = () => {
    return (
        <div className="bg-brand-dark lets-talk">
            <div className="container">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="head-h2">
                        It's Your Turn to Watch Your <span className="text-orange">Conversions Soar</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[600px] mx-auto my-7">
                        Let’s make your website work harder than you do, attracting new customers, building trust and driving revenue.
                    </p>
                    <div className="btn-group justify-center">
                        <a href="/portfolio" className="btn-orange w-fit">
                            <span >
                                <FaArrowRightLong className='-rotate-45' />
                            </span>
                            Portfolio
                        </a>
                        <a href="/about-us" className="btn-orange btn-orange-outline w-fit">
                            <span >
                                <FaArrowRightLong className='-rotate-45' />
                            </span>
                            About Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCoversion