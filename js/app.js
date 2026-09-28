// VASEVINE — Frontend Application Logic (Client Products Catalog)

// Auto-clear cart if it contains old demo product IDs
let cart = JSON.parse(localStorage.getItem('vasevine_cart')) || [];
if (cart.some(item => !item.product || item.product.id.startsWith('v-cs-') || item.product.id.startsWith('v-dr-') || item.product.id.startsWith('v-dp-') || item.product.id.startsWith('v-gw-') || item.product.id.startsWith('v-an-'))) {
  cart = [];
  localStorage.removeItem('vasevine_cart');
}

let activeCategory = 'All Collections';
let selectedProduct = null;
let selectedSize = 'M';
let selectedQty = 1;

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderCategories();
  renderBestSellers();
  renderShopGrid();
  initSearch();
  initCartDrawer();
  initCheckout();
  updateCartBadge();
});

// Navigation & Mobile Menu
function initNavbar() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');
  const overlay = document.getElementById('overlay');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
    });
  }

  if (closeMobileMenu) {
    closeMobileMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  }
}

// Render Category Banner / Cards (All Collections Focus)
function renderCategories() {
  // Handled cleanly via exact static markup in index.html matching design reference
}

// Render Best Sellers Section (4 Client Products)
function renderBestSellers() {
  const container = document.getElementById('bestSellersGrid');
  if (!container) return;

  const bestSellers = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);

  container.innerHTML = bestSellers.map(product => `
    <div class="product-card" onclick="openProductModal('${product.id}')">
      <div class="product-image-box">
        <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy" />
        ${product.isNewArrival ? '<span class="product-badge">New</span>' : ''}
      </div>
      <div class="product-info">
        <h4 class="product-title">${product.name}</h4>
        <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); quickAddToCart('${product.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          + Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

// Render All Collections Grid
function renderShopGrid() {
  const container = document.getElementById('shopGrid');
  const tabsContainer = document.getElementById('filterTabs');
  if (!container) return;

  // Single tab for All Collections
  if (tabsContainer) {
    tabsContainer.innerHTML = `
      <button class="filter-tab active" onclick="filterByCategory('All Collections')">
        All Collections (${PRODUCTS.length})
      </button>
    `;
  }

  container.innerHTML = PRODUCTS.map(product => `
    <div class="product-card" onclick="openProductModal('${product.id}')">
      <div class="product-image-box">
        <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy" />
        ${product.isNewArrival ? '<span class="product-badge">New</span>' : ''}
      </div>
      <div class="product-info">
        <h4 class="product-title">${product.name}</h4>
        <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); quickAddToCart('${product.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          + Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

function filterByCategory(category) {
  activeCategory = 'All Collections';
  renderShopGrid();
  const shopSection = document.getElementById('shop');
  if (shopSection) {
    shopSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Product Detail Modal
function openProductModal(productId) {
  selectedProduct = PRODUCTS.find(p => p.id === productId);
  if (!selectedProduct) return;

  selectedSize = 'M';
  selectedQty = 1;

  const modal = document.getElementById('productModal');
  const overlay = document.getElementById('overlay');
  const container = document.getElementById('productDetailContent');

  if (!modal || !container) return;

  container.innerHTML = `
    <button class="modal-close-btn" onclick="closeProductModal()">&times;</button>
    <div class="product-detail-grid">
      <div class="detail-gallery">
        <div class="detail-main-img-box">
          <img id="detailMainImg" src="${selectedProduct.images[0]}" alt="${selectedProduct.name}" class="detail-main-img" />
        </div>
        ${selectedProduct.images.length > 1 ? `
          <div class="detail-thumbs">
            ${selectedProduct.images.map((img, idx) => `
              <img src="${img}" class="detail-thumb ${idx === 0 ? 'active' : ''}" onclick="changeDetailImage(this, '${img}')" />
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div class="detail-info">
        <span class="detail-category">${selectedProduct.category}</span>
        <h2 class="detail-title">${selectedProduct.name}</h2>
        <div class="detail-price-row">
          <span class="detail-price">₹${selectedProduct.price.toLocaleString('en-IN')}</span>
          ${selectedProduct.originalPrice ? `<span class="detail-original-price">₹${selectedProduct.originalPrice.toLocaleString('en-IN')}</span>` : ''}
        </div>
        <p class="detail-desc">${selectedProduct.description}</p>
        
        <div class="size-selector">
          <div class="size-selector-label">
            <span>SELECT SIZE</span>
            <span style="color:var(--text-muted); cursor:pointer; text-decoration:underline;" onclick="alert('Standard Indian Ethnic Sizing Chart applies. XS: 32, S: 34, M: 36, L: 38, XL: 40, XXL: 42')">Size Guide</span>
          </div>
          <div class="size-buttons">
            ${selectedProduct.sizes.map(size => `
              <button class="size-btn ${size === selectedSize ? 'active' : ''}" onclick="selectSize(this, '${size}')">${size}</button>
            `).join('')}
          </div>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label style="font-size:0.8rem; font-weight:600; text-transform:uppercase; display:block; margin-bottom:0.5rem;">QUANTITY</label>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateDetailQty(-1)">-</button>
            <span id="detailQty" class="qty-num">${selectedQty}</span>
            <button class="qty-btn" onclick="updateDetailQty(1)">+</button>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn-primary" style="width:100%;" onclick="addToCartFromModal(false)">ADD TO CART</button>
          <button class="btn-outline" style="width:100%;" onclick="addToCartFromModal(true)">ORDER NOW</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  overlay.classList.add('active');
}

function changeDetailImage(thumbEl, imgSrc) {
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
  const mainImg = document.getElementById('detailMainImg');
  if (mainImg) mainImg.src = imgSrc;
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedSize = size;
}

function updateDetailQty(delta) {
  selectedQty = Math.max(1, selectedQty + delta);
  const qtyEl = document.getElementById('detailQty');
  if (qtyEl) qtyEl.textContent = selectedQty;
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  const overlay = document.getElementById('overlay');
  if (modal) modal.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

// Cart Drawer Functionality
function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, 'M', 1);
}

function addToCartFromModal(buyNow = false) {
  if (!selectedProduct) return;
  addToCart(selectedProduct, selectedSize, selectedQty);
  closeProductModal();

  if (buyNow) {
    openCheckoutModal();
  } else {
    openCartDrawer();
  }
}

function addToCart(product, size, qty) {
  const existingIdx = cart.findIndex(item => item.product.id === product.id && item.size === size);
  if (existingIdx > -1) {
    cart[existingIdx].qty += qty;
  } else {
    cart.push({ product, size, qty });
  }

  saveCart();
  showToast(`${product.name} (${size}) added to your bag.`);
}

function saveCart() {
  localStorage.setItem('vasevine_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

function initCartDrawer() {
  const cartIcon = document.getElementById('cartIcon');
  const closeCart = document.getElementById('closeCart');
  const overlay = document.getElementById('overlay');

  if (cartIcon) {
    cartIcon.addEventListener('click', openCartDrawer);
  }

  if (closeCart) {
    closeCart.addEventListener('click', closeCartDrawer);
  }
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('overlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

function renderCartDrawer() {
  const container = document.getElementById('cartDrawerBody');
  const subtotalEl = document.getElementById('cartSubtotal');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:1rem;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <p style="font-family:var(--font-serif); font-size:1.25rem;">Your shopping bag is empty.</p>
        <button class="btn-outline" style="margin-top:1.5rem;" onclick="closeCartDrawer()">CONTINUE SHOPPING</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    return;
  }

  let subtotal = 0;
  container.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.product.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.product.images[0]}" alt="${item.product.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <div>
            <h5 class="cart-item-name">${item.product.name}</h5>
            <span class="cart-item-meta">Size: ${item.size}</span>
          </div>
          <span class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</span>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeCartItem(${idx})">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

function updateCartItemQty(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
  }
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
}

// Current verified delivery info state
let currentDeliveryInfo = null;

// Centralized PIN code & Delivery Calculation Service
async function calculateDeliveryCharge(pincode) {
  const cleanPin = String(pincode || '').trim();
  if (!/^\d{6}$/.test(cleanPin)) {
    return {
      isValid: false,
      error: 'Please enter a valid 6-digit Indian PIN code.'
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);
    const response = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error('Network error');
    const data = await response.json();

    if (data && data[0] && data[0].Status === 'Success' && data[0].PostOffice && data[0].PostOffice.length > 0) {
      const po = data[0].PostOffice[0];
      const state = (po.State || '').trim();
      const district = (po.District || po.Name || '').trim();
      const city = district;

      // Delivery rules:
      // Strictly check if State is "Delhi" -> ₹300
      // Haryana/UP/Rajasthan NCR are NOT Delhi -> ₹500
      // Mumbai -> ₹500
      // Hyderabad -> ₹500
      // All other valid locations -> ₹500
      const isDelhi = state.toLowerCase() === 'delhi';
      const deliveryCharge = isDelhi ? 300 : 500;

      return {
        isValid: true,
        pincode: cleanPin,
        city: city,
        district: district,
        state: state,
        deliveryCharge: deliveryCharge,
        isDelhi: isDelhi
      };
    } else {
      return {
        isValid: false,
        error: 'Please enter a valid 6-digit Indian PIN code.'
      };
    }
  } catch (err) {
    return {
      isValid: false,
      error: 'Unable to verify PIN code. Please try again.'
    };
  }
}

// Checkout Flow Modal
function initCheckout() {
  const checkoutBtn = document.getElementById('proceedCheckoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      closeCartDrawer();
      openCheckoutModal();
    });
  }
}

function openCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  const overlay = document.getElementById('overlay');
  const container = document.getElementById('checkoutContent');

  if (!modal || !container) return;

  if (cart.length === 0) {
    alert('Your cart is empty. Please add products before checking out.');
    return;
  }

  currentDeliveryInfo = null;
  const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  container.innerHTML = `
    <button class="modal-close-btn" onclick="closeCheckoutModal()">&times;</button>
    <div style="padding: 2.5rem;">
      <h2 style="font-family:var(--font-serif); font-size:2rem; margin-bottom:1.5rem; text-align:center;">Checkout</h2>
      
      <div class="order-summary-box">
        <h4 style="font-family:var(--font-serif); font-size:1.15rem; margin-bottom:0.75rem;">Order Summary</h4>
        ${cart.map(i => `
          <div class="summary-row">
            <span>${i.product.name} (${i.size}) x ${i.qty}</span>
            <span>₹${(i.product.price * i.qty).toLocaleString('en-IN')}</span>
          </div>
        `).join('')}
        
        <div style="border-top:1px solid var(--border-light); margin-top:0.75rem; padding-top:0.75rem;">
          <div class="summary-row">
            <span>Subtotal</span>
            <span id="checkoutSubtotal">₹${subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div class="summary-row">
            <span id="checkoutDeliveryLabel">Delivery</span>
            <span id="checkoutDeliveryAmount" style="color:var(--text-muted); font-size:0.85rem;">Enter PIN code</span>
          </div>
          <div class="summary-row" style="border-top:1px solid var(--border-light); margin-top:0.5rem; padding-top:0.5rem; font-size:1.15rem;">
            <strong>Total</strong>
            <strong id="checkoutTotalAmount">₹${subtotal.toLocaleString('en-IN')}</strong>
          </div>
        </div>
      </div>

      <form id="checkoutForm" onsubmit="handlePlaceOrder(event)">
        <div class="checkout-grid">
          <div class="form-row">
            <div class="form-group">
              <label>Full Name *</label>
              <input type="text" id="checkoutName" required placeholder="Priya Sharma" class="form-control" />
            </div>
            <div class="form-group">
              <label>Phone Number *</label>
              <input type="tel" id="checkoutPhone" required placeholder="+91 98765 43210" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label>Email Address *</label>
            <input type="email" id="checkoutEmail" required placeholder="priya@example.com" class="form-control" />
          </div>
          <div class="form-group">
            <label>Shipping Address *</label>
            <input type="text" id="checkoutAddress" required placeholder="102 Elegance Towers, MG Road" class="form-control" />
          </div>
          
          <div class="form-group">
            <label>PIN Code *</label>
            <input type="text" id="checkoutPincode" required placeholder="Enter 6-digit PIN code" maxlength="6" inputmode="numeric" class="form-control" oninput="handlePincodeInput(this)" />
            <div id="pincodeFeedback" class="pincode-feedback"></div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>City *</label>
              <input type="text" id="checkoutCity" required placeholder="City / District" class="form-control" />
            </div>
            <div class="form-group">
              <label>State *</label>
              <input type="text" id="checkoutState" required placeholder="State" class="form-control" />
            </div>
          </div>

          <button type="submit" id="placeOrderBtn" class="btn-primary" style="margin-top:0.5rem; width:100%;">PLACE ORDER</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('active');
  overlay.classList.add('active');
}

let pincodeDebounceTimer = null;

async function handlePincodeInput(inputEl) {
  // Strip letters and special characters
  inputEl.value = inputEl.value.replace(/\D/g, '').slice(0, 6);
  const pin = inputEl.value.trim();

  const feedbackEl = document.getElementById('pincodeFeedback');
  const deliveryLabelEl = document.getElementById('checkoutDeliveryLabel');
  const deliveryAmountEl = document.getElementById('checkoutDeliveryAmount');
  const totalAmountEl = document.getElementById('checkoutTotalAmount');
  const cityInput = document.getElementById('checkoutCity');
  const stateInput = document.getElementById('checkoutState');
  const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  if (pincodeDebounceTimer) {
    clearTimeout(pincodeDebounceTimer);
  }

  // If less than 6 digits, reset location and delivery charge
  if (pin.length < 6) {
    currentDeliveryInfo = null;
    if (feedbackEl) {
      feedbackEl.className = 'pincode-feedback';
      feedbackEl.textContent = pin.length > 0 ? 'Enter complete 6-digit PIN code' : '';
    }
    if (deliveryLabelEl) deliveryLabelEl.textContent = 'Delivery';
    if (deliveryAmountEl) {
      deliveryAmountEl.textContent = 'Enter PIN code';
      deliveryAmountEl.style.color = 'var(--text-muted)';
    }
    if (totalAmountEl) {
      totalAmountEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    }
    return;
  }

  // Exactly 6 digits entered
  if (feedbackEl) {
    feedbackEl.className = 'pincode-feedback loading';
    feedbackEl.textContent = 'Checking delivery availability...';
  }

  pincodeDebounceTimer = setTimeout(async () => {
    const result = await calculateDeliveryCharge(pin);

    // If user changed the PIN while request was in-flight, ignore
    if (inputEl.value.trim() !== pin) return;

    if (result.isValid) {
      currentDeliveryInfo = result;

      // Auto-fill city and state
      if (cityInput && !cityInput.value) cityInput.value = result.city;
      if (stateInput && !stateInput.value) stateInput.value = result.state;

      if (feedbackEl) {
        feedbackEl.className = 'pincode-feedback success';
        feedbackEl.innerHTML = `
          <div>✓ Delivery available to <strong>${result.city}, ${result.state}</strong></div>
          <div style="font-weight:600; color:var(--text-main); margin-top:2px;">Delivery: ₹${result.deliveryCharge}</div>
        `;
      }

      if (deliveryLabelEl) {
        deliveryLabelEl.textContent = result.isDelhi ? 'Delivery (Delhi)' : 'Delivery (Standard)';
      }
      if (deliveryAmountEl) {
        deliveryAmountEl.textContent = `₹${result.deliveryCharge.toLocaleString('en-IN')}`;
        deliveryAmountEl.style.color = 'var(--text-main)';
      }
      if (totalAmountEl) {
        const finalTotal = subtotal + result.deliveryCharge;
        totalAmountEl.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
      }
    } else {
      currentDeliveryInfo = null;
      if (feedbackEl) {
        feedbackEl.className = 'pincode-feedback error';
        feedbackEl.textContent = result.error || 'Please enter a valid 6-digit Indian PIN code.';
      }
      if (deliveryLabelEl) deliveryLabelEl.textContent = 'Delivery';
      if (deliveryAmountEl) {
        deliveryAmountEl.textContent = 'Enter PIN code';
        deliveryAmountEl.style.color = 'var(--text-muted)';
      }
      if (totalAmountEl) {
        totalAmountEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
      }
    }
  }, 250);
}

function handlePlaceOrder(e) {
  e.preventDefault();

  const pincodeInput = document.getElementById('checkoutPincode');
  if (!currentDeliveryInfo || !currentDeliveryInfo.isValid) {
    alert('Please enter a valid 6-digit Indian PIN code to calculate delivery and proceed.');
    if (pincodeInput) {
      pincodeInput.focus();
    }
    return;
  }

  const subtotal = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const deliveryCharge = currentDeliveryInfo.deliveryCharge;
  const finalTotal = subtotal + deliveryCharge;
  const orderNumber = 'VSV-' + Math.floor(100000 + Math.random() * 900000);
  const deliveryLocation = `${currentDeliveryInfo.city}, ${currentDeliveryInfo.state} (${currentDeliveryInfo.pincode})`;

  cart = [];
  saveCart();

  const container = document.getElementById('checkoutContent');
  if (container) {
    container.innerHTML = `
      <div style="padding: 3.5rem 2rem; text-align:center;">
        <div style="width:64px; height:64px; border-radius:50%; background:#111111; color:#FFFFFF; display:flex; align-items:center; justify-content:center; margin:0 auto 1.25rem auto; font-size:2rem;">✓</div>
        <h2 style="font-family:var(--font-serif); font-size:2.25rem; margin-bottom:0.5rem;">Order Placed Successfully</h2>
        <p style="color:var(--text-muted); font-size:1rem; margin-bottom:1.5rem;">Thank you for shopping with VASEVINE.</p>
        
        <div style="background:var(--bg-secondary); padding:1.25rem 2rem; display:inline-block; font-size:0.9rem; margin-bottom:1.75rem; text-align:left; border:1px solid var(--border-light); width:100%; max-width:440px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
            <span style="color:var(--text-muted);">Order Number:</span>
            <strong>${orderNumber}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
            <span style="color:var(--text-muted);">Delivery To:</span>
            <strong>${deliveryLocation}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
            <span style="color:var(--text-muted);">Delivery Charge:</span>
            <strong>₹${deliveryCharge.toLocaleString('en-IN')}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-top:1px solid var(--border-light); padding-top:0.5rem; margin-top:0.5rem; font-size:1.05rem;">
            <strong>Total Paid:</strong>
            <strong>₹${finalTotal.toLocaleString('en-IN')}</strong>
          </div>
        </div>

        <div>
          <button class="btn-primary" onclick="closeCheckoutModal()">RETURN TO HOMEPAGE</button>
        </div>
      </div>
    `;
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  const overlay = document.getElementById('overlay');
  if (modal) modal.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

// Search Drawer / Overlay
function initSearch() {
  const searchBtn = document.getElementById('searchIcon');
  const closeSearch = document.getElementById('closeSearch');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.add('active');
      if (searchInput) searchInput.focus();
    });
  }

  if (closeSearch && searchModal) {
    closeSearch.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const resultsContainer = document.getElementById('searchResults');
      if (!resultsContainer) return;

      if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
      }

      const matches = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );

      resultsContainer.innerHTML = matches.map(p => `
        <div style="display:flex; align-items:center; gap:1rem; padding:0.75rem 0; border-bottom:1px solid var(--border-light); cursor:pointer;" onclick="openProductModal('${p.id}'); document.getElementById('searchModal').classList.remove('active');">
          <img src="${p.images[0]}" style="width:50px; height:65px; object-fit:cover; object-position:top center;" />
          <div>
            <h5 style="font-size:0.9rem;">${p.name}</h5>
            <span style="font-size:0.8rem; color:var(--text-muted);">₹${p.price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      `).join('');
    });
  }
}

// Toast helper
function showToast(msg) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}
