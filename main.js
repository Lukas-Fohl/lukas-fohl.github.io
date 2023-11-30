class text{
    constructor(text1, text2, text3, imgPath, isThere1, isThere2, isThere3) {
        this.text_1 = text1;
        this.text_2 = text2;
        this.text_3 = text3;
        this.img_path = imgPath;
        this.isThere_1 = isThere1;
        this.isThere_2 = isThere2;
        this.isThere_3 = isThere3;
    }
}

let _Jesus1 = new text(
    "• Jesus Auffassung und Verkündigung der Köngisherrschaft: \n    • Königsherrschaft Gottes als Zukünftiges \n       Ereignis jedoch schon in der \n       Gegenwart angebrochen \n    • Gemeinschaft zwischen Mensch und \n       Gott wird mit Anbruch des 2. Äons \n       wiederhergestellt -> Prozess der \n       Wiederherstellung",
    "",
    "",
    "./god_the_father.webp",
    true,
    false,
    false
);

let _Jesus2 = new text(
    "• Königsherrschaft wird ins 1. und 2. Äon geteilt \n• Mit Jesus beginnt das 2. Äon \n      -> Die Vollendung des Heils, \n     der Gottesherrschaft, steht noch aus\n     (Wunder von Jesus sind Zeugnis)",
    "Gegenwärtiges Äon:\n    • Gott wird Herr über Israel \n       -> Herrscher verborgen \n    • Volk Gottes ist in Knechtschaft \n       -> Güte und \"Heil\" Gottes wird \n       unterdrückt",
    "Zukünftiges Äon:\n    • Anbruch von neuem Äon befreit Volk Israels \n    • Ganze Herrlichkeit wird offenbart und erstreckt sich \n       über die ganze Welt \n    • Königsherrschaft Gottes wird Allumfassend",
    "./83257645-jpg-106-768xauto.jpg",
    true,
    true,
    true
);

let _Jesus3 = new text(
    "𝗘𝗿𝗻𝘁𝗲: Die Stunde der Ernte ist gekommen. Sie ist reif (Mt 9,37)",
    "𝗡𝗲𝘂𝗲𝗿 𝗪𝗲𝗶𝗻: Der neue Wein darf nicht in alte Schläuche gegossen werden; er zerriss sie (Mk 2,22)",
    "𝗡𝗲𝘂𝗲𝘀 𝗧𝘂𝗰𝗵: Niemand näht ein Stück ungewalktes neues Ruch auf ein altes Kleid; das eingesetzte neue Stück riss weg (Mk 2,21)",
    "./bergpredigt.jpg",
    true,
    true,
    true
);

let _Jesus4 = new text(
    "● endgültiges Heilshandeln Gottes ist mit \n    neuem Äon angebrochen \n ● bringt sowohl Segen als auch Verderben \n    → Schuld wird erst durch Gnade Gottes zur \n     Schuld \n     → größtes Heil bringt gleichzeitig größtes \n     Unheil",
    "● Aufruf von Jesus zur Umkehr \n    → Wendung zu Gott und Gottesgericht \n    für begrenztes Heilsangebot \n ● Umkehr soll nicht aus Angst vor \n    Gottesgericht erfolgen, sondern aus \n    Erfahrung der Güte und Liebe Gottes \n    → an Gnade entsteht Umkehr",
    "● neues Gottesverhältnis mit neuem Gottesrecht \n    verbunden \n     → ohne unbedingten Einsatz und unbedingte \n    Entschlossenheit in der Beziehung zu Gott und \n    Mitmenschen ist Heilsanspruch verloren",
    "./Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg",
    true,
    true,
    true
);

function init(){
    setText(_Jesus1);
}

function callAnimation(year){
    switch(year){
        case 'Jesus1':
            animate(_Jesus1);
            btnColor("_Jesus1");
            break;

        case 'Jesus2':
            animate(_Jesus2);
            btnColor("_Jesus2");
            break;

        case 'Jesus3':
            animate(_Jesus3);
            btnColor("_Jesus3");
            break;
        
        case 'Jesus4':
            animate(_Jesus4);
            btnColor("_Jesus4");
            break;
        }
    }
    
function btnColor(id_){
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].id == id_){
            buttons[i].style.border = "3px solid #fa9f5a";
        }else{
            buttons[i].style.border = "0px solid #000000";
        }
    }
}

function setText(textClass){
    e1 = document.getElementById("infoText1");
    e2 = document.getElementById("infoText2");
    e3 = document.getElementById("infoText3");
    e4 = document.getElementById("pic");

    if(textClass.isThere_1===true){
        e1.style.display = "inline";
    }else{
        e1.style.display = "none";
    }

    if(textClass.isThere_2===true){
        e2.style.display = "inline";
    }else{
        e2.style.display = "none";
    }
    
    if(textClass.isThere_3===true){
        e3.style.display = "inline";
    }else{
        e3.style.display = "none";
    }

    e1.innerText = textClass.text_1;
    e2.innerText = textClass.text_2;
    e3.innerText = textClass.text_3;
    e4.style.backgroundImage = `url(./${textClass.img_path})`;
}

function animate(textClass){
    e1 = document.getElementById("infoText1");
    e2 = document.getElementById("infoText2");
    e3 = document.getElementById("infoText3");
    e4 = document.getElementById("pic");
    
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    
    e1.style.animationName = "InfoTextHin";
    e1.style.animationDuration = "1.05s";
    
    e2.style.animationName = "InfoTextHin";
    e2.style.animationDuration = "1.05s";
    
    e3.style.animationName = "InfoTextHin";
    e3.style.animationDuration = "1.05s";
    
    e4.style.animationName = "PicHin";
    e4.style.animationDuration = "1.05s";
    
    
    setTimeout(function() {
        e4.src = `./${textClass.img_path}`;
        setTimeout(function() {
        }, 30);
        
        if(textClass.isThere_1===true){
            e1.style.display = "inline";
        }else{
            e1.style.display = "none";
        }

        if(textClass.isThere_2===true){
            e2.style.display = "inline";
        }else{
            e2.style.display = "none";
        }

        if(textClass.isThere_3===true){
            e3.style.display = "inline";
        }else{
            e3.style.display = "none";
        }

        //e4.src = `./${textClass.img_path}`;
        e1.innerText = textClass.text_1;
        e2.innerText = textClass.text_2;
        e3.innerText = textClass.text_3;

        e1.style.animationName = "InfoTextBack";
        e1.style.animationDuration = "1.2s";

        e2.style.animationName = "InfoTextBack";
        e2.style.animationDuration = "1.2s";

        e3.style.animationName = "InfoTextBack";
        e3.style.animationDuration = "1.2s";

        e4.style.animationName = "PicBack";
        e4.style.animationDuration = "1.2s";

        setTimeout(function() {

            e1.id = "infoText1";
            e2.id = "infoText2";
            e3.id = "infoText3";
            e4.id = "pic";

            e1.style.animationName = "";
            e1.style.animationDuration = "";

            e2.style.animationName = "";
            e2.style.animationDuration = "";

            e3.style.animationName = "";
            e3.style.animationDuration = "";

            e4.style.animationName = "";
            e4.style.animationDuration = "";

            var buttons = document.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            }

        }, 1000);
    }, 1005);
}