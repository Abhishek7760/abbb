const batteryLevelElement = document.getElementById("batteryLevel");
const statusTextElement = document.getElementById("statusText");

function updateBatteryStatus() {
  navigator.getBattery().then(function(battery) {
    const batteryLevel = battery.level * 100;
    batteryLevelElement.style.height = batteryLevel + "%";

    if (battery.charging) {
      statusTextElement.textContent = `Charging (${batteryLevel.toFixed(2)}%)`;
    } else {
      statusTextElement.textContent = `Discharging (${batteryLevel.toFixed(2)}%)`;
    }
  });
}

updateBatteryStatus();


navigator.getBattery().then(function(battery) {
  battery.addEventListener("chargingchange", updateBatteryStatus);
});
