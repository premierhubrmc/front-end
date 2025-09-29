import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".about-footer-section-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("off-left")) {
              entry.target.classList.add("animate-left");
            } else if (entry.target.classList.contains("off-right")) {
              entry.target.classList.add("animate-right");
            }
          } else {
            entry.target.classList.remove("animate-left");
            entry.target.classList.remove("animate-right");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
};

export default useScrollAnimation;
