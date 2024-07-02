document.getElementById("func_about").onclick = function() {
    window.open('About.html','_blank');
};
document.getElementById("vehLog").onclick = function(){
    window.open('scan.html','_blank');
}
document.getElementById('Add_vehDetails').onclick = function(){
    window.open('vehicles.html','_blank');
}
document.getElementById("Veh_logout").onclick = function(){
    window.location.href = 'login.html';
}
document.getElementById("Veh_logout").addEventListener('mousedown', function(event) {
    event.preventDefault();
});
