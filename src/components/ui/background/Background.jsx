import styles from "./Background.module.scss";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className={styles.background}>
            <Particles
                id={styles.particles}
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: false,
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#6989FE",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 200,
                            color: "#6989FE",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "grab",
                            },
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 140,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                    fpsLimit: 120,
                }}
            />
            <div
                className={styles.ball}
                style={{
                    right: 0,
                    bottom: -150,
                    backgroundColor: "#2B59FF",
                    filter: "blur(300px)",
                }}
            ></div>
            <div
                className={styles.ball}
                style={{
                    bottom: -200,
                    left: -200,
                    backgroundColor: "rgba(41, 255, 217, 0.8)",
                    filter: "blur(200px)",
                }}
            ></div>
            <div
                className={styles.filter}
                style={{
                    top: 0,
                }}
            ></div>
            <div
                className={styles.filter}
                style={{
                    bottom: 0,
                    transform: "scale(1, -1)",
                }}
            ></div>
        </div>
    );
};

export default Background;
