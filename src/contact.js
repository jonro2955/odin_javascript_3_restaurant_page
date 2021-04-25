function loadContact(){
  const contentDiv = document.getElementById("content");

  const ContactDiv = document.createElement("div");

  ContactDiv.setAttribute("id", "ContactDiv");

  ContactDiv.textContent = "Contact";

  contentDiv.append(ContactDiv);

}

export default loadContact;