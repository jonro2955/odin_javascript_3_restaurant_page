function loadHeader(){
  const contentDiv = document.getElementById("content");

  const headerNav = document.createElement("header");
  const divLogo = document.createElement("div");
  const h1Name = document.createElement("h1");
  const h3Motto = document.createElement("h3");
  const divAboutTab = document.createElement("div");
  const divMenuTab = document.createElement("div");
  const divOrderTab = document.createElement("div")
  const divContactTab = document.createElement("div");

  h1Name.textContent = "Berlin Doner";
  h3Motto.textContent = "The Art of Kebab";
  divAboutTab.textContent = "About";
  divMenuTab.textContent = "Menu";
  divOrderTab.textContent = "Order";
  divContactTab.textContent = "Contact";

  h1Name.setAttribute("id", "h1Name")
  divLogo.setAttribute("id", "divLogo");
  divAboutTab.classList.add("tab");
  divAboutTab.classList.add("selectedTab");
  divOrderTab.classList.add("tab");
  divMenuTab.classList.add("tab");
  divContactTab.classList.add("tab");
  divAboutTab.setAttribute("id", "divAboutTab");
  divMenuTab.setAttribute("id", "divMenuTab");
  divOrderTab.setAttribute("id", "divOrderTab");
  divContactTab.setAttribute("id", "divContactTab");


  divLogo.append(h1Name,h3Motto);
  headerNav.append(divLogo, divAboutTab, divMenuTab, divOrderTab, divContactTab);
  contentDiv.append(headerNav);
}

export default loadHeader;