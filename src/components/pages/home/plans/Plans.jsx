import styles from "./Plans.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { useState, useEffect, useRef } from "react";

const Plans = () => {
    const [swiper, setSwiper] = useState(undefined);
    useEffect(changeVisible, [swiper]);

    const nextElRef = useRef(null);
    const prevElRef = useRef(null);

    function changeVisible() {
        if (swiper == undefined) return;
        for (let slide of swiper.slides) {
            if (
                slide.classList.contains("swiper-slide-prev") ||
                slide.classList.contains("swiper-slide-active") ||
                slide.classList.contains("swiper-slide-next")
            )
                slide.style.opacity = 1;
            else slide.style.opacity = 0;
        }
    }

    return (
        <Swiper
            className={styles.swiper}
            initialSlide={1}
            spaceBetween={22}
            slidesPerGroup={1}
            slidesPerView={3}
            centeredSlides={true}
            modules={[Navigation]}
            navigation={{
                prevEl: prevElRef.current,
                nextEl: nextElRef.current,
            }}
            // onSwiper={setSwiper}
            // onSlideChangeTransitionStart={changeVisible}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevElRef.current;
                swiper.params.navigation.nextEl = nextElRef.current;
            }}
            injectStyles={[
                `
                .swiper-slide {
                    background-color: aqua;
                }
                
                .swiper-slide-prev,
                .swiper-slide-active,
                .swiper-slide-next {
                    opacity: 1;
                }
                `,
            ]}
        >
            <SwiperSlide className={styles.slide}></SwiperSlide>
            <SwiperSlide className={styles.slide}></SwiperSlide>
            <SwiperSlide className={styles.slide}></SwiperSlide>
            <SwiperSlide className={styles.slide}></SwiperSlide>

            <div className={styles.prevEl} ref={prevElRef} />
            <div className={styles.nextEl} ref={nextElRef} />
        </Swiper>
    );
};

export default Plans;
