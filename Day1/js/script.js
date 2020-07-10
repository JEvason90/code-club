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

function createArray(){
    var myArray =['car', 'bike', 'bus', 'tractor'];

    myArray.forEach(
        function(item, index) {
            console.log(item, index)
        }
    );

    //how can we map my array to a list on the web page
}