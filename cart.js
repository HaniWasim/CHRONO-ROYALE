
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
    let parentDivId = button.closest('.innerMw01').id; //s1

    // Store the id in a variable (or use it as needed)
    // console.log("Parent Div ID: ", parentDivId);

    let divElement = document.getElementById(parentDivId);

    //name of watch
   // Get the second child using the children property (index starts at 0)
// let secondChild = divElement.children[2]; // index 1 means second child

// Get the text content of the second child
// let name = secondChild.textContent;
// console.log(name);

const h1Element = document.querySelector(`#${parentDivId} h1`);
    
    // Get the full text content and then remove the span text
    const spanText = h1Element.querySelector('span').textContent;
    const name = h1Element.textContent.replace(spanText, '').trim();

    console.log(name);

//price of watch
   // Navigate to the parent div of the button
   const innerFlxDiv = button.parentElement;

   // Find the span element within the innerFlxDiv
   const priceSpan = innerFlxDiv.querySelector('.rs span');

   // Get the price value from the span
   const priceValue = priceSpan.textContent;

   // Store it in a variable
   const price = priceValue;

   // Log or use the price variable as needed
   console.log(price);


 // Retrieve the existing array from localStorage, or initialize a new one
 let mainArray = JSON.parse(localStorage.getItem("mainArray")) || [];

//pushing it to cart
mainArray.push({name: name, price: price});


// Save the array to localStorage
localStorage.setItem("mainArray", JSON.stringify(mainArray));

// Redirect to the new page (newPage.html)
window.location.href = "addtocart.html";

}

function dummy(button){
    // Navigate to the parent element with ID 's1'
    const parentId = button.closest('.innerMw01').id;
    
    // Store the ID in a variable
    console.log("The ID of the parent element is:", parentId);

    const h1Element = document.querySelector(`#${parentId} h1`);
    
    // Get the full text content and then remove the span text
    const spanText = h1Element.querySelector('span').textContent;
    const h1Text = h1Element.textContent.replace(spanText, '').trim();
    
    console.log("H1 Text:", h1Text);
    
}
