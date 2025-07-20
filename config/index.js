// create varibles for array Data placement
const productSubTitle1 = document.getElementById("productSubTitle");
const productTitle2 = document.getElementById("productTitle");
const  productPrice1 = document.getElementById("productPrice");
const productQuantity1 = document.getElementById("productQuality");
const productDetailsSpace = document.getElementById("productDetailsSpace");
const proImage = document.getElementById("proImage");
let productsCart = '';
product.forEach(products => {
    productDetailsSpace += `
    <h6 id="productSubTItle1">${products.productSubTitle}</h6>
    <h2 id="productTitle">${products.productTitle}</h2>
    <h2 id="productPrice">$${products.productPrice}</h2>
    <input id="productQuality" type="number" value="${products.productNum}">
    <button class="normal addToCart" data-product-name="${products.productTitle}">Add To Cart</button>
    <h4 id="productInfo">Product Details</h4>
    <span>
      ${products.productInfo}
    </span>
`
});

productsCart.innerHTML = productDetailsSpace;

product.forEach(productImage => {
  proImage.innerHTML =
  `<div class="small-pro">
    <img src="${productImage.productName}" alt="" width="100%" id="MainImg" srcset="">
    </div>`
})





console.log("product:");