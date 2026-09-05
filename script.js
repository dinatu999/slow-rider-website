/* =========================================
   SLOW RIDER WEBSITE
   PRODUCT CATALOG + WHATSAPP
   ========================================= */

const products = [
  {
    id: "patrol",
    name: "Patrol Electric Scooter",
    category: "Electric Scooter",
    image: "patrol-police.png",
    description:
      "A practical electric patrol scooter for urban security, facility management and fleet applications, with emergency lighting and flexible battery options.",
    specs: {
      Motor: "1000W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      Lighting: "LED Headlight + Emergency Light",
      "Wheel Hub": "Iron",
      Color: "Blue / White",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "maxi",
    name: "Maxi Electric Scooter",
    category: "Electric Scooter",
    image: "maxi-scooter.png",
    description:
      "A sporty maxi-style electric scooter for urban mobility and dealer markets, combining higher-speed performance with practical everyday usability.",
    specs: {
      Motor: "2000W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "80–90 km/h",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Color: "Black",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "sunrise",
    name: "Sunrise Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "sunrise.png",
    description:
      "A 3000W electric motorcycle with classic road-bike styling, suitable for commuting, distribution and OEM customization in international markets.",
    specs: {
      Motor: "3000W",
      "Tyres (Front / Rear)": "2.75-18 / 110-90-16 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "70 km/h",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Colors: "Black / Red",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "big-cg125",
    name: "Big CG125 Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "big-cg125.png",
    description:
      "A 3000W classic-style electric motorcycle platform designed for commuting and dealer markets, with multiple color and battery options.",
    specs: {
      Motor: "3000W",
      "Tyres (Front / Rear)": "2.75-18 / 110-90-16 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "70 km/h",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Colors: "Black / Blue / Red",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "cg125",
    name: "CG125 Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/CG125_配置_2.jpeg",
    description:
      "A 2000W electric motorcycle with classic CG styling, 70 km/h maximum speed and disc brakes front and rear for practical daily mobility.",
    specs: {
      Motor: "2000W",
      "Tyres (Front / Rear)": "110/70-17 / 140/70-16 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "70 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Colors: "Black / Blue / Red",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "u2",
    name: "U2 Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/U2_配置_2.png",
    description:
      "A compact 1500W electric motorcycle for urban commuting, offering 55 km/h maximum speed, dual disc brakes and multiple battery options.",
    specs: {
      Motor: "1500W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "55 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Color: "Black",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "h1",
    name: "H1 Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/H1_配置_2.png",
    description:
      "A 1000W urban electric motorcycle with 60 km/h maximum speed, dual disc brakes and a compact city-oriented configuration.",
    specs: {
      Motor: "1000W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "60 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Color: "Orange",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "v6",
    name: "V6 Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/V6_配置_2.jpeg",
    description:
      "An 800W electric motorcycle focused on efficient urban transportation, with tubeless tyres, front disc brake and flexible battery options.",
    specs: {
      Motor: "800W",
      "Tyres (Front / Rear)": "3.00-10 / 3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Colors: "Green / Purple / Brown",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "cloud",
    name: "Cloud Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/Cloud_配置_2.jpeg",
    description:
      "A 3000W high-performance electric motorcycle with 85 km/h maximum speed, dual disc brakes and aluminum wheels for higher-speed urban mobility.",
    specs: {
      Motor: "3000W",
      "Tyres (Front / Rear)": "110/70-17 / 140/70-17 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "85 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Colors: "Black / Red / Brown / Green",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "m1",
    name: "M1 Electric Scooter",
    category: "Electric Scooter",
    image: "slow_rider_product_images/M1_配置_2.jpeg",
    description:
      "A compact 500W electric scooter for practical short-distance transportation, with 40 km/h maximum speed and simple low-maintenance hardware.",
    specs: {
      Motor: "500W",
      "Tyres (Front / Rear)": "2.75-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "40 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Color: "White",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "breeze",
    name: "Breeze Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/和风_配置_1__2.jpeg",
    description:
      "A 3000W electric motorcycle with 80 km/h maximum speed, dual disc brakes and aluminum wheels for performance-oriented urban markets.",
    specs: {
      Motor: "3000W",
      "Tyres (Front / Rear)": "90/90-17 / 110/80-17 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "80 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Colors: "Black / Red / Yellow / Green",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "fengshen",
    name: "FengShen Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/封神_配置_2.png",
    description:
      "A 1500W electric motorcycle with 65 km/h maximum speed, dual disc brakes and aluminum wheels for everyday urban mobility.",
    specs: {
      Motor: "1500W",
      "Tyres (Front / Rear)": "3.0-12 / 3.0-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "65 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Colors: "Gray / White",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "jh",
    name: "JH Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/极核_配置_1__2.jpeg",
    description:
      "A 2000W electric motorcycle with 65 km/h maximum speed, 12-inch tubeless tyres and dual disc brakes for compact urban use.",
    specs: {
      Motor: "2000W",
      "Tyres (Front / Rear)": "90/90-12 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "65 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Color: "Orange",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "sky",
    name: "Sky Electric Scooter",
    category: "Electric Scooter",
    image: "slow_rider_product_images/苍穹_配置_1__2.jpeg",
    description:
      "A 1000W electric scooter for city transport, offering 55 km/h maximum speed, dual disc brakes and practical battery options.",
    specs: {
      Motor: "1000W",
      "Tyres (Front / Rear)": "3.00-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "55 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Color: "Gray",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "tank",
    name: "Tank Electric Motorcycle",
    category: "Electric Motorcycle",
    image: "slow_rider_product_images/坦克配置_2.png",
    description:
      "A rugged 2000W electric motorcycle with 70 km/h maximum speed, emergency lighting and a broad range of color options.",
    specs: {
      Motor: "2000W",
      "Tyres (Front / Rear)": "120/70-12 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "70 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight / Emergency Light",
      "Wheel Hub": "Aluminum",
      Colors: "Black / Blue / Red / Yellow / Military Green",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "dash",
    name: "Dash Electric Utility Vehicle",
    category: "Utility Vehicle",
    image: "slow_rider_product_images/走你_配置_4__2.png",
    description:
      "A 1200W electric utility vehicle with 55 km/h maximum speed, disc brakes and durable iron wheels for practical transport applications.",
    specs: {
      Motor: "1200W",
      "Tyres (Front / Rear)": "16×3.00 Inch",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "55 km/h",
      Appearance: "Spray Paint",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Color: "Green / Black",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "hummer",
    name: "Hummer Electric Utility Vehicle",
    category: "Utility Vehicle",
    image: "slow_rider_product_images/悍马_配置_2.jpeg",
    description:
      "A heavy-duty 1800W electric utility model with 50 km/h maximum speed and larger 12-inch tyre configuration for practical transport use.",
    specs: {
      Motor: "1800W",
      "Tyres (Front / Rear)": "375-12 / 400-12",
      "Brakes (Front / Rear)": "Drum / Drum",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "50 km/h",
      Appearance: "Spray Paint",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Color: "Orange / Black",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "little-cow",
    name: "Little Cow Utility Vehicle",
    category: "Utility Vehicle",
    image: "slow_rider_product_images/小牛牛_配置_2.jpeg",
    description:
      "A compact 600W electric utility vehicle designed for short-distance transport, with 45 km/h maximum speed and practical low-speed operation.",
    specs: {
      Motor: "600W",
      "Tyres (Front / Rear)": "3.0-8 / 3.0-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Color: "Blue",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "people-carrier",
    name: "2-Wheel People Carrier",
    category: "Passenger Vehicle",
    image: "slow_rider_product_images/两轮载人车_配置_2.png",
    description:
      "A 1200W electric people carrier designed for short-distance passenger transportation, with 45 km/h maximum speed and dual disc brakes.",
    specs: {
      Motor: "1200W",
      "Tyres (Front / Rear)": "90/90-12 Tubeless",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      Appearance: "Spray Paint",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Color: "Black",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "cargo-basic",
    name: "2-Wheel Cargo Basic",
    category: "Cargo Vehicle",
    image: "slow_rider_product_images/两轮货运基础款_配置_2.png",
    description:
      "A 1500W electric cargo vehicle for delivery and commercial transport, combining 55 km/h maximum speed with dual disc brakes.",
    specs: {
      Motor: "1500W",
      "Tyres (Front / Rear)": "90/90-12",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "55 km/h",
      Appearance: "Spray Paint",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Color: "Black",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "cargo-luxury",
    name: "2-Wheel Cargo Luxury",
    category: "Cargo Vehicle",
    image: "slow_rider_product_images/两轮货运豪华版__配置_2.png",
    description:
      "An upgraded 2000W electric cargo vehicle for commercial transport, offering 65 km/h maximum speed and aluminum wheels.",
    specs: {
      Motor: "2000W",
      "Tyres (Front / Rear)": "90/90-12",
      "Brakes (Front / Rear)": "Disc / Disc",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "65 km/h",
      Appearance: "Spray Paint",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Color: "Black",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "cargo",
    name: "Cargo Delivery Vehicle",
    category: "Cargo Vehicle",
    image: "slow_rider_product_images/快递车_配置_2__2.png",
    description:
      "A 1200W electric delivery vehicle designed for courier and last-mile logistics, with 52 km/h maximum speed and durable drum brakes.",
    specs: {
      Motor: "1200W",
      "Tyres (Front / Rear)": "3.75-12 Tubeless",
      "Brakes (Front / Rear)": "Drum / Drum",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "52 km/h",
      Appearance: "Spray Paint",
      Lighting: "LED Headlight",
      "Wheel Hub": "Iron",
      Color: "White",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "eagle-3w",
    name: "3 Wheeler Eagle",
    category: "Three Wheel Vehicle",
    image: "slow_rider_product_images/鹰系三轮_配置xlsx_2.png",
    description:
      "A 500W electric three-wheel vehicle for stable low-speed mobility and commercial transport, with 45 km/h maximum speed.",
    specs: {
      Motor: "500W",
      "Tyres (Front / Rear)": "3.0-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Color: "Black",
      "OEM / ODM": "Available"
    }
  },

  {
    id: "bull-3w",
    name: "3 Wheeler Bull",
    category: "Three Wheel Vehicle",
    image: "slow_rider_product_images/牛系三轮_配置xlsx_1__3.png",
    description:
      "A 500W electric three-wheel vehicle designed for practical transport and stable operation, with 45 km/h maximum speed.",
    specs: {
      Motor: "500W",
      "Tyres (Front / Rear)": "3.0-10 Tubeless",
      "Brakes (Front / Rear)": "Disc / Drum",
      Battery: "Lead-acid / Lithium",
      "Max Speed": "45 km/h",
      Appearance: "PU Baking Finish",
      Lighting: "LED Headlight",
      "Wheel Hub": "Aluminum",
      Color: "White",
      "OEM / ODM": "Available"
    }
  }
];


/* =========================================
   IMAGE LOADING
   ========================================= */

function getImageUrl(path) {
  if (!path) return "";

  /*
     encodeURI keeps the folder structure and
     safely handles Chinese characters/spaces.
  */
  return encodeURI(path);
}


function setProductImage(img, product) {
  if (!img || !product) return;

  img.onerror = function () {
    console.warn("Image could not be loaded:", product.image);

    img.onerror = null;
    img.classList.add("image-error");

    const wrapper = img.parentElement;

    if (wrapper && !wrapper.querySelector(".image-error-message")) {
      const message = document.createElement("div");

      message.className = "image-error-message";
      message.textContent = "Image unavailable";

      wrapper.appendChild(message);
    }
  };

  img.src = getImageUrl(product.image);
}


/* =========================================
   PRODUCT CATALOGUE
   ========================================= */

function renderProducts(category = "all") {
  const container = document.getElementById("productContainer");

  if (!container) return;

  container.innerHTML = "";

  const list =
    category === "all"
      ? products
      : products.filter(
          product => product.category === category
        );

  if (!list.length) {
    container.innerHTML = `
      <div class="catalog-empty">
        <h3>No products found</h3>
        <p>Please select another category.</p>
      </div>
    `;

    return;
  }

  list.forEach(product => {
    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image-wrapper">
        <img
          class="catalog-product-image"
          alt="${product.name}"
          loading="lazy"
        >
      </div>

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
          type="button"
          class="product-details-button"
        >
          View Details
        </button>
      </div>
    `;

    const image =
      card.querySelector(".catalog-product-image");

    setProductImage(image, product);

    const detailsButton =
      card.querySelector(".product-details-button");

    detailsButton.addEventListener("click", () => {
      openProduct(product.id);
    });

    container.appendChild(card);
  });
}


function filterProducts(category) {
  renderProducts(category);

  /*
     Keep the catalog buttons visually active
     when the HTML uses data-category.
  */
  document
    .querySelectorAll("[data-category]")
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.category === category
      );
    });
}


/* =========================================
   WHATSAPP
   ========================================= */

function askQuote(productName) {
  const text =
`Hello Slow Rider,

I am interested in: ${productName}

Please send me more information and a quotation.

My country:
Estimated quantity:
Additional requirements:`;

  const url =
    "https://wa.me/8618620284214?text=" +
    encodeURIComponent(text);

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* =========================================
   PRODUCT DETAILS MODAL
   ========================================= */

function openProduct(id) {
  const product =
    products.find(item => item.id === id);

  const modal =
    document.getElementById("productModal");

  if (!product || !modal) return;

  const specs =
    Object.entries(product.specs)
      .map(
        ([label, value]) => `
          <div class="spec-row">
            <strong>${label}</strong>
            <span>${value}</span>
          </div>
        `
      )
      .join("");

  modal.innerHTML = `
    <div
      class="modal-box"
      role="dialog"
      aria-modal="true"
      aria-label="${product.name}"
    >

      <button
        type="button"
        class="close-modal"
        onclick="closeProduct()"
        aria-label="Close product details"
      >
        ×
      </button>

      <div class="modal-image-wrapper">
        <img
          id="modalProductImage"
          alt="${product.name}"
        >
      </div>

      <div class="modal-product-info">

        <span class="product-category">
          ${product.category}
        </span>

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
          ${specs}
        </div>

        <div class="modal-actions">

          <button
            type="button"
            class="whatsapp-btn"
            onclick="askQuote('${product.name.replace(/'/g, "\\'")}')"
          >
            Request Quote on WhatsApp
          </button>

          <button
            type="button"
            class="close-product-button"
            onclick="closeProduct()"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  `;

  const modalImage =
    document.getElementById("modalProductImage");

  setProductImage(modalImage, product);

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}


function closeProduct() {
  const modal =
    document.getElementById("productModal");

  if (!modal) return;

  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = "";

  document.body.style.overflow = "";
}


/* =========================================
   MODAL CLOSE
   ========================================= */

document.addEventListener("click", event => {
  const modal =
    document.getElementById("productModal");

  if (
    modal &&
    event.target === modal
  ) {
    closeProduct();
  }
});


document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeProduct();
  }
});


/* =========================================
   QUOTE FORM
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const quoteForm =
    document.getElementById("quoteForm");

  if (quoteForm) {

    quoteForm.addEventListener("submit", event => {

      event.preventDefault();

      const name =
        document.getElementById("name")?.value || "";

      const company =
        document.getElementById("company")?.value ||
        "Not specified";

      const country =
        document.getElementById("country")?.value || "";

      const phone =
        document.getElementById("phone")?.value ||
        "Not specified";

      const quantity =
        document.getElementById("quantity")?.value ||
        "Not specified";

      const interest =
        document.getElementById("interest")?.value || "";

      const message =
        document.getElementById("message")?.value ||
        "Not specified";

      const lines = [
        "Hello Slow Rider,",
        "",
        "I would like to request more information and a quotation.",
        "",
        `Name: ${name}`,
        `Company: ${company}`,
        `Country: ${country}`,
        `WhatsApp / Phone: ${phone}`,
        `Estimated Order Quantity: ${quantity}`,
        `Product Interested In: ${interest}`,
        "",
        "Requirements:",
        message
      ];

      const url =
        "https://wa.me/8618620284214?text=" +
        encodeURIComponent(lines.join("\n"));

      window.open(
        url,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }


  /* =========================================
     MOBILE MENU
     ========================================= */

  const menuBtn =
    document.querySelector(".menu-btn");

  const nav =
    document.getElementById("mainNav") ||
    document.querySelector("nav");

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

      const open =
        nav.classList.toggle("mobile-open");

      menuBtn.setAttribute(
        "aria-expanded",
        String(open)
      );

      menuBtn.textContent =
        open ? "×" : "☰";
    });


    nav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

        menuBtn.textContent = "☰";
      });

    });
  }


  /* =========================================
     CATALOG INITIALIZATION
     ========================================= */

  renderProducts("all");


  /* =========================================
     CURRENT YEAR
     ========================================= */

  const year =
    document.getElementById("year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }

});
