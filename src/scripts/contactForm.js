
// import the ContactCollection component
import ContactCollector from "./contactCollection"

// component that listens for when the submit button is pressed

const DomBuilder = {
  SumbitHandler: function () {
    document.getElementById("submit").addEventListener("click", function (e) {
      e.preventDefault()
      output.innerHTML = ""
      const output = document.getElementById("output")
      for (var i = 0; i < contacts.length; i++) {
        let output = contacts[i]
        output.innerHTML += ContactCollector(output)
      }
    }
  }
}

export default DomBuilder




// component that POSTs a new contact to the API when triggered???
