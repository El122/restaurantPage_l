let addHeader = () => {
    let header = document.createElement("header");
    let container = document.createElement("div")
    let logo = document.createElement("logo");
    let nav = document.createElement("nav");

    const navItems = [
        ["Home", "home"],
        ["Menu", "menu"],
        ["Contacts", "contacts"]
    ];

    container.classList.add("container");
    logo.classList.add("logo");

    header.appendChild(container);
    container.appendChild(logo);
    container.appendChild(nav);

    logo.innerHTML = "Village";

    navItems.forEach(item => {
        let a = document.createElement("a");
        a.innerHTML = item[0];
        a.setAttribute("page", item[1]);
        nav.appendChild(a);
    });

    return header;
}

export { addHeader };