import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imagemModa from '../../utils/assets/imgBannerModa.svg';
import imagemRefrigeracao from '../../utils/assets/imgBannerRefrigeracao.svg';
import imagemEventos from '../../utils/assets/imgBannerEventos.svg';
import imagemTecnologia from '../../utils/assets/imgBannerTecnologia.svg';
import imagemDomestico from '../../utils/assets/imgBannerDomestico.svg';

import style from './CarrosselServices.module.css';
const CarrousselServices = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        afterChange: (current) => setCurrentSlide(current),
    };

    const images = [
        imagemRefrigeracao,
        imagemModa,
        imagemEventos,
        imagemTecnologia,
        imagemDomestico
    ];

   
    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={style["divImgCarrossel"]}>
                        <img src={image} alt={`Slide ${index + 1}`} className={style["imgCarrossel"]} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarrousselServices;
