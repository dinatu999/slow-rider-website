/* =========================================
   SLOW RIDER V2
   PRODUCT DATABASE
========================================= */


const products = [

/* =========================
   ELECTRIC SCOOTERS
========================= */

{
    id: "patrol",
    category: "Electric Scooter",
    type: "electric",
    name: "Patrol Electric Scooter",
    image: "images/patrol.jpg",
    description:
    "Reliable electric scooter designed for urban mobility and global distribution.",
    specs:{
        motor:"1000W",
        battery:"Lithium Battery",
        range:"80-100 km",
        speed:"45-55 km/h",
        application:"Urban commuting"
    }
},


{
    id:"maxi-scooter",
    category:"Electric Scooter",
    type:"electric",
    name:"Maxi Electric Scooter",
    image:"images/maxi.jpg",
    description:
    "Comfortable electric scooter with strong performance and OEM customization.",
    specs:{
        motor:"1200W",
        battery:"Lithium Battery",
        range:"100 km",
        speed:"50 km/h"
    }
},



/* =========================
   ELECTRIC MOTORCYCLES
========================= */


{
    id:"sunrise",
    category:"Electric Motorcycle",
    type:"electric",
    name:"Sunrise Electric Motorcycle",
    image:"images/sunrise.jpg",
    description:
    "Classic motorcycle design combined with electric power technology.",
    specs:{
        motor:"1500W",
        battery:"72V Lithium",
        range:"100 km",
        speed:"60 km/h"
    }
},


{
    id:"big-cg125",
    category:"Electric Motorcycle",
    type:"electric",
    name:"Big CG125 Electric",
    image:"images/big-cg125.jpg",
    description:
    "Electric motorcycle inspired by traditional commuter motorcycles.",
    specs:{
        motor:"2000W",
        battery:"72V Lithium",
        range:"120 km",
        speed:"70 km/h"
    }
},



/* =========================
   E-BIKE
========================= */


{
    id:"city-ebike",
    category:"E-Bike",
    type:"electric",
    name:"City Electric Bike",
    image:"images/ebike.jpg",
    description:
    "Lightweight electric bicycle for city transportation.",
    specs:{
        motor:"500W",
        battery:"48V Lithium",
        range:"60 km",
        speed:"35 km/h"
    }
},



/* =========================
   ELECTRIC UTILITY
========================= */


{
    id:"electric-utility",
    category:"Electric Utility Vehicle",
    type:"electric",
    name:"Electric Utility Vehicle",
    image:"images/utility.jpg",
    description:
    "Electric transport solution for commercial and industrial applications.",
    specs:{
        motor:"Custom",
        battery:"48V-72V",
        application:"Cargo / Factory / Resort"
    }
},



/* =========================
   GAS ATV
========================= */


{
    id:"big-bull-4x4",
    category:"Gas ATV",
    type:"petrol",
    name:"Big Bull 4X4 ATV",
    image:"images/big-bull.jpg",
    description:
    "Powerful off-road ATV with CVT transmission and 4WD capability.",
    specs:{
        engine:"300cc Water-cooled",
        transmission:"CVT",
        drive:"2WD / 4WD",
        fuel:"5L Tank",
        weight:"240kg"
    }
},


{
    id:"big-hummer",
    category:"Gas ATV",
    type:"petrol",
    name:"Big Hummer ATV",
    image:"images/big-hummer.jpg",
    description:
    "Heavy duty recreational ATV designed for off-road performance.",
    specs:{
        engine:"200cc",
        transmission:"Automatic",
        drive:"Chain Drive",
        fuel:"10L Tank"
    }
},


{
    id:"bashan-400",
    category:"Gas ATV",
    type:"petrol",
    name:"Bashan 400cc 4WD",
    image:"images/bashan.jpg",
    description:
    "High performance ATV with full-time 4WD system.",
    specs:{
        engine:"400cc",
        transmission:"CVT",
        drive:"4WD",
        suspension:"Independent Suspension"
    }
},



/* =========================
   ELECTRIC ATV
========================= */


{
    id:"big-bull-electric",
    category:"Electric ATV",
    type:"electric",
    name:"Big Bull Electric ATV",
    image:"images/big-bull-electric.jpg",
    description:
    "Electric ATV with customizable battery and motor options.",
    specs:{
        motor:"1500W",
        battery:"72V",
        drive:"4WD",
        batteryOption:"60V / 72V"
    }
},


{
    id:"little-warrior-electric",
    category:"Electric ATV",
    type:"electric",
    name:"Little Warrior Electric ATV",
    image:"images/little-warrior.jpg",
    description:
    "Compact electric ATV suitable for recreational use.",
    specs:{
        motor:"500W",
        battery:"48V",
        size:"Small ATV"
    }
},



/* =========================
   UTV
========================= */


{
    id:"utility-utv",
    category:"UTV",
    type:"petrol",
    name:"Utility UTV",
    image:"images/utv.jpg",
    description:
    "Multi-purpose off-road vehicle for commercial applications.",
    specs:{
        engine:"250cc-400cc",
        transmission:"CVT",
        application:"Farm / Resort / Outdoor"
    }
}


];



/* =========================================
   PRODUCT DISPLAY
========================================= */


function renderProducts(category="all"){

    const container =
    document.getElementById("productContainer");


    if(!container) return;


    container.innerHTML="";


    const filtered =
    category==="all"
    ?
    products
    :
    products.filter(
        p=>p.category===category
    );



    filtered.forEach(product=>{


        const card=document.createElement("div");

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


        <button
        onclick="openProduct('${product.id}')">
        View Details
        </button>


        </div>

        `;


        container.appendChild(card);


    });

}




/* =========================================
   PRODUCT MODAL
========================================= */


function openProduct(id){


const product =
products.find(
p=>p.id===id
);


if(!product)return;



const modal =
document.getElementById("productModal");


if(!modal)return;



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
<strong>
${key}
</strong>
:
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

if(modal)
modal.style.display="none";

}




/* =========================================
   CATEGORY FILTER
========================================= */


function filterProducts(category){

renderProducts(category);

}




/* =========================================
   INITIAL LOAD
========================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{

renderProducts();


});
