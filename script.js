function calculate(){

let area = document.getElementById("area").value;

if(area === ""){
document.getElementById("result").innerHTML =
"Please enter farm area.";
return;
}

let water = area * 500;
let fertilizer = area * 25;

document.getElementById("result").innerHTML =
`
<h3>Results</h3>
<p>💧 Water Required: ${water} Liters</p>
<p>🌱 Fertilizer Required: ${fertilizer} Kg</p>
`;
}