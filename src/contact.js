function loadContact(){

  /**
   * Put google map app in here
   */

  const contentDiv = document.getElementById("content");

  const contactDiv = document.createElement("div");
  const mapDiv = document.createElement("div");
  const phoneDiv = document.createElement("div");
  const addressDiv = document.createElement("div");

  const hoursDiv = document.createElement("div");

  contactDiv.setAttribute("id", "contactDiv");

  mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92224.55885004089!2d-79.54828876948004!3d43.75173411732417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b29c35d576acb%3A0x9e997a764bfa229!2sBerlin%20Doner!5e0!3m2!1sen!2sca!4v1619414896155!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
  addressDiv.textContent = "3560 Major MacKenzie Dr W #7, Woodbridge, ON L4H 0A2";
  phoneDiv.textContent = "Phone: 555-555-5555"
  hoursDiv.textContent = "Hours: 10:30a.m.–8p.m.";
  
  contactDiv.append(mapDiv, addressDiv, phoneDiv, hoursDiv);
  contentDiv.append(contactDiv);
}

export default loadContact;