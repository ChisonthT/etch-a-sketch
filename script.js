function create_gameboard(size){
    let container = document.querySelector('#gameSpace');
    let dim = Math.floor(512/size);

    
    for (let i=0; i<(size*size); i++){
        const sqr = document.createElement('div');
        sqr.classList.add('tile');
        
        sqr.style.height = dim +'px';
        sqr.style.width = dim + 'px';

        container.appendChild(sqr);
    }
    

    container.addEventListener("mouseover",(e)=> {
        if (e.target.classList.contains('tile')) {
            
            e.target.style.backgroundColor = 'red';
        }
    })
}

function resizeGameBoard(){

    let size = prompt("Please enter an integer between 1-100 for the \
    new size of the board", "");

    size = Number(size);
    let container = document.querySelector('#gameSpace');

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    create_gameboard(size);
}

create_gameboard(16);

let btn = document.querySelector('button');

btn.addEventListener("click", resizeGameBoard);



