function loadAbout(){
  const contentDiv = document.getElementById("content");

  const about = document.createElement("div");
  const imgMain = document.createElement("img");
  const aboutText = document.createElement("div");

  about.setAttribute("id", "aboutDiv")
  imgMain.setAttribute("src", "images/kebab.jpg");
  imgMain.setAttribute("alt", "Main Image");
  imgMain.setAttribute("id", "aboutImage");
  aboutText.setAttribute("id", "aboutText");
  aboutText.textContent = "A bold take on a classic dish!";

  about.append(imgMain, aboutText);
  contentDiv.append(about);
}

export default loadAbout;