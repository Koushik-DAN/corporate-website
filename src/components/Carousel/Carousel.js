import React from 'react';
import first from '../../Assets/Images/carousel-images/1.jpg';
import second from '../../Assets/Images/carousel-images/2.jpg';
const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[500px]">
    <img src={first} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[500px]">
    <img src={second} className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
   
  
</div>
        </div>
    );
};

export default Carousel;