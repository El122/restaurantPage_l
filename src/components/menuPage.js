let addMenuPage = () => {
    let menu = [
        {
            title: "Unique Soup",
            price: "200₽",
            img: "../../src/img/soup.jpg",
            description: "Delicious soup with pasta, meat and some green things"
        },
        {
            title: "Unbelivable Pasta",
            price: "140₽",
            img: "../../src/img/pasta.jpg",
            description: "Our pasta with salad has unforgetable taste"
        },
        {
            title: "Amazing Compote",
            price: "70₽",
            img: "../../src/img/compote.jpg",
            description: "Drink compote and be happy"
        },
        {
            title: "Sweet Sweets",
            price: "9999999999₽",
            img: "../../src/img/sweet.jpg",
            description: "Sweet Sweets Sweet Sweets Sweet Sweets Sweet Sweets Sweet Sweets"
        },
    ];

    let menuSection = document.createElement("section");
    let container = document.createElement("div");
    let cardsContainer = document.createElement("div");

    menuSection.classList.add("menu");
    container.classList.add("container");
    cardsContainer.classList.add("cardsContainer");

    menuSection.appendChild(container);
    container.appendChild(cardsContainer);

    menu.forEach(element => {
        let card = document.createElement("div");
        let cardTitle = document.createElement("h2");
        let cardPrice = document.createElement("h3");
        let cardImg = document.createElement("img");
        let cardDescription = document.createElement("p");

        card.classList.add("card");
        cardsContainer.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(cardPrice);
        card.appendChild(cardImg);
        card.appendChild(cardDescription);
        console.log(element.img)
        cardTitle.innerText = element.title;
        cardPrice.innerText = element.price;
        cardImg.src = element.img;
        cardDescription.innerText = element.description;
    });

    return menuSection;
}

export { addMenuPage };