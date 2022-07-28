const hamburger = document.querySelector(".hamburger");
const NavMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    NavMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n=>n.addEventListener("click",()=>{
   hamburger.classList.remove("active");
   NavMenu.classList.remove("active");
}))


// to show the tooltip as we toggle over the button cart
document.querySelector('.cart-btn').addEventListener('click',()=>{
    document.querySelector('.cart-tooltip').classList.toggle('tooltip-display');
 
});
 


// writing cart items inside the tooltip
// document.getElementById('tooltip-content').innerHTML += '<h1>cart kdjfkjkldjkljksdjfkldjfklasjdk dfkjasdhfjkasd jksdfkasd jkhsd fajksdh sdkjfashd fjkasdh fashdlkf lsh</h1>';



// to show the number of items in the header of the page
function productsInCart(cart) {
    let count = 0;
    for (let i in cart) {
        count += cart[i][0];
    }
    return count;
}

if (localStorage.getItem('cart') == null) {
    var cart = {};
}
else {
    
    cart = JSON.parse(localStorage.getItem('cart'));
    let count = productsInCart(cart);
    // document.getElementById('itemCount').innerHTML = Object.keys(cart).length;
    document.getElementById('itemCount').innerHTML = count;
}





