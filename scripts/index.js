const navLinks = document.querySelectorAll(".nav__link");
const mainContentButton = document.querySelector(".main-content__button");
const productsSection = document.querySelector(".products");
const orderInputs = document.querySelectorAll(".order-form__input");
const orderButton = document.querySelector(".order-button");

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

orderButton.addEventListener("click", () => {
    let hasError = false;

    orderInputs.forEach((input) => {
        if(!input.value) {
            hasError = true;
            input.parentElement.style.background = "red";
        }
        else input.parentElement.style.background = "";
    })

    if (!hasError) {
        orderInputs.forEach((input) => {
            input.value = "";
        })

        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
})


