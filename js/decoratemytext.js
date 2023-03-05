let timer; 

const bigger = function(){
    let objectArea = document.getElementById('txtArea'); 
    objectArea.style.fontSize = "4em";
    objectArea.style.color = "green";
    objectArea.style.backgroundColor = "yellow"; 
} 

const changeBigger = function(){
    let textArea = document.getElementById("txtArea");
    let style = window.getComputedStyle(textArea);  
    textArea.style.fontSize = parseInt(style.fontSize) + 2 + "px"; 
}
 
const check =function(){
    let chkBling = document.getElementById("chkBling");
    let objectArea = document.getElementById('txtArea'); 
    if(chkBling.checked){ 
        document.body.style.background="url('images/hundred-dollar-bill.jpeg')";  
        objectArea.style.fontWeight = "bold";
        objectArea.style.color = "green";
        objectArea.style.textDecoration = "underline";
    }
    else{
        objectArea.style.fontWeight = ''; 
        objectArea.style.color = '';
        objectArea.style.textDecoration = ""; 
        document.body.style.background="";
    } 
}  

const convertToPigLatin = function(){ 
    let txtArea = document.getElementById("txtArea");
    const content = txtArea.value.split(' '); 
    let vowelRegex = /[aeiouAEIOU]/;

    let newValue = '';
    for (let i = 0; i < content.length; i++) {
        let word = content[i]; 
        if (word[0].match(vowelRegex)) {
            newValue += word.substring(1) + word[0] + 'ay';
        } else {
            newValue += word + "ay";
        }
        newValue += i === content.length - 1 ? '' : ' ';
    }
    txtArea.value = newValue;
}

const malkovich = function () {
    const txtArea = document.getElementById("txtArea"); 
    const content = txtArea.value.split(' ');
    let newValue = '';
    for (let i = 0; i < content.length; i++) {
        if (content[i].length >= 5) {
            newValue += 'Malkovich';
        } else {
            newValue += content[i];
        }
        newValue += i === content.length - 1 ? '' : ' '; 
    }
    txtArea.value = newValue;
} 

const clearTimer = function(){ 
    clearInterval(timer);
}

const run =function(){
    timer = setInterval(changeBigger, 2000); 
}

window.onload = function() {  
    let btnBigger = document.getElementById("btnBigger"); 
    btnBigger.onclick = bigger;

    let btnRun = document.getElementById("btnRun");
    btnRun.onclick = run; 
    
    let chkBling = document.getElementById("chkBling");
    chkBling.onchange = check;

    let btnClear = document.getElementById("btnClear");
    btnClear.onclick = clearTimer; 

    let btnMalkovitch = document.getElementById("btnMalkovitch");
    btnMalkovitch.onclick = malkovich;

    let btnIgpay = document.getElementById("btnIgpay");
    btnIgpay.onclick = convertToPigLatin;
};

