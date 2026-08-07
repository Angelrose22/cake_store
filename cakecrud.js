// ===========================
// Cake CRUD (Object CRUD)
// ===========================

// Array to store cake objects
const API = "http://localhost:3000/cakes";
let editId = null;

// References

const form = document.getElementById("cakeForm");

const cakeName = document.getElementById("cakeName");

const cakeDescription = document.getElementById("cakeDescription");

const cakePrice = document.getElementById("cakePrice");

const cakeWeight = document.getElementById("cakeWeight");

const cakeImage = document.getElementById("cakeImage");

const cakeList = document.getElementById("cakeList");


// ===========================
// CREATE
// ===========================

form.addEventListener("submit", function(event){

event.preventDefault();

let name = cakeName.value.trim();

let description = cakeDescription.value.trim();

let price = cakePrice.value.trim();

let weight = cakeWeight.value.trim();

if(name=="" || description=="" || price=="" || weight=="")
{
    alert("Please fill all fields");
    return;
}

if(cakeImage.files.length==0)
{
    alert("Please upload a cake image");
    return;
}

let formData = new FormData();

formData.append("name", name);
formData.append("description", description);
formData.append("price", price);
formData.append("weight", weight);
formData.append("image", cakeImage.files[0]);

let method = "POST";

let url = API;

if(editId != null)
{
    method = "PUT";
    url = API + "/" + editId;
}

fetch(url, {

method: method,

body: formData

})
.then(res => res.json())

.then(data => {

if(editId == null)
{
    alert("Cake Added Successfully");
}
else
{
    alert("Cake Updated Successfully");
}

editId = null;

renderCakes();

form.reset();

});});


// ===========================
// READ
// ===========================


function renderCakes() {

fetch(API)

.then(res => res.json())

.then(cakes => {

cakeList.innerHTML = "";

cakes.forEach(function(cake) {

let card = document.createElement("div");

card.className = "card";

card.innerHTML = `

<img src="http://localhost:3000${cake.image}" alt="${cake.name}">

<h3>${cake.name}</h3>

<p><b>Description :</b> ${cake.description}</p>

<p><b>Price :</b> ₹${cake.price}</p>

<p><b>Weight :</b> ${cake.weight}</p>

<button class="btn" onclick="editCake('${cake._id}')">
Edit
</button>

<button class="btn" onclick="deleteCake('${cake._id}')">
Delete
</button>

`;

cakeList.appendChild(card);

});

})

.catch(err => {

console.log("Error:", err);

alert("Unable to load cakes.");

});

}

window.onload = renderCakes;
// ===========================
// UPDATE
// ===========================

function editCake(id)
{

fetch(API + "/" + id)

.then(res => res.json())

.then(cake => {

cakeName.value = cake.name;

cakeDescription.value = cake.description;

cakePrice.value = cake.price;

cakeWeight.value = cake.weight;

editId = id;


})
 .catch(err => {

        console.log(err);});

}   

// ===========================
// DELETE
// ===========================

function deleteCake(id)
{

if(confirm("Delete this cake?"))
{

fetch(API + "/" + id,{

method:"DELETE"

})

.then(res=>res.json())

.then(data=>{

alert(data.message);

renderCakes();

});

}

}

