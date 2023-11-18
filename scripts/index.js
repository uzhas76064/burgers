const navLinks = document.querySelectorAll(".nav__link");
const mainContentButton = document.querySelector(".main-content__button");
const productsSection = document.querySelector(".products");
const orderInputs = document.querySelectorAll(".order-form__input");
const orderButton = document.querySelector(".order-button");
const currencyButton = document.querySelector(".currency");
const prices = document.querySelectorAll(".products-item__price");

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

currencyButton.addEventListener("click", (evt) => {
    let currentCurrency = evt.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 89.35;
    }
    else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3.28;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    }
    else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    evt.target.innerText = newCurrency;

    prices.forEach((price) => {
        console.log(price.getAttribute("data-price"))
        price.innerText = (price.getAttribute("data-price") * coefficient).toFixed(1) + newCurrency;
    })
})

