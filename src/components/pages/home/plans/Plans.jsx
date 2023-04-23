import styles from "./Plans.module.scss";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

const Plans = () => {
    return (
        <div className={styles["swiper-wrap"]}>
            <Swiper className={styles.swiper} spaceBetween={22}>
                <SwiperSlide className={styles.plan}></SwiperSlide>
                <SwiperSlide className={styles.plan}></SwiperSlide>
                <SwiperSlide className={styles.plan}></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Plans;
