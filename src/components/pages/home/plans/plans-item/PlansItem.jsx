import styles from "./PlansItem.module.scss";
import { SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";

const PlansItem = () => {
    const swiperSlide = useSwiperSlide();
    return <SwiperSlide className={styles.plan}></SwiperSlide>;
};

export default PlansItem;
