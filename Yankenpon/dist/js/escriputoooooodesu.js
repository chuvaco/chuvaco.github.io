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
        myFunction()
    }
    else if (Pscore == 'Papel' && Ascore == 'Piedra'){
       r = parseInt(document.getElementById("SC2").innerHTML);
       r = r +  1
       document.getElementById("SC2").innerHTML=r
    }
    else if (Pscore == 'Papel' && Ascore == 'Tijeras'){
        r = parseInt(document.getElementById("SC1").innerHTML);
        r = r +  1
        document.getElementById("SC1").innerHTML=r
    }


    else if (Pscore == 'Piedra' && Ascore == 'Papel'){
        r = parseInt(document.getElementById("SC2").innerHTML);
        r = r +  1
        document.getElementById("SC2").innerHTML=r
    }
    else if (Pscore == 'Piedra' && Ascore == 'Piedra'){
        myFunction()
    }
    else if (Pscore == 'Piedra' && Ascore == 'Tijeras'){
        r = parseInt(document.getElementById("SC1").innerHTML);
        r = r +  1
        document.getElementById("SC1").innerHTML=r
    }


    else if (Pscore == 'Tijeras' && Ascore == 'Papel'){
        r = parseInt(document.getElementById("SC1").innerHTML);
        r = r +  1
        document.getElementById("SC1").innerHTML=r
    }
    else if (Pscore == 'Tijeras' && Ascore == 'Piedra'){
        r = parseInt(document.getElementById("SC2").innerHTML);
        r = r +  1
        document.getElementById("SC2").innerHTML=r
    }
    else if (Pscore == 'Tijeras' && Ascore == 'Tijeras'){
        setTimeout(myFunction(),2000);
    }
}

function myFunction() {
    var myWindow = window.open("r", "MsgWindow", "width=400, height=800");
    myWindow.document.write("<img src='img/Corbata.png'>");
    setTimeout(() => {
        myWindow.close()
    }, 600)
    // setTimeout( , "60000") 
}