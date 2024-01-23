const cart = ["shoes", "jeans", "lower", "shirt"];

// createOrder
// proceedToPayment
// showOrderSummary
// updateWallet
let orderSummary = document.getElementById("orderSummary");
let balance = document.getElementById("balance");
const promise = createOrder(cart);

promise.then(function (orderId) {
    console.log(orderId);
})
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (obj) {
    console.log(obj);
    orderSummary.textContent = `Order Id: ${obj.orderId}, Name: ${obj.name}, Payment Status: ${obj.paymentStatus}, Ordered on: ${obj.date}`;
    return obj.updatedBalance;
})
.then(function (balance) {
    console.log(balance);
})
.catch(function (err) {
    console.log(err.message);
});

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject){
        // Calling Api's to create Order
        if(!validateCart(cart)){
            const err = new Error("Cart is invalid");
            setTimeout(function () {
                reject(err);
            },  1000); 
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(function () {
                resolve(orderId);
            },  1000); 
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    setTimeout(function () {
        console.log("Payment Successfull");
    },  3000); 
    return {
        "orderId" : "12345",
        "name" : "Athrav",
        "paymentStatus": "Successful",
        "date": "23-01-24",
        "updatedBalance": 900,
    }
}

function validateCart(cart) {
    return true;
}