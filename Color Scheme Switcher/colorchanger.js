const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
        if(e.target.id === 'grey'){
            body.style.background = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'black'){
            body.style.background = e.target.id;
            body.style.color = 'white';
        }
        if(e.target.id === 'red'){
            body.style.background = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'orange'){
            body.style.background = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'yellow'){
            body.style.background = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === 'purple'){
            body.style.background = e.target.id;
            body.style.color = 'black';
        }
    })
});