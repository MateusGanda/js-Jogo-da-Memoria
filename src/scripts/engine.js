const emojis = [//Todos os emojis
    "💵",
    "💵",
    "😱",
    "😱",
    "😡",
    "😡",
    "🤡",
    "🤡",
    "🦁",
    "🦁",
    "🎂",
    "🎂",
    "🐘",
    "🐘",
    "😨",
    "😨"
]; 
let openCards = []; //Vai guardar ar cartas que forem abertas


let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1)); 
//Se for maior que 0.5 vai dar 2, senão vai dar -1

for(let i = 0; i < emojis.length; i++){ //Vai criar um elemento com a tag div
    let box = document.createElement("div");
    box.className = "item"; //vai ter uma classe com nome item
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box); //Vai adicionar no site
}

function handleClick() {
    if(openCards.length < 2) {
        this.classList.add("boxOpen"); //adiciona a class boxOpen quando clicar na carta
        openCards.push(this);
    }

    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");// Adiciona o boxMatch
    }else{
        openCards[0].classList.remove("boxOpen"); //se n baterem certo, eles se fecham
        openCards[1].classList.remove("boxOpen");
    }

    openCards = []; //Retorna ao vetor vazio

    if(document.querySelectorAll(".boxMatch").length === emojis.length){ //Se a quantidade de boxMatch for igual a emojis.lenght, envia um alerta
        alert("Você venceu!");
    }
}
}
