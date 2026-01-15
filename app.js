const catalogo = {
  pizzas: {
    titulo: "🍕 Pizzas",
    productos: [
      { nombre: "Muzarella", precio: "$4500", img: "img/pizzas/muzza.jpeg", desc: "Clásica con mozzarella y tomate" },
      { nombre: "Especial", precio: "$5200", img: "img/pizzas/especial.jpeg", desc: "Mozzarella, jamón y morrones" },
      { nombre: "Napolitana", precio: "$5000", img: "img/pizzas/napo.jpeg", desc: "Mozzarella, tomate y ajo" },
      { nombre: "Muzarella", precio: "$4500", img: "img/pizzas/muzza.jpeg", desc: "Clásica con mozzarella y tomate" },
      { nombre: "Especial", precio: "$5200", img: "img/pizzas/especial.jpeg", desc: "Mozzarella, jamón y morrones" },
      { nombre: "Napolitana", precio: "$5000", img: "img/pizzas/napo.jpeg", desc: "Mozzarella, tomate y ajo" }
    ]
  },
  bebidas: {
    titulo: "🥤 Bebidas",
    productos: [
      { nombre: "Coca Cola", precio: "$1200", img: "img/bebidas/coca.jpeg" },
      { nombre: "Sprite", precio: "$1100", img: "img/bebidas/sprite.jpeg" },
      { nombre: "Agua", precio: "$900", img: "img/bebidas/agua.jpeg" },
      { nombre: "Coca Cola", precio: "$1200", img: "img/bebidas/coca.jpeg" },
      { nombre: "Sprite", precio: "$1100", img: "img/bebidas/sprite.jpeg" },
      { nombre: "Agua", precio: "$900", img: "img/bebidas/agua.jpeg" }
    ]
  },
  postres: {
    titulo: "🍰 Postres",
    productos: [
      { nombre: "Helado", precio: "$1200", img: "img/postres/helado.jpeg" },
      { nombre: "Flan", precio: "$1100", img: "img/postres/flan.jpeg" },
      { nombre: "Helado", precio: "$1200", img: "img/postres/helado.jpeg" },
      { nombre: "Flan", precio: "$1100", img: "img/postres/flan.jpeg" },
      { nombre: "Helado", precio: "$1200", img: "img/postres/helado.jpeg" },
      { nombre: "Flan", precio: "$1100", img: "img/postres/flan.jpeg" }
    ]
  }
};

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
      <h6>${producto.nombre}</h6>
      <p>${producto.precio}</p>
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
new Swiper(`.swiper-${key}`, {
  spaceBetween: 12,
  grabCursor: true,
  pagination: {
    el: `.swiper-${key} .swiper-pagination`,
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  }
});