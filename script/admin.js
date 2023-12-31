let products = JSON.parse(localStorage.getItem('products')) || [
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
        quantity:8,
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
        quantity:4,
    },
    {
        id: 6,
        image: "https://i.postimg.cc/mDLRzLZ5/id-6.jpg",
        name: "Mewtwo Plush Toy 25cm",
        desc: "This Mewtwo is soft and comfortable to touch, while also being durable enough to withstand regular wear and tear. ",
        price: 350,
        category: "Plushies",
        quantity :4,
    },
    {
        id: 7,
        image: "https://i.postimg.cc/WpmWYGng/id-7.jpg",
        name: "Ichigo Bleach figurine 22cm",
        desc: "What better way to fill your shelves than with awesome PVC plastic figurines? This Bleach figurine is sure to make any collection look amazing!",
        price: 700,
        category: "Figurines",
        quantity :5,
    },
    {
        id: 8,
        image: "https://i.postimg.cc/g2bBgM9V/id-8.jpg",
        name: "Pikachu 8cm Habitat ball",
        desc: "Discover what the world really looks like inside a Pokeball. 8cm PVC plastic ornamental Pokemon habitat ball/ Pokemon terrarium.",
        price: 150,
        category: "Habitats",
        quantity :1,
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
        image:"https://i.postimg.cc/L5VXvwP0/id-11.jpg",
        name: "Jojo's bizarre adventures pen figurine 20cm",
        desc: "This Jojo's bizarre adventures figurine is sure to make any collection look amazing! And it doubles as a pen!",
        price: 500,
        category: "Figurines",
        quantity:8,
    },
    {
        id: 12,
        image:"https://i.postimg.cc/VNfZGHh0/id-12.jpg",
        name: "Totoro 8cm Habitat ball",
        desc: "Discover what the world really looks like inside a Pokeball. 8cm PVC plastic ornamental Pokemon habitat ball/ Pokemon terrarium.",
        price: 150,
        category: "Habitats",
        quantity: 8,
    },
    {
        id: 13,
        image:"https://i.postimg.cc/SKQq6d7D/id-13.jpg",
        name: "Stitch 8cm Habitat ball",
        desc: "Get your Ohana together with this Stitch habitat ball. 8cm PVC plastic ornamental habitat ball/ terrarium.",
        price: 150,
        category: "Habitats",
        quantity: 2,
    },
    {
        id: 14,
        image:"https://i.postimg.cc/HLtN2Csy/id-14.jpg",
        name: "1.5m snorlax ",
        desc: "When it comes to cuddling up with a soft and cuddly plush toy, Chaos Kraft's Snorlax Plush Toy is the perfect choice.",
        price: 1700,
        category: "Plushies",
        quantity:4,
    },
    {
        id: 15,
        image:"https://i.postimg.cc/vBqFMxjh/id-15.jpg",
        name: "Appa Plush Toy 50cm",
        desc: "This Appa is soft and comfortable to touch, while also being durable enough to withstand regular wear and tear. ",
        price: 500,
        category: "Plushies",
        quantity:9,
    },
];

function displayProductItems() {
    let tbody = document.getElementById('add-rmv-prod');

    // if (localStorage.getItem("products") === null) {
    //     localStorage.setItem("products", JSON.stringify(products));
    // }else {
    //     products = JSON.parse(localStorage.getItem("products"));
    // }

    // let myProd = document.querySelector(".productInfo");
    products.forEach((data) => {
        let prodElement = document.createElement("tr");
        prodElement.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td><img src="${data.image}" width="100px" height="100px"></td>
        <td>${data.price}</td>
        <td>${data.quantity}</td>
        <td>${data.category}</td>
        <td><a class="btn" onclick="deleteProduct(index)">Delete</a> <a class="btn" onclick="editProducts">Edit</a></td>
        `;
        tbody.appendChild(prodElement);
    })
}
// function saveProducts() {
//     localStorage.setItem('data', productInfo.innerHTML);
// }
displayProductItems()
function addProduct() {

       let id= document.getElementById("Id").value;
       let name= document.getElementById("Name").value;
       let image= document.getElementById("Preview");
       let price= document.getElementById("Price").value;
       let quantity= document.getElementById("Quantity").value;
       let category= document.getElementById("Category").value;
    
    console.log(newProduct);
    products.push(id, name, image, price, quantity, category);
    localStorage.setItem("products", JSON.stringify(products));
    let table = document.querySelector(".productInfo");
    table.innerHTML = "";
    products.forEach((data) => {
        table.innerHTML += `
        <tbody>
        <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td><img src="${data.image}" width="100px" height="100px"</td>
        <td>${data.price}</td>
        <td>${data.quantity}</td>
        <td>${data.category}</td>
        </tr>
        </tbody>`;
    })
}