
// let btn = document.querySelector("#button1")
// btn.addEventListener("click",function () {
//     // console.log("btn");
//     console.log("firstDivId",firstDivId);
// })



// btn.addEventListener("click",function () {
//     let divElement = document.getElementById("s-1");

// // Get the second child using the children property (index starts at 0)
// let secondChild = divElement.children[2]; // index 1 means second child

// // Get the text content of the second child
// let text = secondChild.textContent;

// // Display it in the console
// console.log(text);

// let price = document.querySelector("#price1")
// let text2 = price.textContent;
// console.log(text2,"text2");

// let mainArray = [];
// mainArray.push({name: text, price: text2});


// console.log(mainArray);



// // Save the array to localStorage
// localStorage.setItem("mainArray", JSON.stringify(mainArray));

// // Redirect to the new page (newPage.html)
// window.location.href = "addtocart.html";
// })



//correct code

function addToCart(button) {
    // let mainArray = [];
    // Get the parent div of the clicked button
    let parentDivId = button.parentElement.id;

    // Store the id in a variable (or use it as needed)
    // console.log("Parent Div ID: ", parentDivId);

    let divElement = document.getElementById(parentDivId);

    //name of watch
   // Get the second child using the children property (index starts at 0)
let secondChild = divElement.children[2]; // index 1 means second child

// Get the text content of the second child
let name = secondChild.textContent;
console.log(name);

//price of watch
// Access the <h5> element with the class "RS1" (it is the sixth child)
let h5Element = divElement.children[5];

// Get the <span> inside the <h5> element
let priceSpan = h5Element.children[0];

// Get the text content of the <span>
let price = priceSpan.textContent;

// Display the price value in the console
console.log("Price:", price);


 // Retrieve the existing array from localStorage, or initialize a new one
 let mainArray = JSON.parse(localStorage.getItem("mainArray")) || [];

//pushing it to cart
mainArray.push({name: name, price: price});


// Save the array to localStorage
localStorage.setItem("mainArray", JSON.stringify(mainArray));

// Redirect to the new page (newPage.html)
window.location.href = "addtocart.html";

}
