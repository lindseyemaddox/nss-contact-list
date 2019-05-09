
// component to import contacts from api
// component that saves new contacts

const ContactCollector = {
  GetContacts: () => {
    return fetch("http://localhost:3000/contacts")
      .then(response => response.json())
  },
  ContactFactory: (name, phone, address) => {
    const newContact = {
      "name": name,
      "phone": phone,
      "address": address
    }
    return newContact
  }
}

export default ContactCollector