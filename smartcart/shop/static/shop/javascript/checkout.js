

// creating a cart library if not created otherwise showing the number of items in the cart
if (localStorage.getItem('cart') == null) {
    var cart = {};
}
else {
    cart = JSON.parse(localStorage.getItem('cart'));
}


let itemsInCheckout = document.getElementById('itemsInCheckout');
if (Object.keys(cart).length === 0) {
    itemsInCheckout.innerHTML = "There are no items to Checkout, Please Add some Items"
}
else {
    for (let item in cart) {
        itemsInCheckout.innerHTML += `<li><p>${cart[item][1]}</p> <span>${cart[item][0]}</span></li>`

    }
}

$(document).ready(function () {
    $('#items_json').val(JSON.stringify(cart));

    // console.log('chikskldj');
    const $submit = $('.submit_button').attr('id');
    // console.log($submit);
    
    let id = $('.id').attr('id');
    
     
    if($submit == 'submitted')
    {
        alert(`Your Order has been placed successfully. You can track your order with order id ${id}`);
        localStorage.clear();
        document.location = '/shop/';
    }


    // // OR WE CAN USE 'submit' event listener for forms using jQuery as and our code will be sort
    // $('form').on('submit', function () {
    //     alert("Your order placed Successfully");
    //     localStorage.clear();
    //     document.location = "/shop/";
    // })


})


