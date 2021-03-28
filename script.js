// Write your JavaScript code here!

window.addEventListener("load", function() {

   let form = document.getElementById("planetForm");
   form.addEventListener("submit", function(event) {
      event.preventDefault()
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      pilotNameInput = pilotNameInput.value
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      copilotNameInput = copilotNameInput.value
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      fuelLevelInput = Number(fuelLevelInput.value)
      let cargoMassInput = document.querySelector("input[name=cargoMass]")
      cargoMassInput = Number(cargoMassInput.value)

      if (pilotNameInput === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") {
         alert("All fields are required!");
      }

      if (isNaN(fuelLevelInput)){
         alert("Please enter a valid number for Fuel Level")
      }
      if (isNaN(cargoMassInput)){
         alert("Please enter a valid number for Cargo Mass")
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
         document.getElementById("faultyItems").style.visibility = "visible"
      }
      if (cargoMassInput > 10000){
         cargoStatus.innerHTML = "There is too much mass to take off!"
         launchStatus.style.color = "red"
         launchStatus.innerHTML = "Shuttle not ready for launch!"
         document.getElementById("faultyItems").style.visibility = "visible"
      }
      if (fuelLevelInput >=10000 && cargoMassInput <= 10000){
         launchStatus.style.color = "green"
         launchStatus.innerHTML = "Shuttle is ready for launch"
      }
  })

  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
     response.json().then(function(json){
        const div = document.getElementById("missionTarget")
        div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[1].name}</li>
            <li>Diameter: ${json[1].diameter}</li>
            <li>Star: ${json[1].star}</li>
            <li>Distance from Earth: ${json[1].distance}</li>
            <li>Number of Moons: ${json[1].moons}</li>
         </ol>
         <img src="${json[1].image}">
        `
     })
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
