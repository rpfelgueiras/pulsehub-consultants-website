/*
-------------------------------------------------------------------------
* Template Name    : Creezy - Tailwind Css Multipurpose Template        * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : March 2023                                         * 
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/

// Navbar Js
var navbar = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".mobile-nav ul li");
window.onscroll = function () {
    if (window.pageYOffset > 80) {
        navbar.classList.add("stickyadd");
    } else {
        navbar.classList.remove("stickyadd");
    }

    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

// Menu Colleped
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Portfolio filter
const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
    filter.addEventListener("click", function () {
        let selectedFilter = filter.getAttribute("data-filter");
        let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

        if (selectedFilter == "all") {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll(".projects [data-filter]");
        }

        filterMenu = document.querySelectorAll(".filters li.filter");
        filterMenu.forEach((el) => {
            el.classList.remove("active");
        });
        filter.classList.add("active");

        itemsToHide.forEach((el) => {
            el.classList.add("hidden");
            el.classList.remove("block");
        });

        itemsToShow.forEach((el) => {
            el.classList.remove("hidden");
            el.classList.add("block");
        });
    });
});

// VanillaCounter
VanillaCounter();

// Swiper Js
var swiper = new Swiper(".client-center", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    delay: 3000,
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination-center",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Back To Top Js
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

// Tobii
const tobii = new Tobii();
