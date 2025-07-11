import React from 'react';
import './banner.css';
import banner from './img/banner.png';

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="banner-sobreposicao"></div>
      <h2 className='title-banner'>CInBora: Seu Campus Mais Perto</h2>
    </div>
  );
};

export default Banner;
