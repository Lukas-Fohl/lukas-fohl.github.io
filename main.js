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
    "• hier könnte was tolles über Jesus stehen \n • hier könnte was tolles über Jesus stehen \n • hier könnte was tolles über Jesus stehen",
    "• hier könnte was tolles über Jesus stehen \n • hier könnte was tolles über Jesus stehen \n • hier könnte was tolles über Jesus stehen",
    "• hier könnte was tolles über Jesus stehen \n • hier könnte was tolles über Jesus stehen \n • hier könnte was tolles über Jesus stehen",
    "./Jesus.png",
    true,
    true,
    true
);

let _Jesus2 = new text(
    "hier könnte auch was tolles über Jesus stehen",
    "hier könnte auch was tolles über Jesus stehen",
    "hier könnte auch was tolles über Jesus stehen",
    "./Jesus.png",
    true,
    true,
    true
);

let _Jesus3 = new text(
    "mehr Jesus",
    "mehr Jesus",
    "mehr Jesus",
    "./Jesus.png",
    true,
    true,
    true
);

let _Jesus4 = new text(
    "noch mehr Jesus",
    "noch mehr Jesus",
    "noch mehr Jesus",
    "./Jesus.png",
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
        setTimeout(function() {
            e4.src = `./${textClass.img_path}`;
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