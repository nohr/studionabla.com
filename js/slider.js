function placeFeed(y) {
    var x = document.getElementById(y);
    if (y != "null") {
        if (x.style.display == "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } else {
    }
}
function checkFeed() {
    var i;
    for (i = 1; i < 11; i++) {
        var x = document.getElementById(i);
        if (x.style.display == "block") {
            x.style.display = "none";
        }
    }
}


function placeText(y) {
    var id = y.toString();
    var text = document.getElementById("text");
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");
    
    if (id == "0") {
        text.innerHTML = text0;
            c1.innerHTML = "";
            c2.innerHTML = "";
            c3.innerHTML = "";
            c4.innerHTML = "";
            text.style.content = "0";
    } else {
            if (id == "1") {
                text.innerHTML = text1;
                    c1.innerHTML = "<span id ='capTitle'>Client</span><br> Nohri";
                    c2.innerHTML = "<span id ='capTitle'>Year</span><br> 2019";
                    c3.innerHTML = "<span id ='capTitle'>Team</span><br> A. Eboigbe";
                    c4.innerHTML = "<span id ='capTitle'>Services</span><br> 3D Animation";
                    text.style.content = "1";
            } else if (id == "2") {
                text.innerHTML = text2;
                    c1.innerHTML = "";
                    c2.innerHTML = "<span id ='capTitle'>Year</span><br> 2020";
                    c3.innerHTML = "<span id ='capTitle'>Team</span><br> A. Eboigbe";
                    c4.innerHTML = "<span id ='capTitle'>Services</span><br> 3D Animation";
                    text.style.content = "2";
            } else if (id == "3") {
                text.innerHTML = text3;
                    c1.innerHTML = "";
                    c2.innerHTML = "<span id ='capTitle'>Year</span> <br> 2020";
                    c3.innerHTML = "<span id ='capTitle'>Team</span> <br> A. Eboigbe";
                    c4.innerHTML = "<span id ='capTitle'>Services</span><br>   3D Modelling";
                    text.style.content = "3";
            } else if (id == "4") {
                text.innerHTML = text4;
                    c1.innerHTML = "<span id ='capTitle'>Client</span><br> Tidal";
                    c2.innerHTML = "<span id ='capTitle'>Year</span><br>  2016";
                    c3.innerHTML = "<span id ='capTitle'>Team</span><br>  A. Eboigbe & MeLo-X";
                    c4.innerHTML = "<span id ='capTitle'>Services</span><br>  Sound Design";
                    text.style.content = "4";         
            } else if (id == "5") {
                text.innerHTML = text5;
                    c1.innerHTML = "<span id ='capTitle'>Client</span> <br> Celine Clarke";
                    c2.innerHTML = "<span id ='capTitle'>Year</span> <br>  2019";
                    c3.innerHTML = "<span id ='capTitle'>Team</span> <br>  A. Eboigbe";
                    c4.innerHTML = "<span id ='capTitle'>Services</span> <br>  Sound Recording, Sound Design & Score";
                    text.style.content = "5";
            } else if (id == "6") {
                text.innerHTML = text6;
                    c1.innerHTML = "<span id ='capTitle'>Client</span> <br>  Nohri";
                    c2.innerHTML = "<span id ='capTitle'>Year</span> <br>  2019";
                    c3.innerHTML = "<span id ='capTitle'>Team</span> <br>  A. Eboigbe";
                    c4.innerHTML = "<span id ='capTitle'>Services</span> <br>  Web Development & EP Artwork";
                    text.style.content = "6";
            } else if (id == "7") {
                text.innerHTML = text7;
                    c1.innerHTML = "<span id ='capTitle'>Client</span> <br>  Heat.wav";
                    c2.innerHTML = "<span id ='capTitle'>Year</span> <br>  2017";
                    c3.innerHTML = "<span id ='capTitle'>Team</span> <br>  A. Eboigbe";
                    c4.innerHTML = "<span id ='capTitle'>Services</span> <br>  Wordmark Design";
                    text.style.content = "7";
            } else if (id == "8") {
                text.innerHTML = text8;
                    c1.innerHTML = "<span id ='capTitle'>Client</span> <br>  NXGN";
                    c2.innerHTML = "<span id ='capTitle'>Year</span> <br>  2016";
                    c3.innerHTML = "<span id ='capTitle'>Team</span> <br>  A. Eboigbe";
                    c4.innerHTML = "<span id ='capTitle'>Services</span> <br>  Wordmark Design & Song Artwork";
                    text.style.content = "8";
            } else if (id == "9") {
                text.innerHTML = text9;
                    c1.innerHTML = "<span id ='capTitle'>Client</span> <br>  Nohri";
                    c2.innerHTML = "<span id ='capTitle'>Year</span> <br>  2018";
                    c3.innerHTML = "<span id ='capTitle'>Team</span> <br>  A. Eboigbe & Jheyda McGarrell & Kyle Castro";
                    c4.innerHTML = "<span id ='capTitle'>Services</span> <br> Album Artwork";
                    text.style.content = "9";
            } else if (id == "10") {
                text.innerHTML = text10;
                    c1.innerHTML = "<span id ='capTitle'>Client</span> <br>  Mia Gladstone";
                    c2.innerHTML = "<span id ='capTitle'>Year</span> <br>  2018";
                    c3.innerHTML = "<span id ='capTitle'>Team</span> <br>  A. Eboigbe & Mia Gladstone";
                    c4.innerHTML = "<span id ='capTitle'>Services</span> <br>  Song Artwork";
                    text.style.content = "10";
            } 
    };  
}

function scrollWin(y) {
    var scrollHeight = 0;
    var slider = document.querySelector(".slider");
    var x = 600;
    var z = 50;
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    x = x * plusOrMinus;
    z = z * plusOrMinus;
    function recoil(){
        slider.scrollBy({
            top: z,
            behavior: "smooth"
        });
    };
    if (y.toString() == "0") {
        if (scrollHeight >= 0){
            slider.scrollBy({
                top: x,
                behavior: "smooth"
            });
            setTimeout(recoil, 400);
            scrollHeight += (x+z);
        }
    } else {
        return;
    }
}

function hideSlide(y) {
var slider = document.querySelector(".slider");
    if (y !=  0) {
        slider.style.display='none';
    } else {
        slider.style.display='block';
    }
}

function myFunction(y) {
    checkFeed();
    placeFeed(y);
    placeText(y);
    scrollWin(y);
    hideSlide(y)
}