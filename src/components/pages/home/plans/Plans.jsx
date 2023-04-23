import styles from "./Plans.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState } from "react";

const Plans = () => {
    const [swiper, setSwiper] = useState(undefined);

    function changeVisible() {
        if (swiper == undefined) {
            console.log("not");
            return;
        }
        console.log("ok");
    }

    return (
        <Swiper
            onSwiper={setSwiper}
            initialSlide={1}
            className={styles.swiper}
            spaceBetween={22}
            slidesPerGroup={1}
            slidesPerView={3}
            centeredSlides={true}
            onSlideChange={changeVisible}
        >
            <SwiperSlide className={styles.slide}></SwiperSlide>
            <SwiperSlide className={styles.slide}></SwiperSlide>
            <SwiperSlide className={styles.slide}></SwiperSlide>
            <SwiperSlide className={styles.slide}></SwiperSlide>
        </Swiper>
    );
};

export default Plans;
