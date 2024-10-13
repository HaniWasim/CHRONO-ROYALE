// // Array of verified watch image URLs
// const watchImages = [
//     "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdhdGNofGVufDB8fHx8MTY5NzE2MzY4Mw&ixlib=rb-1.2.1&q=80&w=400",
//     "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHdhdGNofGVufDB8fHx8MTY5NzE2MzY4Mw&ixlib=rb-1.2.1&q=80&w=400",
//     "https://images.unsplash.com/photo-1533042990605-c5c88e5fb379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdhdGNofGVufDB8fHx8MTY5NzE2MzY4Mw&ixlib=rb-1.2.1&q=80&w=400",
//    " https://images.unsplash.com/photo-1670177257750-9b47927f68eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1670177257750-9b47927f68eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
// ];

// // Fetching blog posts from the Sling Academy API
// const fetchBlogs = async () => {
//     try {
//         // Fetching blog data from the API
//         const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts');
//         const data = await response.json();

//         if (data.success) {
//             // Getting the blog list container
//             const blogContainer = document.getElementById('blogContainer');

//             // Clearing any existing content
//             blogContainer.innerHTML = '';

//             // Iterating over the blogs and displaying them
//             data.blogs.forEach((blog, index) => {
//                 // Creating a blog card
//                 const blogCard = document.createElement('div');
//                 blogCard.classList.add('blog-card');

//                 // Adding the blog title
//                 const title = document.createElement('h2');
//                 title.textContent = blog.title;
//                 blogCard.appendChild(title);

//                 // Adding the blog image
//                 const image = document.createElement('img');
//                 image.src = watchImages[index % watchImages.length]; // Use the URL from the array
//                 image.alt = blog.title;
//                 blogCard.appendChild(image);

//                 // Adding the blog content
//                 const content = document.createElement('p');
//                 content.textContent = blog.content_text.substring(0, 100) + '...'; // Truncate for preview
//                 blogCard.appendChild(content);

//                 // Adding the blog card to the container
//                 blogContainer.appendChild(blogCard);
//             });
//         }
//     } catch (error) {
//         console.error('Error fetching blog posts:', error);
//     }
// };

// // Call the fetch function when the window loads
// window.onload = fetchBlogs;






console.log("Class 28 (Class 11 of JS)");

window.onload = () => {
  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      createUi(products);
      // console.log(response, "response");
      // console.log(products, "products");
    } catch (error) {
      console.log("error", error);
    }
    //   finally {
    //     console.log("finally block calling");
    //   }
  };
  getProducts();

  const createUi = (products) => {
    console.log(products, "products");

    const productsCards = products.map((product, index) => {
      console.log(product, "product");

      return `<div class="col-12 col-sm-6 col-md-4 col-lg-3"><div class="card" style="width: 100%;">
<img src="${product.image}" class="card-img-top" alt="${product.title}">
<div class="card-body">
<h5 class="card-title">${product.title}</h5>
<p class="card-text">${product.description}</p>
<span class="badge text-bg-${index % 2 === 0 ? "success" : "secondary"}">${
        product.category
      }</span>
</div>
</div>
</div>`;
    });

    const productsListInnerHTML = productsCards.join("");
    const productsContainer = document.querySelector(".container");
    productsContainer.innerHTML = `<div class="row gy-3">${productsListInnerHTML}</div>`;
    //   console.losg(productsContainer, "productsContainer");
    //   console.log(productsCards, "productsCards");
    //   console.log(productsListInnerHTML, "productsListInnerHTML");

    //   console.log("products", products);
  };
};
getProducts.document.querySelector()

//   window.onload = function () {};

