import React from 'react'
import { FaPhone } from 'react-icons/fa6'

const LetsTalk = () => {
    return (
        <div className="bg-brand-dark lets-talk">
            <div className="container">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="head-h2">
                        Ready to open your digital <span className="text-orange">doors of success?</span>?
                    </h2>
                    <p className="text-gray-900 text-center max-w-[600px] mx-auto my-7">
                        Let’s make your website work harder than you do, attracting new customers, building trust and driving revenue.
                    </p>
                    <a href="" className="btn-orange w-fit mx-auto">
                        <span>
                            <FaPhone />
                        </span>
                        Let's Talk
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk