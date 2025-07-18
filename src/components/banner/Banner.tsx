import './banner.css';
import banner from './img/banner.png';

interface IBannerProps {
  title: string;
}

function Banner({title}: IBannerProps) {
  return (
    <div className="banner-container">
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="banner-sobreposicao"></div>
      <h2 className='title-banner'>{title}</h2>
    </div>
  );
};

export default Banner;