import React, { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [hasDisplayed, setHasDisplayed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const boxRef = useRef(null);

  const fullText = "Expert Care with a Heart—Healing Beyond Borders";
  const secondLine = "";

  useEffect(() => {
    let currentIndex = 0;
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setHasDisplayed(true);
      }
    }, 100);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typeInterval);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = '#cba632';
      boxRef.current.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = 'transparent';
      boxRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <section className="hero" style={{ 
      position: 'relative', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 8% 0 5%'
    }}>
      {/* Title Row */}
      <div style={{
        width: '100%',
        textAlign: 'center',
        padding: '2rem 0',
        marginTop: '2rem'
      }}>
        <h1 className="hero-title inline-block !text-lg !tracking-[0.34rem] !font-bold !font-playfair">
          {text}
          {showCursor && !hasDisplayed && <span className="cursor">|</span>}
        </h1>
      </div>

      {/* Content Row */}
      <div className="hero-content" style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '2rem',
        alignItems: 'center',
        marginTop: '2rem'
      }}>
        {/* Image Column */}
        <div style={{
          width: '100%',
          height: '400px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src="/images/doctor.webp" 
            alt="Healthcare"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease-in-out',
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        </div>

        {/* CTA Buttons Column */}
        <div className="flex flex-col items-center justify-center" style={{ height: '100%' }}>
          <button className="cta-button relative overflow-hidden px-12 py-6 text-lg font-medium tracking-wide mb-6 hover:text-black transition-colors">
            Get a Free Consultation
            <span className="btn-fill"></span>
          </button>
          <button className="cta-button-gold relative overflow-hidden px-12 py-6 text-black text-lg font-medium tracking-wide">
            More Treatment
            <span className="btn-fill-white"></span>
          </button>
        </div>

        {/* Video Column */}
        <div className="hero-video" style={{ 
          width: '500px',
          height: '400px',
          marginLeft: '2rem',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'flex-start',  
          alignItems: 'center',
          paddingRight: '5rem'  
        }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          >
            <source src="/videos/video1.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>

      {/* Heartbeat Line */}
      <div className="heartbeat-line" style={{ marginTop: '2rem' }}>
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
            stroke="#0097A7"
            strokeWidth="0.7"
            fill="none"
            strokeDasharray="1200"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="heartbeat-path"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
