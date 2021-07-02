/**
 * terminal script to compile to dist/main.js:
 * npx webpack --mode development 
 * 
 * terminal script to set dist folder as gh-pages root:
 * git subtree push --prefix dist origin gh-pages
 */

import loadHeader from './header.js';
import loadAbout from './about.js';
import loadMenu from './menu.js';
import loadOrder from './order.js';
import loadContact from './contact.js';

loadHeader();
loadAbout();

const logo = document.querySelector("#logo");
const tab1About = document.querySelector("#divAboutTab");
tab1About.classList.add("selectedTab");
const tab2Menu = document.querySelector("#divMenuTab");
const tab3Order = document.querySelector("#divOrderTab");
const tab4Contact = document.querySelector("#divContactTab");
const content = document.querySelector("#content");

logo.addEventListener("click", () => {
  tab1About.classList.add("selectedTab");
  tab2Menu.classList.remove("selectedTab");
  tab3Order.classList.remove("selectedTab");
  tab4Contact.classList.remove("selectedTab");
  content.removeChild(content.lastChild);
  loadAbout();
});

tab1About.addEventListener("click", () => {
  tab1About.classList.add("selectedTab");
  tab2Menu.classList.remove("selectedTab");
  tab3Order.classList.remove("selectedTab");
  tab4Contact.classList.remove("selectedTab");
  content.removeChild(content.lastChild);
  loadAbout();
});

tab2Menu.addEventListener("click", () => {
  tab1About.classList.remove("selectedTab");
  tab2Menu.classList.add("selectedTab");
  tab3Order.classList.remove("selectedTab");
  tab4Contact.classList.remove("selectedTab");
  content.removeChild(content.lastChild);
  loadMenu();
});

tab3Order.addEventListener("click", () => {
  tab1About.classList.remove("selectedTab");
  tab2Menu.classList.remove("selectedTab");
  tab3Order.classList.add("selectedTab");
  tab4Contact.classList.remove("selectedTab");
  content.removeChild(content.lastChild);
  loadOrder();
});

tab4Contact.addEventListener("click", () => {
  tab1About.classList.remove("selectedTab");
  tab2Menu.classList.remove("selectedTab");
  tab3Order.classList.remove("selectedTab");
  tab4Contact.classList.add("selectedTab");
  content.removeChild(content.lastChild);
  loadContact();
});