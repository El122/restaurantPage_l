let addContactsPage = () => {
    let contactSection = document.createElement("section");
    let container = document.createElement("container");
    let text = document.createElement("div");
    let h1 = document.createElement("h1");
    let address = document.createElement("p");
    let map = document.createElement("iframe");

    contactSection.classList.add("contacts");
    container.classList.add("container");

    text.classList.add("text");
    h1.innerHTML = "Contacts";
    address.innerHTML = "Some address 1231, 1231, +1(241)23-51-232";
    map.src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d264750.2489097247!2d103.50279389705602!3d77.03526127099362!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1609953062130!5m2!1sru!2sru";
    map.setAttribute("width", "100%");
    map.setAttribute("height", "500");
    map.setAttribute("frameborder", "0");
    map.setAttribute("style", "border:0;");
    map.setAttribute("allowfullscreen", "");
    map.setAttribute("aria-hidden", "false");
    map.setAttribute("tabindex", "0");

    contactSection.appendChild(container);
    container.appendChild(text);
    container.appendChild(map);
    text.appendChild(h1);
    text.appendChild(address);

    return contactSection;
}

export { addContactsPage };