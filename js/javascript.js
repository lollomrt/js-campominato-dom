function generatoreQuadrati(num, cellePerRiga)
{
    console.log("ciao")
    let elemento = document.createElement("div")
    elemento.classList.add("square")    
    let altezzaGriglia = "100px"
    elemento.style.width = `calc(100% / ${cellePerRiga})`
    elemento.style.height = `calc(100% / ${cellePerRiga})`
    elemento.innerText = num
    return elemento
}

function gameDifficulty()
{
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

    generatoreGriglia(numCelle, cellePerRiga)
}


function generatoreGriglia(numCelle, cellePerRiga)
{
    document.querySelector(".contenitore-griglia").innerHTML = ""
    let griglia = document.createElement("div")
    griglia.classList.add("griglia")
    for (let i = 1; i <= numCelle; i++){
            let quadrato = generatoreQuadrati(i, cellePerRiga)
            griglia.appendChild(quadrato)
            
            quadrato.addEventListener("click", function(){
                this.classList.toggle("active")
                console.log(`Hai selezionato il numero ${this.innerText}`)
            })
    
    }
    console.log(griglia)
    document.querySelector(".contenitore-griglia").appendChild(griglia)
    
}

document.getElementById("pulsante").addEventListener("click", function(){
    gameDifficulty()
})