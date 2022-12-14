function generatoreQuadrati(num, cellePerRiga)
{
    let elemento = document.createElement("div")
    elemento.classList.add("square")    
    elemento.style.width = `calc(100% / ${cellePerRiga})`
    elemento.style.height = `calc(100% / ${cellePerRiga})`
    elemento.innerText = num
    return elemento
}

//Funzione generatrice di bombe
function generatoreBombe (min, max)
{
    let bombs = []
    let i = 0
    while (bombs.length < 16) {
        let singleBomb = Math.floor(Math.random() * (max - min + 1) +min)
        if (!bombs.includes(singleBomb)){
            bombs.push(singleBomb)
        }
    }
    return bombs
}

function gameDifficulty()
{
    let listaBombe = []
    let scelta = parseInt(document.getElementById("seleziona").value)
    let numCelle
    let cellePerRiga

    switch (scelta) {
        case 1:
            numCelle = 100
            cellePerRiga = 10
            break;
        case 2:
            numCelle = 81
            cellePerRiga = 9
            break;
        case 3: 
            numCelle = 49
            cellePerRiga = 7
            break;
        default:
            numCelle = 100
            cellePerRiga = 10
            break;
    }

    listaBombe = generatoreBombe(1, numCelle)
    generatoreGriglia(listaBombe, numCelle, cellePerRiga)
    console.log(listaBombe)
}


function generatoreGriglia(listaBombe, numCelle, cellePerRiga)
{
    document.querySelector(".contenitore-griglia").innerHTML = ""
    let griglia = document.createElement("div")
    griglia.classList.add("griglia")
    //variabile Contatore
    let noBombs = 0
    document.getElementById("punti").innerText = "--"
    for (let i = 1; i <= numCelle; i++){
            let quadrato = generatoreQuadrati(i, cellePerRiga)
            griglia.appendChild(quadrato)
            
            quadrato.addEventListener("click", function(){
                this.classList.add("active")
                // Controllo se ho selezionato una bomba
                if (listaBombe.includes(parseInt(this.innerText))){
                    for (let j = 0; j < listaBombe.length; j++ ){
                        let bomb = griglia.childNodes[listaBombe[j] - 1];
                        bomb.classList.add("bomb")
                    }
                    document.getElementById("esito").innerHTML = "Hai preso la bomba: " +this.innerText
                    document.getElementById("esito").classList.add("red")
                    griglia.classList.add("esplosione")
                } else {
                    noBombs++
                    document.getElementById("punti").innerText = noBombs
                    console.log(noBombs)
                    if (noBombs == numCelle - 16) {
                        document.getElementById("esito").innerHTML = "Hai Vinto!"
                        document.getElementById("esito").classList.add("green")
                        
                    }
                }
                
            }, {once:"true"})

    }
    document.querySelector(".contenitore-griglia").appendChild(griglia)
    
    
}

document.getElementById("pulsante").addEventListener("click", function(){
    gameDifficulty()
})