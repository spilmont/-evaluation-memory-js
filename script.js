/*initialization elements:*/
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

//display of cards:
var afficheCartes = function () {

    //loop for repeat creation  many times as the length array:
    for (let i = 0; i <Cartes.length; i++) {
        // creation of the image and this attributes:
        var cartes = document.createElement('img');
        // display the cards on the back face
        cartes.src = `images/question.gif`;
        cartes.name = Cartes[i];
        cartes.id = `carte${i}`;
        //link the images on html page in the aside with id  'plateau'
        document.getElementById('plateau').appendChild(cartes);


    }
};

//random arrangement of the cards
var melange = function () {
    //loop fo repeat operation on the all Cards
    for (let i = 0; i <Cartes.length; i++) {
        var alea = Math.random() * Cartes.length;
        alea = Math.floor(alea);
        temp = Cartes[i];
        Cartes[i] = Cartes[alea];
        Cartes[alea] = temp;
    }
};

//call my functions 'melange()' and 'afficheCartes()':
melange();
afficheCartes();

// loop for  click  of the all Card
for (let i = 0; i <Cartes.length; i++) {

    document.getElementById("carte" + i).addEventListener("click", function () {



        //if variable "t" less than 2 ....
        if (t <2) {
            // .... so push index in the array tbl1
            tbl1.push(i);
            // if  tbl1[1] is undefined and tb11[1} is different to tbl1[0]....
            if (!tbl1[1] || tbl1[1] !== tbl1[0]){

                console.log("tbl1 :"+tbl1);
            {//conditional block here
               console.log("tbl1[1]: " +tbl1[1]);console.log("tbl1[0]: "+tbl1[0]);
               // ....so increase variable "essais" of 1
                essais++;
                // .... and so increase variable "t" of 1
            t++;
            //display a clicked card on the front face
            document.getElementById("carte" + i).src = `images/${Cartes[i]}.png`;
            // if t is strictly equal at 1......
            if (t === 1) {
                // ....so the index of  first card clicked is put a variable 'carteid1'
                carteid1 = i;
                console.log("id1" + carteid1);

            }
                // if t is strictly equal at 2......
            if (t === 2) {
                //....so the index second  card clicked is put a variable 'carteid2'
                carteid2 = i;
                console.log("id2" + carteid2);

            }


            console.log(DuoR);
            // push the card  in the array 'Duor'
            DuoR.push(Cartes[i]);
            console.log(DuoR);
            // if t strictly equal 2 ......
            if (t === 2) {
               // compare if 'DuoR[0]' strictly equal 'DuoR[1]'
                if (DuoR[0] === DuoR[1]) {
                    console.log("bonne pioche");
                    // ...increase variable 'bonnePaire
                    bonnePaire++;
                    //... erase of the content of the array DuoR
                    DuoR.splice(0, 2);
                    // and variable 't' equal 0 for repeat condition
                    t = 0;
                } else {
                    console.log("mauvaise poiche");
                    // else if 'DuoR[0]' is different to 'DuoR[1]' create the timer for ...
                    setTimeout(function () {
                        //.... put variable 't' at 0
                        t = 0;
                        // and retourned the first ans second cards clicked
                        document.getElementById("carte" + carteid1).src = "images/question.gif";
                        document.getElementById("carte" + carteid2).src = "images/question.gif";
                    }, 500);
                    // erase tje content of the array DuoR for repeat conditions
                    DuoR.splice(0, 2);

                }

            }

        }
            }//condition block
        }

        // if variable "bonnePaire" equal 5 .....
        if (bonnePaire === 5) {
            //... erase the timer of the function CaR
            clearTimeout(temps);
            // ...so hidden the asside with id 'plateau'
            document.getElementById('plateau').style.display = "none";
            // ...display aside with id 'score'
            document.getElementById("score").style.display = "block";
            //... write the diw with id 'winorlose' the win message
            document.getElementById("winorlose").innerHTML = `<h2>vous avez Gagnez!!!<br>vous avez reussi en ${seconde2}s <br>en ${essais} éssais</h2>`;
            // ...and hidden the countdown
            document.getElementById("temps").style.visibility = "hidden";
        } else {
            // display a game and hidden the score
            document.getElementById('plateau').style.display = "block";
            document.getElementById("score").style.display = "none";
        }

    });

}
// function for create a countdown
function CaR() {
     //write and decrease the seconds int the div with id 'time'
    document.getElementById("temps").innerHTML = "secondes restantes:" + seconde;
    // write a lose message in the div with id 'winorlose'
    document.getElementById("winorlose").innerHTML = "<h2>vous avez perdu!!!</h2>";
    // call the timer on the functioon CaR for auto repeat
    temps = setTimeout(CaR, 1000);

    //decrease variable 'seconde'
    seconde--;
    //increase variable 'seconde2' for dispay a time use a player for win
    seconde2++;
    // if second less than 0....
    if (seconde === -1) {
        //...hidden the 'plateau'
        document.getElementById('plateau').style.display = "none";
        //display the score
        document.getElementById("score").style.display = "block";
        // hidden the time
        document.getElementById("temps").style.visibility = "hidden";
        // erase the timer of the function CaR
        clearTimeout(temps);
    }

}

// loop for repeat  returned card of the back face
for (let i = 0; i < Cartes.length; i++) {

    // if click on the button reset
    document.getElementById('rejouer').addEventListener("click", function () {
        /*location.reload();*/

        // initialized of the elements

        temps;
        bonnePaire = 0;
        essais = 0;
        seconde2 = 0;
        seconde = 29;
        document.getElementById("carte" + i).src = `images/question.gif`;
        document.getElementById('temps').style.visibility = "visible";
        document.getElementById('score').style.display = "none";
        document.getElementById('plateau').style.display = "block";
        melange();


    });
}