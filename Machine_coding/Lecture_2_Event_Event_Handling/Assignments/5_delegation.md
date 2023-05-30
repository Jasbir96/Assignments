

You're creating an online shopping website with a list of products. 
Implement Add to cart button by only adding a single event listener to achieve it

Consider the following HTML structure:

```html
<div id="productList">
    <div class="product">
        <h3>Product 1</h3>
        <p>Price: $10</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
    <div class="product">
        <h3>Product 2</h3>
        <p>Price: $20</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
    <div class="product">
        <h3>Product 3</h3>
        <p>Price: $30</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</div>
```


## Solution

```javascript 
function setupEventListeners() {
const productList = document.getElementById('productList');

productList.addEventListener('click', function(event) {
if (event.target.classList.contains('add-to-cart')) {
const product = event.target.parentElement;
const productName = product.querySelector('h3').textContent;
const productPrice = product.querySelector('p').textContent;

console.log(`Product "${productName}" added to the shopping cart. Price: ${productPrice}`);
}
});
}

window.addEventListener('load', setupEventListeners);
```