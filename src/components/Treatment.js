import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Treatment.css';

const treatments = [
  {
    id: 1,
    title: 'CARDIO',
    outline: 'LOGY',
    description: 'Advanced cardiac care and procedures',
    color: '#1a6dff',
    specialty: 'Cardiology'
  },
  {
    id: 2,
    title: 'ORTHO',
    outline: 'PEDIC',
    description: 'Comprehensive bone and joint care',
    color: '#ff3366',
    specialty: 'Orthopedics'
  },
  {
    id: 3,
    title: 'ONCO',
    outline: 'LOGY',
    description: 'Cancer treatment and care',
    color: '#00c6b4',
    specialty: 'Oncology'
  },
  {
    id: 4,
    title: 'NEURO',
    outline: 'LOGY',
    description: 'Brain and nervous system expertise',
    color: '#8e44ad',
    specialty: 'Neurology'
  },
  {
    id: 5,
    title: 'SPINE',
    outline: 'SURGERY',
    description: 'Advanced spine treatment solutions',
    color: '#e67e22',
    specialty: 'Spine Surgery'
  }
];

const Treatment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="treatment-section">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
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
                  backgroundImage: `url(/images/Treatments/${
                    treatment.specialty.toLowerCase() === 'spine surgery' ? 'spine' :
                    treatment.specialty.toLowerCase() === 'orthopedics' ? 'orthopedic' :
                    treatment.specialty.toLowerCase()
                  }.webp)`
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
    </section>
  );
};

export default Treatment;
