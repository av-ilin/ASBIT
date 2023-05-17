import styles from "./Plans.module.scss";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef } from "react";

import PlansItem from "./plans-item/PlansItem";

const Plans = () => {
    // const [swiper, setSwiper] = useState(undefined);
    // useEffect(changeVisible, [swiper]);

    const nextElRef = useRef(null);
    const prevElRef = useRef(null);

    function updVisible(swiper) {
        if (swiper === undefined) return;
        for (let slide of swiper.slides) {
            if (
                slide.classList.contains("swiper-slide-prev") ||
                slide.classList.contains("swiper-slide-active") ||
                slide.classList.contains("swiper-slide-next")
            )
                slide.style.opacity = 1;
            else slide.style.opacity = 0;
        }

        if (swiper.isEnd) nextElRef.current.style.opacity = 0;
        else nextElRef.current.style.opacity = 1;
        if (swiper.isBeginning) prevElRef.current.style.opacity = 0;
        else prevElRef.current.style.opacity = 1;
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
            onSlideChangeTransitionStart={updVisible}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevElRef.current;
                swiper.params.navigation.nextEl = nextElRef.current;
            }}
        >
            <SwiperSlide className={styles.slide}>
                <PlansItem percent={1} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <PlansItem percent={2} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <PlansItem percent={3} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <PlansItem percent={4} />
            </SwiperSlide>

            <div className={styles.prevEl} ref={prevElRef} />
            <div className={styles.nextEl} ref={nextElRef} />
        </Swiper>
    );
};

export default Plans;
