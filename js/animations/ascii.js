const start =function(){  
    inProcess = true; 
    setDisable();
    timer = setInterval(action, default_speed);   
}

function setDisable(){
    if(inProcess===true){
        btnstop.disabled = false;
        select_animation.disabled =true;
        select_font.disabled = true;

        btnstart.disabled = true;
    }else{
        select_animation.disabled =false;
        select_font.disabled= false;
        btnstop.disabled =true;
        btnstart.disabled =false; 
    }
}

const stop = function(){ 
    inProcess = false;
    clearInterval(timer); 
    setDisable();
}

function action(){ 
    if(counter>=animations.length){
        counter = 0;
    }
    area.value = animations[counter++];
}
 
const selectAnimation = function(){
    animations = ANIMATIONS[select_animation.value].split('=====');    
}

const selectFont = function(){ 
    area.style.fontSize = select_font.value;
}

const changeSpeed = function(){ 
    if(turbo_speed.checked){
        default_speed = 50;
    }
    else{
        default_speed = 250;
    } 
    if(inProcess){
        clearInterval(timer); 
        start(); 
    }
}



let timer = null; 
let default_speed = 250; 
let animations = ''; 
let counter =0;

let area = null
let inProcess = false;
let btnstart = null;
let btnstop= null;
let select_animation= null;
let select_font = null;
let turbo_speed = null;

window.onload = function(){ 
    area = document.getElementById('txtarea'); 
    btnstart = document.getElementById('btnstart')
    btnstart.onclick = start; 

    btnstop = document.getElementById('btnstop'); 
    btnstop.onclick = stop;

    select_animation = document.getElementById('select_animation');
    select_animation.onchange = selectAnimation;
 
    select_font = document.getElementById('select_font');
    select_font.onchange = selectFont;

    turbo_speed = document.getElementById('speed');
    turbo_speed.onchange = changeSpeed;

    setDisable();
}