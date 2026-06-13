/* travelX (TRVLX) - Platform Interactivity & Logic */

document.addEventListener('DOMContentLoaded', () => {
  // --- DESTINATIONS DATABASE ---
  const DESTINATION_DATA = {
    'sigiriya': {
      title: 'Sigiriya',
      tagline: 'The Lion Fortress of King Kashyapa',
      image: 'assets/sigiriya.png',
      tag: 'Heritage Citadel',
      fee: '$36 USD',
      optimal: '06:30 AM – 09:00 AM',
      dress: 'Standard Active',
      highlights: [
        'Ascend the 1,200 steps through the colossal stone Lion\'s Paw gateway.',
        'Marvel at the ancient frescoes of celestial maidens preserved on sheer rock.',
        'Walk along the Mirror Wall, containing verses dating from the 6th century.',
        'Explore the symmetric royal water gardens, among the oldest in the world.'
      ],
      steps: [
        'Arrive at the base gates by 06:30 AM to beat the mid-day heat and large tour crowds.',
        'Purchase your entry permit at the Archaeological Museum ticketing counter.',
        'Stroll through the scenic western gardens, framing the towering stone fortress.',
        'Ascend via the spiral staircase to the fresco pocket, then pause at the Lion\'s Paw terrace.',
        'Conquer the final climb to the summit ruins and experience 360-degree views.'
      ]
    },
    'dalada-maliga': {
      title: 'Dalada Maliga',
      tagline: 'The Sacred Palace of the Tooth Relic',
      image: 'assets/dalada.png',
      tag: 'Sacred Shrine',
      fee: '$15 USD',
      optimal: '05:30 AM – 07:00 AM (Tevava ritual)',
      dress: 'Temple Modest (White recommended)',
      highlights: [
        'Attend the ritualistic Tevava prayers performed by monks three times daily.',
        'View the elaborate Kandyan architectural woodwork and golden canopy.',
        'Explore the historic Alut Maligawa shrine displaying rows of ancient statues.',
        'Walk through the tranquil outer moats and royal gardens of the last kingdom.'
      ],
      steps: [
        'Ensure dress covers shoulders and knees. Light-colored or white garments are custom.',
        'Remove footwear at the outer gates and check them at the storage kiosk.',
        'Obtain your ticket and walk across the historic stone moat bridge.',
        'Join the queue rising to the upper chambers where the sacred relic casket is kept.',
        'Spend silent moments of reflection in the peaceful rear courtyard assembly.'
      ]
    },
    'mirissa': {
      title: 'Mirissa',
      tagline: 'Secluded Golden Bays & Coastal Calms',
      image: 'assets/mirissa.png',
      tag: 'Coastline',
      fee: 'Free Access',
      optimal: '04:00 PM – 06:30 PM',
      dress: 'Beach Casual',
      highlights: [
        'Witness beautiful sunsets at the iconic red-earth Coconut Tree Hill.',
        'Swim in the calm, clean waters of the protected secret reef cove.',
        'Participate in ethical, eco-conscious marine and whale watching excursions.',
        'Taste fresh catch prepared with traditional cardamoms and black pepper.'
      ],
      steps: [
        'Begin your day with a peaceful walk along the crescent-shaped golden beach.',
        'Make your way to Coconut Tree Hill around 04:30 PM to secure a viewing spot.',
        'Explore the shallow tide pools around Parrot Rock during the low tide interval.',
        'Dine at one of the minimal beachside grills lit only by candlelight.'
      ]
    },
    'hiriketiya': {
      title: 'Hiriketiya',
      tagline: 'A Hidden Surf Sanctuary & Jungle Cove',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
      tag: 'Surf Sanctuary',
      fee: 'Free Access',
      optimal: '06:00 AM – 10:00 AM',
      dress: 'Beach Casual',
      highlights: [
        'Surf the clean, consistent peeling waves suitable for all experience levels.',
        'Enjoy organic dining and artisanal coffee in minimalist jungle cafes.',
        'Participate in restorative yoga sessions under the coconut canopy.',
        'Observe the rich local birdlife and monkeys in the surrounding trees.'
      ],
      steps: [
        'Rent a custom longboard from a local beach pavilion.',
        'Paddle out during the early morning glass-off (around 06:30 AM) for ideal surf.',
        'Rehydrate with a fresh king coconut from a local roadside vendor.',
        'Relax at a minimal seaside workspace hidden under the palms.'
      ]
    },
    'dewinuwara': {
      title: 'Dewinuwara',
      tagline: 'The Southernmost Cape & Lighthouse Temple',
      image: 'https://images.unsplash.com/photo-1588598126707-62788e0b68a8?auto=format&fit=crop&w=600&q=80',
      tag: 'Southernmost Point',
      fee: 'Free Access',
      optimal: '04:30 PM – 06:30 PM',
      dress: 'Temple Modest',
      highlights: [
        'Visit the towering 49m octagonal stone Dondra Head lighthouse built in 1889.',
        'Pay respects at the historic Vishnu Devalaya temple, a sacred pilgrimage site.',
        'Observe local fishermen working on traditional outrigger boats.',
        'Enjoy the dramatic coastal breeze where the Indian Ocean meets open sea.'
      ],
      steps: [
        'Take a coastal bus or tuk-tuk south to the Dondra Head peninsula.',
        'Walk through the temple grounds, noting the historic stone pillars.',
        'Stroll along the grassy lighthouse garden leading to the rocky cape.',
        'Witness the sunset at the literal southernmost tip of Sri Lanka.'
      ]
    },
    'katharagama': {
      title: 'Katharagama',
      tagline: 'Multifaith Sacred Confluence & Shrine',
      image: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&w=600&q=80',
      tag: 'Sacred Confluence',
      fee: 'Free Access',
      optimal: '06:00 PM – 08:30 PM (Pooja ceremony)',
      dress: 'Temple Modest (White recommended)',
      highlights: [
        'Participate in the dynamic, drum-led evening Pooja temple rituals.',
        'Walk the peaceful banks of the sacred Menik Ganga river.',
        'Observe the harmonious coexistence of Buddhist, Hindu, and Islamic shrines.',
        'Witness the fire-walking rituals during the annual festival season.'
      ],
      steps: [
        'Purchase a vibrant fruit offering basket (Pooja Vatti) outside the gates.',
        'Cleanse hands and feet at the banks of the Menik Ganga river.',
        'Walk barefoot across the sandy courtyard towards the main Maha Devale shrine.',
        'Offer your basket during the ringing of the sacred temple bells.'
      ]
    }
  };

  // --- SELECTORS ---
  const header = document.getElementById('main-header');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  
  // Hero Background Slider
  const heroSlides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  const slideInterval = 6000; // 6 seconds

  // Off-canvas Drawer
  const destContainer = document.getElementById('dest-container');
  const detailDrawer = document.getElementById('detail-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const drawerDynamicContent = document.getElementById('drawer-dynamic-content');

  // Calculator
  const calcDestSelect = document.getElementById('calc-destination');
  const calcDaysInput = document.getElementById('calc-days');
  const calcTierSelect = document.getElementById('calc-tier');
  const calcPriceDisplay = document.getElementById('calc-total-display');
  const calcApplyBtn = document.getElementById('calc-apply-btn');

  // Inquiry Form
  const inquiryForm = document.getElementById('inquiry-form');
  const inqName = document.getElementById('inq-name');
  const inqEmail = document.getElementById('inq-email');
  const inqDest = document.getElementById('inq-destination');
  const inqDays = document.getElementById('inq-days');
  const inqNotes = document.getElementById('inq-notes');
  const errName = document.getElementById('err-name');
  const errEmail = document.getElementById('err-email');
  
  // Notification Toast Container
  const alertContainer = document.getElementById('alert-container');

  // --- HEADER SCROLL ACTION ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Logo Scroll-to-Top Actions
  const headerLogo = document.getElementById('header-logo');
  const footerLogo = document.getElementById('footer-logo');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  if (headerLogo) headerLogo.addEventListener('click', scrollToTop);
  if (footerLogo) footerLogo.addEventListener('click', scrollToTop);

  // --- THEME STATE MANAGER (WCAG AAA Compliance) ---
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIconSun.style.display = 'block';
      themeIconMoon.style.display = 'none';
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeIconSun.style.display = 'none';
      themeIconMoon.style.display = 'block';
    }
    localStorage.setItem('trvlx-theme', theme);
  };

  // Detect initial theme preference
  const savedTheme = localStorage.getItem('trvlx-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (systemPrefersDark) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(isDark ? 'light' : 'dark');
    showNotification('Theme preferences updated successfully.', 'info');
  });

  // --- HERO BACKGROUND CAROUSEL ---
  const cycleHeroSlides = () => {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
  };
  if (heroSlides.length > 1) {
    setInterval(cycleHeroSlides, slideInterval);
  }

  // --- OFF-CANVAS DETAIL DRAWER ---
  const openDrawer = (slug) => {
    const data = DESTINATION_DATA[slug];
    if (!data) return;

    // Build lists dynamically (Required elements)
    const highlightsHtml = data.highlights
      .map(item => `<li>${item}</li>`)
      .join('');

    const stepsHtml = data.steps
      .map(item => `<li>${item}</li>`)
      .join('');

    // Inject dynamic HTML structured view
    drawerDynamicContent.innerHTML = `
      <span class="section-label">${data.tag}</span>
      <h2 id="drawer-title" style="margin-bottom: 0.5rem;">${data.title}</h2>
      <p style="font-size: 1.1rem; font-style: italic; color: var(--text-accent); margin-bottom: var(--spacing-sm);">${data.tagline}</p>
      
      <div class="drawer-hero">
        <img src="${data.image}" alt="${data.title} landscape editorial showcase">
      </div>

      <div class="drawer-meta-list">
        <p><strong>Entrance Fee (Foreigner):</strong> ${data.fee}</p>
        <p><strong>Best Time of Day:</strong> ${data.optimal}</p>
        <p><strong>Required Dress Guidelines:</strong> ${data.dress}</p>
      </div>

      <h3 class="font-serif" style="margin-top: 2rem;">Curated Highlights</h3>
      <!-- Unordered List Requirement -->
      <ul class="highlight-list">
        ${highlightsHtml}
      </ul>

      <h3 class="font-serif" style="margin-top: 2rem;">Recommended Journey Steps</h3>
      <!-- Ordered List Requirement -->
      <ol class="drawer-steps">
        ${stepsHtml}
      </ol>

      <div style="margin-top: 2.5rem; display: flex; gap: 1rem;">
        <button class="btn btn-accent drawer-select-btn" data-destination-val="${slug}">Apply to Planning</button>
        <button class="btn drawer-close-alt">Back to Directory</button>
      </div>
    `;

    // Show Drawer
    detailDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    detailDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock main scroll
    drawerCloseBtn.focus(); // Set accessibility focus

    // Add listeners inside dynamic elements
    drawerDynamicContent.querySelector('.drawer-close-alt').addEventListener('click', closeDrawer);
    
    drawerDynamicContent.querySelector('.drawer-select-btn').addEventListener('click', (e) => {
      const destVal = e.target.getAttribute('data-destination-val');
      
      // Update calculator selector
      if (calcDestSelect) {
        calcDestSelect.value = destVal;
        triggerCalculator();
      }
      
      // Update inquiry form selector
      if (inqDest) {
        // Map slug to visible select name
        const mappedName = data.title;
        const matchingOption = Array.from(inqDest.options).find(opt => opt.value.toLowerCase().includes(destVal.substring(0, 5)));
        if (matchingOption) {
          inqDest.value = matchingOption.value;
        }
      }
      
      closeDrawer();
      showNotification(`Destination focus updated: ${data.title}`, 'success');
      
      // Scroll smoothly to planning calculator
      document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
    });
  };

  const closeDrawer = () => {
    detailDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    detailDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Unlock main scroll
    
    // Return focus to cards container
    destContainer.focus();
  };

  // Attach card click handlers
  if (destContainer) {
    const cards = destContainer.querySelectorAll('.dest-card');
    cards.forEach(card => {
      const slug = card.getAttribute('data-slug');
      
      // Click event
      card.addEventListener('click', () => openDrawer(slug));
      
      // Keyboard Accessibility (Enter key trigger)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          openDrawer(slug);
        }
      });
    });
  }

  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // --- DYNAMIC EXPENSE CALCULATOR ---
  const triggerCalculator = () => {
    const selectedOpt = calcDestSelect.options[calcDestSelect.selectedIndex];
    const ticketFee = parseFloat(selectedOpt.getAttribute('data-fee')) || 0;
    const dailyLodging = parseFloat(selectedOpt.getAttribute('data-lodging')) || 0;
    
    const days = parseInt(calcDaysInput.value) || 1;
    const tierMultiplier = parseFloat(calcTierSelect.value) || 1.0;

    // Premium multiplier expense arithmetic
    const estimate = (ticketFee + (dailyLodging * days)) * tierMultiplier;
    
    // Animate display price text
    calcPriceDisplay.textContent = `$${Math.round(estimate).toLocaleString()} USD`;
  };

  if (calcDestSelect && calcDaysInput && calcTierSelect) {
    calcDestSelect.addEventListener('change', triggerCalculator);
    calcDaysInput.addEventListener('input', triggerCalculator);
    calcTierSelect.addEventListener('change', triggerCalculator);
  }

  // Apply calculator properties directly to inquiry
  if (calcApplyBtn) {
    calcApplyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Map select value
      const calcVal = calcDestSelect.value;
      const matchingOption = Array.from(inqDest.options).find(opt => opt.value.toLowerCase().includes(calcVal.substring(0, 5)));
      if (matchingOption) {
        inqDest.value = matchingOption.value;
      }
      
      // Copy duration input value
      inqDays.value = calcDaysInput.value;
      
      // Copy calculation summary to Notes
      const selectedOpt = calcDestSelect.options[calcDestSelect.selectedIndex].text;
      const tierText = calcTierSelect.options[calcTierSelect.selectedIndex].text;
      inqNotes.value = `Applied estimate calculation parameters:\nFocus: ${selectedOpt}\nMultiplier Tier: ${tierText}\nAllocated Estimate: ${calcPriceDisplay.textContent}\n--\n`;
      
      showNotification('Journey parameters transferred to inquiry details.', 'success');
      document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- FORM VALIDATION & NOTIFICATION ALERT SUBMISSION ---
  const showNotification = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `alert-toast ${type}`;
    toast.role = 'alert';
    
    toast.innerHTML = `
      <span>${message}</span>
      <button class="alert-toast-close" aria-label="Dismiss message">✕</button>
    `;
    
    alertContainer.appendChild(toast);
    
    // Auto-remove after 4 seconds
    const autoRemove = setTimeout(() => {
      dismissToast(toast);
    }, 4500);

    toast.querySelector('.alert-toast-close').addEventListener('click', () => {
      clearTimeout(autoRemove);
      dismissToast(toast);
    });
  };

  const dismissToast = (toast) => {
    toast.style.animation = 'staggerFade 0.3s ease reverse forwards';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  };

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      
      // Name validation
      if (!inqName.value.trim()) {
        errName.style.display = 'block';
        inqName.style.borderColor = '#D32F2F';
        isValid = false;
      } else {
        errName.style.display = 'none';
        inqName.style.borderColor = 'var(--border-muted)';
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inqEmail.value.trim())) {
        errEmail.style.display = 'block';
        inqEmail.style.borderColor = '#D32F2F';
        isValid = false;
      } else {
        errEmail.style.display = 'none';
        inqEmail.style.borderColor = 'var(--border-muted)';
      }

      if (isValid) {
        const clientName = inqName.value.trim();
        const destChoice = inqDest.value;
        
        // Dynamic Alert popup (Required modal interaction feedback)
        showNotification(`Thank you, ${clientName}. Your inquiry for ${destChoice} was submitted successfully.`, 'success');
        
        // Reset form controls
        inquiryForm.reset();
        triggerCalculator();
      } else {
        showNotification('Inquiry forms contain invalid input parameter weights. Please correct the highlights.', 'error');
      }
    });
  }

  // --- SCROLL INTERSECTION OBSERVER (Visual Reveals) ---
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // If it's a grid container with delayed items, reveal them together
        if (entry.target.classList.contains('stagger-reveal')) {
          entry.target.classList.add('revealed');
        }
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.12, // Trigger when 12% is visible
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
  
  // Add staggered class to child cards for animation delay
  const destGrid = document.querySelector('.destination-grid');
  if (destGrid) {
    destGrid.classList.add('stagger-reveal');
  }
});
