import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Treatment.css';

// Import images
import cardiologyImg from '../assets/images/Treatments/cardiology.webp';
import orthopedicImg from '../assets/images/Treatments/orthopedic.webp';
import oncologyImg from '../assets/images/Treatments/oncology.webp';
import neurologyImg from '../assets/images/Treatments/neurology.webp';
import spineImg from '../assets/images/Treatments/spine.webp';

const treatments = [
  {
    id: 1,
    title: 'CARDIO',
    outline: 'LOGY',
    description: 'Advanced cardiac care and procedures',
    color: '#1a6dff',
    specialty: 'Cardiology',
    image: cardiologyImg
  },
  {
    id: 2,
    title: 'ORTHO',
    outline: 'PEDIC',
    description: 'Comprehensive bone and joint care',
    color: '#0083b0',
    specialty: 'Orthopedics',
    image: orthopedicImg
  },
  {
    id: 3,
    title: 'ONCO',
    outline: 'LOGY',
    description: 'Cancer treatment and care',
    color: '#00c6b4',
    specialty: 'Oncology',
    image: oncologyImg
  },
  {
    id: 4,
    title: 'NEURO',
    outline: 'LOGY',
    description: 'Brain and nervous system expertise',
    color: '#8e44ad',
    specialty: 'Neurology',
    image: neurologyImg
  },
  {
    id: 5,
    title: 'SPINE',
    outline: 'SURGERY',
    description: 'Advanced spine treatment solutions',
    color: '#e67e22',
    specialty: 'Spine Surgery',
    image: spineImg
  }
];

const Treatment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Preload images
    treatments.forEach(treatment => {
      const img = new Image();
      img.src = treatment.image;
    });
  }, []);

  return (
    <section className="treatment-section">
      <h2 className="treatment-heading">Treatments</h2>
      <div className="treatment-slider-container">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {treatments.map((treatment, index) => (
            <SwiperSlide key={treatment.id}>
              <div 
                className={`treatment-slide ${index === activeIndex ? 'active' : ''}`}
                data-specialty={treatment.specialty.toLowerCase()}
                style={{'--slide-color': treatment.color}}
              >
                <div className="circle-background">
                  <div className="circle-gradient"></div>
                  <div className="circle-image" style={{
                    backgroundImage: `url(${treatment.image})`
                  }}></div>
                </div>
                <div className="treatment-content">
                  <h2 className="treatment-title">
                    <span className="bold-text">{treatment.title}</span>
                    <span className="outline-text">{treatment.outline}</span>
                  </h2>
                  <p className="treatment-description">{treatment.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Treatment;
