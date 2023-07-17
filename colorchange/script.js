//Generate random color
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(randomColor());

let btn = document.querySelector('#start');
let btn1 = document.querySelector('#stop');

let Id;
function changeStart(){
    if(!Id){
        Id = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        },500)
    }
}
function changeStop(){
    clearInterval(Id);
    Id = null;
}

btn.addEventListener('click', changeStart);
btn1.addEventListener('click', changeStop);