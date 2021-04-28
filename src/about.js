function loadAbout(){
  const contentDiv = document.getElementById("content");

  const about = document.createElement("div");
  const imgMain = document.createElement("img");
  const aboutText = document.createElement("div");
  const copyright = document.createElement("div");

  about.setAttribute("id", "aboutDiv")
  imgMain.setAttribute("src", "images/kebab.jpg");
  imgMain.setAttribute("alt", "Main Image");
  imgMain.setAttribute("id", "aboutImage");
  aboutText.setAttribute("id", "aboutText");
  copyright.setAttribute("id", "copyright");
  aboutText.textContent = "A bold take on the classic dish";
  copyright.innerHTML = "Copyright &copy; Jonathan Ro, 2021"

  about.append(imgMain, aboutText, copyright);
  contentDiv.append(about);
}

export default loadAbout;