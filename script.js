var Cartes = ["1up", "1up", "mushroom", "mushroom", "blueshell", "blueshell", "coin", "coin", "star", "star"];
var temp;
var DuoR = [];
var bonnePaire = 0;
var seconde = 29;
var seconde2 = 0;
var temps = setTimeout(CaR, 1000);
var t = 0;
var essais = 0;
var carteid1;
var carteid2;
var tbl1 = [];


var afficheCartes = function () {
    for (let i = 0; i < Cartes.length; i++) {

        var cartes = document.createElement('img');
        cartes.src = `images/question.gif`;
        cartes.name = Cartes[i];
        cartes.id = `carte${i}`;
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
};


melange();
afficheCartes();

for (let i = 0; i < Cartes.length; i++) {

    document.getElementById("carte" + i).addEventListener("click", function ana() {




        if (t < 2) {
            tbl1.push(i);
            if (!tbl1[1] || tbl1[1] !== tbl1[0])
            {// bloc conditionel ici
               console.log("tbl1[1]: " +tbl1[1]);console.log("tbl1[0]: "+tbl1[0]);
                essais++;
            t++;
            document.getElementById("carte" + i).src = `images/${Cartes[i]}.png`;
            if (t === 1) {


                carteid1 = i;
                console.log("id1" + carteid1);

            }
            if (t === 2) {
                carteid2 = i;
                console.log("id2" + carteid2);

            }


            console.log(DuoR);
            DuoR.push(Cartes[i]);
            console.log(DuoR);
            if (t === 2) {
                if (DuoR[0] === DuoR[1]) {
                    console.log("bonne pioche");
                    bonnePaire++;
                    DuoR.splice(0, 2);
                    t = 0;
                } else {
                    console.log("mauvaise poiche");
                    setTimeout(function () {
                        t = 0;
                        document.getElementById("carte" + carteid1).src = "images/question.gif";
                        document.getElementById("carte" + carteid2).src = "images/question.gif";
                    }, 500);
                    DuoR.splice(0, 2);

                }

            }

        }//fin bloc
        }

        if (bonnePaire === 5) {
            clearTimeout(temps);
            document.getElementById('plateau').style.display = "none";
            document.getElementById("score").style.display = "block";
            document.getElementById("winorlose").innerHTML = `<h2>vous avez Gagnez!!!<br>vous avez reussi en ${seconde2}s <br>en ${essais} éssais</h2>`;
            document.getElementById("temps").style.visibility = "hidden";
        } else {
            document.getElementById('plateau').style.display = "block";
            document.getElementById("score").style.display = "none";
        }

    });

}

function CaR() {

    document.getElementById("temps").innerHTML = "secondes restantes:" + seconde;
    document.getElementById("winorlose").innerHTML = "<h2>vous avez perdu!!!</h2>";
    temps = setTimeout(CaR, 1000);

    seconde--;
    seconde2++;
    if (seconde === -1) {

        document.getElementById('temps').display = "none";
        document.getElementById('plateau').style.display = "none";
        document.getElementById("score").style.display = "block";
        document.getElementById("temps").style.visibility = "hidden";
        clearTimeout(temps);
    }

}


for (let i = 0; i < Cartes.length; i++) {

    document.getElementById('rejouer').addEventListener("click", function () {
        //location.reload();

        bonnePaire = 0;
        essais = 0;
        seconde2 = 0;
        seconde = 29;
        document.getElementById("carte" + i).src = `images/question.gif`;
        document.getElementById('temps').style.display = "block";
        document.getElementById('score').style.display = "none";
        document.getElementById('plateau').style.display = "block";
        melange();


    });
}