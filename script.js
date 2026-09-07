/* SLOW RIDER - FIXED CATALOG SCRIPT */

function fixImagePath(image){

    if(!image) return "";

    if(
        image.startsWith("http") ||
        image.startsWith("/")
    ){
        return image;
    }


    if(
        image.startsWith("slow_rider_product_images/") ||
        image.startsWith("atv_images/")
    ){
        return image;
    }


    return "slow_rider_product_images/" + image;
}



function getProducts(){

    return typeof products !== "undefined"
        ? products
        : [];

}



function createProductCard(product){


    return `

    <article class="product-card">


        <img 
            src="${fixImagePath(product.image)}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.src='slow_rider_product_images/no-image.png'"
        >


        <div class="product-card-body">


            <h3>
                ${product.name}
            </h3>


            <p class="product-category">
                ${product.category}
            </p>


            <p>
                ${product.description || ""}
            </p>


            <div class="product-actions">

                <button 
                onclick="openProductModal('${product.id}')">
                    View Details
                </button>


                <a 
                href="https://wa.me/8618620284214?text=I%20am%20interested%20in%20${encodeURIComponent(product.name)}"
                target="_blank">
                    WhatsApp
                </a>


            </div>


        </div>


    </article>

    `;

}




function renderFeaturedProducts(){


    const box =
    document.getElementById("featuredProducts");


    if(!box) return;


    const list =
    getProducts()
    .filter(
        p =>
        p.category !== "ATV"
    )
    .slice(0,4);



    box.innerHTML =
    list.map(createProductCard).join("");

}




function renderFeaturedATVs(){


    const box =
    document.getElementById("featuredATVs");


    if(!box) return;


    const list =
    getProducts()
    .filter(
        p =>
        p.category === "ATV"
    )
    .slice(0,4);



    box.innerHTML =
    list.map(createProductCard).join("");

}




function renderCatalog(list){


    const box =
    document.getElementById("catalogView");


    if(!box) return;


    box.innerHTML =

    list.map(createProductCard).join("");

}




function updateCounts(){


    const data=getProducts();



    const set=(id,value)=>{

        const el=document.getElementById(id);

        if(el)
        el.textContent=value;

    };



    set(
        "count-all",
        data.length
    );


    set(
        "count-atv",
        data.filter(
            p=>p.category==="ATV"
        ).length
    );


    set(
        "count-scooter",
        data.filter(
            p=>p.category==="Electric Scooter"
        ).length
    );


    set(
        "count-motorcycle",
        data.filter(
            p=>p.category==="Electric Motorcycle"
        ).length
    );

}




function setupSearch(){


    const input =
    document.getElementById("productSearch");


    if(!input) return;



    input.addEventListener(
        "input",
        ()=>{


            const value =
            input.value.toLowerCase();



            const result =
            getProducts()
            .filter(
                p =>
                (
                    p.name+
                    p.category+
                    p.description
                )
                .toLowerCase()
                .includes(value)
            );



            renderCatalog(result);



        }
    );


}




function setupFilter(){


    const buttons =
    document.querySelectorAll(
        "[data-filter]"
    );



    buttons.forEach(btn=>{


        btn.addEventListener(
            "click",
            ()=>{


                const filter =
                btn.dataset.filter;



                let result;



                if(filter==="all"){

                    result=getProducts();

                }

                else if(filter==="ATV"){

                    result=getProducts()
                    .filter(
                        p=>p.category==="ATV"
                    );

                }

                else{


                    result=getProducts()
                    .filter(
                        p=>
                        p.category===filter ||
                        p.type===filter
                    );


                }



                renderCatalog(result);



                document
                .querySelectorAll(".side-item")
                .forEach(
                    x=>x.classList.remove("active")
                );


                btn.classList.add("active");



            }
        );


    });


}



document.addEventListener(
"DOMContentLoaded",
()=>{


    renderFeaturedProducts();

    renderFeaturedATVs();

    updateCounts();

    setupSearch();

    setupFilter();



    const catalog =
    document.getElementById("catalogView");


    if(catalog){

        renderCatalog(
            getProducts()
        );

    }

});
/* ==============================
   PRODUCT MODAL
============================== */


function openProductModal(id){


    const modal =
    document.getElementById("productModal");


    if(!modal) return;



    const product =
    getProducts()
    .find(
        p=>String(p.id)===String(id)
    );



    if(!product) return;



    modal.innerHTML = `

    <div class="modal-box">


        <button 
        class="modal-close"
        onclick="closeProductModal()">
        ×
        </button>



        <img 
        src="${fixImagePath(product.image)}"
        alt="${product.name}"
        >



        <div class="modal-content">


            <h2>
            ${product.name}
            </h2>


            <p class="modal-category">
            ${product.category}
            </p>



            <div class="modal-specs">


            ${
            product.specs ?
            Object.entries(product.specs)
            .map(
                ([key,value])=>
                `
                <div>
                <strong>${key}</strong>
                <span>${value}</span>
                </div>
                `
            )
            .join("")
            :
            ""
            }


            </div>



            <p>
            ${product.description || ""}
            </p>



            <a
            class="modal-whatsapp"
            target="_blank"
            href="https://wa.me/8618620284214?text=I%20need%20information%20about%20${encodeURIComponent(product.name)}">

            Contact WhatsApp

            </a>



        </div>


    </div>

    `;



    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );



}



function closeProductModal(){


    const modal =
    document.getElementById("productModal");


    if(!modal) return;


    modal.classList.remove("active");


    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}



document.addEventListener(
"click",
function(e){


    const modal =
    document.getElementById("productModal");



    if(
        modal &&
        e.target===modal
    ){

        closeProductModal();

    }


});





/* ==============================
   MOBILE MENU
============================== */


function setupMobileMenu(){


    const btn =
    document.querySelector(
        ".menu-toggle"
    );


    const nav =
    document.querySelector(
        ".main-nav"
    );



    if(!btn || !nav)
    return;



    btn.addEventListener(
        "click",
        ()=>{


            nav.classList.toggle(
                "show"
            );


            btn.setAttribute(
                "aria-expanded",
                nav.classList.contains("show")
            );


        }
    );


}




/* ==============================
   MOBILE FILTER
============================== */


function setupMobileFilter(){


    const select =
    document.getElementById(
        "mobileFilter"
    );


    if(!select)
    return;



    select.addEventListener(
        "change",
        ()=>{


            const filter =
            select.value;



            let result;



            if(filter==="all"){

                result=getProducts();

            }
            else{

                result =
                getProducts()
                .filter(
                    p=>
                    p.category===filter ||
                    p.type===filter
                );

            }



            renderCatalog(result);


        }
    );


}




/* ==============================
   URL CATEGORY
============================== */


function loadCategoryFromURL(){


    const params =
    new URLSearchParams(
        window.location.search
    );


    const category =
    params.get("category");



    if(!category)
    return;



    const result =
    getProducts()
    .filter(
        p=>
        p.category===category ||
        p.type===category
    );



    renderCatalog(result);



}




/* ==============================
   IMAGE ERROR HANDLER
============================== */


document.addEventListener(
"error",
function(e){


    if(
        e.target.tagName==="IMG"
    ){

        e.target.src =
        "slow_rider_product_images/no-image.png";

    }


},
true
);
/* ==============================
   START APPLICATION
============================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    renderFeaturedProducts();


    renderFeaturedATVs();


    updateCounts();


    setupSearch();


    setupFilter();


    setupMobileMenu();


    setupMobileFilter();


    loadCategoryFromURL();



    /*
      Close modal with ESC
    */

    document.addEventListener(
        "keydown",
        e=>{

            if(e.key==="Escape"){

                closeProductModal();

            }

        }
    );



});





/* ==============================
   EXPORT FOR INLINE HTML
============================== */


window.openProductModal =
openProductModal;


window.closeProductModal =
closeProductModal;





/* ==============================
   EXTRA CATEGORY HELPERS
============================== */


function countCategory(category){


    return getProducts()
    .filter(
        p=>
        p.category===category ||
        p.type===category
    )
    .length;


}



function refreshCategoryCounts(){


    const mapping={


        "count-all":
        getProducts().length,


        "count-atv":
        countCategory("ATV"),


        "count-scooter":
        countCategory("Electric Scooter"),


        "count-motorcycle":
        countCategory("Electric Motorcycle"),


        "count-commercial":
        countCategory("Commercial"),


        "count-electric-atv":
        countCategory("Electric ATV"),


        "count-gas-atv":
        countCategory("Gas ATV"),


        "count-kids-atv":
        countCategory("Kids ATV"),


        "count-utility-atv":
        countCategory("Utility ATV"),


        "count-sport-atv":
        countCategory("Sport ATV")

    };



    Object.keys(mapping)
    .forEach(id=>{


        const el=
        document.getElementById(id);



        if(el){

            el.textContent=
            mapping[id];

        }


    });


}



/* update after loading */

window.addEventListener(
"load",
()=>{

    refreshCategoryCounts();

});
