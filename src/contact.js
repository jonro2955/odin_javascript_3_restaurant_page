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

  mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5720979650546!2d-123.1724058841143!3d49.24660148124715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486730c8de8628d%3A0xcb39a70742e0bdd4!2sMacKenzie%20St%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1619578944298!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
  addressDiv.textContent = "MacKenzie Street, Vancouver, British Columbia, Canada";
  phoneDiv.textContent = "Phone: 555-555-5555"
  hoursDiv.textContent = "Hours: 10:30a.m.–8p.m.";
  
  contactDiv.append(mapDiv, addressDiv, phoneDiv, hoursDiv);
  contentDiv.append(contactDiv);
}

export default loadContact;