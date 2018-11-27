var Cartes = ["1up", "1up", "mushroom", "mushroom", "blueshell", "blueshell", "coin", "coin", "star", "star"];
var valeurCarte=[1,1,2,2,3,3,4,4,5,5];
var DuoR = [];
var temp;
var paireBonne=0;

for (let i=0;i<Cartes.length;i++){
    Cartes[i].value = valeurCarte[i];
}

DuoR=[];
var face = 0;


var afficheCartes = function () {
    for (let i = 0; i < Cartes.length; i++) {
        var cartes = document.createElement('img');
        cartes.name = Cartes[i];
        cartes.src="images/question.gif";
        cartes.id = `carte${i}`;
        cartes.style.width = `${150}px`;
        cartes.style.height = `${150}px`;
        cartes.style.marginLeft = `${8}%`;
        cartes.style.marginTop = `${3}%`;
        cartes.style.display="inline-block";
        document.getElementById('plateau').appendChild(cartes);



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


    document.getElementById("carte"+i).addEventListener("click", function () {

        if(DuoR.length < 2) {
            DuoR.push(Cartes[i]);
            console.log(paireBonne);
            console.log(DuoR);
            document.getElementById("carte" + i).src = `images/${Cartes[i]}.png`;
            if (DuoR.length ==2) {
                DuoR[0].id = "choix"+i;

                if (DuoR[0] === DuoR[1]) {
                    paireBonne++;
                    DuoR.splice(0, 2);
                    alert("bonne paire");
                } else {
                    alert("mauvaise paire");
                    document.getElementById("choix"+1).src="images/question.gif";
                    document.getElementById("choix2"+2).src="images/question.gif";
                    DuoR.splice(0,2);
                }
            }
        }
    });
}







