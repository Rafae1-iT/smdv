const drop = document.querySelector(".dropdown_btn");
const menu = document.querySelector(".dropdown_menu");

const drop_a = document.querySelector(".dropdown_a");
const prc = document.querySelector(".prc");
const dlv = document.querySelector(".dlv");
const rnt = document.querySelector(".rnt");
const im = document.querySelector(".im");
const mp = document.querySelector(".mp");
const ftr = document.querySelector(".ftr");

drop.addEventListener("click", function() {
    if(menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}); 

drop_a.addEventListener("click", function() {
    menu.style.display = "none";
}); 
prc.addEventListener("click", function() {
    menu.style.display = "none";
}); 
dlv.addEventListener("click", function() {
    menu.style.display = "none";
}); 
rnt.addEventListener("click", function() {
    menu.style.display = "none";
}); 
im.addEventListener("click", function() {
    menu.style.display = "none";
}); 
mp.addEventListener("click", function() {
    menu.style.display = "none";
}); 
ftr.addEventListener("click", function() {
    menu.style.display = "none";
}); 