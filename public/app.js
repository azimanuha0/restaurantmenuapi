// app.js
const btnAll = document.getElementById('btnAll');
const btnVeg = document.getElementById('btnVeg');
const btnCategories = document.getElementById('btnCategories');
const output = document.getElementById('output');

const showError = (msg) => {
  output.innerHTML = `<p style="color:crimson">${msg}</p>`;
};

function formatPrice(n) {
  return '₹' + n;
}

function renderMenu(items) {
  if (!items.length) {
    output.innerHTML = '<p class="hint">No items found.</p>';
    return;
  }
  const html = ['<div class="menu-grid">'];
  items.forEach(it => {
    html.push(`
      <div class="card">
        <h3>${it.name} <span class="price">${formatPrice(it.price)}</span></h3>
        <div class="meta">${it.category} ${it.isVegetarian ? '<span class="badge">Veg</span>' : ''}</div>
        <p>${it.description}</p>
      </div>
    `);
  });
  html.push('</div>');
  output.innerHTML = html.join('');
}

function renderCategories(data) {
  if (!data.categories || !data.categories.length) {
    output.innerHTML = '<p class="hint">No categories available.</p>';
    return;
  }
  const html = ['<ul class="categories-list">'];
  data.categories.forEach(c => {
    html.push(`<li><strong>${c.name}</strong> — ${c.itemCount} item(s)</li>`);
  });
  html.push('</ul>');
  output.innerHTML = html.join('');
}

// Fetch helpers with error handling
async function fetchJson(path) {
  try {
    const r = await fetch(path);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } catch (err) {
    throw new Error('Failed to fetch: ' + err.message);
  }
}

// Event listeners
btnAll.addEventListener('click', async () => {
  output.innerHTML = '<p class="hint">Loading full menu...</p>';
  try {
    const data = await fetchJson('/menu');
    renderMenu(data);
  } catch (err) {
    showError(err.message);
  }
});

btnVeg.addEventListener('click', async () => {
  output.innerHTML = '<p class="hint">Loading vegetarian options...</p>';
  try {
    const data = await fetchJson('/menu/vegetarian');
    renderMenu(data);
  } catch (err) {
    showError(err.message);
  }
});

btnCategories.addEventListener('click', async () => {
  output.innerHTML = '<p class="hint">Loading categories...</p>';
  try {
    const data = await fetchJson('/menu/categories');
    renderCategories(data);
  } catch (err) {
    showError(err.message);
  }
});
