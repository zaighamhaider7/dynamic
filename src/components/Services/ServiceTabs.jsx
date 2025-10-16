import React from 'react'
import { FaGlobe } from 'react-icons/fa6'

const ServiceTabs = ({
    headData = {
        pill: "See How Our Services Make Us Tick Us",
        title: "WHAT WE",
        highlightText: "DO BEST",
        description: "We don't sell our digital marketing and web design services in a hit-or-miss manner. Instead, we cater to your problems through our targeted services, including:"
    },
    tabsData = {},
    activeTab,
    setActiveTab,
    headClass = "",
    isEqualBox = false,
    tabsWidth
}) => {

    const currentTab = tabsData[activeTab]

    if (!Object.keys(tabsData).length) {
        return <div>No tabs data provided</div>
    }

    return (
        <div className={`service-tabs`}>
            <div className="container">
                <div className={`head-cont ${headClass}`}>
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        {headData.pill}
                    </div>
                    <h2 className="head-h2">
                        {headData.title} <span className="text-orange">{headData.highlightText}</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[800px] mx-auto">
                        {headData.description}
                    </p>
                </div>

                {/* Main Tabs */}
                {/* <div className="overflow-x-auto flex items-center w-full no-scrollbar ">
                    <div
                        className={`flex gap-4 sm:my-12 my-8 max-w-5xl mx-auto px-4 sm:px-0 sm:pb-0 pb-1.5 ${tabsWidth ? tabsWidth : ""}`}
                        style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        }}
                    >
                        {Object.entries(tabsData).map(([key, tab]) => (
                        <button
                            key={key}
                            onClick={() => {
                            setActiveTab(key);
                            const url = new URL(window.location);
                            url.searchParams.set('service', key);
                            window.history.pushState({}, '', url.toString());
                            }}
                            className={`px-6 py-2 flex gap-2 items-center rounded-full border transition-all duration-300 font-space-grotesk tab-what ${activeTab === key
                            ? 'bg-orange-500 text-white border-orange-500 active-tab-what '
                            : 'bg-transparent text-gray-900 border-gray-600 hover:border-orange-500 hover:text-orange-500'
                            }`}
                            style={{
                            scrollSnapAlign: 'start',
                            flexShrink: 0, // Prevent tabs from shrinking and being cut off
                            }}
                        >
                            {tab.icon ? tab.icon : <FaGlobe />}
                            <span className="whitespace-nowrap font-space-grotesk">{tab.title}</span>
                        </button>
                        ))}
                    </div>
                </div> */}

                {/* tabs */}

                <div className="h-full !flex !items-center !justify-center">
                    {/* <div
                        className={`w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4  sm:my-12 my-8 sm:px-0 sm:pb-0 pb-1.5 ${tabsWidth ? tabsWidth : ""}`}
                    > */}
                    <div
                    className={`w-full overflow-x-auto flex space-x-4 sm:my-12 my-8 sm:px-0 sm:pb-0 pb-1.5 lg:grid lg:grid-cols-3 lg:space-x-0 lg:gap-4 ${tabsWidth ? tabsWidth : ""}`}
                    style={{
                        scrollbarWidth: 'none',           // Firefox
                        msOverflowStyle: 'none',          // IE 10+
                    }}
                    >

                        {Object.entries(tabsData).map(([key, tab]) => (
                                 <button
                                    key={key}
                                    onClick={() => {
                                    setActiveTab(key);
                                    const url = new URL(window.location);
                                    url.searchParams.set('service', key);
                                    window.history.pushState({}, '', url.toString());
                                    }}
                                    className={`px-6 py-2 flex gap-2 items-center justify-center rounded-full border transition-all duration-300 font-space-grotesk tab-what ${
                                    activeTab === key
                                        ? 'bg-orange-500 text-white border-orange-500 active-tab-what'
                                        : 'bg-transparent text-gray-900 border-gray-600 hover:border-orange-500 hover:text-orange-500'
                                    }`}
                                >
                                    {tab.icon ? tab.icon : <FaGlobe />}
                                    <span className="whitespace-nowrap font-space-grotesk text-[14px]">{tab.title}</span>
                                </button>
                        ))}
                    </div>
                </div>

                
                {/* cards */}
                <div className={`grid ${isEqualBox ? 'lg:grid-cols-2' : 'lg:grid-cols-5'} grid-cols-1 gap-5 items-stretch`}>

                    <div className={`results-tab ${!isEqualBox ? 'lg:col-span-2' : ''} lg:order-1 order-2 h-full`}>
                        {currentTab?.service && (
                            <>
                                <div className="head-pill w-fit">
                                    <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                    {currentTab.service.title}
                                </div>
                                <h3 className="text-2xl font-semibold mt-4 mb-7">
                                    {currentTab.service.heading}
                                </h3>
                                {currentTab.service.description && (
                                    <p className="text-gray-700">
                                        {currentTab.service.description}
                                    </p>
                                )}
                            </>
                        )}
                    </div>

                    

                    {currentTab?.image ? (
                        <img
                        alt={currentTab?.title}
                        className="rounded-lg shadow-2xl w-full h-full lg:col-span-3 aspect-video lg:order-2 order-1 object-cover"
                        src={currentTab.image}
                        />
                    ) : currentTab?.video ? (
                    <div className={`relative ${!isEqualBox ? 'lg:col-span-3' : ''} lg:order-2 order-1`}>
                        {/* <div className="flex items-center justify-center w-full h-full min-h-[400px] lg:min-h-0 lg:h-full overflow-hidden rounded-lg shadow-2xl bg-black"> */}
                        <div class="flex items-center justify-center w-full min-h-[200px] lg:min-h-[400px] bg-transparent shadow-none 
                                     lg:min-h-0 lg:h-full 
                                    lg:bg-black lg:shadow-2xl 
                                    overflow-hidden rounded-lg">
                        <video
                            src={currentTab.video}
                            className="max-h-full max-w-full object-contain"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                        />
                        </div>
                    </div>
                    ) : null}



                    

                    {/* <div className={`relative ${!isEqualBox ? 'lg:col-span-3' : ''} lg:order-2 order-1`}>
                        <div className="flex items-center justify-center w-full h-full min-h-[400px] lg:min-h-0 lg:h-full overflow-hidden rounded-lg shadow-2xl bg-black">
                            <video
                            src={currentTab?.video}
                            className="max-h-full max-w-full object-contain"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            ></video>
                        </div>
                    </div> */}


                
                {/* <div className={`${!isEqualBox ? 'lg:col-span-3' : ''} lg:order-2 order-1 h-full overflow-hidden flex items-center justify-center`}>
                    <video
                        src={currentTab?.video}
                        className="rounded-lg shadow-2xl h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                    </video>
                </div> */}

                </div>


            </div>
        </div>
    )
}

export default ServiceTabs