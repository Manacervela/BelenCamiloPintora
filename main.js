const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

 const isOpen = navLinks.classList.contains("open");
 menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
 navLinks.classList.remove("open");
 menuBtnIcon.setAttribute("class", "ri-close-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1300,
};



ScrollReveal().reveal(".section__header1 .head__content", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".section__header2", {
    ...scrollRevealOption,
    delay: 500,
    interval: 2000,
});

//about container

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".download__container .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".download__container p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".section__header__about", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".section__description", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1000,
});

ScrollReveal().reveal(".about__image__about img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".blog__content .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".blog__content h4", {
    ...scrollRevealOption,
    delay: 400,
});

ScrollReveal().reveal(".blog__content p", {
    ...scrollRevealOption,
    delay: 800,
})



