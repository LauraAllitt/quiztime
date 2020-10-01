const category = document.getElementsByClassName("cat");
const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");

function categorySelected() {
    chosenTopic = event.srcElement.id;
    for(var i = 0; i < category.length; i++) {
        category[i].disabled = true;
    }
    document.getElementById("diff_selection").style.display = "block";
}

function diffSelection () {
    easyButton.onclick = function () {
        if(chosenTopic == "gk") {
            return window.location.assign('html/gk/easygk.html');
        }
        else if(chosenTopic == "games") {
            return window.location.assign('html/games/easygames.html');
        }
        else if(chosenTopic == "film") {
            return window.location.assign('html/film/easyfilm.html');
        }
        else if(chosenTopic == "music") {
            return window.location.assign('html/music/easymusic.html');
        }
        else if(chosenTopic == "science") {
            return window.location.assign('html/science/easyscience.html');
        }
        else if(chosenTopic == "sports") {
            return window.location.assign('html/sports/easysports.html');
        }
        else if(chosenTopic == "geo") {
            return window.location.assign('html/geo/easygeo.html');
        }
        else if(chosenTopic == "hist") {
            return window.location.assign('html/hist/easyhist.html');
        }
    }

    mediumButton.onclick = function () {
        if(chosenTopic == "gk") {
            return window.location.assign('html/gk/medgk.html');
        }
        else if(chosenTopic == "games") {
            return window.location.assign('html/games/medgames.html');
        }
        else if(chosenTopic == "film") {
            return window.location.assign('html/film/medfilm.html');
        }
        else if(chosenTopic == "music") {
            return window.location.assign('html/music/medmusic.html');
        }
        else if(chosenTopic == "science") {
            return window.location.assign('html/science/medscience.html');
        }
        else if(chosenTopic == "sports") {
            return window.location.assign('html/sports/medsports.html');
        }
        else if(chosenTopic == "geo") {
            return window.location.assign('html/geo/medgeo.html');
        }
        else if(chosenTopic == "hist") {
            return window.location.assign('html/hist/medhist.html');
        }
    }

    hardButton.onclick = function () {
        if(chosenTopic == "gk") {
            return window.location.assign('html/gk/hardgk.html');
        }
        else if(chosenTopic == "games") {
            return window.location.assign('html/games/hardgames.html');
        }
        else if(chosenTopic == "film") {
            return window.location.assign('html/film/hardfilm.html');
        }
        else if(chosenTopic == "music") {
            return window.location.assign('html/music/hardmusic.html');
        }
        else if(chosenTopic == "science") {
            return window.location.assign('html/science/hardscience.html');
        }
        else if(chosenTopic == "sports") {
            return window.location.assign('html/sports/hardsports.html');
        }
        else if(chosenTopic == "geo") {
            return window.location.assign('html/geo/hardgeo.html');
        }
        else if(chosenTopic == "hist") {
            return window.location.assign('html/hist/hardhist.html');
        }
    }
}