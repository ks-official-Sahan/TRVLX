function showDestinationCard(val) {
  document.querySelectorAll('.detail-card').forEach(c => c.classList.add('hidden'));
  const selectedCard = document.getElementById(`card-${val}`);
  if (selectedCard) {
    selectedCard.classList.remove('hidden');
  }
}

function handleInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('inq-name').value;
  const dest = document.getElementById('inq-dest').value;
  document.getElementById('modal-msg').textContent = `Thank you, ${name}. Your inquiry for ${dest} has been sent.`;
  document.getElementById('success-modal').showModal();
}

function closeSuccessModal() {
  document.getElementById('success-modal').close();
  document.getElementById('inquiry-form').reset();
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

initHeroSlideshow();
