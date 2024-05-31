let inputbox = document.querySelector("#inputbox");
let btn3 = document.querySelector("#click");
let btn2= document.querySelector("#click2");
let btn4 = document.querySelector("#click3");
let btn5 = document.querySelector("#click4");
let displayArea = document.getElementById("displayArea");
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

btn5.addEventListener('click', function() {
    event.preventDefault();
    const textToAdd = inputbox.value; // Get the value of the input box
    const paragraph = document.createElement('p');// Create a new paragraph element
    paragraph.textContent = textToAdd; // Set the text content of the paragraph
    displayArea.appendChild(paragraph); // Append the paragraph to the display area
    inputbox.value = '';// Clear the input box
});



