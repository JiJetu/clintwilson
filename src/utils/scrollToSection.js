export const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const offset = 80;
        const top = section.offsetTop - offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    }
};
