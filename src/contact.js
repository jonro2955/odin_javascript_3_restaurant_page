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

  mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1301.38287361099!2d-123.12140591635608!3d49.28083583467277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fc98f9b11%3A0x8c928cfb1c214524!2s898-800%20Granville%20St%2C%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1619684488461!5m2!1sen!2sca" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
  addressDiv.textContent = "Granville Street, Vancouver, British Columbia, Canada";
  phoneDiv.textContent = "Phone: 555-555-5555"
  hoursDiv.textContent = "Hours: 10:30a.m.–3a.m.";
  
  contactDiv.append(mapDiv, addressDiv, phoneDiv, hoursDiv);
  contentDiv.append(contactDiv);
}

export default loadContact;