

function display() {
    adminProducts.products.forEach((product) => {
        const webProduct = document.getElementById("add-rmv-prod")
        const tableProduct = document.createElement("tr")
        tableProduct.innerHTML  =`
        <td>${Product.Image}</td>
<td>${product.name}</td>name
<td>${product.quantity}</td>desc
<td>R ${product.Price}</td>price
<td>
  <button href="#editProductModal" class="edit p-0" data-toggle="modal" onclick="edit()">
  <i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
  <button href="#deleteProducteModal" class="delete p-0" data-toggle="modal" onclick="delete()">
  <i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
</td>
        `; 
        webProduct.appendChild(tableProduct);      
    });
}































// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write soomething");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span =document.createElement('span');
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }

//     //clear input field
//     inputBox.value = '';
//     savData();
// }

// listContainer.addEventListener('click', (e) => {
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle('checked');
//         savData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         savData();
//     }
// }, false);

// //to save functions to local storage
// function savData(){
//     localStorage.setItem('data', listContainer.innerHTML);
// }

// function shwTask(){
//     listContainer.innerHTML = localStorage.getItem('data');
// }
// shwTask();