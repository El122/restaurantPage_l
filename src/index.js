import { addHeader } from "./components/header";
import { addHomePage } from "./components/homePage";
import { addMenuPage } from "./components/menuPage";
import { addContactsPage } from "./components/contactsPage";

const content = document.getElementById("content");
const main = document.createElement("main");

content.appendChild(addHeader());
content.appendChild(main);
main.appendChild(addHomePage());

const nav = document.getElementsByTagName("a");

for (let item of nav) {
    item.onclick = (function (e) {
        e.preventDefault();
        let page = item.getAttribute("page");

        switch (page) {
            case "home":
                main.innerHTML = "";
                main.appendChild(addHomePage());
                break;
            case "menu":
                main.innerHTML = "";
                main.appendChild(addMenuPage());
                break;
            case "contacts":
                main.innerHTML = "";
                main.appendChild(addContactsPage());
                break;
        }
    });
}