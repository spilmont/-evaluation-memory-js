var Cartes = ["1up", "1up", "mushroom", "mushroom", "blueshell", "blueshell", "coin", "coin", "star", "star"];
var carte1 = "";
var carte2 = "";
var temp;

var afficheCartes = function () {
    for (let i = 0; i < Cartes.length; i++) {
        var cartes = document.createElement('img');
        cartes.src = `images/${Cartes[i]}.png`;
        cartes.name = Cartes;
        cartes.id = `carte${i}`;
        cartes.style.width = `${150}px`;
        cartes.style.height = `${150}px`;
        cartes.style.marginLeft = `${8}%`;
        cartes.style.marginTop = `${3}%`;
        document.getElementById('plateau').appendChild(cartes);
        cartes.innerHTML = "t";


    }
};


var melange = function () {

    for (let i = 0; i < Cartes.length; i++) {
        var alea = Math.random() * Cartes.length;
        alea = Math.floor(alea);
        temp = Cartes[i];
        Cartes[i] = Cartes[alea];
        Cartes[alea] = temp;
    }
}


melange();
afficheCartes();

for (let i = 0; i < Cartes.length; i++) {
    document.getElementById('carte' + i).addEventListener("click", function () {

    })
}







