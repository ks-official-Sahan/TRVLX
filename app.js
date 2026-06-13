/* travelX (TRVLX) - Simplified Script Logic */

document.addEventListener('DOMContentLoaded', () => {

  // === 1. DESTINATION SELECTOR / CARD TOGGLING ===
  const destSelect = document.getElementById('destination-select');
  const cards = {
    'sigiriya': document.getElementById('card-sigiriya'),
    'dalada': document.getElementById('card-dalada'),
    'mirissa': document.getElementById('card-mirissa')
  };

  function showCard(selectedValue) {
    // Hide all cards first by adding the 'hidden' class
    for (const key in cards) {
      if (cards[key]) {
        cards[key].classList.add('hidden');
      }
    }
    // Show the selected card by removing the 'hidden' class
    if (cards[selectedValue]) {
      cards[selectedValue].classList.remove('hidden');
    }
  }

  if (destSelect) {
    destSelect.addEventListener('change', (e) => {
      showCard(e.target.value);
    });

    // Check URL Parameters (e.g. details.html?goto=mirissa from Home page links)
    const urlParams = new URLSearchParams(window.location.search);
    const gotoParam = urlParams.get('goto');
    if (gotoParam && cards[gotoParam]) {
      destSelect.value = gotoParam;
      showCard(gotoParam);
    }
  }


  // === 2. DYNAMIC TRIP CALCULATOR ===
  const calcSelect = document.getElementById('calc-select');
  const calcDays = document.getElementById('calc-days');
  const calcTotalText = document.getElementById('calc-total');
  const btnCalculate = document.getElementById('btn-calculate');

  function calculateTrip() {
    if (!calcSelect || !calcDays || !calcTotalText) return;

    // Get lodging rate from the selected option value
    const dailyLodging = parseFloat(calcSelect.value) || 0;
    
    // Get entry ticket fee from custom data attribute
    const selectedOption = calcSelect.options[calcSelect.selectedIndex];
    const ticketFee = parseFloat(selectedOption.getAttribute('data-fee')) || 0;
    
    const days = parseInt(calcDays.value) || 1;

    // Calculate sum
    const totalEstimate = (dailyLodging * days) + ticketFee;

    // Update UI text display
    calcTotalText.textContent = `$${totalEstimate} USD`;
  }

  if (btnCalculate) {
    btnCalculate.addEventListener('click', calculateTrip);
    // Also update dynamically when inputs change
    calcSelect.addEventListener('change', calculateTrip);
    calcDays.addEventListener('input', calculateTrip);
  }


  // === 3. RESERVATION FORM VALIDATION & POPUP MODAL ===
  const inquiryForm = document.getElementById('inquiry-form');
  const inqName = document.getElementById('inq-name');
  const inqEmail = document.getElementById('inq-email');
  const inqDest = document.getElementById('inq-dest');
  const successModal = document.getElementById('success-modal');
  const btnModalClose = document.getElementById('btn-modal-close');
  const modalMsg = document.getElementById('modal-msg');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop standard page reload

      const nameVal = inqName.value.trim();
      const emailVal = inqEmail.value.trim();

      // Basic validation checks
      if (nameVal === "") {
        alert("Please enter your full name.");
        inqName.focus();
        return;
      }

      if (emailVal === "" || !emailVal.includes("@")) {
        alert("Please enter a valid email address.");
        inqEmail.focus();
        return;
      }

      // If valid, customize the modal text and show the modal popup
      if (modalMsg) {
        modalMsg.textContent = `Thank you, ${nameVal}. Your inquiry for the ${inqDest.value} has been sent. Our team will contact you at ${emailVal} shortly.`;
      }
      
      if (successModal) {
        successModal.classList.add('active'); // CSS activates display overlay
      }
    });
  }

  // Close popup modal handler
  if (btnModalClose && successModal) {
    btnModalClose.addEventListener('click', () => {
      successModal.classList.remove('active');
      if (inquiryForm) {
        inquiryForm.reset(); // Clear form inputs
      }
    });
  }

  // === 4. HERO BACKGROUND SLIDESHOW ===
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds interval

    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, slideInterval);
  }

});
