import React from 'react'

const ServiceEssentianls = ({ headData, essentialSteps }) => {
    return (
        <div className='service-essentianls'>
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        {headData.pill}
                    </div>
                    <h2 className="head-h2">
                        {headData.title} <span className="text-orange">{headData.highlightText}</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        {headData.description}
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 lg:mt-12 md:mt-8 mt-5">
                    {essentialSteps.map((step, index) => (
                        <div key={index} className="ess-card">
                            <div className="ess-icon">
                                <img src={step.image} alt={step.title} />
                            </div>
                            <h3 className="ess-title">{step.title}</h3>
                            <p className="ess-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceEssentianls