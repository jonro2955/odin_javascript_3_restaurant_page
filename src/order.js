function loadOrder(){
  const contentDiv = document.getElementById("content");

  const orderLinksDiv = document.createElement("div");
  const ueLink = document.createElement("a");
  const ddLink = document.createElement("a");
  const ueImg = document.createElement("img");
  const ddImg = document.createElement("img");

  orderLinksDiv.setAttribute("id", "orderLinksDiv");
  ueLink.setAttribute("href", "http://www.ubereats.com");
  ddLink.setAttribute("href", "http://www.doordash.com");
  ueLink.setAttribute("target", "_blank");
  ddLink.setAttribute("target", "_blank");

  ueImg.setAttribute("src", "images/ue.jpg");
  ddImg.setAttribute("src", "images/dd.jpg");
  ueImg.setAttribute("alt", "UberEats");
  ddImg.setAttribute("alt", "Door Dash");
  ueImg.setAttribute("class", "orderLink");
  ddImg.setAttribute("class", "orderLink");

  ueLink.append(ueImg);
  ddLink.append(ddImg);
  orderLinksDiv.append(ueLink, ddLink);
  contentDiv.append(orderLinksDiv);
}

export default loadOrder;