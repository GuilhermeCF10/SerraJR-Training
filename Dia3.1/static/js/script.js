

function Card() {
    let card = document.getElementById("mainCard");
    
    if (card.style.display == "none") {
        card.style.display = "flex";
    } 
    else {
        card.style.display = "none";
    }
}

