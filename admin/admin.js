// Global state
let currentOrders = [];
let currentProducts = [];
let uploadedImages = [];
let searchDebounceTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  verifyAdminSession();
});

// 1. Session Verification
async function verifyAdminSession() {
  try {
    const res = await fetch('/api/admin/me');
    const data = await res.json();
    if (!res.ok || !data.authenticated) {
      window.location.href = '/admin/login';
      return;
    }
    const userGreeting = document.getElementById('adminUserGreeting');
    if (userGreeting && data.user) {
      userGreeting.textContent = `${data.user.username}`;
    }
    // Load initial dashboard & check DB
    checkDatabaseStatus();
    fetchAdminStats();
    fetchRecentOrders();
  } catch (err) {
    console.error('Session check failed:', err);
    window.location.href = '/admin/login';
  }
}

function toggleDbModal() {
  const modal = document.getElementById('dbSetupModal');
  if (modal) {
    modal.classList.toggle('active');
  }
}

async function checkDatabaseStatus() {
  const badge = document.getElementById('dbStatusBadge');
  const banner = document.getElementById('dbWarningBanner');
  const warningText = document.getElementById('dbWarningText');
  try {
    const res = await fetch('/api/db-status');
    const data = await res.json();
    if (data.connected) {
      if (badge) {
        badge.textContent = '● DB: Connected';
        badge.style.background = '#ECFDF5';
        badge.style.color = '#065F46';
        badge.style.borderColor = '#A7F3D0';
      }
      if (banner) banner.style.display = 'none';
    } else {
      if (badge) {
        badge.textContent = '● DB: Offline (80 Items Loaded)';
        badge.style.background = '#FFFBEB';
        badge.style.color = '#B45309';
        badge.style.borderColor = '#FDE68A';
      }
      if (banner) {
        banner.style.display = 'block';
        if (warningText) {
          warningText.textContent = `${data.message || 'Authentication failed'}. Serving local catalog of 80 garments.`;
        }
      }
    }
  } catch (e) {
    if (badge) badge.textContent = '● DB: Offline';
  }
}

async function handleLogout() {
  try {
    await fetch('/api/admin/logout', { method: 'POST' });
  } catch (e) {}
  window.location.href = '/admin/login';
}

// 2. Tab Navigation
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');

  const selectedBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => 
    b.getAttribute('onclick').includes(tabName)
  );
  if (selectedBtn) selectedBtn.classList.add('active');

  const selectedTab = document.getElementById(`tab-${tabName}`);
  if (selectedTab) selectedTab.style.display = 'block';

  if (tabName === 'dashboard') {
    fetchAdminStats();
    fetchRecentOrders();
  } else if (tabName === 'orders') {
    fetchAdminOrders();
  } else if (tabName === 'products') {
    fetchAdminProducts();
  } else if (tabName === 'inventory') {
    fetchAdminInventory();
  }
}

// 3. Stats & Overview
async function fetchAdminStats() {
  try {
    const res = await fetch('/api/admin/stats');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.success) return;

    const s = data.stats;
    document.getElementById('statTotalSales').textContent = `â‚¹${(s.totalSales || 0).toLocaleString('en-IN')}`;
    document.getElementById('statTotalOrders').textContent = s.totalOrders || 0;
    document.getElementById('statPendingOrders').textContent = s.pendingOrders || 0;
    document.getElementById('statShippedOrders').textContent = s.shippedOrders || 0;
    document.getElementById('statDeliveredOrders').textContent = s.deliveredOrders || 0;
    document.getElementById('statTotalProducts').textContent = s.totalProducts || 0;
    document.getElementById('statLowStock').textContent = s.lowStockProducts || 0;
  } catch (err) {
    console.warn('Failed to load stats:', err);
  }
}

async function fetchRecentOrders() {
  try {
    const res = await fetch('/api/admin/orders');
    if (!res.ok) return;
    const data = await res.json();
    const orders = (data.orders || []).slice(0, 5);
    const tbody = document.getElementById('recentOrdersTableBody');
    if (!tbody) return;

    if (orders.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:2rem; color:var(--text-muted);">No orders found.</td></tr>';
      return;
    }

    tbody.innerHTML = orders.map(o => `
      <tr>
        <td><strong>#${o.orderId}</strong></td>
        <td>${escapeHtml(o.customer?.name || '')}<br><span style="font-size:0.78rem; color:var(--text-muted);">${o.customer?.mobile || ''}</span></td>
        <td>${formatDate(o.createdAt)}</td>
        <td><strong>â‚¹${(o.total || 0).toLocaleString('en-IN')}</strong></td>
        <td><span class="status-pill status-${slugify(o.orderStatus)}">${o.orderStatus}</span></td>
        <td><button class="btn-outline" onclick="openOrderModal('${o.orderId}')">View</button></td>
      </tr>
    `).join('');
  } catch (err) {
    console.warn('Failed to load recent orders:', err);
  }
}

// 4. Orders Management
function debounceOrdersSearch() {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    fetchAdminOrders();
  }, 350);
}

async function fetchAdminOrders() {
  const searchInput = document.getElementById('orderSearchInput');
  const statusFilter = document.getElementById('orderStatusFilter');
  const tbody = document.getElementById('adminOrdersTableBody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:2rem; color:var(--text-muted);">Loading orders...</td></tr>';

  const search = searchInput ? encodeURIComponent(searchInput.value.trim()) : '';
  const status = statusFilter ? statusFilter.value : 'all';

  try {
    const res = await fetch(`/api/admin/orders?search=${search}&status=${status}`);
    const data = await res.json();
    currentOrders = data.orders || [];

    if (currentOrders.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:2.5rem; color:var(--text-muted);">No orders matching your criteria.</td></tr>';
      return;
    }

    tbody.innerHTML = currentOrders.map(o => {
      const itemsCount = (o.items || []).reduce((sum, i) => sum + (Number(i.quantity) || 1), 0);
      return `
        <tr>
          <td><strong>#${o.orderId}</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">${formatDate(o.createdAt)}</span></td>
          <td><strong>${escapeHtml(o.customer?.name || '')}</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">+91 ${o.customer?.mobile || ''}</span></td>
          <td>${escapeHtml(o.shippingAddress?.city || '')}, ${escapeHtml(o.shippingAddress?.state || '')}<br><span style="font-size:0.78rem; color:var(--text-muted);">PIN: ${o.shippingAddress?.pincode || ''}</span></td>
          <td>${itemsCount} item${itemsCount > 1 ? 's' : ''}</td>
          <td><strong>â‚¹${(o.total || 0).toLocaleString('en-IN')}</strong></td>
          <td><span style="font-size:0.78rem; text-transform:uppercase; font-weight:600; color:#555;">${o.paymentStatus || 'Pending'}</span></td>
          <td><span class="status-pill status-${slugify(o.orderStatus)}">${o.orderStatus}</span></td>
          <td>
            <button class="btn-primary" style="padding:0.4rem 0.8rem; font-size:0.75rem;" onclick="openOrderModal('${o.orderId}')">
              MANAGE
            </button>
          </td>
        </tr>
      `;
    }).join('');
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:2rem; color:#B3261E;">Failed to load orders.</td></tr>';
  }
}

// 5. Order Modal & Status Updater
function openOrderModal(orderId) {
  const order = currentOrders.find(o => o.orderId === orderId);
  const container = document.getElementById('orderModalContent');
  const modal = document.getElementById('orderDetailModal');
  if (!container || !modal || !order) return;

  const history = order.statusHistory || [];

  container.innerHTML = `
    <div style="border-bottom:1px solid var(--border); padding-bottom:1.25rem; margin-bottom:1.5rem;">
      <span style="font-size:0.75rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--text-muted);">ORDER DETAILS</span>
      <h2 style="font-family:var(--font-serif); font-size:2rem; margin-top:0.25rem;">Order #${order.orderId}</h2>
      <div style="font-size:0.85rem; color:var(--text-muted);">Placed on ${formatDate(order.createdAt, true)}</div>
    </div>

    <!-- Status Updater Box -->
    <div style="background:var(--bg-subtle); padding:1.25rem; border:1px solid var(--border); margin-bottom:1.5rem;">
      <label class="form-label" style="margin-bottom:0.5rem;">Change Order Status</label>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <select id="modalStatusSelect" class="form-control" style="flex:1; min-width:200px;">
          ${['Order Placed', 'Order Confirmed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'].map(st => `
            <option value="${st}" ${order.orderStatus === st ? 'selected' : ''}>${st}</option>
          `).join('')}
        </select>
        <button class="btn-primary" onclick="submitOrderStatusUpdate('${order.orderId}')">UPDATE STATUS</button>
      </div>
    </div>

    <!-- Customer & Shipping -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; margin-bottom:1.5rem; font-size:0.88rem;">
      <div style="background:#fff; border:1px solid var(--border); padding:1rem;">
        <strong style="display:block; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); margin-bottom:0.5rem;">Customer</strong>
        <div>${escapeHtml(order.customer?.name || '')}</div>
        <div style="color:var(--text-muted); margin-top:2px;">+91 ${order.customer?.mobile || ''}</div>
        ${order.customer?.email ? `<div style="color:var(--text-muted);">${escapeHtml(order.customer.email)}</div>` : ''}
      </div>

      <div style="background:#fff; border:1px solid var(--border); padding:1rem;">
        <strong style="display:block; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); margin-bottom:0.5rem;">Shipping Address</strong>
        <div>${escapeHtml(order.shippingAddress?.address || '')}</div>
        <div>${escapeHtml(order.shippingAddress?.city || '')}, ${escapeHtml(order.shippingAddress?.state || '')} â€” ${order.shippingAddress?.pincode || ''}</div>
      </div>
    </div>

    <!-- Items Snapshot -->
    <div style="margin-bottom:1.5rem;">
      <h4 style="font-family:var(--font-serif); font-size:1.15rem; margin-bottom:0.75rem;">Items in Order</h4>
      <div style="border:1px solid var(--border); background:#fff;">
        ${(order.items || []).map(item => `
          <div style="display:flex; align-items:center; gap:1rem; padding:0.85rem 1rem; border-bottom:1px solid var(--border);">
            <img src="${item.productImage}" style="width:50px; height:65px; object-fit:cover; border:1px solid var(--border);" />
            <div style="flex:1;">
              <div style="font-weight:600; font-size:0.9rem;">${escapeHtml(item.productName)}</div>
              <div style="font-size:0.78rem; color:var(--text-muted);">Size: ${item.size} &bull; Qty: ${item.quantity}</div>
            </div>
            <div style="font-weight:600; font-size:0.95rem;">â‚¹${(item.unitPrice * item.quantity).toLocaleString('en-IN')}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Totals -->
    <div style="background:var(--bg-subtle); padding:1rem 1.25rem; border:1px solid var(--border); margin-bottom:1.5rem; font-size:0.9rem;">
      <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
        <span>Subtotal:</span><span>â‚¹${(order.subtotal || 0).toLocaleString('en-IN')}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
        <span>Delivery Charge:</span><span>â‚¹${(order.deliveryCharge || 0).toLocaleString('en-IN')}</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-weight:700; font-size:1.05rem; border-top:1px solid var(--border); padding-top:0.5rem; margin-top:0.5rem;">
        <span>Total Paid:</span><span>â‚¹${(order.total || 0).toLocaleString('en-IN')}</span>
      </div>
    </div>

    <!-- Status History Timeline -->
    <div>
      <h4 style="font-family:var(--font-serif); font-size:1.15rem; margin-bottom:0.75rem;">Status History</h4>
      <div style="border-left:2px solid var(--border-dark); padding-left:1rem; margin-left:0.5rem;">
        ${history.map(h => `
          <div style="position:relative; margin-bottom:1rem;">
            <div style="position:absolute; left:-1.35rem; top:4px; width:9px; height:9px; border-radius:50%; background:var(--border-dark);"></div>
            <div style="font-weight:600; font-size:0.88rem;">${h.status}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${formatDate(h.timestamp, true)} &bull; ${h.note || ''}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeOrderModal() {
  const modal = document.getElementById('orderDetailModal');
  if (modal) modal.classList.remove('active');
}

async function submitOrderStatusUpdate(orderId) {
  const select = document.getElementById('modalStatusSelect');
  if (!select) return;
  const newStatus = select.value;

  try {
    const res = await fetch(`/api/admin/orders/${orderId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast(`Order #${orderId} status updated to ${newStatus}`);
      fetchAdminOrders();
      fetchAdminStats();
      closeOrderModal();
    } else {
      alert(data.error || 'Failed to update order status');
    }
  } catch (err) {
    alert('Network error while updating status');
  }
}

// 6. Products Management
async function fetchAdminProducts() {
  const catFilter = document.getElementById('productCategoryFilter');
  const statFilter = document.getElementById('productStatusFilter');
  const tbody = document.getElementById('adminProductsTableBody');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:2rem; color:var(--text-muted);">Loading products...</td></tr>';

  const category = catFilter ? catFilter.value : 'All';
  const status = statFilter ? statFilter.value : 'All';

  try {
    const res = await fetch(`/api/admin/products?category=${encodeURIComponent(category)}&status=${encodeURIComponent(status)}`);
    const data = await res.json();
    currentProducts = data.products || [];

    if (currentProducts.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:2rem; color:var(--text-muted);">No products found.</td></tr>';
      return;
    }

    tbody.innerHTML = currentProducts.map(p => `
      <tr>
        <td>
          <img src="${(p.images && p.images[0]) || 'assets/products/client_prod_001.jpg'}" style="width:48px; height:64px; object-fit:cover; border:1px solid var(--border);" />
        </td>
        <td>
          <strong>${escapeHtml(p.name)}</strong>
          <div style="font-size:0.75rem; color:var(--text-muted);">ID: ${p.id}</div>
        </td>
        <td>${p.category}</td>
        <td><strong>â‚¹${(p.price || 0).toLocaleString('en-IN')}</strong></td>
        <td>${p.stock || 0}</td>
        <td><span class="status-pill status-${p.status || 'active'}">${p.status || 'active'}</span></td>
        <td>
          <button class="btn-outline" style="padding:0.35rem 0.75rem; font-size:0.75rem; margin-right:6px;" onclick="openEditProductModal('${p.id}')">Edit</button>
          ${p.status !== 'archived' ? `
            <button class="btn-outline" style="padding:0.35rem 0.75rem; font-size:0.75rem; color:#B91C1C;" onclick="archiveProduct('${p.id}')">Archive</button>
          ` : ''}
        </td>
      </tr>
    `).join('');
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:2rem; color:#B3261E;">Failed to load products.</td></tr>';
  }
}

// 7. Inventory Tab
async function fetchAdminInventory() {
  const tbody = document.getElementById('adminInventoryTableBody');
  if (!tbody) return;
  tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:2rem; color:var(--text-muted);">Loading inventory...</td></tr>';

  try {
    const res = await fetch('/api/admin/products');
    const data = await res.json();
    const products = data.products || [];

    if (products.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:2rem; color:var(--text-muted);">No products found.</td></tr>';
      return;
    }

    tbody.innerHTML = products.map(p => {
      const stock = p.stock || 0;
      let badge = '<span class="stock-in">In Stock</span>';
      if (stock === 0) badge = '<span class="stock-out">Out of Stock</span>';
      else if (stock <= 5) badge = '<span class="stock-low">Low Stock</span>';

      return `
        <tr>
          <td><img src="${(p.images && p.images[0]) || 'assets/products/client_prod_001.jpg'}" style="width:40px; height:52px; object-fit:cover;" /></td>
          <td><strong>${escapeHtml(p.name)}</strong></td>
          <td>${p.category}</td>
          <td><strong>${stock}</strong> units</td>
          <td>${badge}</td>
          <td>
            <div style="display:flex; gap:6px; align-items:center;">
              <input type="number" id="quickStock-${p.id}" value="${stock}" min="0" style="width:70px; padding:0.35rem; border:1px solid var(--border);" />
              <button class="btn-outline" style="padding:0.35rem 0.65rem; font-size:0.75rem;" onclick="quickUpdateStock('${p.id}')">Save</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:2rem; color:#B3261E;">Failed to load inventory.</td></tr>';
  }
}

async function quickUpdateStock(productId) {
  const input = document.getElementById(`quickStock-${productId}`);
  if (!input) return;
  const newStock = Number(input.value);

  try {
    const res = await fetch(`/api/admin/products/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stock: newStock })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast('Stock quantity updated');
      fetchAdminInventory();
      fetchAdminStats();
    } else {
      alert(data.error || 'Failed to update stock');
    }
  } catch (err) {
    alert('Network error');
  }
}

// 8. Add & Edit Product Modal
function openAddProductModal() {
  document.getElementById('productModalTitle').textContent = 'Add New Product';
  document.getElementById('editProductId').value = '';
  document.getElementById('productForm').reset();
  uploadedImages = [];
  renderImagePreviews();
  document.getElementById('productFormModal').classList.add('active');
}

function openEditProductModal(productId) {
  const p = currentProducts.find(item => item.id === productId);
  if (!p) return;

  document.getElementById('productModalTitle').textContent = 'Edit Product';
  document.getElementById('editProductId').value = p.id;
  document.getElementById('prodName').value = p.name || '';
  document.getElementById('prodCategory').value = p.category || 'Dresses';
  document.getElementById('prodPrice').value = p.price || '';
  document.getElementById('prodOriginalPrice').value = p.originalPrice || '';
  document.getElementById('prodStock').value = p.stock || 15;
  document.getElementById('prodFabric').value = p.fabric || '';
  document.getElementById('prodDescription').value = p.description || '';
  document.getElementById('prodStatus').value = p.status || 'active';
  document.getElementById('prodBestseller').checked = Boolean(p.isBestseller);
  document.getElementById('prodNewArrival').checked = Boolean(p.isNewArrival);

  uploadedImages = [...(p.images || [])];
  renderImagePreviews();
  document.getElementById('productFormModal').classList.add('active');
}

function closeProductModal() {
  document.getElementById('productFormModal').classList.remove('active');
}

function renderImagePreviews() {
  const container = document.getElementById('imagePreviewsContainer');
  if (!container) return;

  container.innerHTML = uploadedImages.map((img, idx) => `
    <div class="thumb-preview-box">
      <img src="${img}" />
      <button type="button" class="thumb-remove-btn" onclick="removeImage(${idx})">&times;</button>
    </div>
  `).join('');
}

function removeImage(idx) {
  uploadedImages.splice(idx, 1);
  renderImagePreviews();
}

function addManualImageUrl() {
  const input = document.getElementById('prodManualImageUrl');
  const url = input ? input.value.trim() : '';
  if (!url) return;
  uploadedImages.push(url);
  input.value = '';
  renderImagePreviews();
}

async function handleImageFileSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async () => {
    const base64Data = reader.result;
    showToast('Uploading image to Cloudinary...');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Data })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        uploadedImages.push(data.url);
        renderImagePreviews();
        showToast('Image uploaded successfully!');
      } else {
        alert(data.error || 'Cloudinary upload failed.');
      }
    } catch (err) {
      alert('Upload failed: ' + err.message);
    }
  };
  reader.readAsDataURL(file);
}

async function handleSaveProduct(e) {
  e.preventDefault();
  const editId = document.getElementById('editProductId').value;
  const isEditing = Boolean(editId);

  const payload = {
    name: document.getElementById('prodName').value.trim(),
    category: document.getElementById('prodCategory').value,
    price: Number(document.getElementById('prodPrice').value),
    originalPrice: Number(document.getElementById('prodOriginalPrice').value) || undefined,
    stock: Number(document.getElementById('prodStock').value),
    fabric: document.getElementById('prodFabric').value.trim(),
    description: document.getElementById('prodDescription').value.trim(),
    images: uploadedImages.length > 0 ? uploadedImages : ['assets/products/client_prod_001.jpg'],
    status: document.getElementById('prodStatus').value,
    isBestseller: document.getElementById('prodBestseller').checked,
    isNewArrival: document.getElementById('prodNewArrival').checked
  };

  const btn = document.getElementById('saveProductBtn');
  btn.disabled = true;
  btn.textContent = 'SAVING...';

  try {
    const endpoint = isEditing ? `/api/admin/products/${editId}` : '/api/admin/products';
    const method = isEditing ? 'PUT' : 'POST';

    const res = await fetch(endpoint, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (res.ok && data.success) {
      showToast(isEditing ? 'Product updated successfully' : 'Product created successfully');
      closeProductModal();
      fetchAdminProducts();
      fetchAdminStats();
    } else {
      alert(data.error || 'Failed to save product');
    }
  } catch (err) {
    alert('Network error while saving product');
  } finally {
    btn.disabled = false;
    btn.textContent = 'SAVE PRODUCT';
  }
}

async function archiveProduct(productId) {
  if (!confirm(`Are you sure you want to archive product ${productId}? It will be hidden from the storefront.`)) return;

  try {
    const res = await fetch(`/api/admin/products/${productId}`, { method: 'DELETE' });
    const data = await res.json();
    if (res.ok && data.success) {
      showToast('Product archived');
      fetchAdminProducts();
      fetchAdminStats();
    } else {
      alert(data.error || 'Failed to archive');
    }
  } catch (err) {
    alert('Network error');
  }
}

// Helpers
function slugify(text) {
  return String(text || '').toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

function formatDate(dateStr, withTime = false) {
  if (!dateStr) return 'â€”';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  if (withTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }
  return d.toLocaleDateString('en-IN', options);
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showToast(msg) {
  const toast = document.getElementById('adminToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3200);
}