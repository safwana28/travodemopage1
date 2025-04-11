import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Header';
import '../styles/CircleRevealHero.css';

gsap.registerPlugin(ScrollTrigger);

const CircleRevealHero = () => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const contentSectionRef = useRef(null);
  const headlineRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const circle = circleRef.current;
    const container = containerRef.current;
    const contentSection = contentSectionRef.current;
    const headline = headlineRef.current;

    // Reset initial states
    gsap.set(circle, {
      scale: 1,
    });
    
    gsap.set(contentSection, {
      opacity: 0,
      y: 30
    });

    // Create the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          setIsExpanded(self.progress > 0.1);
        }
      }
    });

    // Animation sequence
    tl.to(circle, {
      scale: 15,
      duration: 1,
      ease: 'power2.inOut'
    })
    .to(headline, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3
    }, '-=1')
    .to(contentSection, {
      opacity: 1,
      y: 0,
      duration: 0.5
    }, '-=0.3');

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (isExpanded) {
      // Show header after circle expands
      const header = document.querySelector('.header');
      if (header) {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
      }
    }
  }, [isExpanded]);

  return (
    <>
      <Header />
      <div className="hero-container" ref={containerRef}>
        <div className={`initial-text ${isExpanded ? 'fade-out' : ''}`}>
          <div className="initial-text-left">
            World-Class Treatment, <br></br>Seamless Care All In <br></br> One Destination</div>
        </div>
        <div className={`circle-container ${isExpanded ? 'expanded' : ''}`}>
          <div className="circle" ref={circleRef}>
            <h2 className="circle-headline" ref={headlineRef}>
              HEALING BEYOND BORDERS
            </h2>
          </div>
        </div>

        {/* Content section that appears after scroll */}
        <div className="content-section" ref={contentSectionRef}>
          <div className="content-wrapper">
            <div className="hero-content">
              <h1>Your Bridge To World Class HealthCare</h1>
            </div>
          </div>

          <div className="hero-background">
            <img 
              src="/images/doctor5.webp" 
              alt="Medical Team" 
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>

          {/* Heartbeat Line */}
          <div className="heartbeat-line">
            <svg viewBox="0 0 1200 30" preserveAspectRatio="none">
              <path
                d="M0 15 
                   L30 15 
                   L35 15 
                   L38 5 
                   L41 25 
                   L44 5 
                   L47 25 
                   L50 15 
                   L55 15
                   L65 15 
                   L68 5 
                   L71 25 
                   L74 5 
                   L77 25 
                   L80 15 
                   L85 15
                   L95 15 
                   L98 5 
                   L101 25 
                   L104 5 
                   L107 25 
                   L110 15 
                   L115 15
                   L125 15 
                   L128 5 
                   L131 25 
                   L134 5 
                   L137 25 
                   L140 15 
                   L145 15
                   L155 15 
                   L158 5 
                   L161 25 
                   L164 5 
                   L167 25 
                   L170 15 
                   L180 15
                   L185 15 
                   L188 5 
                   L191 25 
                   L194 5 
                   L197 25 
                   L200 15 
                   L205 15
                   L215 15 
                   L218 5 
                   L221 25 
                   L224 5 
                   L227 25 
                   L230 15 
                   L235 15
                   L245 15 
                   L248 5 
                   L251 25 
                   L254 5 
                   L257 25 
                   L260 15
                   L265 15 
                   L270 15 
                   L273 5 
                   L276 25 
                   L279 5 
                   L282 25 
                   L285 15
                   L290 15 
                   L295 15 
                   L298 5 
                   L301 25 
                   L304 5 
                   L307 25 
                   L310 15
                   L315 15 
                   L320 15 
                   L323 5 
                   L326 25 
                   L329 5 
                   L332 25 
                   L335 15
                   L340 15 
                   L345 15 
                   L348 5 
                   L351 25 
                   L354 5 
                   L357 25 
                   L360 15
                   L365 15 
                   L370 15 
                   L373 5 
                   L376 25 
                   L379 5 
                   L382 25 
                   L385 15
                   L390 15 
                   L395 15 
                   L398 5 
                   L401 25 
                   L404 5 
                   L407 25 
                   L410 15
                   L415 15 
                   L420 15 
                   L423 5 
                   L426 25 
                   L429 5 
                   L432 25 
                   L435 15
                   L440 15 
                   L445 15 
                   L448 5 
                   L451 25 
                   L454 5 
                   L457 25 
                   L460 15
                   L465 15 
                   L470 15 
                   L473 5 
                   L476 25 
                   L479 5 
                   L482 25 
                   L485 15
                   L490 15 
                   L495 15 
                   L498 5 
                   L501 25 
                   L504 5 
                   L507 25 
                   L510 15 
                   L1200 15"
                strokeWidth="0.7"
                fill="none"
                strokeDasharray="1200"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="heartbeat-path"
              />
              <path
                d="M0 15 
                   L30 15 
                   L35 15 
                   L38 5 
                   L41 25 
                   L44 5 
                   L47 25 
                   L50 15 
                   L55 15
                   L65 15 
                   L68 5 
                   L71 25 
                   L74 5 
                   L77 25 
                   L80 15 
                   L85 15
                   L95 15 
                   L98 5 
                   L101 25 
                   L104 5 
                   L107 25 
                   L110 15 
                   L115 15
                   L125 15 
                   L128 5 
                   L131 25 
                   L134 5 
                   L137 25 
                   L140 15 
                   L145 15
                   L155 15 
                   L158 5 
                   L161 25 
                   L164 5 
                   L167 25 
                   L170 15 
                   L180 15
                   L185 15 
                   L188 5 
                   L191 25 
                   L194 5 
                   L197 25 
                   L200 15 
                   L205 15
                   L215 15 
                   L218 5 
                   L221 25 
                   L224 5 
                   L227 25 
                   L230 15 
                   L235 15
                   L245 15 
                   L248 5 
                   L251 25 
                   L254 5 
                   L257 25 
                   L260 15
                   L265 15 
                   L270 15 
                   L273 5 
                   L276 25 
                   L279 5 
                   L282 25 
                   L285 15
                   L290 15 
                   L295 15 
                   L298 5 
                   L301 25 
                   L304 5 
                   L307 25 
                   L310 15
                   L315 15 
                   L320 15 
                   L323 5 
                   L326 25 
                   L329 5 
                   L332 25 
                   L335 15
                   L340 15 
                   L345 15 
                   L348 5 
                   L351 25 
                   L354 5 
                   L357 25 
                   L360 15
                   L365 15 
                   L370 15 
                   L373 5 
                   L376 25 
                   L379 5 
                   L382 25 
                   L385 15
                   L390 15 
                   L395 15 
                   L398 5 
                   L401 25 
                   L404 5 
                   L407 25 
                   L410 15
                   L415 15 
                   L420 15 
                   L423 5 
                   L426 25 
                   L429 5 
                   L432 25 
                   L435 15
                   L440 15 
                   L445 15 
                   L448 5 
                   L451 25 
                   L454 5 
                   L457 25 
                   L460 15
                   L465 15 
                   L470 15 
                   L473 5 
                   L476 25 
                   L479 5 
                   L482 25 
                   L485 15
                   L490 15 
                   L495 15 
                   L498 5 
                   L501 25 
                   L504 5 
                   L507 25 
                   L510 15 
                   L1200 15"
                strokeWidth="0.7"
                fill="none"
                strokeDasharray="1200"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="heartbeat-path"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleRevealHero;
