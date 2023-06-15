let products = [
  {
    id: 1,
    image: "https://i.postimg.cc/PfDkpyLs/id-1.jpg",
    name: "Nezuko Demon slayer figurine 15cm",
    desc: "What better way to fill your shelves than with awesome PVC plastic figurines?This Nezuki Demon Slayer figurine is sure to make any collection look amazing!",
    price: 300,
    category: "Figurines",
    quantity: 7,
  },
  {
    id: 2,
    image: "https://i.postimg.cc/d1HDhBDT/id-2.jpg",
    name: "Bulbasaur 8cm Habitat ball",
    desc: "Discover what the world really looks like inside a Pokeball. 8cm PVC plastic ornamental Pokemon habitat ball/ Pokemon terrarium.",
    price: 150,
    category: "Habitats",
    quantity: 8,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/bvy7y6wx/id-3.jpg",
    name: "Ninetales Plush Toy 23cm",
    desc: "This Ninetails is soft and comfortable to touch, while also being durable enough to withstand regular wear and tear. ",
    price: 350,
    category: "Plushies",
    quantity: 10,
  },
  {
    id: 4,
    image: "https://i.postimg.cc/D01WvfxY/id-4.jpg",
    name: "Zenetsu demon slayer 19cm",
    desc: "What better way to fill your shelves than with awesome PVC plastic figurines? This Zenetsu Demon Slayer figurine is sure to make any collection look amazing!",
    price: 400,
    category: "Figurines",
    quantity: 3,
  },
  {
    id: 5,
    image: "https://i.postimg.cc/gkR5p9mX/id-5.jpg",
    name: "Rowlet 8cm Habitat ball",
    desc: "Discover what the world really looks like inside a Pokeball. 8cm PVC plastic ornamental Pokemon habitat ball/ Pokemon terrarium.",
    price: 150,
    category: "Habitats",
    quantity: 4,
  },
  {
    id: 6,
    image: "https://i.postimg.cc/mDLRzLZ5/id-6.jpg",
    name: "Mewtwo Plush Toy 25cm",
    desc: "This Mewtwo is soft and comfortable to touch, while also being durable enough to withstand regular wear and tear. ",
    price: 350,
    category: "Plushies",
    quantity: 4,
  },
  {
    id: 7,
    image: "https://i.postimg.cc/WpmWYGng/id-7.jpg",
    name: "Ichigo Bleach figurine 22cm",
    desc: "What better way to fill your shelves than with awesome PVC plastic figurines? This Bleach figurine is sure to make any collection look amazing!",
    price: 700,
    category: "Figurines",
    quantity: 5,
  },
  {
    id: 8,
    image: "https://i.postimg.cc/g2bBgM9V/id-8.jpg",
    name: "Pikachu 8cm Habitat ball",
    desc: "Discover what the world really looks like inside a Pokeball. 8cm PVC plastic ornamental Pokemon habitat ball/ Pokemon terrarium.",
    price: 150,
    category: "Habitats",
    quantity: 1,
  },
  {
    id: 9,
    image: "https://i.postimg.cc/PJHxH2yn/id-9.jpg",
    name: "Gengar Plush Toy 23cm",
    desc: "This Gengar is soft and comfortable to touch, while also being durable enough to withstand regular wear and tear.",
    price: 350,
    category: "Plushies",
    quantity: 7,
  },
  {
    id: 10,
    image: "https://i.postimg.cc/gJ629fP0/id-10.jpg",
    name: "Inosuke Demon slayer figurine 15cm",
    desc: "What better way to fill your shelves than with awesome PVC plastic figurines? This Inosuke Demon Slayer figurine is sure to make any collection look amazing!",
    price: 300,
    category: "Figurines",
    quantity: 8,
  },
  {
    id: 11,
    image: "https://i.postimg.cc/L5VXvwP0/id-11.jpg",
    name: "Jojo's bizarre adventures pen figurine 20cm",
    desc: "This Jojo's bizarre adventures figurine is sure to make any collection look amazing! And it doubles as a pen!",
    price: 500,
    category: "Figurines",
    quantity: 8,
  },
  {
    id: 12,
    image: "https://i.postimg.cc/VNfZGHh0/id-12.jpg",
    name: "Totoro 8cm Habitat ball",
    desc: "Discover what the world really looks like inside a Pokeball. 8cm PVC plastic ornamental Pokemon habitat ball/ Pokemon terrarium.",
    price: 150,
    category: "Habitats",
    quantity: 8,
  },
  {
    id: 13,
    image: "https://i.postimg.cc/SKQq6d7D/id-13.jpg",
    name: "Stitch 8cm Habitat ball",
    desc: "Get your Ohana together with this Stitch habitat ball. 8cm PVC plastic ornamental habitat ball/ terrarium.",
    price: 150,
    category: "Habitats",
    quantity: 2,
  },
  {
    id: 14,
    image: "https://i.postimg.cc/HLtN2Csy/id-14.jpg",
    name: "1.5m snorlax ",
    desc: "When it comes to cuddling up with a soft and cuddly plush toy, Chaos Kraft's Snorlax Plush Toy is the perfect choice.",
    price: 1700,
    category: "Plushies",
    quantity: 4,
  },
  {
    id: 15,
    image: "https://i.postimg.cc/vBqFMxjh/id-15.jpg",
    name: "Appa Plush Toy 50cm",
    desc: "This Appa is soft and comfortable to touch, while also being durable enough to withstand regular wear and tear. ",
    price: 500,
    category: "Plushies",
    quantity: 9,
  },
];

function productsDisplay() {
  //Figurines
  products.forEach((product) => {
    if (product.category == "Figurines") {
      let ourFigurines = document.getElementById("figurines");
      let elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
            <div class="col">
      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="90%%" height="350" src="${product.image}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <div class="card-body">
          <h5 class="card-title fs-5">${product.name}</h5>
          <p class="card-text fs-6">R ${product.price}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button id="addToCart" onclick="addToCart(${product.id})" class="p-0">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
            `;
      ourFigurines.appendChild(elementProduct);
    }
  });

  // Plushies
  products.forEach((product) => {
    if (product.category == "Plushies") {
      let ourPlushies = document.getElementById("plushies");
      let elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
            <div class="col">
      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="90%%" height="350" src="${product.image}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <div class="card-body">
          <h5 class="card-title fs-5">${product.name}</h5>
          <p class="card-text fs-6">R ${product.price}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button id="addToCart" onclick="addToCart(${product.id})" class="p-0">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
            `;
      ourPlushies.appendChild(elementProduct);
    }
  });

  // Habitates
  products.forEach((product) => {
    if (product.category == "Habitats") {
      let ourHabitates = document.getElementById("habitats");
      let elementProduct = document.createElement("div");
      elementProduct.innerHTML = `
            <div class="col">
      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="90%%" height="350" src="${product.image}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        <div class="card-body">
          <h5 class="card-title fs-5">${product.name}</h5>
          <p class="card-text fs-6">R ${product.price}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button id="addToCart" onclick="addToCart(${product.id})" class="p-0">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
            `;
      ourHabitates.appendChild(elementProduct);
    }
  });
}
productsDisplay();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(productId) {
  let product = products.find((product) => product.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}
function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  deletedProduct.quantity++;
  updateCart();
}
updateCart()
function updateCart() {
  let cartContainer = document.getElementById("cart-body");
//   localStorage.setItem("products", JSON.stringify(cart));
  localStorage.setItem("cart", JSON.stringify(cart));
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    let cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
        <span>${product.name}</span>
        <span>${product.price}</span>
        <input type="number" placeholder="1" min="1" width="50px" height="40px">
        <p>Total ${product.price}</p>
        <button onclick="deleteFromCart(${index})" class="delbtn">Delete</button>`;
    cartContainer.appendChild(cartProduct);
  });
  calculateTotal();
}
function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((item) => {
    total += eval(item.price);
  });
  totalElement.textContent = `${total}`;
}
function clearCheckoutCart() {
  let modalFooter = document.querySelector(".modal-footer");
  modalFooter.innerHTML = `
    <h4>Thank You! Your Order Has Been Processed!</h4>`;
  cart = [];
  updateCart();
}
