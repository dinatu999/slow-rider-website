/* -----------------------------------------
   IMAGE LOADING
   ----------------------------------------- */

function loadProductImage(img, product) {
  if (!img || !product) return;

  const imagePath = product.image ? encodeURI(product.image) : '';

  img.onerror = function () {
    img.onerror = null;
    img.classList.add('image-error');
  };

  if (imagePath) {
    img.src = imagePath;
  } else {
    img.classList.add('image-error');
  }
}


/* -----------------------------------------
   CATEGORY HELPERS
   ----------------------------------------- */

function isElectricATV(p) {
  return !!p &&
    p.category === 'ATV' &&
    ELECTRIC_ATV_IDS.includes(p.id);
}


function getATVCategory(p) {

  if (!p || p.category !== 'ATV') {
    return null;
  }

  if (ELECTRIC_ATV_IDS.includes(p.id)) {
    return 'Electric ATV';
  }

  if (KIDS_ATV_IDS.includes(p.id)) {
    return 'Kids ATV';
  }

  if (UTILITY_ATV_IDS.includes(p.id)) {
    return 'Utility ATV';
  }

  if (SPORT_ATV_IDS.includes(p.id)) {
    return 'Sport ATV';
  }

  return 'Gas ATV';
}


function labelFor(p) {

  if (p.category === 'ATV') {
    return getATVCategory(p);
  }

  return p.category;
}


function isElectricMobility(p) {

  return [
    'Electric Scooter',
    'Electric Motorcycle',
    'Utility Vehicle',
    'Cargo Vehicle',
    'Passenger Vehicle',
    'Three Wheel Vehicle'
  ].includes(p.category);
}


/* -----------------------------------------
   CATEGORY MATCHING
   ----------------------------------------- */

function matches(p, filter) {

  if (filter === 'all') {
    return true;
  }


  /* ALL ATVs */

  if (filter === 'ATV') {
    return p.category === 'ATV';
  }


  /* ALL GAS ATVs
     Includes Kids + Utility + Sport groups.
     Electric ATVs are excluded. */

  if (filter === 'Gas ATV') {
    return p.category === 'ATV' &&
      !ELECTRIC_ATV_IDS.includes(p.id);
  }


  /* ELECTRIC ATVs */

  if (filter === 'Electric ATV') {
    return p.category === 'ATV' &&
      getATVCategory(p) === 'Electric ATV';
  }


  /* KIDS ATVs */

  if (filter === 'Kids ATV') {
    return p.category === 'ATV' &&
      getATVCategory(p) === 'Kids ATV';
  }


  /* UTILITY ATVs */

  if (filter === 'Utility ATV') {
    return p.category === 'ATV' &&
      getATVCategory(p) === 'Utility ATV';
  }


  /* SPORT / 4X4 ATVs */

  if (filter === 'Sport ATV') {
    return p.category === 'ATV' &&
      getATVCategory(p) === 'Sport ATV';
  }


  /* ELECTRIC MOBILITY */

  if (filter === 'Electric Mobility') {
    return isElectricMobility(p);
  }


  /* ELECTRIC SCOOTERS */

  if (filter === 'Electric Scooter') {
    return p.category === 'Electric Scooter';
  }


  /* ELECTRIC MOTORCYCLES */

  if (filter === 'Electric Motorcycle') {
    return p.category === 'Electric Motorcycle';
  }


  /* COMMERCIAL VEHICLES */

  if (filter === 'Commercial') {
    return [
      'Utility Vehicle',
      'Cargo Vehicle',
      'Passenger Vehicle',
      'Three Wheel Vehicle'
    ].includes(p.category);
  }


  return p.category === filter;
}


/* -----------------------------------------
   COUNTS
   ----------------------------------------- */

function count(filter) {

  return products.filter(function (p) {
    return matches(p, filter);
  }).length;
}


function setCount(id, number) {

  const element = document.getElementById(id);

  if (element) {
    element.textContent = number;
  }
}


function updateCounts() {

  setCount('count-all', products.length);

  setCount('count-atv', count('ATV'));

  setCount('count-gas-atv', count('Gas ATV'));

  setCount('count-electric-atv', count('Electric ATV'));

  setCount('count-kids-atv', count('Kids ATV'));

  setCount('count-utility-atv', count('Utility ATV'));

  setCount('count-sport-atv', count('Sport ATV'));

  setCount('count-scooter', count('Electric Scooter'));

  setCount('count-motorcycle', count('Electric Motorcycle'));

  setCount('count-commercial', count('Commercial'));

  setCount('count-electric-mobility', count('Electric Mobility'));
}


/* -----------------------------------------
   ESCAPE HTML
   ----------------------------------------- */

function esc(s) {
  return String(s ?? '').replace(
    /[&<>"']/g,
    function (c) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[c];
    }
  );
}


/* -----------------------------------------
   PRODUCT CARD
   ----------------------------------------- */

function productCard(p) {

  const label = labelFor(p);

  const specs = Object.entries(p.specs || {})
    .filter(function ([, value]) {
      return value;
    })
    .slice(0, 2)
    .map(function ([key, value]) {
      return esc(key) + ': ' + esc(value);
    })
    .join(' • ');


  return `
    <article class="product-card">

      <div class="product-image-wrapper">

        <span class="product-badge">
          ${esc(label)}
        </span>

        <img
          class="catalog-product-image"
          alt="${esc(p.name)}"
          loading="lazy"
        >

      </div>


      <div class="product-content">

        <h3>
          ${esc(p.name)}
        </h3>

        <div class="product-meta">
          ${esc(specs || p.description || 'Wholesale vehicle')}
        </div>


        <div class="product-bottom">

          <span class="product-price">
            Request quote
          </span>


          <button
            type="button"
            class="details-btn"
            data-product-id="${esc(p.id)}"
            onclick="openProduct('${esc(p.id)}')"
          >
            View Details
          </button>


          <button
            type="button"
            class="mini-wa"
            data-wa-product="${esc(p.name)}"
          >
            WhatsApp
          </button>

        </div>

      </div>

    </article>
  `;
}


/* -----------------------------------------
   SECTION BLOCK
   ----------------------------------------- */

function sectionBlock(
  title,
  icon,
  items,
  color = 'orange',
  max = null,
  moreFilter = null
) {

  const shown = max
    ? items.slice(0, max)
    : items;


  const grid = shown
    .map(productCard)
    .join('');


  const more =
    max && items.length > max
      ? `
        <div class="catalog-more">

          <button
            class="view-all-btn"
            data-filter-action="${esc(moreFilter)}"
          >
            View All ${esc(title)} →
          </button>

        </div>
      `
      : '';


  return `
    <section class="catalog-section">

      <div class="section-title-row ${color === 'green' ? 'green' : ''}">

        <h2 class="section-title">

          <span class="section-icon">
            ${icon}
          </span>

          ${esc(title)}

        </h2>


        <span class="count-pill">
          ${items.length} Products
        </span>

      </div>


      <div class="product-grid">

        ${
          grid ||
          '<div class="empty-products">No products available in this category yet.</div>'
        }

      </div>

      ${more}

    </section>
  `;
}


/* -----------------------------------------
   RENDER CATALOG
   ----------------------------------------- */

function renderCatalog(filter = 'all') {

  const root = document.getElementById('catalogView');

  if (!root) {
    return;
  }


  let visible = [];


  /* ALL PRODUCTS */

  if (filter === 'all') {

    const atvs = products.filter(function (p) {
      return p.category === 'ATV';
    });


    const electric = products.filter(function (p) {
      return isElectricMobility(p);
    });


    visible = [
      ...atvs.slice(0, 6),
      ...electric.slice(0, 6)
    ];


    root.innerHTML =
      sectionBlock(
        'ATVs',
        '🏍',
        atvs,
        'orange',
        6,
        'ATV'
      ) +

      sectionBlock(
        'Electric Mobility',
        '⚡',
        electric,
        'green',
        6,
        'Electric Mobility'
      );

  }


  /* CATEGORY */

  else {

    visible = products.filter(function (p) {
      return matches(p, filter);
    });


    const meta =
      CATEGORY_META[filter] ||
      {
        title: filter,
        icon: '•',
        color: 'orange'
      };


    root.innerHTML = sectionBlock(
      meta.title,
      meta.icon,
      visible,
      meta.color
    );
  }


  root
    .querySelectorAll('.catalog-product-image')
    .forEach(function (img, i) {

      if (visible[i]) {
        loadProductImage(img, visible[i]);
      }

    });
}


/* -----------------------------------------
   ACTIVATE CATEGORY FILTER
   ----------------------------------------- */

function activateFilter(filter) {

  document
    .querySelectorAll('.side-item, .sub-items button')
    .forEach(function (button) {

      button.classList.toggle(
        'active',
        button.dataset.filter === filter
      );

    });


  const select =
    document.getElementById('mobileFilter');


  if (select) {

    const validFilters = [

      'all',

      'ATV',

      'Gas ATV',

      'Electric ATV',

      'Kids ATV',

      'Utility ATV',

      'Sport ATV',

      'Electric Mobility',

      'Electric Scooter',

      'Electric Motorcycle',

      'Commercial'

    ];


    select.value =
      validFilters.includes(filter)
        ? filter
        : 'all';
  }


  renderCatalog(filter);
}


function filterProducts(filter) {

  activateFilter(filter);


  const productsSection =
    document.getElementById('products');


  if (productsSection) {

    productsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }
}
/* -----------------------------------------
   WHATSAPP QUOTE
   ----------------------------------------- */

function askQuote(name) {

  const text =
    'Hello Slow Rider,\n\n' +
    'I am interested in: ' +
    name +
    '\n\n' +
    'Please send me more information and a quotation.\n\n' +
    'My country:\n' +
    'Estimated quantity:\n' +
    'Additional requirements:';


  window.open(
    'https://wa.me/8618620284214?text=' +
    encodeURIComponent(text),
    '_blank',
    'noopener,noreferrer'
  );
}


/* -----------------------------------------
   PRODUCT DETAILS MODAL
   ----------------------------------------- */

function openProduct(id) {

  const p =
    products.find(function (x) {
      return x.id === id;
    });


  const modal =
    document.getElementById('productModal');


  if (!p || !modal) {
    return;
  }


  const label =
    labelFor(p);


  const specs =
    Object.entries(p.specs || {})
      .filter(function ([, value]) {
        return value;
      })
      .map(function ([key, value]) {

        return `
          <div class="spec-row">

            <strong>
              ${esc(key)}
            </strong>

            <span>
              ${esc(value).replace(/\n/g, '<br>')}
            </span>

          </div>
        `;

      })
      .join('');


  modal.innerHTML = `

    <div
      class="modal-box"
      role="dialog"
      aria-modal="true"
    >

      <button
        class="close-modal"
        data-close-modal
        aria-label="Close"
      >
        ×
      </button>


      <div class="modal-layout">


        <div class="modal-image-wrapper">

          <span class="modal-label">
            ${esc(label)}
          </span>

          <img
            id="modalProductImage"
            alt="${esc(p.name)}"
          >

        </div>


        <div class="modal-info">

          <span class="product-category">
            ${esc(label)}
          </span>


          <h2>
            ${esc(p.name)}
          </h2>


          <p class="modal-description">
            ${esc(
              p.description ||
              'Wholesale vehicle available for international dealers and distributors.'
            )}
          </p>


          <h3>
            Specifications
          </h3>


          <div class="spec-list">
            ${specs}
          </div>


          <button
            class="whatsapp-btn"
            data-wa-product="${esc(p.name)}"
          >
            ◉ &nbsp; Send Inquiry via WhatsApp
          </button>


          <button
            class="modal-close-bottom"
            data-close-modal
          >
            Close
          </button>

        </div>

      </div>

    </div>

  `;


  loadProductImage(
    document.getElementById('modalProductImage'),
    p
  );


  modal.classList.add('is-open');

  modal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add(
    'modal-open'
  );
}


function closeProduct() {

  const modal =
    document.getElementById('productModal');


  if (!modal) {
    return;
  }


  modal.classList.remove(
    'is-open'
  );


  modal.setAttribute(
    'aria-hidden',
    'true'
  );


  modal.innerHTML = '';


  document.body.classList.remove(
    'modal-open'
  );
}


/* -----------------------------------------
   GLOBAL CLICK HANDLER
   ----------------------------------------- */

document.addEventListener(
  'click',
  function (e) {


    /* View Details */

    const details =
      e.target.closest(
        '[data-product-id]'
      );


    if (details) {

      openProduct(
        details.dataset.productId
      );

      return;
    }


    /* WhatsApp */

    const wa =
      e.target.closest(
        '[data-wa-product]'
      );


    if (wa) {

      askQuote(
        wa.dataset.waProduct
      );

      return;
    }


    /* View All */

    const action =
      e.target.closest(
        '[data-filter-action]'
      );


    if (action) {

      filterProducts(
        action.dataset.filterAction
      );

      return;
    }


    /* Close modal */

    const close =
      e.target.closest(
        '[data-close-modal]'
      );


    if (close) {

      closeProduct();

      return;
    }


    /* Click outside modal */

    const modal =
      document.getElementById(
        'productModal'
      );


    if (
      modal &&
      e.target === modal
    ) {

      closeProduct();

    }

  }
);


/* -----------------------------------------
   ESCAPE KEY
   ----------------------------------------- */

document.addEventListener(
  'keydown',
  function (e) {

    if (e.key === 'Escape') {
      closeProduct();
    }

  }
);


/* -----------------------------------------
   GLOBAL FUNCTIONS
   ----------------------------------------- */

window.openProduct =
  openProduct;

window.closeProduct =
  closeProduct;

window.askQuote =
  askQuote;


/* -----------------------------------------
   MAIN INITIALIZATION
   ----------------------------------------- */

document.addEventListener(
  'DOMContentLoaded',
  function () {


    updateCounts();


    renderCatalog('all');


    document
      .querySelectorAll(
        '.side-item, .sub-items button'
      )
      .forEach(function (button) {

        button.addEventListener(
          'click',
          function () {

            filterProducts(
              button.dataset.filter
            );

          }
        );

      });


    const mobileFilter =
      document.getElementById(
        'mobileFilter'
      );


    if (mobileFilter) {

      mobileFilter.addEventListener(
        'change',
        function () {

          filterProducts(
            mobileFilter.value
          );

        }
      );

    }


    /* Mobile navigation */

    const menu =
      document.querySelector(
        '.menu-toggle'
      );


    const nav =
      document.getElementById(
        'mainNav'
      );


    if (menu && nav) {

      menu.addEventListener(
        'click',
        function () {

          const open =
            nav.classList.toggle(
              'mobile-open'
            );


          menu.setAttribute(
            'aria-expanded',
            String(open)
          );


          menu.textContent =
            open
              ? '×'
              : '☰';

        }
      );

    }

  }
);


/* -----------------------------------------
   PRODUCT SEARCH
   ----------------------------------------- */

(function () {


  function searchProducts(term) {

    const search =
      String(term || '')
        .trim()
        .toLowerCase();


    const root =
      document.getElementById(
        'catalogView'
      );


    if (!root) {
      return;
    }


    if (!search) {

      renderCatalog('all');

      removeSearchInfo();

      return;
    }


    const results =
      products.filter(function (p) {


        const specs =
          Object.entries(
            p.specs || {}
          )
            .map(function ([key, value]) {

              return key +
                ' ' +
                value;

            })
            .join(' ');


        const searchableText = [

          p.name,

          p.category,

          p.type,

          p.description,

          specs

        ]
          .join(' ')
          .toLowerCase();


        return searchableText.includes(
          search
        );

      });


    root.innerHTML =
      sectionBlock(
        'Search Results',
        '🔍',
        results,
        'orange'
      );


    root
      .querySelectorAll(
        '.catalog-product-image'
      )
      .forEach(function (img, i) {

        if (results[i]) {

          loadProductImage(
            img,
            results[i]
          );

        }

      });


    showSearchInfo(
      results.length,
      search
    );

  }


  function showSearchInfo(
    count,
    term
  ) {

    removeSearchInfo();


    const root =
      document.getElementById(
        'catalogView'
      );


    if (!root) {
      return;
    }


    const info =
      document.createElement(
        'div'
      );


    info.className =
      'search-results-info';


    info.textContent =
      count === 1
        ? '1 product found for "' +
          term +
          '"'
        : count +
          ' products found for "' +
          term +
          '"';


    root.parentNode.insertBefore(
      info,
      root
    );

  }


  function removeSearchInfo() {

    document
      .querySelectorAll(
        '.search-results-info'
      )
      .forEach(function (el) {

        el.remove();

      });

  }


  document.addEventListener(
    'DOMContentLoaded',
    function () {


      const input =
        document.getElementById(
          'productSearch'
        );


      const clear =
        document.getElementById(
          'clearProductSearch'
        );


      if (!input) {
        return;
      }


      input.addEventListener(
        'input',
        function () {

          const value =
            input.value;


          if (clear) {

            clear.style.display =
              value
                ? 'block'
                : 'none';

          }


          searchProducts(
            value
          );

        }
      );


      if (clear) {

        clear.addEventListener(
          'click',
          function () {

            input.value = '';

            clear.style.display =
              'none';

            searchProducts('');

            input.focus();

          }
        );

      }

    }
  );

})();


/* -----------------------------------------
   HOMEPAGE FEATURED VEHICLES
   ----------------------------------------- */

document.addEventListener(
  'DOMContentLoaded',
  function () {


    const featured =
      document.getElementById(
        'featuredProducts'
      );


    if (
      !featured ||
      typeof products === 'undefined'
    ) {
      return;
    }


    const featuredProducts =
      products.slice(0, 6);


    featured.innerHTML =
      featuredProducts
        .map(productCard)
        .join('');


    featured
      .querySelectorAll(
        '.catalog-product-image'
      )
      .forEach(function (img, i) {

        if (featuredProducts[i]) {

          loadProductImage(
            img,
            featuredProducts[i]
          );

        }

      });

  }
);


/* -----------------------------------------
   HOMEPAGE FEATURED ATVs
   ----------------------------------------- */

document.addEventListener(
  'DOMContentLoaded',
  function () {


    const featuredATVs =
      document.getElementById(
        'featuredATVs'
      );


    if (
      !featuredATVs ||
      typeof products === 'undefined'
    ) {
      return;
    }


    const atvProducts =
      products
        .filter(function (p) {

          return p.category === 'ATV';

        })
        .slice(0, 4);


    featuredATVs.innerHTML =
      atvProducts
        .map(productCard)
        .join('');


    featuredATVs
      .querySelectorAll(
        '.catalog-product-image'
      )
      .forEach(function (img, i) {

        if (atvProducts[i]) {

          loadProductImage(
            img,
            atvProducts[i]
          );

        }

      });

  }
);
