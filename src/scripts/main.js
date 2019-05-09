
//  import the ContactList component and the ContactForm component

import ListManager from "./contactList"
import DomBuilder from "./contactForm"


// Create two contacts using the function you imported
const lindsey = DomBuilder("Lindsey Maddox", "(615) 939-3523", "1401 Pawnee Trail, Madison, TN 37115")
const zack = DomBuilder("Zachary Maddox", "(615) 852-9537", "1401 Pawnee Trail, Madison, TN 37115")

/// Store the contacts in the list
ListManager.store(lindsey)

console.table(ListManager.getInventory())
console.table(ListManager.retrieve(zack))