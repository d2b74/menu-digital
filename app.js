

const container = document.getElementById("catalogoContainer");

/* Render */
Object.values(catalogo).forEach(categoria => {
  const section = document.createElement("div");
  section.className = "mb-4";

  section.innerHTML = `<h5 class="mb-2">${categoria.titulo}</h5>`;

  const carousel = document.createElement("div");
  carousel.className = "category-carousel";

  categoria.productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${producto.img}">
      <div class="info">
        <div class="name">${producto.nombre}</div>
        <div class="price">${producto.precio}</div>
      </div>
    `;

    card.dataset.nombre = producto.nombre;
    card.dataset.precio = producto.precio;
    card.dataset.img = producto.img;
    card.dataset.desc = producto.desc || "";

    card.onclick = () => openModal(card);

    carousel.appendChild(card);
  });

  section.appendChild(carousel);
  container.appendChild(section);
});

/* Modal */
function openModal(card) {
  document.getElementById("modalImg").src = card.dataset.img;
  document.getElementById("modalTitle").textContent = card.dataset.nombre;
  document.getElementById("modalPrice").textContent = card.dataset.precio;

  const desc = document.getElementById("modalDesc");
  if (card.dataset.desc) {
    desc.textContent = card.dataset.desc;
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }

  document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}
