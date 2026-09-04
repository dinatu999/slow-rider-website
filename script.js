/* =====================================================
   SLOW RIDER WEBSITE
   PRODUCT DATABASE + FUNCTIONS
===================================================== */


/* =====================================================
   PRODUCT DATABASE
===================================================== */


const products = [


/* =========================
   ELECTRIC SCOOTERS
========================= */


{
id:"patrol",

category:"Electric Scooter",

type:"electric",

name:"Patrol Electric Scooter",

image:"patrol-police.png",

description:
"Electric scooter designed for urban mobility and international distribution.",

specs:{
Motor:"1000W",
Battery:"Lithium Battery",
Application:"Urban Transportation"
}

},



{
id:"maxi-scooter",

category:"Electric Scooter",

type:"electric",

name:"Maxi Electric Scooter",

image:"maxi-scooter.png",

description:
"Comfortable electric scooter with modern design.",

specs:{
Motor:"High Performance Motor",
Battery:"Lithium Battery",
Application:"City Mobility"
}

},





/* =========================
   ELECTRIC MOTORCYCLES
========================= */



{
id:"sunrise",

category:"Electric Motorcycle",

type:"electric",

name:"Sunrise",

image:"sunrise.png",

description:
"Classic electric motorcycle model for global markets.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Style:"Motorcycle Design"
}

},



{
id:"big-cg125",

category:"Electric Motorcycle",

type:"electric",

name:"Big CG125",

image:"big-cg125.png",

description:
"Electric motorcycle inspired by classic CG125 style.",

specs:{
Motor:"High Power Motor",
Battery:"Lithium Battery",
Application:"Daily Transportation"
}

},



{
id:"cg125",

category:"Electric Motorcycle",

type:"electric",

name:"CG125",

image:"slow_rider_product_images/CG125_配置_2.jpeg",

description:
"Classic motorcycle design with electric configuration.",

specs:{
Category:"Electric Motorcycle"
}

},



{
id:"u2",

category:"Electric Motorcycle",

type:"electric",

name:"U2",

image:"slow_rider_product_images/U2_配置_2.png",

description:
"Compact electric motorcycle designed for urban transportation.",

specs:{
Category:"Electric Motorcycle"
}

},




{
id:"h1",

category:"Electric Motorcycle",

type:"electric",

name:"H1",

image:"slow_rider_product_images/H1_配置_2.png",

description:
"Modern electric motorcycle model.",

specs:{
Category:"Electric Motorcycle"
}

},




{
id:"v6",

category:"Electric Motorcycle",

type:"electric",

name:"V6",

image:"slow_rider_product_images/V6_配置_2.jpeg",

description:
"Electric motorcycle with stylish appearance.",

specs:{
Category:"Electric Motorcycle"
}

},




{
id:"cloud",

category:"Electric Motorcycle",

type:"electric",

name:"Cloud",

image:"slow_rider_product_images/Cloud_配置_2.jpeg",

description:
"Comfortable electric motorcycle model.",

specs:{
Category:"Electric Motorcycle"
}

},




{
id:"m1",

category:"Electric Motorcycle",

type:"electric",

name:"M1",

image:"slow_rider_product_images/M1_配置_2.jpeg",

description:
"Electric motorcycle suitable for urban markets.",

specs:{
Category:"Electric Motorcycle"
}

},



/* =========================
   OTHER ELECTRIC MODELS
========================= */


{
id:"fengshen",

category:"Electric Vehicle",

type:"electric",

name:"封神",

image:"slow_rider_product_images/封神_配置_2.png",

description:
"Electric vehicle model.",

specs:{
Category:"Electric Vehicle"
}

},



{
id:"he-feng",

category:"Electric Vehicle",

type:"electric",

name:"和风",

image:"slow_rider_product_images/和风_配置_2.jpeg",

description:
"Electric mobility solution.",

specs:{
Category:"Electric Vehicle"
}

},



{
id:"jike",

category:"Electric Vehicle",

type:"electric",

name:"极核",

image:"slow_rider_product_images/极核_配置_2.jpeg",

description:
"Electric vehicle model.",

specs:{
Category:"Electric Vehicle"
}

},



{
id:"cangqiong",

category:"Electric Vehicle",

type:"electric",

name:"苍穹",

image:"slow_rider_product_images/苍穹_配置_2.jpeg",

description:
"Electric vehicle model.",

specs:{
Category:"Electric Vehicle"
}

},



{
id:"tank",

category:"Electric Vehicle",

type:"electric",

name:"坦克",

image:"slow_rider_product_images/坦克配置_2.png",

description:
"Electric vehicle model.",

specs:{
Category:"Electric Vehicle"
}

},
   /* =========================
   CARGO VEHICLES
========================= */


{
id:"cargo-basic",

category:"Cargo Vehicle",

type:"electric",

name:"Two Wheel Cargo Basic",

image:"slow_rider_product_images/两轮货运基础款_配置_2.png",

description:
"Electric cargo vehicle designed for delivery and commercial use.",

specs:{
Category:"Cargo Vehicle",
Application:"Delivery / Logistics"
}

},



{
id:"cargo-premium",

category:"Cargo Vehicle",

type:"electric",

name:"Two Wheel Cargo Premium",

image:"slow_rider_product_images/两轮货运豪华版_配置_2.png",

description:
"Premium cargo solution for commercial transportation.",

specs:{
Category:"Cargo Vehicle",
Application:"Logistics"
}

},



{
id:"delivery",

category:"Cargo Vehicle",

type:"electric",

name:"Delivery Vehicle",

image:"slow_rider_product_images/快递车_配置_2__2.png",

description:
"Electric delivery vehicle for last-mile transportation.",

specs:{
Category:"Delivery Vehicle"
}

},




/* =========================
   PASSENGER VEHICLES
========================= */


{
id:"passenger",

category:"Passenger Vehicle",

type:"electric",

name:"Two Wheel Passenger Vehicle",

image:"slow_rider_product_images/两轮载人车_配置_2.png",

description:
"Electric passenger transport vehicle.",

specs:{
Category:"Passenger Vehicle"
}

},





/* =========================
   THREE WHEEL VEHICLES
========================= */


{
id:"eagle-tricycle",

category:"Three Wheel Vehicle",

type:"electric",

name:"Eagle Series Three Wheel Vehicle",

image:"slow_rider_product_images/鹰系三轮_配置xlsx_2.png",

description:
"Three wheel electric vehicle solution.",

specs:{
Category:"Three Wheel Vehicle"
}

},



{
id:"bull-tricycle",

category:"Three Wheel Vehicle",

type:"electric",

name:"Bull Series Three Wheel Vehicle",

image:"slow_rider_product_images/牛系三轮_配置xlsx_1__2.png",

description:
"Three wheel transport vehicle.",

specs:{
Category:"Three Wheel Vehicle"
}

}





];







/* =====================================================
   PRODUCT DISPLAY
===================================================== */


function renderProducts(category="all"){


const container =
document.getElementById("productContainer");



if(!container){

return;

}



container.innerHTML="";



let displayProducts;



if(category==="all"){

displayProducts = products;

}

else{

displayProducts =
products.filter(
product =>
product.category === category
);

}





displayProducts.forEach(product=>{


const card =
document.createElement("div");



card.className="product-card";



card.innerHTML = `


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








/* =====================================================
   FILTER
===================================================== */


function filterProducts(category){


renderProducts(category);


}









/* =====================================================
   PRODUCT MODAL
===================================================== */


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




modal.innerHTML = `


<div class="modal-box">


<span class="close-modal"
onclick="closeProduct()">

×

</span>




<img src="${product.image}"
alt="${product.name}">





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
([key,value]) =>

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









/* =====================================================
   MOBILE MENU
===================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


renderProducts();



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



});



