let selectedCake = "";

function openModal(name, price)
{
    selectedCake = name;

    document.getElementById("cakeName").innerHTML =
        "Cake : " + name;

    document.getElementById("cakePrice").innerHTML =
        "Price : " + price;

    document.getElementById("cakeModal").style.display =
        "flex";
}

function closeModal()
{
    document.getElementById("cakeModal").style.display =
        "none";
}

function saveCake()
{
    localStorage.setItem(
        "Favourite Cake",
        selectedCake
    );

    alert("Cake saved using HTML5 Local Storage API");

    closeModal();
}
function validateEmail()
{

let email =
document.getElementById("email").value;


let emailError =
document.getElementById("emailError");


let emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(email=="")
{

emailError.innerHTML="Email is required";

}

else if(!emailPattern.test(email))
{

emailError.innerHTML=
"Use email format (example@gmail.com)";

}

else
{

emailError.innerHTML="";

}

}

function validatePassword()
{

let password =
document.getElementById("password").value;


let passwordError =
document.getElementById("passwordError");

let passwordPattern =
/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

if(password=="")
{

passwordError.innerHTML=
"Password is required";

}


else if(!passwordPattern.test(password))
{

passwordError.innerHTML=
"Password must contain 1 uppercase, 1 number, 1 special character";

}


else
{

passwordError.innerHTML="";

}

}

function validateLogin(event)
{

event.preventDefault();


validateEmail();

validatePassword();

let emailError =
document.getElementById("emailError").innerHTML;


let passwordError =
document.getElementById("passwordError").innerHTML;

if(emailError=="" && passwordError=="")
{

alert("Login Successful");


localStorage.setItem(
"User Email",
document.getElementById("email").value
);

}


}
function getLocation()
{

if(navigator.geolocation)
{

navigator.geolocation.getCurrentPosition(showPosition, showError);

}

else
{

alert("Geolocation is not supported");

}

}

function showPosition(position)
{


let latitude = position.coords.latitude;

let longitude = position.coords.longitude;

let accuracy = position.coords.accuracy;

let altitude = position.coords.altitude;

let heading = position.coords.heading;

let speed = position.coords.speed;


let locationDetails =

"Time Stamp : " + new Date() + "\n\n" +

"Latitude : " + latitude + "\n\n" +

"Longitude : " + longitude + "\n\n" +

"Accuracy : " + accuracy + " meters\n\n" +

"Altitude : " + 
(altitude ? altitude : "n/a") + "\n\n" +

"Altitude in Meters : " +
(altitude ? altitude+" meters" : "n/a") + "\n\n" +

"Heading : " +
(heading ? heading+" degrees from True North" : "n/a") + "\n\n" +

"Speed : " +
(speed ? speed+" meters/second" : "n/a");

alert(locationDetails);


}

function showError(error)
{

if(error.code == 1)
{

alert("Location permission denied");

}

else if(error.code == 2)
{

alert("Location unavailable");

}

else if(error.code == 3)
{

alert("Location request timeout");

}

}

/* ============================================================
   Carousel controls (new) — for the Home page carousel.
   Safely does nothing on pages without a carousel.
   ============================================================ */
let carouselIndex = 0;
let carouselTimer = null;

function startCarouselTimer()
{
    if(carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(nextSlide, 6000); // 6 seconds
}

function showSlide(index)
{
    let track = document.getElementById("carouselTrack");
    if(!track) return;

    let slides = track.children;
    let total = slides.length;

    if(index < 0) index = total - 1;
    if(index >= total) index = 0;

    carouselIndex = index;
    track.style.transform = "translateX(-" + (index * 100) + "%)";

    let dots = document.querySelectorAll(".carousel-dots button");
    for(let i = 0; i < dots.length; i++)
    {
        dots[i].classList.toggle("active", i === index);
    }

    // restart the 10 second auto-advance timer on every change
    startCarouselTimer();
}

function nextSlide()
{
    showSlide(carouselIndex + 1);
}

function prevSlide()
{
    showSlide(carouselIndex - 1);
}

document.addEventListener("DOMContentLoaded", function(){
    if(document.getElementById("carouselTrack"))
    {
        showSlide(0);
    }
});

function validateContact(event)
{

event.preventDefault();


let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let message=document.getElementById("message").value.trim();



let nameError=document.getElementById("nameError");

let emailError=document.getElementById("emailError");

let phoneError=document.getElementById("phoneError");

let messageError=document.getElementById("messageError");



// clear previous errors

nameError.innerHTML="";
emailError.innerHTML="";
phoneError.innerHTML="";
messageError.innerHTML="";


let valid=true;



// Name

if(name==="")
{

nameError.innerHTML="Name is required";

valid=false;

}



// Email

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(email==="")
{

emailError.innerHTML="Email is required";

valid=false;

}

else if(!emailPattern.test(email))
{

emailError.innerHTML="Enter valid email format";

valid=false;

}



// Phone

let phonePattern=/^[0-9]{10}$/;


if(phone==="")
{

phoneError.innerHTML="Phone number is required";

valid=false;

}

else if(!phonePattern.test(phone))
{

phoneError.innerHTML="Phone number must contain 10 digits";

valid=false;

}



// Message

if(message==="")
{

messageError.innerHTML="Message is required";

valid=false;

}



if(valid)
{

alert("Message sent successfully");


document.querySelector("form").reset();

}


}
function registerUser(event)
{

event.preventDefault();


let name =
document.getElementById("regName").value.trim();


let email =
document.getElementById("regEmail").value.trim();


let password =
document.getElementById("regPassword").value;


let eventDate =
document.getElementById("eventDate").value;


let occasion =
document.getElementById("occasion").value;


let photo =
document.getElementById("photo");





let nameError =
document.getElementById("nameError");


let emailError =
document.getElementById("emailError");


let passwordError =
document.getElementById("passwordError");


let dateError =
document.getElementById("dateError");


let occasionError =
document.getElementById("occasionError");


let photoError =
document.getElementById("photoError");





nameError.innerHTML="";
emailError.innerHTML="";
passwordError.innerHTML="";
dateError.innerHTML="";
occasionError.innerHTML="";
photoError.innerHTML="";


let valid=true;




// Name

if(name==="")
{

nameError.innerHTML="Name is required";

valid=false;

}




// Email

let emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(email==="")
{

emailError.innerHTML="Email is required";

valid=false;

}

else if(!emailPattern.test(email))
{

emailError.innerHTML="Enter valid email format";

valid=false;

}





// Password

let passwordPattern =
/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;



if(password==="")
{

passwordError.innerHTML="Password is required";

valid=false;

}

else if(!passwordPattern.test(password))
{

passwordError.innerHTML=
"Password must contain 1 uppercase, 1 number, 1 special character";

valid=false;

}





// Event Date

if(eventDate==="")
{

dateError.innerHTML=
"Event date is required";

valid=false;

}

else
{

let selectedDate =
new Date(eventDate);


let today =
new Date();


if(selectedDate < today)
{

dateError.innerHTML=
"Event date cannot be in the past";

valid=false;

}

}





// Occasion

if(occasion==="")
{

occasionError.innerHTML=
"Please select occasion";

valid=false;

}





// Image

if(photo.files.length===0)
{

photoError.innerHTML=
"Please upload cake design image";

valid=false;

}





if(valid)
{


let showData = () => {


let image =
URL.createObjectURL(photo.files[0]);



let user = {

name:name,

email:email,

eventDate:eventDate,

occasion:occasion,

image:image

};




localStorage.setItem(

"RegistrationData",

JSON.stringify(user)

);




document.getElementById("userCard").innerHTML =

`

<div class="card">

<img src="${image}">


<h3>Registration Details</h3>


<p><b>Name:</b> ${name}</p>

<p><b>Email:</b> ${email}</p>

<p><b>Event Date:</b> ${eventDate}</p>

<p><b>Occasion:</b> ${occasion}</p>


</div>

`;



};


showData();


alert("Registration Successful");


}


}