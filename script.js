function create_gameboard(){
    let container = document.querySelector('#gameSpace');

    for (let i=0; i<256; i++){
        const sqr = document.createElement('div');
        sqr.classList.add('tile');
        

        container.appendChild(sqr);
    }

    container.addEventListener("mouseover",(e)=> {
        if (e.target.classList.contains('tile')) {
            console.log("it happened");
            e.target.style.backgroundColor = 'red';
        }
    })
}


create_gameboard();