import { tsParticles } from "tsparticles-engine";

tsParticles.load("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { enable: true, speed: 2 },
        line_linked: { enable: true, distance: 150 },
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
        },
    },
});