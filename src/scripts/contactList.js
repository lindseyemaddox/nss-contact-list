
// import the necessary components
import ContactDisplay from "./contact"
import ContactCollector from "./contactCollection"

// component that displays all contacts
const List = []

const ListManager = {
  store: function (contact) {
    List.push(contact)
  },
  retrieve: function (contactToFind) {
    return List.find(contact => contact.name === contactToFind.name && contact.phone === contactToFind.phone && contact.address === contactToFind.address)
  },
  inventory: function () {
    return List
  }
}

export default ListManager