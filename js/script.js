(function(){
    
    starGame();

    function starGame(){
        for(var i = 0; i < 6; i++){
            var card = document.querySelector("#card" + i);
            card.style.left = i % 3 === 0 ? 5 + "px" : i % 3 * 305 + 5 + "px";
            card.style.top = i < 3 ? 5 + "px" : 310 + "px";
        }
    }
}());