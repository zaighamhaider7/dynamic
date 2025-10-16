import React, { useState, useEffect, useRef } from "react";

const AboutUsCard = ({ data, isFirst = false, index }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [animateServices, setAnimateServices] = useState(false);
  const servicesCardRef = useRef(null);

  const fullText_1 = "Fantastic experience! The website was delivered on time, fully responsive, and with clean code. Communication was smooth, and every revision was handled quickly.";
  const fullText_2 = "Professional, detail-oriented, and creative. They turned our ideas into a modern, user-friendly site that our customers love. Highly recommend!";
  const fullText_3 = "Very reliable and skilled developer. Understood our requirements clearly, set up the backend flawlessly, and made integration with the frontend seamless.";

  const currentTextIndexRef = useRef(0);

  useEffect(() => {
    if (index === 1) {
      let currentIndex = 0;
      let typingTimer;
      let pauseTimer;
      let fadeTimer;

      const getCurrentText = () => {
        switch (currentTextIndexRef.current) {
          case 0: return fullText_1;
          case 1: return fullText_2;
          case 2: return fullText_3;
          default: return fullText_1;
        }
      };

      const startTypingAnimation = () => {
        const currentText = getCurrentText();
        currentIndex = 0;
        setDisplayText("");
        setIsTyping(true);

        const typeText = () => {
          if (currentIndex < currentText.length) {
            setDisplayText(currentText.slice(0, currentIndex + 1));
            currentIndex++;
            typingTimer = setTimeout(typeText, 50); // 50ms per character
          } else {
            // Text fully typed, pause then fade
            pauseTimer = setTimeout(() => {
              setIsTyping(false);
              fadeTimer = setTimeout(() => {
                // Move to next testimonial (cycle through all three)
                currentTextIndexRef.current = (currentTextIndexRef.current + 1) % 3;
                // Start next text animation
                setTimeout(startTypingAnimation, 100);
              }, 2000); // 2s fade duration
            }, 2000); // 2s pause after typing
          }
        };

        typeText();
      };

      // Start the animation
      startTypingAnimation();

      return () => {
        clearTimeout(typingTimer);
        clearTimeout(pauseTimer);
        clearTimeout(fadeTimer);
      };
    }
  }, [index]);

  // Trigger animation for services card (index === 2) when it comes into view
  useEffect(() => {
    if (index === 2 && servicesCardRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Reset animation state first
              setAnimateServices(false);

              // Small delay then trigger animation
              setTimeout(() => {
                setAnimateServices(true);
              }, 200);
            }
          });
        },
        {
          threshold: 0.3, // Trigger when 30% of the card is visible
          rootMargin: '0px 0px -50px 0px' // Trigger slightly before it's fully visible
        }
      );

      observer.observe(servicesCardRef.current);

      return () => {
        if (servicesCardRef.current) {
          observer.unobserve(servicesCardRef.current);
        }
      };
    }
  }, [index]);
  return (
    <div className={`abt-card overflow-hidden`}>
      <h3>{data?.title}</h3>
      <p>{data?.description}</p>
      {isFirst ? (
        <div className="relative w-full max-w-[560px] aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8] mx-auto mt-5">
          <img
            className="absolute inset-0 w-full h-full object-contain animate-pulse"
            src="/images/about-us-card1/contact-rings.svg"
            alt=""
          />

          {/* Boy profile - responsive positioning with clockwise rotation animation */}
          <img
            className="absolute left-1 bottom-16 w-12 sm:left-2 sm:bottom-20 sm:w-14 md:left-0 md:bottom-20 md:w-16 
                                       animate-rotate-clockwise hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            style={{ animationDelay: '0ms' }}
            src="/images/about-us-card1/boy-profile.svg"
            alt=""
          />

          {/* Girl profile - responsive positioning with anticlockwise rotation animation */}
          <img
            className="absolute right-16 top-2 w-12 sm:right-20 sm:top-3 sm:w-14 md:right-24 md:top-5 md:w-16
                                       animate-rotate-anticlockwise hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
            style={{ animationDelay: '1000ms' }}
            src="/images/about-us-card1/girl-profile.svg"
            alt=""
          />

          {/* Arrow up - responsive positioning with upward floating */}
          <img
            className="absolute right-[-5px] bottom-12 w-24 sm:right-[-8px] sm:bottom-10 sm:w-32 md:right-[-10px] md:bottom-12 md:w-40
                                       hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer
                                       animate-float-up"
            style={{ animationDelay: '500ms' }}
            src="/images/about-us-card1/arrow-up.svg"
            alt=""
          />

          {/* Arrow down - responsive positioning with downward floating */}
          <img
            className="absolute right-32 top-12 w-24 sm:right-40 sm:top-16 sm:w-32 md:right-52 md:top-20 md:w-40
                                       hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer
                                       animate-float-down"
            style={{ animationDelay: '1500ms' }}
            src="/images/about-us-card1/arrow-down.svg"
            alt=""
          />

          {/* Dedicated team - responsive positioning with gentle floating */}
          <img
            className="absolute left-2 top-12 w-20 sm:left-4 sm:top-16 sm:w-24 md:left-6 md:top-20 md:w-32
                                       hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer
                                       animate-float-gentle"
            style={{ animationDelay: '2000ms' }}
            src="/images/about-us-card1/dedicated-team.svg"
            alt=""
          />

          {/* Expert team - responsive positioning with gentle floating */}
          <img
            className="absolute right-[-8px] bottom-16 w-16 sm:right-[-12px] sm:bottom-20 sm:w-20 md:right-[-20px] md:bottom-20 md:w-24
                                       hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer
                                       animate-float-gentle"
            style={{ animationDelay: '2500ms' }}
            src="/images/about-us-card1/expert-team.svg"
            alt=""
          />
        </div>
      ) : index === 0 ? (
        // Customer Support card with speaker and customer images
        <div className="relative w-full max-w-[560px] aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8] mt-5 mx-auto">

          {/* Central speaker image - Made even bigger */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-60 sm:w-56 sm:h-64 md:w-60 md:h-68 ">
            <img
              className="w-full h-full object-contain"
              src="/images/speaker-image.svg"
              alt="Customer Support"
            />
          </div>

          {/* All 7 Customer images positioned closer to speaker - No animations */}

          {/* Customer 1 - Top Far Left */}
          <img
            className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 size-12 sm:size-14 md:size-16 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '0ms' }}
            src="/images/customer-1.svg"
            alt="Customer 1"
          />

          {/* Customer 2 - Top Left */}
          <img
            className="absolute top-2 left-1/4 -translate-x-1/2 size-12 sm:size-14 md:size-16 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '500ms' }}
            src="/images/customer-2.svg"
            alt="Customer 2"
          />

          {/* Customer 3 - Top Center */}
          <img
            className="absolute top-2 left-1/2 -translate-x-1/2 size-12 sm:size-14 md:size-16 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '1000ms' }}
            src="/images/customer-3.svg"
            alt="Customer 3"
          />

          {/* Customer 4 - Top Right */}
          <img
            className="absolute top-2 right-1/4 translate-x-1/2 size-12 sm:size-14 md:size-16 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '1500ms' }}
            src="/images/customer-4.svg"
            alt="Customer 4"
          />

          {/* Customer 5 - Top Far Right */}
          <img
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 size-12 sm:size-14 md:size-16 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '2000ms' }}
            src="/images/customer-5.svg"
            alt="Customer 5"
          />

          {/* Customer 6 - Right Center */}
          <img
            className="absolute top-1/2 right-2 -translate-y-1/2 size-12 sm:size-14 md:size-16 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '2500ms' }}
            src="/images/customer-6.svg"
            alt="Customer 6"
          />

          {/* Customer 7 - Left Center */}
          <img
            className="absolute top-1/2 left-2 -translate-y-1/2 size-12 sm:size-14 md:size-16 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '3000ms' }}
            src="/images/customer-1.svg"
            alt="Customer 7"
          />



        </div>
      ) : index === 2 ? (
        // High-Quality Services card with service elements
        <div ref={servicesCardRef} className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8] mx-auto mt-5">
          {/* Instant Deployment */}
          <img
            className={`absolute bottom-24 sm:bottom-32 right-8 sm:right-16 w-28 sm:w-40 transition-all duration-800 ease-out ${animateServices ? 'animate-fall-down' : ''}`}
            style={{
              animationDelay: '0ms',
              opacity: animateServices ? 1 : 0,
              transform: animateServices ? 'translateY(0)' : 'translateY(-100px)',
              transitionDelay: '0ms'
            }}
            src="/images/Instant.svg"
            alt="Instant Deployment"
          />

          {/* Designer */}
          <img
            className={`absolute w-40 sm:w-48 bottom-8 sm:bottom-16 right-10 sm:right-28 transition-all duration-800 ease-out ${animateServices ? 'animate-fall-down' : ''}`}
            style={{
              animationDelay: '300ms',
              opacity: animateServices ? 1 : 0,
              transform: animateServices ? 'translateY(0)' : 'translateY(-100px)',
              transitionDelay: '300ms'
            }}
            src="/images/Designer.svg"
            alt="Designer"
          />

          {/* Rewrite */}
          <img
            className={`absolute bottom-0 sm:bottom-10 right-0 sm:right-10 w-20 sm:w-24 transition-all duration-800 ease-out ${animateServices ? 'animate-fall-down' : ''}`}
            style={{
              animationDelay: '600ms',
              opacity: animateServices ? 1 : 0,
              transform: animateServices ? 'translateY(0)' : 'translateY(-100px)',
              transitionDelay: '600ms'
            }}
            src="/images/Rewrite.svg"
            alt="Rewrite"
          />

          {/* 4X Faster */}
          <img
            className={`absolute w-20 sm:w-24 bottom-0 sm:bottom-10 left-10 transition-all duration-800 ease-out ${animateServices ? 'animate-fall-down' : ''}`}
            style={{
              animationDelay: '900ms',
              opacity: animateServices ? 1 : 0,
              transform: animateServices ? 'translateY(0)' : 'translateY(-100px)',
              transitionDelay: '900ms'
            }}
            src="/images/4XFaster.svg"
            alt="4X Faster"
          />

          {/* Completed */}
          <img
            className={`absolute left-40 bottom-0 -translate-x-1/2  sm:bottom-6 sm:w-20 md:bottom-8 w-24 md:w-36 transition-all duration-800 ease-out ${animateServices ? 'animate-fall-down' : ''}`}
            style={{
              animationDelay: '1200ms',
              opacity: animateServices ? 1 : 0,
              transform: animateServices ? 'translateY(0) translateX(-50%)' : 'translateY(-100px) translateX(-50%)',
              transitionDelay: '1200ms'
            }}
            src="/images/Completed.svg"
            alt="Completed"
          />

          {/* Gift */}
          <img
            className={`absolute bottom-[15%] sm:bottom-[35%] left-28 w-10 sm:w-16 transition-all duration-800 ease-out ${animateServices ? 'animate-fall-down' : ''}`}
            style={{
              animationDelay: '1500ms',
              opacity: animateServices ? 1 : 0,
              transform: animateServices ? 'translateY(0)' : 'translateY(-100px)',
              transitionDelay: '1500ms'
            }}
            src="/images/gift.svg"
            alt="Gift"
          />

          {/* Camera */}
          <img
            className={`absolute bottom-20 sm:bottom-24 right-16 sm:right-20 w-10 sm:w-16 transition-all duration-800 ease-out ${animateServices ? 'animate-fall-down' : ''}`}
            style={{
              animationDelay: '1800ms',
              opacity: animateServices ? 1 : 0,
              transform: animateServices ? 'translateY(0)' : 'translateY(-100px)',
              transitionDelay: '1800ms'
            }}
            src="/images/camera.svg"
            alt="Camera"
          />

          {/* Toggle */}
          <img
            className={`absolute bottom-10 sm:bottom-20 right-0 sm:right-4 w-16 sm:w-24 transition-all duration-800 ease-out ${animateServices ? 'animate-fall-down' : ''}`}
            style={{
              animationDelay: '2100ms',
              opacity: animateServices ? 1 : 0,
              transform: animateServices ? 'translateY(0)' : 'translateY(-100px)',
              transitionDelay: '2100ms'
            }}
            src="/images/toggle.svg"
            alt="Toggle"
          />
        </div>
      ) : index === 3 ? (
        // Customer Support card (4th card) with speaker and customer images
        <div className=" relative w-full max-w-[560px] aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8] mt-5 mx-auto">

          {/* Central speaker image - Made even bigger */}
          <div className="absolute left-1/2 top-24 -translate-x-1/2 -translate-y-1/2 w-52 h-60 sm:w-56 sm:h-64 md:w-60 md:h-68">
            <img
              className="w-full h-full object-contain"
              src="/images/speaker-image.svg"
              alt="Customer Support"
            />
          </div>

          {/* All 7 Customer images positioned closer to speaker - No animations */}

          {/* Customer 1 - Top Far Left */}
          <img
            className="absolute bottom-40 left-20 size-8 sm:size-8 md:size-10 lg:size-12 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '0ms' }}
            src="/images/customer-1.svg"
            alt="Customer 1"
          />

          {/* Customer 2 - Top Left */}
          <img
            className="absolute bottom-20 sm:bottom-20 md:bottom-24 lg:bottom-28 left-10 sm:left-10 md:left-12 lg:left-14 -translate-x-1/2 size-8 sm:size-8 md:size-10 lg:size-12 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '500ms' }}
            src="/images/customer-2.svg"
            alt="Customer 2"
          />

          {/* Customer 3 - Top Center */}
          <img
            className="absolute bottom-40 sm:bottom-40 md:bottom-48 lg:bottom-52 left-40 sm:left-40 md:left-48 lg:left-52 -translate-x-1/2 size-8 sm:size-8 md:size-10 lg:size-12 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '1000ms' }}
            src="/images/customer-3.svg"
            alt="Customer 3"
          />

          {/* Customer 4 - Top Right */}
          <img
            className="absolute bottom-40 right-20 sm:right-20 md:right-24 lg:right-28 translate-x-1/2 size-8 sm:size-8 md:size-10 lg:size-12 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '1500ms' }}
            src="/images/customer-4.svg"
            alt="Customer 4"
          />

          {/* Customer 5 - Top Far Right */}
          <img
            className="absolute bottom-20 sm:bottom-20 md:bottom-20 lg:bottom-24 right-4 size-8 sm:size-8 md:size-10 lg:size-12 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '2000ms' }}
            src="/images/customer-5.svg"
            alt="Customer 5"
          />

          {/* Customer 6 - Right Center */}
          <img
            className="absolute bottom-0 right-10 sm:right-10 md:right-12 lg:right-16 -translate-y-1/2 size-8 sm:size-8 md:size-10 lg:size-12 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '2500ms' }}
            src="/images/customer-6.svg"
            alt="Customer 6"
          />

          {/* Customer 7 - Left Center */}
          <img
            className="absolute bottom-0 left-10 sm:left-10 md:left-12 lg:left-16 -translate-y-1/2 size-8 sm:size-8 md:size-10 lg:size-12 rounded-full object-cover animate-zoom-pulse"
            style={{ animationDelay: '3000ms' }}
            src="/images/customer-2.svg"
            alt="Customer 7"
          />

        </div>
      ) : index === 1 ? (
        // Proven Results card with testimonial-style design
        <div className="relative w-full max-w-[560px] aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8] mt-5 bg-[#171717] rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-start items-start">

          {/* Orange quotation mark at top */}
          <div className="flex justify-start items-start mb-4">
            <img
              className="w-6 h-4 sm:w-8 sm:h-6 md:w-10 md:h-8"
              src="/images/orange-mark.svg"
              alt="Quote"
            />
          </div>

          {/* Testimonial text */}
          <div className="text-start mb-6 flex-grow">
            <p className={`text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed relative ${!isTyping ? 'animate-typewriter-fade' : ''
              }`}>
              {displayText}
              {isTyping && <span className="animate-cursor">|</span>}
            </p>
          </div>

          {/* Bottom card image */}
          <div className="flex justify-start items-end w-32 sm:w-36 md:w-40 lg:w-44">
            <img
              className="w-full"
              src="/images/card-image.svg"
              alt="Daniel Lewis Businessman"
            />
          </div>

        </div>
      ) : (
        <img src={data?.imgsrc} alt="" />
      )}
    </div>
  );
};

export default AboutUsCard;
