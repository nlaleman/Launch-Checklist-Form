// Write your JavaScript code here!

window.addEventListener("load", function() {

   let form = document.getElementById("planetForm");
   form.addEventListener("submit", function(event) {
      event.preventDefault()
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = Number(document.querySelector("input[name=fuelLevel]"));
      let cargoMassInput = Number(document.querySelector("input[name=cargoMass]"))

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      }

      if (!isNaN(fuelLevelInput)){
         alert("Please enter a valid number")
      }
      if (!isNaN(cargoMassInput)){
         alert("Please enter a valid number")
      }

      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      let launchStatus = document.getElementById("launchStatus")

      pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready for launch.`
      copilotStatus.innerHTML = `Copilot ${copilotNameInput} is ready for launch.`
      if (fuelLevelInput < 10000){
         fuelStatus.innerHTML = "Not enough fuel to launch!"
         launchStatus.style.color = "red"
         launchStatus.innerHTML = "Shuttle not ready for launch!"
      }
      if (cargoMassInput > 10000){
         cargoStatus.innerHTML = "There is too much mass to take off!"
         launchStatus.style.color = "red"
         launchStatus.innerHTML = "Shuttle not ready for launch!"
      }
      if (fuelLevelInput >10000 && cargoMassInput < 10000){
         launchStatus.style.color = "green"
         launchStatus.innerHTML = "Shuttle is ready for launch"
      }

      


   })
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
