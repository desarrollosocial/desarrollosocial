import React from "react"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

// Styles
import "../assets/css/carousel.css"

// Img
import Slide1 from '../assets/img/slide1.jpg'
import Slide2 from '../assets/img/slide2.jpg'
import Slide3 from '../assets/img/slide3.jpg'
import Slide4 from '../assets/img/slide4.jpg'
import Slide5 from '../assets/img/slide5.jpg'

const Carousel = () => {
    return(
        <div className="carousel">
            <Slider autoplay={10000} previousButton="&#10096;" nextButton="&#10097;">
                <div key="1" className="carousel__item">
                    <div className="center">
                        <img src={Slide1} alt="Fundación Desarrollo Social"/>
                    </div>
                </div>
                <div key="2" className="carousel__item">
                    <div className="center">
                        <img src={Slide2} alt="Fundación Desarrollo Social"/>
                    </div>
                </div>
                <div key="3" className="carousel__item">
                    <div className="center">
                        <img src={Slide3} alt="Fundación Desarrollo Social"/>
                    </div>
                </div>
                <div key="4" className="carousel__item">
                    <div className="center">
                        <img src={Slide4} alt="Fundación Desarrollo Social"/>
                    </div>
                </div>
                <div key="5" className="carousel__item">
                    <div className="center">
                        <img src={Slide5} alt="Fundación Desarrollo Social"/>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel