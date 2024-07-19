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

ScrollReveal().reveal(".about__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
    ...scrollRevealOption,
    delay:500,
    interval:500,
});

ScrollReveal().reveal(".about__container img", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".service__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service__card", {
    duration: 1000,
    delay: 1000,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 8000, // tiempo en milisegundos entre cada cambio de slide
        disableOnInteraction: false, // para que no se detenga al interactuar con el swiper
    },
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


const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach(item => {
    
    const duplicateNode = item.cloneNode(true); // Usa cloneNode en lugar de closeNode
    duplicateNode.setAttribute("aria-hidden", true); // Establecer atributo aria-hidden
    instagram.appendChild(duplicateNode); // Agregar el nodo clonado al contenedor
});



