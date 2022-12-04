const btnToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

btnToggle.addEventListener("click", (e) => {
    const navIsVisible = nav.getAttribute("data-visible") === "true";
    if (navIsVisible) {
        nav.setAttribute("data-visible", "false");
        btnToggle.setAttribute("aria-expanded", "false");
    } else {
        nav.setAttribute("data-visible", "true");
        btnToggle.setAttribute("aria-expanded", "true");
    }
});
