function showVehicles() {
    alert("Show current vehicles functionality not implemented.");
}

function showVehicleDetails() {
    const vehicleDetails = document.getElementById('vehicle-details');
    vehicleDetails.innerHTML = '';

    const vehicles = [
        'Vehicle 1', 'Vehicle 2', 'Vehicle 3', 'Vehicle 4', 'Vehicle 5',
        'Vehicle 6', 'Vehicle 7', 'Vehicle 8', 'Vehicle 9', 'Vehicle 10'
    ];

    vehicles.forEach(vehicle => {
        const vehicleItem = document.createElement('div');
        vehicleItem.className = 'vehicle-item';
        vehicleItem.innerHTML = `
            <span>${vehicle}</span>
            <button onclick="allowVehicle('${vehicle}')">Allow</button>
            <button onclick="denyVehicle('${vehicle}')">Deny</button>
            <button onclick="moreDetails('${vehicle}')">More Details</button>
        `;
        vehicleDetails.appendChild(vehicleItem);
    });

    vehicleDetails.classList.remove('hidden');
}

function allowVehicle(vehicle) {
    alert(`Allowing ${vehicle}`);
}

function denyVehicle(vehicle) {
    alert(`Denying ${vehicle}`);
}

function moreDetails(vehicle) {
    alert(`More details for ${vehicle}`);
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(`Username: ${username}, Password: ${password}`);

});
