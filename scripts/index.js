const navLinks = document.querySelectorAll(".nav__link");
const mainContentButton = document.querySelector(".main-content__button");
const productsSection = document.querySelector(".products");

const scrollToSection = (sectionName) => {
    const section = document.querySelector(`.${sectionName}`);
    section.scrollIntoView({behavior: "smooth"});
}

mainContentButton.addEventListener("click", () => {
    scrollToSection(productsSection.className);
})

navLinks.forEach((navLink) => {
    let link = navLink.dataset.link;

    navLink.addEventListener("click" , () => {
        scrollToSection(link)
    });
})
