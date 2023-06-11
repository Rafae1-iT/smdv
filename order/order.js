const add_delivery  = document.querySelector(".add_delivery");
var ans_delivery  = document.querySelector(".ans_delivery");
const order_delivery  = document.querySelector(".order_delivery");
const button_order_send  = document.querySelector(".button-order_send");

var btn_1  = document.querySelector(".btn_1");
var btn_2  = document.querySelector(".btn_2");
var btn_3  = document.querySelector(".btn_3");

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

// button_order_send.addEventListener("click", function() {
//     alert('Заказ отправлен!');
// }); 

btn_1.addEventListener("click", function() {
    this.style.background = "linear-gradient(180deg, #FCFF5F 0%, #FFF500 100%)";

    btn_2.style.background = "linear-gradient(180deg, #FED852 0%, #FFB32D 79.53%)";

    btn_3.style.background = "linear-gradient(180deg, #FED852 0%, #FFB32D 79.53%)";
}); 
btn_2.addEventListener("click", function() {
    this.style.background = "linear-gradient(180deg, #FCFF5F 0%, #FFF500 100%)";

    btn_1.style.background = "linear-gradient(180deg, #FED852 0%, #FFB32D 79.53%)";

    btn_3.style.background = "linear-gradient(180deg, #FED852 0%, #FFB32D 79.53%)";
}); 
btn_3.addEventListener("click", function() {
    this.style.background = "linear-gradient(180deg, #FCFF5F 0%, #FFF500 100%)";

    btn_1.style.background = "linear-gradient(180deg, #FED852 0%, #FFB32D 79.53%)";

    btn_2.style.background = "linear-gradient(180deg, #FED852 0%, #FFB32D 79.53%)";
}); 