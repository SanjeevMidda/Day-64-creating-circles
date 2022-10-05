let getBody = document.querySelector('body');
getBody.addEventListener('click', createSquare);

function createSquare(){
    let newSquare = document.createElement("div");
    newSquare.style.backgroundColor = `${randomColor()}`;
    getBody.append(newSquare);

}


function randomNumber(){
    let randomNumber = Math.floor(Math.random()*255+1);
    return randomNumber;
    
}

function randomColor() {

    let randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    return randomColor

}