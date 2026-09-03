function askQuote(product){
  const text = `Hello Slow Rider, I am interested in ${product}. Please send me more information and a quotation.`;
  window.open(`https://wa.me/8618620284214?text=${encodeURIComponent(text)}`, '_blank');
}
document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const message = `Hello Slow Rider,%0A%0AName: ${document.getElementById('name').value}%0ACompany: ${document.getElementById('company').value}%0ACountry: ${document.getElementById('country').value}%0APhone: ${document.getElementById('phone').value}%0AInterested in: ${document.getElementById('interest').value}%0ARequirements: ${document.getElementById('message').value}`;
  window.open(`https://wa.me/8618620284214?text=${message}`, '_blank');
});
document.getElementById('year').textContent = new Date().getFullYear();