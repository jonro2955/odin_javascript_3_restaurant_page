function loadMenu(){
  const contentDiv = document.getElementById("content");

  const menu = document.createElement("div");
  menu.setAttribute("id", "centeredContent");

  const imgKebab = document.createElement("img");
  const imgClassic = document.createElement("img");
  const imgSandwich = document.createElement("img");
  const imgFeast = document.createElement("img");

  imgKebab.setAttribute("src", "images/kebab.jpg");
  imgClassic.setAttribute("src", "images/classic.jpg");
  imgSandwich.setAttribute("src", "images/sandwich.jpg");
  imgFeast.setAttribute("src", "images/feast.jpg");

  imgKebab.setAttribute("alt", "Kebab");
  imgClassic.setAttribute("alt", "Classic");
  imgSandwich.setAttribute("alt", "Sandwich");
  imgFeast.setAttribute("alt", "feast");

  imgKebab.classList.add("menuImage");
  imgClassic.classList.add("menuImage");
  imgSandwich.classList.add("menuImage");
  imgFeast.classList.add("menuImage");

  const labelKebab = document.createElement("div");
  const labelClassic = document.createElement("div");
  const labelSandwich = document.createElement("div");
  const labelFeast = document.createElement("div");

  labelKebab.textContent = "Kebab";
  labelClassic.textContent = "Classic";
  labelSandwich.textContent = "Sandwich";
  labelFeast.textContent = "Feast";

  labelKebab.classList.add("menuLabel");
  labelClassic.classList.add("menuLabel");
  labelSandwich.classList.add("menuLabel");
  labelFeast.classList.add("menuLabel");

  menu.append(labelClassic, imgClassic, labelKebab, imgKebab, labelSandwich, imgSandwich, labelFeast, imgFeast);
  contentDiv.append(menu);
}

export default loadMenu;