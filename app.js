function showDestinationCard(val) {
  document.querySelectorAll('.detail-card').forEach(c => c.classList.add('hidden'));
  const selectedCard = document.getElementById(`card-${val}`);
  if (selectedCard) {
    selectedCard.classList.remove('hidden');
  }
}

function handleInquirySubmit(e) {
  e.preventDefault();
  
  const email = document.getElementById('inq-email').value.trim();
  if (email === "") {
    alert("Email cannot be empty!");
    return;
  }

  const name = document.getElementById('inq-name').value;
  const dest = document.getElementById('inq-dest').value;
  const start = document.getElementById('inq-start').value;
  const formattedStart = start ? start.replace('T', ' at ') : 'unspecified date';

  document.getElementById('modal-msg').textContent = `Thank you, ${name}. Your inquiry for ${dest} starting on ${formattedStart} has been sent.`;
  document.getElementById('success-modal').showModal();
}

function closeSuccessModal() {
  document.getElementById('success-modal').close();
  document.getElementById('inquiry-form').reset();
}

function initContactSlideshow() {
  const body = document.querySelector('body.contact-page');
  if (!body) return;

  const images = ['assets/sigiriya.png', 'assets/dalada.png', 'assets/mirissa.png'];
  let index = 0;
  
  body.style.backgroundImage = `linear-gradient(rgba(15, 16, 21, 0.85), rgba(15, 16, 21, 0.95)), url('${images[index]}')`;

  setInterval(() => {
    index = (index + 1) % images.length;
    body.style.backgroundImage = `linear-gradient(rgba(15, 16, 21, 0.85), rgba(15, 16, 21, 0.95)), url('${images[index]}')`;
  }, 5000);
}

initContactSlideshow();
