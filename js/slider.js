        var mouseOut = false;

        function showMenu(y) {
            var mouseOut = false;
            var i;
            for (i = 0; i < 13; i++) {
                var x = document.getElementById(i);
                if (x.style.display == "inline-block") {
                    x.style.display = "none";
                } else if (x.style.display == "inline-block") {
                    x.style.display = "none";
                }
            };
            var feed = document.getElementById(y);
            var slider = document.querySelector(".slider");
            var doc = document.querySelector(".bigContainer");
            doc.style.overflowX = "hidden";
            slider.style.order = "4";
            maxStep = 10;
            feed.style.display = "inline-block";
            feed.style.opacity = 0.2;
            const tilt = $('.js-tilt').tilt()
            tilt.on('change', function (e, transforms) {
                document.getElementById(y)
            });
        };

        function hideMenu(y) {
            if (mouseOut == false) {
                var feed = document.getElementById(y);
                feed.style.display = "none";
                var feed = document.getElementById(y - y);
                feed.style.display = "inline-block";
                var slider = document.querySelector(".slider");
                slider.style.order = "3";
                var doc = document.querySelector(".bigContainer");
                doc.style.overflowX = "unset";
            };
        };

        function placeFeed(y) {
            var x = document.getElementById(y);
            if (y != "null") {
                if (x.style.display == "none") {
                    x.style.display = "block";
                } else if (y == 0) {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            } else {}
        }

        function checkFeed() {
            var i;
            for (i = 0; i < 15; i++) {
                var x = document.getElementById(i);
                if (x.style.display == "block") {
                    x.style.display = "none";
                } else if (x.style.display == "inline-block") {
                    x.style.display = "none";
                }
            }
        }

        function section(y) {
            var s = "s" + y;
            var head = document.getElementById(s);
            var z = "group" + y;
            var x = document.getElementById(z);
            if (x.style.display == "none" || x.style.display == "null") {
                x.style.display = "block";
                head.style.opacity = 0.1;
                head.style.border = "1px solid #f91a2a";
                head.style.borderRadius = "5px 5px 5px 5px";
            } else {
                x.style.display = "none";
                head.style.opacity = 1;
                head.style.border = "none";
            }
        };

        //VR counter and clicker
        var k = 0;

        function jump(y) {
            if (y == 0 && k <= 29) {
                k++
                console.log(k);
                counter.innerHTML = k;
                if (k == 10) {
                    counter.style.display = "block";
                } else if (k >= 20) {
                    return
                } else if (k == 29) {
                    var nabla = document.getElementById("nabla")
                    nabla.setAttribute("href", "https://studionabla.com/vr")
                }
            };
            placeText(y);
            hideSlide(y);
            var doc = document.querySelector(".bigContainer");
            doc.style.overflowX = "unset";
            var feed = document.getElementById(y);
            feed.style.display = "inline-block";
            feed.style.opacity = 1;
        };

        function hideSlide(y) {
            var slider = document.querySelector(".slider");
            if (y != 0) {
                slider.style.display = 'none';
                maxStep = 30;
            } else {
                slider.style.display = 'block';
            }
        }

        function myFunction(y) {
            if (y != 0) {
                var feed = document.getElementById(0);
                feed.style.display = "none";
            };
            placeText(y);
            hideSlide(y);
            var feed = document.getElementById(y);
            feed.style.display = "inline-block";
            feed.style.opacity = 1;
            var doc = document.querySelector(".bigContainer");
            doc.style.overflowX = "unset";
        }

        function CDchat() {
            var CDchat = document.getElementById("#CDchat");
            console.log(CDchat)
            if (CDchat.style.display != "none") {
                CDchat.style.display = "none";
            } else {
                CDchat.style.display = "block";
            }
        }