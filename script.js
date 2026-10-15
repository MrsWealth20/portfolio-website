var typed = new Typed("#typing", {
    strings: [
        "BSc Information Technology Graduate",
        "Aspiring IT Auditor",
        "Cybersecurity Enthusiast",
        "Always Learning."
    ],
    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});

particlesJS("particles-js", {

    particles: {

        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#3B82F6"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 160,
            color: "#3B82F6",
            opacity: 0.25,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            out_mode: "bounce"
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            grab: {
                distance: 170,
                line_linked: {
                    opacity: 0.7
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});
