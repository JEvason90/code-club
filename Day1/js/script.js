var bodyColour = 'red';

function myAlert(){
    alert('hello world!');
}

function changeColour(){
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = 'purple'
}

function clearColour(){
    document.body.removeAttribute('style');
}