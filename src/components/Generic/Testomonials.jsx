import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { FaStar, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const Testomonials = () => {
    const mainSliderRef = useRef(null)
    const avatarSliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const videoRefs = useRef([])

    // Sample testimonials data
    // const testimonials = [
    //     {
    //         id: 1,
    //         name: "John Doe",
    //         role: "UI UX Designer",
    //         rating: 5,
    //         text: "I have been extremely happy with the results of working with the creative agency and I would highly recommend them to anyone who is looking for high-quality design and development services.",
    //         avatar: "/images/john-doe.webp",
    //         hasVideo: true,
    //         videoThumbnail: "/images/travelica-vid-1.mp4"
    //     },
    //     {
    //         id: 2,
    //         name: "Nick",
    //         role: "Architect",
    //         rating: 5,
    //         text: "Outstanding work! The team delivered exactly what we needed and exceeded our expectations in every way.",
    //         avatar: "/images/nick.webp",
    //         hasVideo: false,
    //         videoThumbnail: "/images/travelica-vid-1.mp4"
    //     },
    //     {
    //         id: 3,
    //         name: "Nina",
    //         role: "Designer",
    //         rating: 5,
    //         text: "Professional, creative, and reliable. They transformed our vision into reality with exceptional attention to detail.",
    //         avatar: "/images/nina.webp",
    //         hasVideo: true,
    //         videoThumbnail: "/images/travelica-vid-1.mp4"
    //     },
    //     {
    //         id: 4,
    //         name: "Tom",
    //         role: "Engineer",
    //         rating: 5,
    //         text: "Excellent communication and top-notch technical skills. The project was completed on time and within budget.",
    //         avatar: "/images/tom.webp",
    //         hasVideo: false,
    //         videoThumbnail: "/images/travelica-vid-1.mp4"
    //     }
    // ]

            const testimonials = [
        {
            id: 1,
            name: "Bilal Hashmi",
            role: "UI UX Designer",
            rating: 5,
            text: "Excellent team! They built us a modern, fast, and user-friendly website that truly stands out. Great communication, creative design, and on-time delivery. Highly recommend for any web development needs!",
            avatar: "/images/john-doe.webp",
            hasVideo: true,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 2,
            name: "Harry Martin",
            role: "Architect",
            rating: 1,
            text: "Wizspeed Web Design Agency not only creates beautiful websites, but websites that consistently rank well. They are extremely professional and knowledgeable with all things web-related and have been incredibly helpful to our business by providing advice and answering any questions we have had. We have used their service for over three years now, and in that time, they have proven expertise in their field and dedication to our business as their client. We highly recommend them!",
            avatar: "/images/nick.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 3,
            name: "Muhammad Saad",
            role: "Designer",
            rating: 5,
            text: "We contacted Wizspeed Web Design to assist us in updating our Company’s website since it was outdated and required an entire makeover. The developer that was assigned to our website was Tayyab, he was awesome and very easy to work with, and he handled all of our requests professionally. Most importantly they gave a quick turnaround to complete the website.",
            avatar: "/images/nina.webp",
            hasVideo: true,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 4,
            name: "Ahtesham Kazee",
            role: "Engineer",
            rating: 5,
            text: "I had really good experience with this them. We love the initial design of our website and the final product was top notch. It was a smooth transition and the service was super quick. Team Wizspeed is very responsive, they kept us updated along the project. I must say their design team is really good. Over all 10 stars. Top notch service. We have tried multiple companies before but so far Wizspeed got the best of them. Completely satisfied. Thanks again",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 5,
            name: "MUHAMMAD YASIR",
            role: "Engineer",
            rating: 5,
            text: "I have received top-class professional and attentive service from the wizspeed team at Wizspeed. They carefully listened to my requirements and worked hard to ensure my website was precisely what I wanted. My project manager was Fatima and she has provided a supportive approach throughout the process. I highly recommend Wizspeed.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 6,
            name: "Iyon",
            role: "Engineer",
            rating: 5,
            text: "Great experience working with Wizspeed. They worked with me to create my website for my artist page. They we're fast, reliable, and always friendly when I made requests. I highly recommend them for any of your website creation needs! 10 out of 10!",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 7,
            name: "Xpress Pro Labs",
            role: "Engineer",
            rating: 5,
            text: "If you’re looking for the best web designer, look no further than WizSpeed! Husnain, Shahzad, Awais and the whole team are fast, skilled and very professional. What we like the most is they are very patient and took time to understand our unique needs and exceeded our expectations. Definitely looking forward to working with the team again in the future. Thank you, WizSpeed for your exceptional service!",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 8,
            name: "Abigail Middleton",
            role: "Engineer",
            rating: 5,
            text: "11/15/23: As a small business, it was challenging to find a company that would help create and manage our website at a reasonable rate. WizSpeed has exceeded our expectations by providing excellent customer service in addition to a wonderful website! Enrolled in their maintenance package, we have the ability to continually work with WizSpeed on website updates and the responses from their team are always quick, friendly, and informative. We recently had a 'what is happening' moment with our website and after reaching out, Husnain and the team had the issue resolved within minutes. We truly enjoy working with WizSpeed. 6 MONTHS LATER Edit 6/13/24: I am editing this review because as you can see above, I truly enjoyed working with this company when we signed up. However, yesterday we were alerted by customers that our website was riddled with spam and pop-ups. I reached out to the two people I had been working with, whom I had communication with on 4/24/24. It wasn't until now that they alerted me our security services with them had laspsed in May... only two weeks after I had spoken with them. I never received any type of notice regarding this but was alerted that this is what caused all of the spam on our website. I was also alerted that our domain hosting would expire in 3 days from now. Again, I had not received any notices or invoices for continuing services. Additionally, while the spam issue was fixed multiple internal links on our site are now generating page not found. It should also be mentioned that in order to resolve the spam issue mentioned above, I emailed both contacts I had been working with and received no response. I called their main number and left a voicemail. It wasn't until I explained the situation in their website's 'chat' feature that this issue was escalated to support. A representative called me around 6pm to tell me it had been resolved and alerted me to the lapsed services. EDIT: 07/24/24 The above problems with our website had arisen due to human-error and because I was unknowingly emailing contacts who were no longer working for WizSpeed. The situation was resolved within a few days of my previous update and the original contact I had at this company, Husnain, handled the situation with the utmost customer service and we have decided to continue to use/work with WizSpeed. Overall, I think WizSpeed is a great affordable option for small businesses and they are generally quick to respond and fix issues.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 9,
            name: "BLK BRAND",
            role: "Engineer",
            rating: 5,
            text: "I had the pleasure of working with Wizspeed, and I couldn't be happier with the results. Their expertise in website development is truly remarkable, and I am thoroughly impressed with their services. From start to finish, Wizspeed demonstrated professionalism, creativity, and exceptional technical skills that exceeded my expectations.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 10,
            name: "Cha'ré Gorter",
            role: "Engineer",
            rating: 5,
            text: "WizSpeed stands out as the top choice for web design, development, and SEO services in Chicago. Their team of experts seamlessly combines stunning design, flawless functionality, and effective search engine optimization to create outstanding websites. From understanding the client's vision to delivering exceptional results, WizSpeed's professionalism and attention to detail shine through. With their comprehensive approach and commitment to client satisfaction, WizSpeed is the go-to agency for anyone seeking top-notch web services in Chicago.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 11,
            name: "Bitemyshoes",
            role: "Engineer",
            rating: 5,
            text: "First, I have been writing programs with various languages - C++ to Java, Javascript. However, my experience with Wordpress is limited. That is why I decided to outsource the project. And from a programmer perspective, these guys get A+ in my book. When I decided to go with Wizspeed, I have talked to couple other developers already. And it was very disappointing when I talked to other developers. However, Wizspeed is different. It was very refreshing that I got to see someone in person instead over the phone. We talked. And they want to know what is my needs are. They could just generalize the project, and be done with it in 2, 3 days, but they listened and very attentive. And Shahzad is the man you have to go with if you have any web project. Not just he is very knowledgeable, he will try to figure out what is your need and get the job done as you expect. I have a couple more projects that need to be done, and I am definitely retaining their service again.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 12,
            name: "Mohammad Khan",
            role: "Engineer",
            rating: 5,
            text: "I highly recommend Wizspeed Word Press Designers to all start-up businesses looking to create with some innovative ideas. I shared my ideas with them and they designed the way I wanted it to be. Gave some valuable suggestions to make my ideas look better. Fully satisfied with their work!",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 13,
            name: "Muhammad Yousuf",
            role: "Engineer",
            rating: 5,
            text: "Husnain and his team definitely hit the mark in helping me improve my website. This was an experience I could brag to my colleagues. If you're looking to revamp your page hit up Husnain he'll take good care of your project.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 14,
            name: "Rukhsana Kausar",
            role: "Engineer",
            rating: 5,
            text: "I had an amazing experience working with WizSpeed on my new website. From start to finish, the team was incredibly responsive and really listened to my ideas and needs. They turned my vision into a beautiful, functional site that I’m proud to show off. I highly recommend WizSpeed to anyone looking for top-notch web design",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 15,
            name: "Elan Furs",
            role: "Engineer",
            rating: 5,
            text: "The guys at WizSpeed are excellent to work with! They are efficient and get the job done on time. They respond to all your needs. Definitely recommend using them for your website!",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 16,
            name: "mohammed faizan saleem",
            role: "Engineer",
            rating: 5,
            text: "Our Firm worked with Wizspeed on few projects, most recent one was re-allocation of the office. During the initial meeting we had discussed our expectation and the process. The team assigned to our project was very knowledgeable and professional, they understood our needs and business concept. Everything was done timely and with no interruption of the business. I continue working with Wizspeed on ongoing IT issues. I highly recommend Wizspeed services.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 17,
            name: "H Shams",
            role: "Engineer",
            rating: 5,
            text: "Got our business website done super fast. We had a short timeframe to get website done and they got an outstanding website and brilliant design for us. We will definitely use their service again.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 18,
            name: "Steve Marano",
            role: "Engineer",
            rating: 5,
            text: "Really happy we chose WizSpeed as our web designer. Great service throughout the process and amazing work.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 19,
            name: "April Fuller",
            role: "Engineer",
            rating: 5,
            text: "We had Great experience with WizSpeed. Website is exactly what we wanted and they were very patient with our many changes.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 20,
            name: "Stephanie Miller",
            role: "Engineer",
            rating: 5,
            text: "If you are looking for a professional top-quality website yet a friendly and family-warm environment, Wizspeed is the way to go. Highly recommended.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 21,
            name: "Shuhei Fujita",
            role: "Engineer",
            rating: 5,
            text: "They did an amazing job designing the website for our business. They also did SEO for the website. Highly recommend their service even for non-IT people, like myself.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 22,
            name: "Mike Rivera",
            role: "Engineer",
            rating: 5,
            text: "Good company to work with. Highly recommend. Great web designer.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 23,
            name: "Max Payne",
            role: "Engineer",
            rating: 5,
            text: "We really love our new website design. They will be doing our Digital marketing as well.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 24,
            name: "kHALED ALSALEH",
            role: "Engineer",
            rating: 5,
            text: "I have achieved success in dealing with this company. They have excellent service. They have impressed all customers. Thank you",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 25,
            name: "Daniel Rivera",
            role: "Engineer",
            rating: 5,
            text: "Nice, friendly place and people. Built a great website for my small gaming community.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 26,
            name: "Affi Toda",
            role: "Engineer",
            rating: 5,
            text: "Love the website design and getting our seo done now",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 27,
            name: "Ben Franco",
            role: "Engineer",
            rating: 5,
            text: "The team was helpful and did a great job the site looks great!!",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        }
    ]

    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        beforeChange: (current, next) => {
            const currentVideo = videoRefs.current[current]
            if (currentVideo) {
                try {
                    currentVideo.pause()
                } catch (e) {
                    // noop
                }
            }
        },
        afterChange: (current) => {
            setCurrentSlide(current)
            const nextVideo = videoRefs.current[current]
            if (nextVideo) {
                try {
                    nextVideo.muted = true
                    const playPromise = nextVideo.play()
                    if (playPromise && typeof playPromise.then === 'function') {
                        playPromise.catch(() => {})
                    }
                } catch (e) {
                    // noop
                }
            }
        }
    }

    const avatarSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    }

    const nextSlide = () => {
        mainSliderRef.current?.slickNext()
    }

    const prevSlide = () => {
        mainSliderRef.current?.slickPrev()
    }

    const goToSlide = (slideIndex) => {
        mainSliderRef.current?.slickGoTo(slideIndex)
        avatarSliderRef.current?.slickGoTo(slideIndex)
        setCurrentSlide(slideIndex)
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`${index < rating ? 'text-orange-500' : 'text-white'} text-sm`}
            />
        ))
    }

    useEffect(() => {
        const firstVideo = videoRefs.current[0]
        if (firstVideo) {
            try {
                firstVideo.muted = true
                const playPromise = firstVideo.play()
                if (playPromise && typeof playPromise.then === 'function') {
                    playPromise.catch(() => {})
                }
            } catch (e) {
                // noop
            }
        }
    }, [])

    return (
        <div className="testimonials">
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Testimonials
                    </div>
                    <h2 className="head-h2">
                        WHAT OUR <span className="text-orange">CLIENTS SAYS</span>?
                    </h2>
                </div>
                <div className="relative md:mt-12 mt-5">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute md:-left-10 left-2  -translate-y-1/2 z-10 custom-slick-arrow"
                    >
                        <FaArrowLeftLong />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute md:-right-10 right-2 -translate-y-1/2 z-10 custom-slick-arrow"
                    >
                        <FaArrowRightLong />
                    </button>

                    {/* Main Testimonials Slider */}
                    <Slider ref={mainSliderRef} {...mainSliderSettings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={testimonial.id} className="md:px-8">
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                                    {/* Text Testimonial */}
                                    <div className="testimonial-text max-h-[355px] overflow-y-auto">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">{testimonial.name}</h3>
                                            <p className="text-gray-700 mb-4">{testimonial.role}</p>
                                            <div className="flex gap-1 mb-6">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>

                                        <img src="/images/Quotes.svg" alt="" className="quote-svg" />

                                        <p className="text-gray-700 text-lg leading-relaxed mt-2">
                                            {testimonial.text}
                                        </p>
                                    </div>

                                    {/* Video Testimonial */}
                                    <div className="relative max-h-[355px]">
                                        <video ref={(el) => (videoRefs.current[index] = el)} src={'/videos/testimonial-video.mp4'} controls loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} className='rounded-2xl' />
                                        {/* <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
                                        <img
                                            src={testimonial.videoThumbnail}
                                            alt={`${testimonial.name} video testimonial`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button className="bg-brand-dark rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 group hover:bg-brand-orange">
                                                <FaPlay className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                                            </button>
                                        </div>

                                        <span className="absolute bottom-6 left-0 right-0 mx-auto text-xl font-semibold w-fit text-white">
                                            {testimonial.name}
                                        </span>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Avatar Navigation */}
                    <div className="md:mt-7 mt-14 md:px-5">
                        <Slider ref={avatarSliderRef} {...avatarSliderSettings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="px-3 w-[220px]">
                                    <div
                                        className={`testimonial-avatar ${currentSlide === index ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    >
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="size-14 rounded-full object-cover"
                                        />
                                        <div className="">
                                            <p className="text-white text-lg font-semibold">{testimonial.name}</p>
                                            <p className="text-gray-700">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testomonials