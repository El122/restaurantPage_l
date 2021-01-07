let addHomePage = () => {
    let mainSection = document.createElement("section");
    let container = document.createElement("container");
    let textBlock = document.createElement("div");
    let text = document.createElement("h1");

    mainSection.classList.add("main");
    container.classList.add("container");
    textBlock.classList.add("text");

    text.innerHTML = "Perfect food and delicious compot!";

    mainSection.appendChild(container);
    container.appendChild(textBlock);
    textBlock.appendChild(text);

    return mainSection;
}

export { addHomePage };