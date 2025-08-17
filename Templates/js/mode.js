
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

        body.style.background="linear-gradient(330deg , #007d8eff -30% , #242424ff , #292929ff , #007d8eff 135%)";
        body.style.color="rgb(188, 212, 214)"

        header.style.background="rgba(0, 91, 91, 0.72)"

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
        
        body.style.background="linear-gradient(330deg , #00606b -30% , #C6D9DA , #C6D9DA , #008094 125%)";
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












// responsive design
// responsive design
// responsive design
// responsive design
// responsive design
// responsive design
// responsive design
// responsive design







let night2 = document.getElementById("night2");
let daytime2 = document.getElementById("daytime2");

// let body = document.getElementById("body");
// let header = document.getElementById("header");
let pri2 = document.getElementById("pri2");
let header_i2 = document.querySelectorAll("header i");
let begin_btn2 = document.getElementById("tr");
// let ani_line = document.querySelectorAll(".ani-line");

    night2.style.display="block"
    daytime2.style.display="none"

    night2.addEventListener("click", function() {
        daytime2.style.display = "block";
        night2.style.display = "none";

        // body.style.background="linear-gradient(330deg , #00606b -30% , #000000ff , #000000ff , #008094 125%)";
                body.style.background="linear-gradient(330deg , #007d8eff -30% , #001712ff , #001712ff , #007d8eff 125%)";

        body.style.color="rgb(188, 212, 214)"

        header.style.background="rgba(0, 91, 91, 0.72)"

        pri2.style.background="#006e6b"

        header_i2.forEach(function(el) {
        el.style.color = "#74e6ff";
        });

        begin_btn2.style.background="#001e2f6e"
        
        // ani_line.forEach(function(ol) {
        // ol.style.backgroundColor = " #00ffaa";
        // });

        
        
        console.log("Night")
    });
    daytime2.addEventListener("click", function() {
        night2.style.display = "block";
        daytime2.style.display = "none";
        
        body.style.background="linear-gradient(330deg , #00606b -30% , #C6D9DA , #C6D9DA , #008094 125%)";
        body.style.color="rgb(53, 66, 65)"

        header.style.background="rgba(221, 233, 230, 0.515)"

        pri2.style.background="#dee9e9"

        header_i2.forEach(function(el) {
        el.style.color = " #418696";
        });

        begin_btn2.style.background=" #d3d9dca6"
        
        // ani_line.forEach(function(ol) {
        // ol.style.backgroundColor = " #418696";
        // });

        console.log("DayTime")
    });


