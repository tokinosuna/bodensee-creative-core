document.addEventListener("DOMContentLoaded", (() => {
    if (typeof gsap != "undefined" && typeof ScrollTrigger != "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        
        // START: Your existing GSAP animations
        const e = gsap.utils.toArray(".reveal");
        e.forEach((e => {
            gsap.fromTo(e, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: e,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            })
        }));
        gsap.from(".hero-grid .grid-item", {
            opacity: 0,
            scale: .5,
            duration: 1,
            stagger: {
                each: .05,
                from: "random"
            },
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top 80%"
            }
        });
        // END: Your existing GSAP animations


        // START: Add the new highlighter script here
        // --- ANIMATED TEXT HIGHLIGHTER SCRIPT ---
        gsap.utils.toArray('.highlight-text').forEach(highlight => {
            gsap.to(highlight, {
                // Animate the CSS variable we created
                '--highlight-scale': 1,
                ease: "power2.inOut",
                duration: 0.8,
                scrollTrigger: {
                    trigger: highlight,
                    start: "top 85%", // When the top of the element is 85% from the viewport top
                    end: "bottom 50%",
                    toggleActions: "play none none reverse" // Play on enter, reverse on scroll back up
                }
            });
        });
        // END: Add the new highlighter script here


    } // End of the 'if GSAP exists' block

    const e = document.querySelectorAll(".section"),
        t = document.querySelector(".go-to-top");
    const o = {
        root: null,
        rootMargin: "0px",
        threshold: .3
    };
    const s = new IntersectionObserver((t => {
        t.forEach((t => {
            if (t.isIntersecting) {
                const o = t.target.getAttribute("id");
                document.body.dataset.activeSection = o
            }
        }))
    }), o);
    e.forEach((e => {
        s.observe(e)
    }));
    const i = () => {
        window.scrollY > window.innerHeight ? t.classList.add("is-visible") : t.classList.remove("is-visible")
    };
    window.addEventListener("scroll", i), i(), t.addEventListener("click", (e => {
        e.preventDefault(), window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }))
}));
