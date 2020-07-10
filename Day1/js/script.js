var bodyColour = 'red';
var myArray =['car', 'bike', 'bus', 'tractor']; //global variable

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

    myArray.forEach(
        function(item) {
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(item);         // Create a text node
            node.appendChild(textnode);  
            document.getElementById("myList").appendChild(node);
        }
    );
}

function removeListItem()
{
    myArray.pop();
    createArray();
}