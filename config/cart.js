/* const cartSection = document.getElementById("cartSection");
let productsCart = '';
product.forEach(products => {
  productsCart =
  ` <div class="ct-head">
            <h4>Your Products</h4>
            <p>Our Priority Is Your Satisfaction</p>
        </div>
        <div class="ourCart">
            <div class="cartRow row1">
                <div class="productImageHead">
                   <h4>Image</h4>
                </div>

                <div class="productNameHead">
                  <h4>Product Name</h4>
                </div>

                <div class="productPriceHead">
                    <h4>Price</h4>
                </div>

                <div class="productQuantityHead">
                    <h4>Quantity</h4>
                </div>
                <div class="subtotalHead">
                     <h4>Subtotal</h4>
                </div>
                <div class="removeCart">
                    <h4>Remove</h4>
                </div>
            </div>

            <div class="allCart">

            <div class="cartRow ">
                <div class="productImage">
                    <img src="assets/images/products/productA.jpg" alt="cart product - growNatura">
                </div>
                <div class="productName">
                    <h6>${products.productTitle}</h6>
                </div>
                <div class="productPrice">
                    <h2>${products.productPrice}</h2>
                </div>
                <div class="productQuality">
                    <input type="text" value="1">
                </div>
                <div class="subtotal">
                     <h2>$16</h2>
                </div>
                <div class="removeCart">
                    <p>*</p>
                </div>
            </div>
        `
});

cartSection.innerHTML = productsCart;
// Second code

cart = [
    {
        id: "2wds-euri-sdjj-43dms",
        quantity: 2
    },
     {
        id: "2juy-#iws-iuia-dkac",
        quantity: 1
    }
];

const allCart = document.getElementById("allCart");

cart.forEach(cartItem => {
    const productId = cartItem.productId;

    let matchingProducts;

   product.forEach((products) => {
    if (products.id === productId) {
        matchingProducts = products;
    }
   });
   console.log(matchingProducts);
    `
      <div class="cartRow ">
                <div class="productImage">
                    <img src="assets/images/products/productA.jpg" alt="cart product - growNatura">
                </div>
                <div class="productName">
                    <h6></h6>
                </div>
                <div class="productPrice">
                    <h2>${}</h2>
                </div>
                <div class="productQuality">
                    <input type="text" value="1">
                </div>
                <div class="subtotal">
                     <h2>$16</h2>
                </div>
                <div class="removeCart">
                    <p>*</p>
                </div>
            </div>
    `
});
*/






const payBtn = document.getElementById("payBtn");
const proceedBtn = document.getElementById("proceedBtn");
const viewPayment = document.getElementById("viewPayment");



function viewPaymentsect() {
    proceedBtn.onclick = () => {
        viewPayment.style.display = "block";
        console.log("button clicked")
    }
   if (cardNumber.value !== 0){
     payBtn.onclick = () => {
        payBtn.innerHTML = `In Process...`
        }
        console.log("button clicked");
    }
   else{
         payBtn.onclick = () => {
        payBtn.innerHTML = `Pay Now`
        };
        console.log("Btn not clicked");
    }
}
viewPaymentsect();


