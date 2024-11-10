// mobile menu
const navMobile = document.querySelector("#mobileNav");
const linksContainer = document.querySelector(".overlay-content");

function openNav() {
    navMobile.style.width = "100%";
}

function closeNav() {
    navMobile.style.width = "0%";
}

linksContainer.addEventListener("click", closeNav);


//   hover on services cards
const servicesCards = document.querySelectorAll("#servicesCard");

servicesCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("services__card_active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("services__card_active");
    });
});


//   hover on get in touch cards
const getIntouchCards = document.querySelectorAll("#getIntouchCard");

getIntouchCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("getintouch__card_active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("getintouch__card_active");
    });
});

