// Inside the DOMContentLoaded event listener

// Simulated readings and rates for utility meters
let electricityReading = 0;
let waterReading = 0;
let temperatureReading = 25;
let gasReading = 0;

const electricityRate = 0.10; // Rs per kWh
const waterRate = 0.05; // Rs per cubic meter
const gasRate = 0.15; // Rs per cubic meter

// Simulated appliance status
let washingMachineStatus = false;

// Simulated utility statuses
let waterStatus = false;
let gasStatus = false;
let temperatureStatus = false;

// Function to update utility readings and calculate bills
function updateReadingsAndBills() {
  // Simulate reading changes
  electricityReading += Math.random() * 10;
  waterReading += Math.random() * 2;
  temperatureReading += Math.random() - 0.5;
  gasReading += Math.random() * 0.5;

  // Electricity bill calculation
  const electricityBill = electricityReading * electricityRate;
  document.getElementById("electricity-reading").textContent = electricityReading.toFixed(2);
  document.getElementById("electricity-bill").textContent = electricityBill.toFixed(2);

  // Water bill calculation
  const waterBill = waterReading * waterRate;
  document.getElementById("water-reading").textContent = waterReading.toFixed(2);
  document.getElementById("water-bill").textContent = waterBill.toFixed(2);

  // Temperature update
  document.getElementById("temperature-reading").textContent = temperatureReading.toFixed(2);

  // Gas bill calculation
  const gasBill = gasReading * gasRate;
  document.getElementById("gas-reading").textContent = gasReading.toFixed(2);
  document.getElementById("gas-bill").textContent = gasBill.toFixed(2);
}

// Function to toggle appliance status
function toggleApplianceStatus() {
  washingMachineStatus = !washingMachineStatus;
  const washingMachineStatusElement = document.getElementById("washing-machine-status");
  washingMachineStatusElement.textContent = washingMachineStatus ? "On" : "Off";
}

// Function to toggle utility status
function toggleUtilityStatus(utilityName) {
  switch (utilityName) {
    case "water":
      waterStatus = !waterStatus;
      document.getElementById("water-status").textContent = waterStatus ? "On" : "Off";
      break;
    case "gas":
      gasStatus = !gasStatus;
      document.getElementById("gas-status").textContent = gasStatus ? "On" : "Off";
      break;
    case "temperature":
      temperatureStatus = !temperatureStatus;
      document.getElementById("temperature-status").textContent = temperatureStatus ? "On" : "Off";
      break;
  }
}

// Add event listeners to the toggle buttons
const washingMachineToggleButton = document.getElementById("washing-machine-toggle");
const waterToggleButton = document.getElementById("water-toggle");
const gasToggleButton = document.getElementById("gas-toggle");
const temperatureToggleButton = document.getElementById("temperature-toggle");

washingMachineToggleButton.addEventListener("click", toggleApplianceStatus);
waterToggleButton.addEventListener("click", () => toggleUtilityStatus("water"));
gasToggleButton.addEventListener("click", () => toggleUtilityStatus("gas"));
temperatureToggleButton.addEventListener("click", () => toggleUtilityStatus("temperature"));

// Update utility readings and bills every 5 seconds
setInterval(updateReadingsAndBills, 5000);
// Inside the DOMContentLoaded event listener

// Function to simulate adjusting appliance usage for demand response
function adjustApplianceUsage() {
  // Simulate appliance usage adjustment logic here
  alert("Appliance usage has been adjusted for demand response.");
}

// Add event listener to the "Adjust Appliance Usage" button
const adjustApplianceUsageButton = document.getElementById("adjust-appliance-usage");
adjustApplianceUsageButton.addEventListener("click", adjustApplianceUsage);
