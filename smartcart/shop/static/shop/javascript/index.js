
// ****** SHOWING NUMBER OF ITEMS IN CART (JS FOR BASIC HTML FILE) *******


// WRITTEN IN THE 'basic.js' SO THAT IT SHOWS IN EVERY PAGE OF THE SITE
// function to calculate count of total items selected in each of the products
function productsInCart(cart) {
    let count = 0;
    for (let i in cart) {
        count += cart[i][0];
    }
    return count;
}


// updating the items in tooltip so that they appear after refreshing also
updateTooltip(cart);


// creating a cart library if not created otherwise showing the number of items in the cart
if (localStorage.getItem('cart') == null) {
    var cart = {};
}
else {
    cart = JSON.parse(localStorage.getItem('cart'));
    // updateCart(cart);
    let count = productsInCart(cart);
    // document.getElementById('itemCount').innerHTML = Object.keys(cart).length;
    document.getElementById('itemCount').innerHTML = count;
}

// console.log(cart);




// adding the items in the cart as we click on the corresponding 'add to cart' button of any particular product
let cartList = document.querySelectorAll('.cart');
// updateCart(cartList[0].id.toString());
cartList.forEach(n => n.addEventListener('click', function () {
    // console.log("working")

    var idstr = this.id.toString();
    // console.log(idstr);

    if (cart[idstr] != undefined) {
        cart[idstr][0] += 1;

    }
    else {
        qty = 1;
        item_name = document.getElementById("Name"+idstr).innerHTML;
        cart[idstr] = [qty,item_name];
    }
    // let countitem=0;
    // for(let item in cart)
    // {
    //     countitem+=cart[item];
    // }  // to get count of each product selected

    updateCart(idstr);
    // updateTooltip(cart);
    let count = productsInCart(cart);
    document.getElementById('itemCount').innerHTML = count;
    localStorage.setItem('cart', JSON.stringify(cart));
    // console.log(cart);

}));


// function to update the count of particular item (will show plus ans minus buttons)
function updateCart(idstr) {
    // console.log(idstr);
    document.getElementById('div' + idstr).innerHTML = "<button id='minus" + idstr + "' class='cart minus'> - </button> <span id='val" + idstr + "'>" + cart[idstr][0] + "</span> <button id='plus" + idstr + "' class='cart plus'> + </button>";


    // updaing toottip as this function is called
    updateTooltip(cart);


    // if '+' or '-' button is clicked then change the cart value and display the value of that particular product
    document.getElementById('minus' + idstr).addEventListener('click', function () {
        // console.log('minus clicked');
        a = this.id.slice(5,);
        // console.log(a);
        cart[a][0] = cart[a][0] - 1;

        // if(cart[a]<0){
        //     cart[a]=0;
        // }
        // OR
        cart[a][0] = Math.max(0, cart[a][0]);
        document.getElementById('val' + a).innerHTML = cart[a][0];

         // updating the localStorage
        let count = productsInCart(cart);
        document.getElementById('itemCount').innerHTML = count;
        localStorage.setItem('cart', JSON.stringify(cart));

        // updaing toottip as minus button is clicked
        updateTooltip(cart);
    });
    document.getElementById('plus' + idstr).addEventListener('click', function () {
        // console.log('plus clicked');
        a = this.id.slice(4,);
        // console.log(a);
        cart[a][0] = cart[a][0] + 1;
        document.getElementById('val' + a).innerHTML = cart[a][0];
        
        // updating the localStorage
        let count = productsInCart(cart);
        document.getElementById('itemCount').innerHTML = count;
        localStorage.setItem('cart', JSON.stringify(cart));

        // updaing toottip as plus button is clicked
        updateTooltip(cart);
    });


}








//   WRITTEN IN THE 'basic.js' SO THAT CAN BE USED IN EVERY PAGE
// // writing cart items inside the tooltip
// document.getElementById('tooltip-content').innerHTML += '<h1>cart kdjfkjkldjkljksdjfkldjfklasjdk dfkjasdhfjkasd jksdfkasd jkhsd fajksdh sdkjfashd fjkasdh fashdlkf lsh</h1>';

function updateTooltip(cart){
    let tooltipStr = "";
    tooltipStr += "<h4>Items in Your Shopping List</h4> <br>"
    let i=1;
    for (let item in cart){
        tooltipStr += "<b>"+i+".</b>";
        tooltipStr += (document.getElementById("Name"+item).innerHTML + ", Qty: " + cart[item][0] +"<br>");
        i++;
    }
    
    tooltipStr += "<a href='/shop/checkout/' class='check-out' id='checkout'>Checkout</a> <button id='clearTooltip' class='clear-Tooltip' onClick='clearToolTip()'>Clear Cart</button>";
    document.getElementById('tooltip-content').innerHTML = tooltipStr;
}

// function to clear the cart, for this we will create a button on the tooltip dynamically as
function clearToolTip(){
    // console.log("Clear Cart Running")
    cart = JSON.parse(localStorage.getItem('cart'));
    for(let item in cart){
        document.getElementById('div'+item).innerHTML = '<button id="+item+" class="cart">Add To Cart</button>'
         
    }
    localStorage.clear();
    // making count of items in cart as zero
    document.getElementById('itemCount').innerHTML = 0;
    cart = {}
    

    // WHY ON DELETING THE CART VALUES THE 'add to cart' BUTTON IS NOT WORKING
    // updating Toolkit as all items have been deleted from the cart and local storage
    updateTooltip(cart)
}





// adding minus and plus button in each 'add to cart' button so that we can increase the quantity of particular selected item


//******* CODE FOR COROUSEL ITEMS (IN OUR index.html file) **********

var index = 0;
show_img1(index);
show_img2(index);
// show_img3(index);
// show_img4(index);
// show_img5(index);
// show_img6(index);
// show_img7(index);
// show_img8(index);
// show_img9(index);
// show_img10(index);
// show_img11(index);

function show_img1(i) {
    index += i;

    var cards = document.getElementsByClassName("card1");
    var dots = document.getElementsByClassName("dot1");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}

function show_img2(i) {
    index += i;

    var cards = document.getElementsByClassName("card2");
    var dots = document.getElementsByClassName("dot2");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}

function show_img3(i) {
    index += i;

    var cards = document.getElementsByClassName("card3");
    var dots = document.getElementsByClassName("dot3");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}


function show_img4(i) {
    index += i;

    var cards = document.getElementsByClassName("card4");
    var dots = document.getElementsByClassName("dot4");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}


function show_img5(i) {
    index += i;

    var cards = document.getElementsByClassName("card5");
    var dots = document.getElementsByClassName("dot5");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}


function show_img6(i) {
    index += i;

    var cards = document.getElementsByClassName("card6");
    var dots = document.getElementsByClassName("dot6");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}


function show_img7(i) {
    index += i;

    var cards = document.getElementsByClassName("card7");
    var dots = document.getElementsByClassName("dot7");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}


function show_img8(i) {
    index += i;

    var cards = document.getElementsByClassName("card8");
    var dots = document.getElementsByClassName("dot8");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}


function show_img9(i) {
    index += i;

    var cards = document.getElementsByClassName("card9");
    var dots = document.getElementsByClassName("dot9");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}


function show_img10(i) {
    index += i;

    var cards = document.getElementsByClassName("card10");
    var dots = document.getElementsByClassName("dot10");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}


function show_img11(i) {
    index += i;

    var cards = document.getElementsByClassName("card11");
    var dots = document.getElementsByClassName("dot11");
    for (i = 0; i < cards.length; i++)
        cards[i].style.display = "none";

    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if (index > cards.length - 1)
        index = 0;

    if (index < 0)
        index = cards.length - 1;

    cards[index].style.display = "flex";
    dots[index].className += " active";

}
