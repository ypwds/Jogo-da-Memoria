(function(){
    
    var imagens = [];

    for(var i = 0; i < 6; i++){
        var img = {
            src: "img/" + i + ".jpeg",
            id: i % 3
        };
        imagens.push(img);
    }

    starGame();

    function starGame(){

        var frontFaces = document.getElementsByClassName("front");

        for(var i = 0; i < 6; i++){
            var card = document.querySelector("#card" + i);
            card.style.left = i % 3 === 0 ? 5 + "px" : i % 3 * 305 + 5 + "px";
            card.style.top = i < 3 ? 5 + "px" : 310 + "px";

            card.addEventListener("click", flipCard, false);

            frontFaces[i].style.background = "url('"+ imagens[i].src +"')";
            frontFaces[i].setAttribute("id", imagens[i].id);
            console.log(frontFaces[i].id);
        }
    }

    function flipCard(){
        var faces = this.getElementsByClassName("face");
        faces[0].classList.toggle("flipped");
        faces[1].classList.toggle("flipped");
        
    }
}());