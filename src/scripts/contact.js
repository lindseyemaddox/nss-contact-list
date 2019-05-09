
// component that displays a person's name, phone number, and address

const ContactDisplay = {
  getContactElement: function () {
    let name = document.querySelector("#name").value
    let phone = document.querySelector("#phone").value
    let address = document.querySelector("#address").value

    let newContact = {
      name: name,
      phone: phone,
      address: address
    }
    return newContact;
  },
  getContactHTML: function (contact) {
    return `
    <div class="contact">
      <h2>${contact.name}</h2>
      <p>${contact.phone}</p>
      <p>${contact.address}</p>
    </div>
  `
  }
}

export default ContactDisplay