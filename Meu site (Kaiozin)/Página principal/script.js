const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const el = entry.target;

        if (entry.isIntersecting) {
            // Quando o elemento aparece na tela
            el.classList.add("visible");
            el.classList.remove("hidden");
        } else {
            // Quando o elemento sai da tela (para cima ou para baixo)
            const isScrollingDown = entry.boundingClientRect.top < 0;
            el.classList.remove("visible");
            el.classList.add("hidden");
        }
    });
}, { threshold: 0.2 }); // 0.2 = inicia o efeito quando 20% do elemento aparece

// Aplica em todas as sections
document.querySelectorAll("section").forEach(section => {
    section.classList.add("scroll-fade");
    observer.observe(section);
});
