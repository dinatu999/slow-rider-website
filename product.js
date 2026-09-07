document.addEventListener(
"DOMContentLoaded",
()=>{


const params =
new URLSearchParams(
window.location.search
);


const id =
params.get("id") || "cg125";



const product =
products.find(
item => item.id === id
);



if(!product){

console.log("Product not found");

return;

}





// BASIC INFORMATION


document.getElementById("productName").textContent =
product.name;


document.getElementById("title").textContent =
product.name;


document.getElementById("productCategory").textContent =
product.category;



document.getElementById("description").textContent =
product.description;





// MAIN IMAGE


const mainImage =
document.getElementById("mainImage");


mainImage.src =
product.image;





// GALLERY


const gallery =
document.getElementById("galleryThumbs");



gallery.innerHTML="";



product.gallery.forEach(
(image,index)=>{


const div =
document.createElement("div");


div.className =
index===0
?
"thumb active"
:
"thumb";



div.innerHTML =
`
<img src="${image}">
`;



div.onclick=()=>{


mainImage.src=image;


document
.querySelectorAll(".thumb")
.forEach(
x=>x.classList.remove("active")
);


div.classList.add("active");


};



gallery.appendChild(div);


});






// QUICK SPECS


document.getElementById("motor").textContent =
product.specs.Motor || "-";


document.getElementById("battery").textContent =
product.specs.Battery || "-";


document.getElementById("speed").textContent =
product.specs.Speed || "-";


document.getElementById("range").textContent =
product.specs.Range || "-";








// SPECIFICATION TABLE


const table =
document.getElementById("specTable");



table.innerHTML="";



Object.entries(product.specs)
.forEach(
([key,value])=>{


table.innerHTML +=
`

<tr>

<td>${key}</td>

<td>${value}</td>

</tr>

`;



});







// FEATURES


const featureList =
document.getElementById("featureList");


featureList.innerHTML="";



product.features.forEach(
item=>{


featureList.innerHTML +=
`

<li>
${item}
</li>

`;


});






// WHATSAPP


document
.querySelector(".whatsapp")
.href =

"https://wa.me/8618620284214?text=I am interested in "+product.name;



});
