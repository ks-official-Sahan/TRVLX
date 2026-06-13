document.addEventListener('DOMContentLoaded', () => {

  const destSelect = document.getElementById('destination-select');
  if (destSelect) {
    const showCard = (val) => {
      document.querySelectorAll('.detail-card').forEach(c => c.classList.add('hidden'));
      document.getElementById(`card-${val}`)?.classList.remove('hidden');
    };
    destSelect.addEventListener('change', (e) => showCard(e.target.value));

    const gotoParam = new URLSearchParams(window.location.search).get('goto');
    if (gotoParam) {
      destSelect.value = gotoParam;
      showCard(gotoParam);
    }
  }

  const btnCalc = document.getElementById('btn-calculate');
  if (btnCalc) {
    btnCalc.addEventListener('click', () => {
      const select = document.getElementById('calc-select');
      const days = parseInt(document.getElementById('calc-days').value) || 1;
      const lodging = parseFloat(select.value) || 0;
      const fee = parseFloat(select.options[select.selectedIndex].dataset.fee) || 0;
      document.getElementById('calc-total').textContent = `$${(lodging * days) + fee} USD`;
    });
  }

  const form = document.getElementById('inquiry-form');
  const modal = document.getElementById('success-modal');
  if (form && modal) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('modal-msg').textContent = `Thank you, ${document.getElementById('inq-name').value}. Your inquiry for ${document.getElementById('inq-dest').value} has been sent.`;
      modal.classList.add('active');
    });
    document.getElementById('btn-modal-close').addEventListener('click', () => {
      modal.classList.remove('active');
      form.reset();
    });
  }

  const hero = document.querySelector('.hero');
  if (hero) {
    const imgs = ['assets/sigiriya.png', 'assets/dalada.png', 'assets/mirissa.png'];
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % imgs.length;
      hero.style.backgroundImage = `linear-gradient(rgba(15,16,21,0.75), rgba(15,16,21,0.95)), url('${imgs[idx]}')`;
    }, 5000);
  }
});
