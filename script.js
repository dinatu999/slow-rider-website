/* =========================================
   SLOW RIDER WEBSITE SCRIPT
   CLEAN WORKING VERSION
========================================= */


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
"Comfortable electric scooter designed for city commuting.",
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
"Electric motorcycle combining modern design and reliable performance.",
specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
OEM:"Available"
}
},


{
id:"cg125",
name:"CG125 Electric Motorcycle",
category:"Electric Motorcycle",
image:"big-cg125.png",
description:
"Classic motorcycle style with electric power technology.",
specs:{
Motor:"Electric Motor",
Battery:"Lithium Battery",
OEM:"Available"
}
}


];



function renderProducts(category="all"){


const container=document.getElementById("productContainer");

if(!container){
return;
}


container.innerHTML="";


let list =
category==="all"
?
products
:
products.filter(
p=>p.category===category
);



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





function openProduct(id){


const product=
products.find(
p=>p.id===id
);


if(!product){
return;
}



const modal=
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
<strong>${key}</strong>: ${value}
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

const modal=
document.getElementById("productModal");


if(modal){

modal.style.display="none";

}

}




document.addEventListener(
"DOMContentLoaded",
()=>{

renderProducts();

}
);
