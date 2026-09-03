function askQuote(product){
  const text = `Hello Slow Rider, I am interested in ${product}. Please send me more information and a quotation.`;
  window.open(`https://wa.me/8618620284214?text=${encodeURIComponent(text)}`, '_blank');
}

const products = {
  patrol:{name:'Patrol Electric Scooter',image:'patrol-police.png',description:'A practical patrol and utility electric scooter with a distinctive blue-and-white appearance, LED lighting and emergency light function.',specs:[['Motor','1000W'],['Tyres (Front / Rear)','3.00-10 Tubeless'],['Brakes (Front / Rear)','Disc / Disc'],['Battery','Lead-acid / Lithium'],['Max Speed','45 km/h'],['Lighting','LED headlight + emergency light'],['Wheel Hub','Iron'],['Color','Blue with white']]},
  maxi:{name:'Maxi Scooter',image:'maxi-scooter.png',description:'A sporty maxi-style electric scooter designed for stronger performance and everyday road use.',specs:[['Motor','2000W'],['Tyres (Front / Rear)','3.00-10 Tubeless'],['Brakes (Front / Rear)','Disc / Disc'],['Battery','Lead-acid / Lithium'],['Max Speed','80–90 km/h'],['Lighting','LED headlight'],['Wheel Hub','Aluminum'],['Color','Black']]},
  sunrise:{name:'Sunrise',image:'sunrise.png',description:'A bold electric motorcycle with a road-bike style and a powerful 3000W motor.',specs:[['Motor','3000W'],['Tyres (Front / Rear)','2.75-18 / 110-90-16 Tubeless'],['Brakes (Front / Rear)','Disc / Disc'],['Battery','Lead-acid / Lithium'],['Max Speed','70 km/h'],['Lighting','LED headlight'],['Wheel Hub','Aluminum'],['Colors','Black / Red']]},
  cg125:{name:'Big CG125',image:'big-cg125.png',description:'A classic-style electric motorcycle platform with multiple color options and a 3000W motor.',specs:[['Motor','3000W'],['Tyres (Front / Rear)','2.75-18 / 110-90-16 Tubeless'],['Brakes (Front / Rear)','Disc / Disc'],['Battery','Lead-acid / Lithium'],['Max Speed','70 km/h'],['Lighting','LED headlight'],['Wheel Hub','Aluminum'],['Colors','Black / Blue / Red']]}
};

const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
function showDetails(key){
  const p = products[key]; if(!p) return;
  const rows = p.specs.map(([label,value])=>`<tr><td>${label}</td><td>${value}</td></tr>`).join('');
  modalContent.innerHTML = `<div class="modal-product"><img src="${p.image}" alt="${p.name}"><div><span class="product-tag">SLOW RIDER PRODUCT</span><h2>${p.name}</h2><p>${p.description}</p><table class="spec-table">${rows}</table><div class="modal-actions"><button class="btn primary" onclick="askQuote('${p.name.replace(/'/g,"\\'")}')">Get Quote on WhatsApp</button><button class="btn details-btn" onclick="closeModal()">Close</button></div></div></div>`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('.details-btn[data-product]').forEach(btn=>btn.addEventListener('click',()=>showDetails(btn.dataset.product)));
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const lines = [`Hello Slow Rider,`, '', `Name: ${document.getElementById('name').value}`, `Company: ${document.getElementById('company').value}`, `Country: ${document.getElementById('country').value}`, `Phone: ${document.getElementById('phone').value}`, `Estimated Quantity: ${document.getElementById('quantity').value || 'Not specified'}`,`Interested in: ${document.getElementById('interest').value}`, `Requirements: ${document.getElementById('message').value}`];
  window.open(`https://wa.me/8618620284214?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
});

document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn=document.querySelector('.menu-btn'), nav=document.querySelector('nav');
menuBtn.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';menuBtn.setAttribute('aria-expanded',String(!open));});
