const product = [
     {
        id: "2wds-euri-sdjj-43dms",
        productImage:     "assets/images/products/productA.jpg",
        // Products information
        productSubTitle: "Home / Hair cream",
        productTitle: "woman's Hair cream",
        productPrice: 4.0,
        count: 3.0,
        productInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta eligendi? Est, pariatur nisi ducimus tempore voluptas, qui error modi debitis, repudiandae repellendus facere nesciunt illo illum exercitationem corrupti incidunt?"
    },
     {
        id: "2juy-#iws-iuia-dkac",
        productImage:     "assets/images/products/productB.jpg",
        // Products information
        productSubTitle: "Home / Cream",
        productTitle: "Unisex Body cream",
        productPrice: 5.0,
        count: 3.5,
        productInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta eligendi? Est, pariatur nisi ducimus tempore voluptas, qui error modi debitis, repudiandae repellendus facere nesciunt illo illum exercitationem corrupti incidunt?"
    },
       {
        id: "sdk3-oliw-88ks-wei2",
        productImage:     "assets/images/products/productC.jpg",
        // Products information
        productSubTitle: "Home / vite",
        productTitle: "men's Body cream",
        productPrice: 4.5,
        count: 4.5,
        productInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta eligendi? Est, pariatur nisi ducimus tempore voluptas, qui error modi debitis, repudiandae repellendus facere nesciunt illo illum exercitationem corrupti incidunt?"
    },
       {
        id: "43oi-dskj-230o-jui3",
        productImage:     "assets/images/products/productD.jpg",
        // Products information
        productSubTitle: "Home / Cream",
        productTitle: "woman's Body cream",
        productPrice: 3.0,
        count: 5.0,
        productInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta eligendi? Est, pariatur nisi ducimus tempore voluptas, qui error modi debitis, repudiandae repellendus facere nesciunt illo illum exercitationem corrupti incidunt?"
    },
       {
        id: "fbi3-fdio-345t-klea",
        productImage:     "assets/images/products/productA.jpg",
        // Products information
        productSubTitle: "Home / Cream",
        productTitle: "woman's Body cream",
        productPrice: 3.5,
        count: 2.5,
        productInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta eligendi? Est, pariatur nisi ducimus tempore voluptas, qui error modi debitis, repudiandae repellendus facere nesciunt illo illum exercitationem corrupti incidunt?"
    },
       {
        id: "fker-44kw-wers-ertj",
        productImage:     "assets/images/products/productB.jpg",
        // Products information
        productSubTitle: "Home / Cream",
        productTitle: "Girl's Body cream",
        productPrice: 4.0,
        count: 2.0,
        productInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta eligendi? Est, pariatur nisi ducimus tempore voluptas, qui error modi debitis, repudiandae repellendus facere nesciunt illo illum exercitationem corrupti incidunt?"
    },
       {
        id: "ekre-12oi-434l-35kk",
        productImage:     "assets/images/products/productC.jpg",
        // Products information
        productSubTitle: "Home / Baby Cream",
        productTitle: "man's Body cream",
        productPrice: 2.5,
         count: 1.0,
        productInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta eligendi? Est, pariatur nisi ducimus tempore voluptas, qui error modi debitis, repudiandae repellendus facere nesciunt illo illum exercitationem corrupti incidunt?"
    },
       {
        id: "erfv-4knf=udhr-rtwr",
        productImage:     "assets/images/products/productD.jpg",
        // Products information
        productSubTitle: "Home / Cream",
        productTitle: "Baby's Body cream",
        productPrice: 10,
       count: 5.0,
        productInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta eligendi? Est, pariatur nisi ducimus tempore voluptas, qui error modi debitis, repudiandae repellendus facere nesciunt illo illum exercitationem corrupti incidunt?"
    }
]

const proContainer = document.getElementById("proContainer");
const cartBtn = document.getElementById("cartBtn");
let productHtml = '';

product.forEach((products) => {
    productHtml += `
        <div class="pro">
            <!--image-->  <img src="${products.productImage}" alt="">
            <div class="des">
              <span>${products.productSubTitle}</span>
              <h5>${products.productTitle}</h5>
              
               <div class="rateQuantity">

            <div class="stars">
                  <img src="assets/images/ratings/rating-${products.count * 10}.png" alt="product rate">
              </div>
            <div>
            <select name="product Quantity" id="productQuantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
            </div>
              <h4>₦${products.productPrice * 1000}</h4>
            </div>
            <a href="#" ><i data-product-id="${products.id} "class="fal fa-shopping-cart cart addToCart"></i></a>
          </div>
    `;
    console.log();
});

proContainer.innerHTML = productHtml;

/* document.querySelectorAll(".addToCart")
.forEach(button => {
  button.addEventListener('click', () => {
    console.log("clicked");
    const productId = button.dataset.
    productId;

    let matchingItems;

    cart.forEach(item => {
        if (productId === item.productId) {
            matchingItems = item;
        }
    });

    if (matchingItems){
        matchingItems.quantity += 1;
    }
    else{
cart.push({
        productId: productId,
        quantity: 1
    });
    }
    let cartQuantity = 0;
    cart.forEach(item => {
        cartQuantity += item.quantity;
    });

    document.querySelector(".jsCartQuantity")
    .innerHTML = cartQuantity
    console.log(cartQuantity);
    console.log(cart);
  });
});*/

document.querySelectorAll(".addToCart").forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId.trim();
    let matchingItem;

    cart.forEach(item => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart quantity display
    let cartQuantity = 0;
    cart.forEach(item => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".jsCartQuantity").innerHTML = cartQuantity;
    console.log("Cart updated:", cart);
  });
});

