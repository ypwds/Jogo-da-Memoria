(function(){

    var matches = 0;
    
    var imagens = [];

    var flippedCards = [];

    var modalGameOver = document.querySelector("#modalGameOver");

    var imgMatchSign = document.querySelector("#imgMatchSign");

    for(var i = 0; i < 6; i++){
        var img = {
            src: "img/" + i + ".jpeg",
            id: i % 3
        };
        imagens.push(img);
    }

    starGame();

    function starGame(){

        matches = 0;

        flippedCards = [];

        imagens = randomSort(imagens);

        var frontFaces = document.getElementsByClassName("front");

        var backFaces = document.getElementsByClassName("back");

        for(var i = 0; i < 6; i++){

            frontFaces[i].classList.remove("flipped","match");
            backFaces[i].classList.remove("flipped","match");

            var card = document.querySelector("#card" + i);
            card.style.left = i % 3 === 0 ? 5 + "px" : i % 3 * 305 + 5 + "px";
            card.style.top = i < 3 ? 5 + "px" : 310 + "px";

            card.addEventListener("click", flipCard, false);

            frontFaces[i].style.background = "url('"+ imagens[i].src +"')";
            frontFaces[i].setAttribute("id", imagens[i].id);
        }

        modalGameOver.style.zIndex = -2;
        modalGameOver.removeEventListener("click", starGame, false);
    }

    function randomSort(oldArray){
        var newArray = [];

        while(newArray.length !== oldArray.length){
            var i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0){
                newArray.push(oldArray[i]);
            }
        }

        return newArray;
    }

    function flipCard(){

        if(flippedCards.length < 2){
            var faces = this.getElementsByClassName("face");

            if(faces[0].classList.length > 2){
                return;
            }
        
            faces[0].classList.toggle("flipped");
            faces[1].classList.toggle("flipped");

            flippedCards.push(this);

            if(flippedCards.length === 2){
                if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
                    flippedCards[0].childNodes[1].classList.toggle("match");
                    flippedCards[0].childNodes[3].classList.toggle("match");
                    flippedCards[1].childNodes[1].classList.toggle("match");
                    flippedCards[1].childNodes[3].classList.toggle("match");

                    matchCardSign();

                    matches++;

                    flippedCards = [];

                    if(matches === 3){
                        gameOver();
                    }
                }
            }
        } else {
            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];
        }
        
    }

    function gameOver(){
        modalGameOver.style.zIndex = 10;
        modalGameOver.addEventListener("click", starGame, false);
    }

    function matchCardSign(){
        imgMatchSign.style.zIndex = 1;
        imgMatchSign.style.top = 150 + "px";
        imgMatchSign.style.opacity = 0;
        
        setTimeout(function(){
            imgMatchSign.style.zIndex = -1;
            imgMatchSign.style.top = 250 + "px";
            imgMatchSign.style.opacity = 1;
        }, 1500);
    }
}());