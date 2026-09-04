/* =====================================================
   SLOW RIDER WEBSITE SCRIPT
   COMPLETE REPLACEMENT
===================================================== */


const products = [

{
id:"patrol",

name:"Patrol Electric Scooter",

category:"Electric Scooter",

image:"patrol-police.png",

description:
"Electric scooter designed for urban mobility and international distribution.",

specs:{
Motor:"1000W",
Battery:"Lithium Battery",
Application:"Urban Transportation",
OEM:"Available"
}

},


{
id:"maxi",

name:"Maxi Electric Scooter",

category:"Electric Scooter",

image:"maxi-scooter.png",

description:
"Comfortable electric scooter designed for city commuting and daily transportation.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Application:"City Mobility",
OEM:"Available"
}

},


{
id:"sunrise",

name:"Sunrise Electric Motorcycle",

category:"Electric Motorcycle",

image:"sunrise.png",

description:
"Electric motorcycle combining modern design, reliable performance and international market appeal.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Application:"Urban Transportation",
OEM:"Available"
}

},


{
id:"big-cg125",

name:"Big CG125 Electric Motorcycle",

category:"Electric Motorcycle",

image:"big-cg125.png",

description:
"Classic motorcycle style combined with electric power technology for global mobility markets.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Application:"Urban Transportation",
OEM:"Available"
}

},


{
id:"u2",

name:"U2 Electric Motorcycle",

category:"Electric Motorcycle",

image:"slow_rider_product_images/U2_配置_2.png",

description:
"U2 is a compact electric motorcycle designed for urban transportation and international distribution.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Application:"Urban Mobility",
OEM:"Available"
}

},


{
id:"h1",

name:"H1 Electric Motorcycle",

category:"Electric Motorcycle",

image:"slow_rider_product_images/H1_配置_2.png",

description:
"H1 is a modern electric motorcycle designed for comfortable daily riding and overseas markets.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Application:"Daily Transportation",
OEM:"Available"
}

},


{
id:"v6",

name:"V6 Electric Motorcycle",

category:"Electric Motorcycle",

image:"slow_rider_product_images/V6_配置_2.jpeg",

description:
"V6 electric motorcycle provides balanced performance, comfort and stylish design.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Application:"Urban Mobility",
OEM:"Available"
}

},


{
id:"cloud",

name:"Cloud Electric Motorcycle",

category:"Electric Motorcycle",

image:"slow_rider_product_images/Cloud_配置_2.jpeg",

description:
"Cloud electric motorcycle is developed for global urban transportation solutions.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Application:"City Transportation",
OEM:"Available"
}

},


{
id:"m1",

name:"M1 Electric Motorcycle",

category:"Electric Motorcycle",

image:"slow_rider_product_images/M1_配置_2.jpeg",

description:
"M1 provides reliable electric mobility with flexible configuration options for distributors.",

specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
Application:"Urban Mobility",
OEM:"Available"
}

},


{
id:"breeze",

name:"Breeze Electric Motorcycle",

category:"Electric Motorcycle",

image:"slow_rider_product_images/和风_配置_2.jpeg",

description:
"Breeze is a high performance electric motorcycle designed for global transportation markets.",

specs:{
Motor:"3000W",
Tyre:"90/90-17 Front | 110/80-17 Rear",
Brake:"Disc / Disc",
Battery:"Lead-acid / Lithium",
MaxSpeed:"80 km/h",
Finish:"PU Baking Finish",
Light:"LED Headlight",
WheelHub:"Aluminum",
Colors:"Black / Red / Yellow / Green",
OEM:"Available"
}

},
/* =====================================================
   CONTINUE PRODUCTS
===================================================== */


{
id:"cargo-basic",

name:"Two Wheel Cargo Basic",

category:"Cargo Vehicle",

image:"slow_rider_product_images/两轮货运基础款_配置_2.png",

description:
"Two Wheel Cargo Basic is an electric commercial vehicle designed for delivery and logistics applications.",

specs:{
Application:"Delivery / Logistics",
PowerSystem:"Electric",
OEM:"Available"
}

},


{
id:"cargo-premium",

name:"Two Wheel Cargo Premium",

category:"Cargo Vehicle",

image:"slow_rider_product_images/两轮货运豪华版_配置_2.png",

description:
"Two Wheel Cargo Premium provides an upgraded cargo transportation solution for commercial users.",

specs:{
Application:"Commercial Transportation",
PowerSystem:"Electric",
OEM:"Available"
}

},


{
id:"passenger",

name:"Two Wheel Passenger Vehicle",

category:"Passenger Vehicle",

image:"slow_rider_product_images/两轮载人车_配置_2.png",

description:
"Two Wheel Passenger Vehicle provides efficient short-distance passenger transportation.",

specs:{
Application:"Passenger Transport",
PowerSystem:"Electric",
OEM:"Available"
}

},


{
id:"eagle",

name:"Eagle Series Three Wheel Vehicle",

category:"Three Wheel Vehicle",

image:"slow_rider_product_images/鹰系三轮_配置_2.png",

description:
"Eagle Series Three Wheel Vehicle offers stable electric transportation for commercial applications.",

specs:{
Application:"Cargo / Transport",
PowerSystem:"Electric",
OEM:"Available"
}

},


{
id:"bull",

name:"Bull Series Three Wheel Vehicle",

category:"Three Wheel Vehicle",

image:"slow_rider_product_images/牛系三轮_配置_2.png",

description:
"Bull Series Three Wheel Vehicle is designed for practical commercial transportation needs.",

specs:{
Application:"Commercial Transport",
PowerSystem:"Electric",
OEM:"Available"
}

},


{
id:"atv",

name:"Petrol ATV",

category:"ATV",

image:"",

description:
"Petrol ATV designed for off-road recreation, farming and utility applications.",

specs:{
Engine:"Petrol Engine",
Application:"Off-road / Utility",
Fuel:"Gasoline",
OEM:"Available"
}

}

];





/* =====================================================
   PRODUCT DISPLAY
===================================================== */


function renderProducts(category="all"){


const container=document.getElementById("productContainer");


if(!container){
return;
}



container.innerHTML="";



let list;


if(category==="all"){

list=products;

}

else{

list=products.filter(
product=>product.category===category
);

}




list.forEach(product=>{


const card=document.createElement("div");


card.className="product-card";



card.innerHTML=`

<img src="${product.image}" alt="${product.name}">


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





function filterProducts(category){

renderProducts(category);

}







/* =====================================================
   PRODUCT MODAL
===================================================== */


function openProduct(id){


const product=
products.find(
item=>item.id===id
);



const modal=
document.getElementById("productModal");



if(!product || !modal){

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



<h3>

Specifications

</h3>



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

href="https://wa.me/?text=I am interested in ${product.name}"

target="_blank">

Request Quote

</a>



</div>

`;



modal.style.display="flex";


}







function closeProduct(){


const modal=
document.getElementById("productModal");


if(modal){

modal.style.display="none";

}


}







window.onclick=function(event){


const modal=
document.getElementById("productModal");


if(event.target===modal){

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



const menuBtn=
document.querySelector(".menu-btn");


const nav=
document.getElementById("mainNav");



if(menuBtn && nav){


menuBtn.onclick=()=>{

nav.classList.toggle("mobile-open");

};


}



}

);
