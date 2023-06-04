const add_delivery  = document.querySelector(".add_delivery");
var ans_delivery  = document.querySelector(".ans_delivery");
const order_delivery  = document.querySelector(".order_delivery");

add_delivery.addEventListener("click", function() {
    if (ans_delivery.innerHTML == 'нет') {
        ans_delivery.innerHTML = 'да';
        order_delivery.style.display = "block";
    }
    else{
        ans_delivery.innerHTML = 'нет';
        order_delivery.style.display = "none";
    } 

}); 