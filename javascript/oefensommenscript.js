var geselecteerdeWaarde = 0;
var randomaantal1 = 0;
var randomaantal2 = 0;
var antwoord = 0;
        
var totaalgoed = 0;
var totaalfout = 0;
var tempfoutteller = 0;
var typesom = "";

var radiotafelselectie = "";

var type = {
    tafels: "tafels",
    plus: "plus",
    breuken: "breuken",
    min: "min",
}

function init(typesoortsom) {
    console.log('init');
    typesom = typesoortsom;

    document.getElementById('som_div').style.display = "none";
    document.getElementById('score_div').style.display = "none";
    document.getElementById('gemaaktesommen_div').style.display = "none";    
	document.getElementById('helpantwoordimage').style.visibility = "hidden";
}

function sommenklaarzetten()
{
    console.log("tafelzetten");
    geselecteerdeWaarde = document.getElementById('oefenwaardetekst').value;
    console.log(document.getElementById('oefenwaardetekst').value);

    if (typesom == type.tafels || typesom == type.breuken) {
        tafelsklaarzetten();
    }

    somzetten();

    document.getElementById('som_div').style.display = "block";
    document.getElementById('score_div').style.display = "block";
    document.getElementById('gemaaktesommen_div').style.display = "block";

}

function controleerantwoord()
{
    console.log("controleerantwoord");
    console.log(document.getElementById('antwoordtekst').value); 

    var ingevuldantwoord = document.getElementById('antwoordtekst').value;

    if(antwoord == ingevuldantwoord)
    {
        //alert('Super dat is het juiste antwoord! \r\nProbeer nu de volgende som');
        document.getElementById('som_div').style.backgroundColor = "";
        totaalgoed++;
        tempfoutteller = 0;        
        gemaaktesommenbijwerken(true);
        somzetten();
    }
    else
    {
        //alert('Jammer, dat is niet goed! \r\nProbeer het nog een keer!');
        document.getElementById('som_div').style.backgroundColor = "red";
        totaalfout++;
        tempfoutteller++;
        gemaaktesommenbijwerken(false);
    }

    if(tempfoutteller > 4)
    {
        document.getElementById('helpantwoordimage').style.visibility = "visible";
    }
    else{
        document.getElementById('helpantwoordimage').style.visibility = "hidden";
    }

    scorezetten();
}

function somzetten() {
    console.log("somzettenplus");

    if (typesom == type.tafels) {
        somzettentafel();
    }
    else if (typesom == type.breuken) {
        somzettenbreuken();
    }
    else if (typesom == type.plus) {
        somzettenplus();
    }
}

function tafelsklaarzetten() {
    if (document.getElementById('tafel0-5').checked) {
        radiotafelselectie = document.getElementById('tafel0-5').value;
    }
    else if (document.getElementById('tafel5-10').checked) {
        radiotafelselectie = document.getElementById('tafel5-10').value;
    }
    else if (document.getElementById('tafel0-10').checked) {
        radiotafelselectie = document.getElementById('tafel0-10').value;
    }
    else {
        radiotafelselectie = document.getElementById('tafelanders').value;
    }

    geselecteerdeWaarde = document.getElementById('oefenwaardetekst').value;
}

function somzettentafel() {
    console.log("somzetten");
    randomaantal1 = Math.floor(Math.random() * 10);
    console.log(randomaantal1);

    console.log(radiotafelselectie);

    if (radiotafelselectie == "anders") {
        randomaantal2 = geselecteerdeWaarde;
    }

    else if (radiotafelselectie == "0-5") {
        randomaantal2 = Math.floor(Math.random() * 6);
    }

    else if (radiotafelselectie == "5-10") {
        randomaantal2 = Math.floor((Math.random() * 6) + 5);
    }

    else if (radiotafelselectie == "0-10") {
        randomaantal2 = Math.floor(Math.random() * 11);
    }

    antwoord = randomaantal1 * randomaantal2;

    console.log(antwoord);
    document.getElementById('som').innerHTML = randomaantal1 + " x " + randomaantal2;
    document.getElementById('antwoordtekst').value = "";
}

function somzettenbreuken() {
    console.log("somzetten");
    randomaantal1 = Math.floor(Math.random() * 10);
    console.log(randomaantal1);

    console.log(radiotafelselectie);

    if (radiotafelselectie == "anders") {
        randomaantal2 = geselecteerdeWaarde;
    }

    else if (radiotafelselectie == "0-5") {
        randomaantal2 = Math.floor(Math.random() * 6);
    }

    else if (radiotafelselectie == "5-10") {
        randomaantal2 = Math.floor((Math.random() * 6) + 5);
    }

    else if (radiotafelselectie == "0-10") {
        randomaantal2 = Math.floor(Math.random() * 11);
    }

    antwoord = randomaantal1 * randomaantal2;

    if(antwoord != 0)
    {
         var tempantwoord = antwoord;
        antwoord = randomaantal1;
        randomaantal1 = tempantwoord;  
    }

    console.log(antwoord);
    document.getElementById('som').innerHTML = randomaantal1 + " : " + randomaantal2;
    document.getElementById('antwoordtekst').value = "";
}

function somzettenplus() {
    console.log("somzettenplus");
    var waarde = true;
    while (waarde) {
        randomaantal1 = Math.floor(Math.random() * (geselecteerdeWaarde + 1));
        randomaantal2 = Math.floor(Math.random() * (geselecteerdeWaarde + 1));
        console.log(randomaantal1);
        console.log(randomaantal2);
        antwoord = randomaantal1 + randomaantal2;

        if (antwoord <= geselecteerdeWaarde) {
            waarde = false;
        }
    }

    console.log(antwoord);
    document.getElementById('som').innerHTML = randomaantal1 + " + " + randomaantal2;
    document.getElementById('antwoordtekst').value = "";
}

function scorezetten() {
    console.log("scorezetten");
    document.getElementById('scoretotaal').innerHTML = totaalfout + totaalgoed;
    document.getElementById('scoregoed').innerHTML = totaalgoed;
    document.getElementById('scorefout').innerHTML = totaalfout;
}

function gemaaktesommenbijwerken(goedantwoord) {
    console.log("gemaaktesommenbijwerken");

    var newItem = document.createElement("p");
    newItem.innerHTML = document.getElementById('som').innerHTML + " = " + document.getElementById('antwoordtekst').value + (goedantwoord ? " (Goed)" : " (Fout)");;
    document.getElementById('gemaaktesommen_div').appendChild(newItem);
}  

function toonantwoord() {
    alert("Het antwoord is: " + antwoord)
}