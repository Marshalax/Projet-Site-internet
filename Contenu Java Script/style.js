
function afficherLegende(element) {
    /* La fonction prend en paramètre un identifiant et fais apparaître un titre lorsque qu'on survole l'image correspondant à l'identifiant*/
    document.getElementById(element).style.color = "black";
}
function cacherLegende(element) {
    /* La fonction prend en paramètre un identifiant et fais disparaître un titre lorsque qu'on ne survole plus l'image correspondant à l'identifiant*/
    document.getElementById(element).style.color = "grey";
}
