/* =================================
   SLOW RIDER WEBSITE JAVASCRIPT
================================= */


/* =================================
   ADD JS ENABLED CLASS
================================= */

document.documentElement.classList.add("js-enabled");


/* =================================
   WHATSAPP PRODUCT QUOTE
================================= */

function askQuote(product) {

  const text =
`Hello Slow Rider,

I am interested in: ${product}

Please send me more information and a quotation.

My country:
Estimated quantity:
Additional requirements:`;

  window.open(
    `https://wa.me/8618620284214?text=${encodeURIComponent(text)}`,
    "_blank"
  );

}


/* =================================
   PRODUCT DATA
================================= */

const products = {

  patrol: {

    name: "Patrol Electric Scooter",

    image: "patrol-police.png",

    description:
      "A practical patrol and utility electric scooter with a distinctive appearance, LED lighting and emergency light function.",

    specs: [

      ["Motor", "1000W"],

      ["Tyres (Front / Rear)", "3.00-10 Tubeless"],

      ["Brakes (Front / Rear)", "Disc / Disc"],

      ["Battery", "Lead-acid / Lithium"],

      ["Max Speed", "45 km/h"],

      ["Lighting", "LED headlight + emergency light"],

      ["Wheel Hub", "Iron"],

      ["Color", "Blue with white"]

    ]

  },


  maxi: {

    name: "Maxi Scooter",

    image: "maxi-scooter.png",

    description:
      "A sporty maxi-style electric scooter designed for stronger performance and everyday road use.",

    specs: [

      ["Motor", "2000W"],

      ["Tyres (Front / Rear)", "3.00-10 Tubeless"],

      ["Brakes (Front / Rear)", "Disc / Disc"],

      ["Battery", "Lead-acid / Lithium"],

      ["Max Speed", "80–90 km/h"],

      ["Lighting", "LED headlight"],

      ["Wheel Hub", "Aluminum"],

      ["Color", "Black"]

    ]

  },


  sunrise: {

    name: "Sunrise",

    image: "sunrise.png",

    description:
      "A bold electric motorcycle with a road-bike style and a powerful 3000W motor.",

    specs: [

      ["Motor", "3000W"],

      ["Tyres (Front / Rear)", "2.75-18 / 110-90-16 Tubeless"],

      ["Brakes (Front / Rear)", "Disc / Disc"],

      ["Battery", "Lead-acid / Lithium"],

      ["Max Speed", "70 km/h"],

      ["Lighting", "LED headlight"],

      ["Wheel Hub", "Aluminum"],

      ["Colors", "Black / Red"]

    ]

  },


  cg125: {

    name: "Big CG125",

    image: "big-cg125.png",

    description:
      "A classic-style electric motorcycle platform with multiple color options and a 3000W motor.",

    specs: [

      ["Motor", "3000W"],

      ["Tyres (Front / Rear)", "2.75-18 / 110-90-16 Tubeless"],

      ["Brakes (Front / Rear)", "Disc / Disc"],

      ["Battery", "Lead-acid / Lithium"],

      ["Max Speed", "70 km/h"],

      ["Lighting", "LED headlight"],

      ["Wheel Hub", "Aluminum"],

      ["Colors", "Black / Blue / Red"]

    ]

  }

};


/* =================================
   PRODUCT MODAL
================================= */

const modal =
  document.getElementById("productModal");

const modalContent =
  document.getElementById("modalContent");


function showDetails(key) {

  const product = products[key];

  if (!product) return;


  const rows = product.specs
    .map(
      ([label, value]) =>
        `<tr>
          <td>${label}</td>
          <td>${value}</td>
        </tr>`
    )
    .join("");


  modalContent.innerHTML = `

    <div class="modal-product">

      <img
        src="${product.image}"
        alt="${product.name}"
      >


      <div>

        <span class="product-tag">
          SLOW RIDER PRODUCT
        </span>


        <h2 id="modalTitle">
          ${product.name}
        </h2>


        <p>
          ${product.description}
        </p>


        <table class="spec-table">

          <tbody>
            ${rows}
          </tbody>

        </table>


        <div class="modal-actions">

          <button
            class="btn primary"
            id="modalQuoteButton"
          >
            Get Quote on WhatsApp
          </button>


          <button
            class="btn details-btn"
            id="modalCloseButton"
          >
            Close
          </button>

        </div>

      </div>

    </div>

  `;


  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";


  document
    .getElementById("modalQuoteButton")
    .addEventListener(
      "click",
      function () {
        askQuote(product.name);
      }
    );


  document
    .getElementById("modalCloseButton")
    .addEventListener(
      "click",
      closeModal
    );

}


function closeModal() {

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow = "";

}


/* Product detail buttons */

document
  .querySelectorAll(
    ".details-btn[data-product]"
  )
  .forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        showDetails(
          button.dataset.product
        );

      }
    );

  });


/* Main close button */

const modalClose =
  document.querySelector(".modal-close");


if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeModal
  );

}


/* Click outside modal */

if (modal) {

  modal.addEventListener(
    "click",
    function (event) {

      if (event.target === modal) {
        closeModal();
      }

    }
  );

}


/* Escape key */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      modal.classList.contains("open")
    ) {

      closeModal();

    }

  }
);


/* =================================
   CONTACT FORM
================================= */

const quoteForm =
  document.getElementById("quoteForm");


if (quoteForm) {

  quoteForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const name =
        document
          .getElementById("name")
          .value
          .trim();


      const company =
        document
          .getElementById("company")
          .value
          .trim();


      const country =
        document
          .getElementById("country")
          .value
          .trim();


      const phone =
        document
          .getElementById("phone")
          .value
          .trim();


      const quantity =
        document
          .getElementById("quantity")
          .value;


      const interest =
        document
          .getElementById("interest")
          .value;


      const message =
        document
          .getElementById("message")
          .value
          .trim();


      if (!name || !country) {

        alert(
          "Please enter your name and country."
        );

        return;

      }


      const lines = [

        "Hello Slow Rider,",

        "",

        "I would like to request more information and a quotation.",

        "",

        `Name: ${name}`,

        `Company: ${
          company || "Not specified"
        }`,

        `Country: ${country}`,

        `WhatsApp / Phone: ${
          phone || "Not specified"
        }`,

        `Estimated Quantity: ${
          quantity || "Not specified"
        }`,

        `Interested in: ${
          interest || "Not specified"
        }`,

        "",

        "Requirements:",

        message || "Not specified"

      ];


      const whatsappURL =
        `https://wa.me/8618620284214?text=${encodeURIComponent(
          lines.join("\n")
        )}`;


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );

}


/* =================================
   CURRENT YEAR
================================= */

const yearElement =
  document.getElementById("year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =================================
   MOBILE MENU
================================= */

const menuBtn =
  document.querySelector(".menu-btn");


const nav =
  document.getElementById("mainNav");


function closeMobileMenu() {

  if (!nav || !menuBtn) return;


  nav.classList.remove(
    "mobile-open"
  );


  menuBtn.setAttribute(
    "aria-expanded",
    "false"
  );


  menuBtn.textContent = "☰";


  document.body.classList.remove(
    "menu-open"
  );

}


if (menuBtn && nav) {

  menuBtn.addEventListener(
    "click",
    function () {

      const isOpen =
        nav.classList.contains(
          "mobile-open"
        );


      if (isOpen) {

        closeMobileMenu();

      } else {

        nav.classList.add(
          "mobile-open"
        );


        menuBtn.setAttribute(
          "aria-expanded",
          "true"
        );


        menuBtn.textContent = "×";


        document.body.classList.add(
          "menu-open"
        );

      }

    }
  );


  /* Close menu after clicking link */

  nav
    .querySelectorAll("a")
    .forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          closeMobileMenu();

        }
      );

    });

}


/* =================================
   SCROLL REVEAL ANIMATION
================================= */

const revealElements =
  document.querySelectorAll(
    ".reveal-section, .reveal-card"
  );


if (
  "IntersectionObserver" in window
) {

  const observer =
    new IntersectionObserver(

      function (entries) {

        entries.forEach(
          function (entry) {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: 0.12
      }

    );


  revealElements.forEach(
    function (element) {

      observer.observe(
        element
      );

    }
  );

} else {


  revealElements.forEach(
    function (element) {

      element.classList.add(
        "visible"
      );

    }
  );

}
