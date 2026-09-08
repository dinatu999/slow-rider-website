/* =====================================================
 SLOW RIDER FINAL SCRIPT
 COMPLETE FRONTEND SYSTEM
===================================================== */


/* ===============================
 PRODUCT DATABASE
 KEEP YOUR ORIGINAL PRODUCTS ARRAY HERE
================================ */


/*
 IMPORTANT:
 Keep your existing:

 const products = [
 ...
 ];

 exactly unchanged.

 The new code starts after your products array.
*/



const whatsappLink =
"https://wa.me/8618620284214";



/* ===============================
 GLOBAL HEADER
================================ */


function renderHeader(){


const header =
document.getElementById("siteHeader");


if(!header) return;



header.innerHTML = `


<header class="main-header">


<div class="header-container">



<a href="index.html" class="logo">


<div class="logo-box">

S

</div>



<div class="logo-text">

<strong>

SLOW RIDER

</strong>


<span>

ELECTRIC MOBILITY

</span>


</div>


</a>





<nav class="navigation">


<a href="index.html">

HOME

</a>


<a href="products.html">

PRODUCTS

</a>


<a href="about.html">

ABOUT US

</a>


<a href="contact.html">

CONTACT

</a>



<a href="quote.html"
class="nav-quote">

REQUEST QUOTE

</a>



</nav>





<button class="mobile-btn">

☰

</button>



</div>


</header>


`;

}




/* ===============================
 FOOTER
================================ */


function renderFooter(){


const footer =
document.getElementById("siteFooter");


if(!footer) return;



footer.innerHTML = `


<footer class="footer">


<div class="footer-container">



<div>

<h2>

SLOW RIDER

</h2>


<p>

Electric mobility built for global markets.

</p>


</div>





<div>


<h4>

Navigation

</h4>



<a href="index.html">

Home

</a>



<a href="products.html">

Products

</a>



<a href="about.html">

About Us

</a>



<a href="contact.html">

Contact

</a>



</div>






<div>


<h4>

Products

</h4>



<p>

Electric Motorcycle

</p>


<p>

Electric Scooter

</p>


<p>

ATV

</p>


<p>

Utility Vehicle

</p>



</div>





<div>


<h4>

Contact

</h4>



<a href="${whatsappLink}">

WhatsApp

</a>



<a href="quote.html">

Request Quote

</a>



</div>



</div>





<div class="footer-bottom">


© 2026 Slow Rider


</div>



</footer>


`;

}





/* ===============================
 IMAGE HANDLER
================================ */


function productImage(product){


return product.image
?
product.image
:
"website-concept.png";


}




/* ===============================
 PRODUCT CARD
================================ */


function productCard(product){


return `


<div class="product-card">


<div class="product-card-image">


<img src="${productImage(product)}">


</div>





<div class="product-card-content">



<span class="product-category">

${product.category}

</span>





<h3>

${product.name}

</h3>





<p>

${product.description || ""}

</p>





<div class="card-spec">


${
Object.entries(product.specs || {})
.slice(0,3)
.map(item=>`

<div>

<b>

${item[0]}

</b>


<span>

${item[1]}

</span>


</div>

`)
.join("")
}



</div>





<div class="card-buttons">



<a class="blue-button"
href="product.html?id=${product.id}">

VIEW DETAILS

</a>




<a class="white-button"
href="quote.html?product=${product.id}">

QUOTE

</a>



</div>



</div>



</div>


`;

}
/* ===============================
 PRODUCT DETAIL PAGE
================================ */


function getProductById(){


const params =
new URLSearchParams(
window.location.search
);


const id =
params.get("id");



return products.find(
p=>p.id==id
);


}





function renderProductDetail(){


const container =
document.getElementById("productPage");



if(!container)return;



const product =
getProductById();



if(!product){


container.innerHTML = `

<div class="container">

<h2>
Product Not Found
</h2>


<a href="products.html">

Back To Products

</a>


</div>

`;

return;


}







container.innerHTML = `


<div class="breadcrumb container">


Home >

Products >

${product.category}

>


<span>

${product.name}

</span>


</div>








<section class="product-main">





<div class="gallery">





<div class="main-image">


<img

src="${productImage(product)}"

id="mainProductImage"

>


</div>







<div class="thumbs">



<div class="thumb active">


<img src="${productImage(product)}">


</div>



<div class="thumb empty">

PHOTO 2

</div>



<div class="thumb empty">

PHOTO 3

</div>



<div class="thumb empty">

PHOTO 4

</div>



<div class="thumb empty">

PHOTO 5

</div>



<div class="thumb empty">

PHOTO 6

</div>



</div>






</div>









<div class="product-info">





<div class="product-badge">

${product.category}

</div>






<h1>

${product.name}

</h1>






<div class="product-tagline">

Reliable electric mobility solution for global dealers.

</div>






<p class="product-description">

${product.description || ""}

</p>








<div class="product-rating">


<div class="stars">

★★★★★

</div>


<div class="rating-text">

Professional B2B Supply

</div>



</div>







<div class="quick-spec">



${
Object.entries(product.specs || {})
.slice(0,4)
.map(item=>`

<div>


<strong>

${item[1]}

</strong>


<span>

${item[0]}

</span>


</div>


`)
.join("")
}



</div>







<div class="color-options">


<h3>

Available Colors

</h3>



<div class="color-list">


<div class="color-item active"></div>


<div class="color-item"></div>


<div class="color-item"></div>



</div>



</div>








<div class="product-actions">


<a

class="quote-btn"

href="quote.html?product=${product.id}"

>

Request A Quote

</a>




<a

class="whatsapp-btn"

href="${whatsappLink}"

>

WhatsApp

</a>



</div>








<div class="support-items">



<div class="support-item">

🌎 Global Shipping

</div>



<div class="support-item">

⚙ Spare Parts

</div>



<div class="support-item">

🛡 Dealer Support

</div>



</div>





</div>






</section>










<section class="feature-strip">



<div class="feature-strip-item">


<div class="icon">

⚡

</div>


<h4>

Performance

</h4>


<p>

Powerful electric drive system.

</p>


</div>






<div class="feature-strip-item">


<div class="icon">

🔋

</div>


<h4>

Battery

</h4>


<p>

Long range mobility solution.

</p>


</div>







<div class="feature-strip-item">


<div class="icon">

🏍

</div>


<h4>

Design

</h4>


<p>

Modern vehicle appearance.

</p>


</div>







<div class="feature-strip-item">


<div class="icon">

🤝

</div>


<h4>

OEM Support

</h4>


<p>

Flexible customization.

</p>


</div>



</section>









<section class="product-details">






<div class="details-box">



<h2>

Specifications

</h2>





<table class="spec-table">


${
Object.entries(product.specs || {})
.map(item=>`

<tr>

<td>

${item[0]}

</td>


<td>

${item[1]}

</td>


</tr>

`)
.join("")
}



</table>




</div>









<div class="details-box">


<h2>

Product Features

</h2>




<ul class="feature-list">


<li>

Premium vehicle design

</li>


<li>

Reliable electric system

</li>


<li>

Dealer support

</li>


<li>

OEM customization available

</li>


</ul>



</div>









<div class="promo-card">



<div class="promo-label">

SLOW RIDER

</div>



<h3>

Built For Global Markets

</h3>



<p>

Contact us for wholesale pricing and cooperation opportunities.

</p>



<img src="${productImage(product)}">


</div>







</section>









<section class="related-products">



<h2>

You May Also Like

</h2>




<div class="related-grid">


${
products
.filter(
p=>p.id!=product.id
)
.slice(0,4)
.map(p=>`

<div class="related-card">


<div class="related-image">


<img src="${productImage(p)}">


</div>



<div class="related-body">


<h4>

${p.name}

</h4>


<p>

${p.category}

</p>



</div>



</div>


`)
.join("")
}



</div>




</section>



`;

}
/* ===============================
 PRODUCTS CATALOG PAGE
================================ */


function updateCatalogCount(number){


const count =
document.getElementById(
"catalogResultCount"
);


if(count){

count.innerText =
`${number} products`;

}


}





function renderProductsPage(){


const grid =
document.getElementById(
"catalogView"
);



if(!grid)return;



grid.innerHTML =

products
.map(product=>productCard(product))
.join("");



updateCatalogCount(
products.length
);



const status =
document.getElementById(
"catalogStatusText"
);



if(status){

status.innerText =
"Showing all products";

}


}





/* ===============================
 CATEGORY FILTERS
================================ */


function setupFilter(){


const container =
document.getElementById(
"categoryFilters"
);



if(!container)return;



const categories = [

"all",

...new Set(
products.map(
p=>p.category
)
)

];





container.innerHTML =

categories
.map(category=>`

<button 
class="filter-btn"
data-category="${category}">

${category==="all"
?
"ALL"
:
category}

</button>

`)
.join("");







container
.querySelectorAll(
"button"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


const category =
button.dataset.category;



let result;



if(category==="all"){


result = products;


}

else{


result =
products.filter(
p=>
p.category===category
);


}





const grid =
document.getElementById(
"catalogView"
);



grid.innerHTML =

result
.map(product=>productCard(product))
.join("");



updateCatalogCount(
result.length
);



const status =
document.getElementById(
"catalogStatusText"
);



if(status){

status.innerText =
category==="all"
?
"Showing all products"
:
`Category: ${category}`;

}



}

);


});


}







/* ===============================
 SEARCH
================================ */


function setupSearch(){


const search =
document.getElementById(
"productSearch"
);



if(!search)return;





search.addEventListener(
"input",
()=>{



const keyword =
search.value
.toLowerCase()
.trim();




let result;



if(keyword===""){


result = products;


}

else{


result =
products.filter(product=>{


const text =

JSON.stringify(product)
.toLowerCase();



return text.includes(keyword);


});


}





const grid =
document.getElementById(
"catalogView"
);



grid.innerHTML =

result
.map(product=>productCard(product))
.join();




updateCatalogCount(
result.length
);





const status =
document.getElementById(
"catalogStatusText"
);



if(status){


status.innerText =
keyword
?
`Search result: ${keyword}`
:
"Showing all products";


}



}

);


}





/* ===============================
 QUOTE PAGE PRODUCT
================================ */


function loadQuoteProduct(){


const params =
new URLSearchParams(
window.location.search
);



const id =
params.get("product");



const select =
document.getElementById(
"product"
);



if(!select || !id)
return;





const product =
products.find(
p=>p.id==id
);



if(product){


select.value =
product.name;


}


}





/* ===============================
 INITIALIZE WEBSITE
================================ */


document.addEventListener(
"DOMContentLoaded",
()=>{



renderHeader();



renderFooter();





const page =
document.body.dataset.page;





if(page==="products"){


renderProductsPage();


setupFilter();


setupSearch();


}






if(page==="product"){


renderProductDetail();


}






loadQuoteProduct();



}
);
