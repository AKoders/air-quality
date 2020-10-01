import React from 'react';
import SlideFacts from "./SlideFacts";
import './Factions.scss';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


SwiperCore.use([Navigation, Pagination])

const Facts = ({title, slides}) => {
   const factsSlides = slides.map((slide)=> <SwiperSlide>

       <SlideFacts item={slide} key={slide.id}/>

   </SwiperSlide>);
    return (
        <section className="facts container">
            <h2 className="facts-title">{title}</h2>
            <div className="swiper-button-prev"/>


            <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={3}
                    loopFillGroupWithBlank={true}
                navigation={{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',

                }}
                    pagination= { {
                        el: '.facts-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="facts-pagination-bullet ${className}"></span>`;
                },
            }}
            >
                {factsSlides}

            </Swiper>
            <div className="swiper-button-next"/>
            <div className="facts-pagination"/>
        </section>
    );
};

export default Facts;