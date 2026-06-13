function showDestinationCard(val) {
  document.querySelectorAll('.detail-card').forEach(c => c.classList.add('hidden'));
  const selectedCard = document.getElementById(`card-${val}`);
  if (selectedCard) {
    selectedCard.classList.remove('hidden');
  }
}

function checkDestinationParam() {
  const destSelect = document.getElementById('destination-select');
  if (!destSelect) return;
  const gotoParam = new URLSearchParams(window.location.search).get('goto');
  if (gotoParam) {
    destSelect.value = gotoParam;
    showDestinationCard(gotoParam);
  }
}

function calculateTripEstimate() {
  const select = document.getElementById('calc-select');
  const daysInput = document.getElementById('calc-days');
  const totalDisplay = document.getElementById('calc-total');
  if (!select || !daysInput || !totalDisplay) return;

  const days = parseInt(daysInput.value) || 1;
  const lodging = parseFloat(select.value) || 0;
  const fee = parseFloat(select.options[select.selectedIndex].dataset.fee) || 0;
  totalDisplay.textContent = `$${(lodging * days) + fee} USD`;
}

function handleInquirySubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('inq-name');
  const destSelect = document.getElementById('inq-dest');
  const msgDisplay = document.getElementById('modal-msg');
  const modal = document.getElementById('success-modal');

  if (nameInput && destSelect && msgDisplay && modal) {
    msgDisplay.textContent = `Thank you, ${nameInput.value}. Your inquiry for ${destSelect.value} has been sent.`;
    modal.classList.add('active');
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('success-modal');
  const form = document.getElementById('inquiry-form');
  if (modal) {
    modal.classList.remove('active');
  }
  if (form) {
    form.reset();
  }
}

function initHeroSlideshow() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const images = ['assets/sigiriya.png', 'assets/dalada.png', 'assets/mirissa.png'];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `linear-gradient(rgba(15,16,21,0.75), rgba(15,16,21,0.95)), url('${images[index]}')`;
  }, 5000);
}

checkDestinationParam();
initHeroSlideshow();
