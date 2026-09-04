/* =========================================
   SLOW RIDER WEBSITE SCRIPT V2
========================================= */


/* =========================================
   PRODUCT DATABASE
========================================= */


const products = [


{
id:"patrol",

category:"Electric Scooter",

type:"electric",

name:"Patrol Electric Scooter",

image:"patrol-police.png",

description:
"Reliable electric scooter designed for urban mobility and global distribution.",

specs:{
Motor:"1000W",
Battery:"Lithium Battery",
Range:"80-100 km",
Speed:"45-55 km/h"
}

},



{
id:"maxi",

category:"Electric Scooter",

type:"electric",

name:"Maxi Electric Scooter",

image:"maxi-scooter.png",

description:
"Comfortable electric scooter with strong performance.",

specs:{
Motor:"1200W",
Battery:"Lithium Battery",
Range:"100 km",
Speed:"50 km/h"
}

},



{
id:"sunrise",

category:"Electric Motorcycle",

type:"electric",

name:"Sunrise Electric Motorcycle",

image:"sunrise.png",

description:
"Classic motorcycle style with electric power technology.",

specs:{
Motor:"1500W",
Battery:"72V Lithium",
Range:"100 km",
Speed:"60 km/h"
}

},



{
id:"cg125",

category:"Electric Motorcycle",

type:"electric",

name:"Big CG125 Electric",

image:"big-cg125.png",

description:
"Electric motorcycle inspired by traditional motorcycle design.",

specs:{
Motor:"2000W",
Battery:"72V Lithium",
Range:"120 km",
Speed:"70 km/h"
}

},



/* NEW PRODUCTS TEMPORARY IMAGES */


{
id:"ebike",

category:"E-Bike",

type:"electric",

name:"Electric Bike",

image:"patrol-police.png",

description:
"Electric bicycle solution for city transportation.",

specs:{
Motor:"500W",
Battery:"48V",
Range:"60 km"
}

},



{
id:"utility",

category:"Electric Utility Vehicle",

type:"electric",

name:"Electric Utility Vehicle",

image:"patrol-police.png",

description:
"Electric commercial transportation solution.",

specs:{
Battery:"48V-72V",
Application:"Cargo / Factory"
}

},



{
id:"big-bull",

category:"Gas ATV",

type:"petrol",

name:"Big Bull 4X4 ATV",

image:"big-cg125.png",

description:
"Powerful gasoline ATV with off-road capability.",

specs:{
Engine:"300cc",
Transmission:"CVT",
Drive:"2WD / 4WD",
Fuel:"5L"
}

},



{
id:"bashan",

category:"Gas ATV",

type:"petrol",

name:"Bashan 400cc ATV",

image:"big-cg125.png",

description:
"High performance ATV with 4WD system.",

specs:{
Engine:"400cc",
Transmission:"CVT",
Drive:"4WD"
}

},



{
id:"electric-atv",

category:"Electric ATV",

type:"electric",

name:"Electric ATV",

image:"patrol-police.png",

description:
"Electric off-road vehicle with customizable battery options.",

specs:{
Motor:"1500W",
Battery:"72V"
}

},



{
id:"utv",

category:"UTV",

type:"petrol",

name:"Utility UTV",

image:"big-cg125.png",

description:
"Multi-purpose vehicle for agriculture and outdoor use.",

specs:{
Engine:"250cc-400cc",
Transmission:"CVT"
}

}



];






/* =========================================
   DISPLAY PRODUCTS
========================================= */


function renderProducts(category="all"){


const container =
document.getElementById("productContainer");


if(!container){

return;

}



container.innerHTML="";



let list;



if(category==="all"){

list=products;

}

else{

list=
products.filter(
product=>product.category===category
);

}




list.forEach(product=>{



let card=document.createElement("div");


card.className="product-card";



card.innerHTML=`

<img src="${product.image}"
alt="${product.name}">


<div class="product-content">


<span class="product-category">

${product.category}

</span>


<h3>

${product.name}

</h3>


<p>

${product.description}

</p>


<button onclick="openProduct('${product.id}')">

View Details

</button>


</div>

`;



container.appendChild(card);



});


}






/* =========================================
   FILTER
========================================= */


function filterProducts(category){


renderProducts(category);


}







/* =========================================
   PRODUCT MODAL
========================================= */


function openProduct(id){


const product =
products.find(
item=>item.id===id
);



if(!product){

return;

}




const modal =
document.getElementById("productModal");



if(!modal){

return;

}



modal.innerHTML=`


<div class="modal-box">


<span class="close-modal"
onclick="closeProduct()">

×

</span>



<img src="${product.image}">



<h2>

${product.name}

</h2>



<p>

${product.description}

</p>



<div class="spec-list">


${

Object.entries(product.specs)

.map(

([key,value])=>

`

<div>

<strong>${key}</strong>:
${value}

</div>

`

)

.join("")

}


</div>




<a class="whatsapp-btn"

href="https://wa.me/?text=I am interested in ${product.name}">

Request Quote

</a>



</div>


`;



modal.style.display="flex";


}







function closeProduct(){


const modal =
document.getElementById("productModal");



if(modal){

modal.style.display="none";

}


}








/* =========================================
   MOBILE MENU
========================================= */


const menuBtn =
document.querySelector(".menu-btn");


const nav =
document.getElementById("mainNav");



if(menuBtn && nav){


menuBtn.addEventListener(
"click",
()=>{


nav.classList.toggle(
"mobile-open"
);



}

);


}




/* =========================================
   START
========================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


renderProducts();



});
