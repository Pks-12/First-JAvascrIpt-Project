let inputbox = document.querySelector("#inputbox");
let btn3 = document.querySelector("#click");
let btn2= document.querySelector("#click2");
let btn4 = document.querySelector("#click3");

btn3.addEventListener('click',function(){
    inputbox.value=inputbox.value.toUpperCase();
})

btn2.addEventListener('click',function(){
    inputbox.value=inputbox.value.toLowerCase();
})

btn4.addEventListener('click',function(e){
    inputbox.select();
    inputbox.setSelectionRange(0, 99999);
    document.execCommand('copy');
})



