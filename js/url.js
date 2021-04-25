        document.addEventListener("DOMContentLoaded", function () {
            var url = "https://nabla.ooo/"; //TODO
            //var url = "http://127.0.0.1:5500/";
            //var url = "192.168.x:5500/";
            if (window.location == url) {
                myFunction(0);
            } else if (window.location == url + `#LysergicVisual`) {
                myFunction(1);
            } else if (window.location == url + `#3DGraphics`) {
                section(1);
            } else if (window.location == url + `#cyberShades`) {
                myFunction(3);
            } else if (window.location == url + `#TidalXl1015`) {
                myFunction(4);
            } else if (window.location == url + `#FourYearsLater`) {
                myFunction(5);
            } else if (window.location == url + `#nohri.net`) {
                myFunction(6);
            } else if (window.location == url + `#Heat.wav`) {
                myFunction(7);
            } else if (window.location == url + `#NXlGN`) {
                myFunction(8);
            } else if (window.location == url + `#Realms`) {
                myFunction(9);
            } else if (window.location == url + `#Revolutionize`) {
                myFunction(10);
            } else if (window.location == url + `#nohri.xyz`) {
                myFunction(11);
            } else if (window.location == url + `#aite.dev`) {
                myFunction(12);
            } else if (window.location == url + `#staysafe`) {
                myFunction(13);
            } else if (window.location == url + `#EkoDigital`) {
                myFunction(14);
            } else {
                myFunction(0);
            }
        })