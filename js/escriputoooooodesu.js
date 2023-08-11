function checo(val){
    // alert("Akshon")
    source = "img/"
    NewImg = source + val + '.png'
    const Pao = ['Piedra','Papel','Tijeras'];
    const random = Math.floor(Math.random() * Pao.length);
    RandomImg = source + (Pao[random]) + '.png' 
    document.getElementById("SCF").src=NewImg;
    document.getElementById("SPA").src=RandomImg;
    Pscore = val
    Ascore = Pao[random] 

    if (Pscore == 'Papel' && Ascore == 'Papel'){
        myFunction("Tie")
    }
    else if (Pscore == 'Papel' && Ascore == 'Piedra'){
       r = parseInt(document.getElementById("SC1").innerHTML);
       r = r +  1
       document.getElementById("SC1").innerHTML=r
       myFunction("W")
    }
    else if (Pscore == 'Papel' && Ascore == 'Tijeras'){
        r = parseInt(document.getElementById("SC2").innerHTML);
        r = r +  1
        document.getElementById("SC2").innerHTML=r
        myFunction("L")
    }


    else if (Pscore == 'Piedra' && Ascore == 'Papel'){
        r = parseInt(document.getElementById("SC2").innerHTML);
        r = r +  1
        document.getElementById("SC2").innerHTML=r
        myFunction("L")
    }
    else if (Pscore == 'Piedra' && Ascore == 'Piedra'){
        myFunction("Tie")
    }
    else if (Pscore == 'Piedra' && Ascore == 'Tijeras'){
        r = parseInt(document.getElementById("SC1").innerHTML);
        r = r +  1
        document.getElementById("SC1").innerHTML=r
        myFunction("W")
    }


    else if (Pscore == 'Tijeras' && Ascore == 'Papel'){
        r = parseInt(document.getElementById("SC1").innerHTML);
        r = r +  1
        document.getElementById("SC1").innerHTML=r
        myFunction("W")
    }
    else if (Pscore == 'Tijeras' && Ascore == 'Piedra'){
        r = parseInt(document.getElementById("SC2").innerHTML);
        r = r +  1
        document.getElementById("SC2").innerHTML=r
        myFunction("L")
    }
    else if (Pscore == 'Tijeras' && Ascore == 'Tijeras'){
        myFunction("Tie")
    }
}

function myFunction(Result) {
    if (Result == 'Tie'){
        var myWindow = window.open("r", "MsgWindow", "width=400, height=800");
        myWindow.document.write("<img src='img/Corbata.png'>");
        setTimeout(() => {
            myWindow.close()
        }, 2000)
    }
    else if (Result == 'W'){
        var myWindow = window.open("r", "MsgWindow", "width=400, height=200");
        myWindow.document.write("<img src='img/Win.gif'>");
        setTimeout(() => {
            myWindow.close()
        }, 3000)
    }
    else if (Result == 'L'){
        var myWindow = window.open("r", "MsgWindow", "width=450, height=250");
        myWindow.document.write("<img src='img/Derrota.gif'>");
        setTimeout(() => {
            myWindow.close()
        }, 2000)
    }
}

