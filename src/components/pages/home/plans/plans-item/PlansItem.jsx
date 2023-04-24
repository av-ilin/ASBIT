import styles from "./PlansItem.module.scss";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

const PlansItem = () => {
    // const swiperSlide = usewiperSlide();
    return <SwiperSlide className={styles.plan}></SwiperSlide>;
};

export default PlansItem;
