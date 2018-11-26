var Cartes = ["1up", "1up", "mushroom", "mushroom", "blueshell", "blueshell", "coin", "coin", "star", "star"];
var MotifsCartes=[1,1,2,2,3,3,4,4,5,5];
var EtatCartes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var DuoR=[];
var bonnePaire=0;
var temp;


var melange = function () {

    for (let i = 0; i < Cartes.length; i++) {
        var alea = Math.random() * Cartes.length;
        alea = Math.floor(alea);
        temp = Cartes[i];
        Cartes[i] = Cartes[alea];
        Cartes[alea] = temp;
    }
};

melange();

for (let i = 0; i < Cartes.length; i++) {
    document.getElementById('carte' + i).addEventListener("click", function () {
        console.log(Cartes[i]);
        document.getElementById('carte'+i).src = `images/${Cartes[i]}.png`;


    })
}







