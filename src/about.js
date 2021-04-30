function loadAbout(){
  const contentDiv = document.getElementById("content");

  const aboutContent = document.createElement("div");
  const shishLabel = document.createElement("div");
  const imgMain = document.createElement("img");
  const aboutText = document.createElement("div");
  const deliveryDiv = document.createElement("div");
  const ueLink = document.createElement("a");
  const ddLink = document.createElement("a");
  const ueImg = document.createElement("img");
  const ddImg = document.createElement("img");

  deliveryDiv.setAttribute("id", "deliveryDiv");
  ueLink.setAttribute("href", "http://www.ubereats.com");
  ddLink.setAttribute("href", "http://www.doordash.com");
  ueLink.setAttribute("target", "_blank");
  ddLink.setAttribute("target", "_blank");
  ueImg.setAttribute("src", "images/ue.jpg");
  ddImg.setAttribute("src", "images/dd.jpg");
  ueImg.setAttribute("alt", "UberEats");
  ddImg.setAttribute("alt", "Door Dash");
  ueImg.setAttribute("class", "deliveryLink");
  ddImg.setAttribute("class", "deliveryLink");

  ueLink.append(ueImg);
  ddLink.append(ddImg);
  deliveryDiv.textContent = "Order Delivery:";
  deliveryDiv.append(ueLink, ddLink);

  aboutContent.setAttribute("id", "aboutDiv")
  imgMain.setAttribute("src", "images/kebab.jpg");
  imgMain.setAttribute("alt", "Main Image");
  imgMain.setAttribute("id", "aboutImage");
  shishLabel.setAttribute("id", "shishLabel");
  aboutText.setAttribute("id", "aboutText");
  shishLabel.textContent = "Our famous shish kebab";
  aboutText.textContent = "A bold take on a classic dish!";

  aboutContent.append(shishLabel, imgMain, aboutText, deliveryDiv);
  contentDiv.append(aboutContent);
}

export default loadAbout;