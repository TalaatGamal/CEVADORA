
    // mode
    // nite and daytime

let night = document.getElementById("night");
let daytime = document.getElementById("daytime");

// let body = document.getElementById("body");
// let header = document.getElementById("header");
let pri = document.getElementById("pri");
let header_i = document.querySelectorAll("header i");
let begin_btn = document.getElementById("tr");
// let ani_line = document.querySelectorAll(".ani-line");

    night.style.display="block"
    daytime.style.display="none"

    night.addEventListener("click", function() {
        daytime.style.display = "block";
        night.style.display = "none";

        body.style.background="linear-gradient(330deg , #00d6c1 -30% , rgb(0, 0, 0) ,rgb(0, 0, 0) , #00d6c1 125%)";
        body.style.color="rgb(188, 212, 214)"

        header.style.background="rgba(0, 0, 0, 0.515)"

        pri.style.background="#006e6b"

        header_i.forEach(function(el) {
        el.style.color = "#74e6ff";
        });

        begin_btn.style.background="#001e2f6e"
        
        // ani_line.forEach(function(ol) {
        // ol.style.backgroundColor = " #00ffaa";
        // });

        
        
        console.log("Night")
    });
    daytime.addEventListener("click", function() {
        night.style.display = "block";
        daytime.style.display = "none";
        
        body.style.background="linear-gradient(330deg , #00d6c1 -30% , #C6D9DA ,#C6D9DA , #00d6c1 125%)";
        body.style.color="rgb(53, 66, 65)"

        header.style.background="rgba(221, 233, 230, 0.515)"

        pri.style.background="#dee9e9"

        header_i.forEach(function(el) {
        el.style.color = " #418696";
        });

        begin_btn.style.background=" #d3d9dca6"
        
        // ani_line.forEach(function(ol) {
        // ol.style.backgroundColor = " #418696";
        // });

        console.log("DayTime")
    });


