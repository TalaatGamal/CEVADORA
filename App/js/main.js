
let header = document.getElementById("header")
let main = document.getElementById("main")
let body = document.getElementById("body")

    window.onload = function() {
                header.style.top="10px"
                main.style.marginTop="0vh"
            setTimeout(() => {
            body.style.overflowY="auto"
            }, 1000);

        
    }; 






// let bars    = document.getElementById("bars")
// let x_mark  = document.getElementById("x-mark")
// let sidebar = document.getElementById("sidebar")

//     bars.addEventListener("click", function () {
//         bars === true
//             sidebar.style.right="0px"
//             if (sidebar.style.right="0px") {
//                 if (bars === true) {
//                     bars.addEventListener("click", function () {
//                         sidebar.style.right="400px"
//                     });
//                 }
//             }
//         });



let bars    = document.getElementById("bars");
let x_mark  = document.getElementById("x-mark")
x_mark.style.display="none"
let side_icon = document.getElementById("side-icon");
let sidebar = document.getElementById("sidebar");

let sidebarOpen = false;

side_icon.addEventListener("click", function () {
    if (!sidebarOpen) {
        sidebar.style.right = "0px";      // افتح
        sidebarOpen = true;
        bars.style.display="none"
        x_mark.style.display="block"
        main.style.overflow="hidden"
    } else {
        sidebar.style.right = "-100vw";   // اقفل (غيّر الرقم حسب حجم السايدبار)
        sidebarOpen = false;
        x_mark.style.display="none"
        bars.style.display="block"
        main.style.overflow="auto"
    }
});

let side_list = document.querySelectorAll(".side-list li");

side_list.forEach(item => {
    item.addEventListener("click", function() {
        // alert("You clicked: " + item.textContent);
        sidebar.style.right = "-100vw";
        x_mark.style.display="none"
        bars.style.display="block"
    });
});


















document.addEventListener("DOMContentLoaded", function () {

    
    let ats = document.getElementById("ats");
    let normal = document.getElementById("normal");

    let ats_btn = document.getElementById("ats-btn");
    let normal_btn = document.getElementById("normal-btn");

    normal.style.display = "flex";
    ats.style.display = "none";

    ats_btn.addEventListener("click", function () {
        ats_btn.style.background="rgb(15, 102, 108)";
        ats_btn.style.color=" white"

        normal_btn.style.background="rgb(177, 216, 219)";
        normal_btn.style.color="black"

        normal.style.opacity="0"
        ats.style.opacity="0"
        setTimeout(() => {
            normal.style.display = "none";
            console.log("ats");
        }, 400);
        setTimeout(() => {
            ats.style.display = "flex";
        }, 500);
        setTimeout(() => {
            ats.style.opacity="1"
        }, 600);
    });

    normal_btn.addEventListener("click", function () {
        normal_btn.style.background="rgb(15, 102, 108)";
        normal_btn.style.color=" white"

        ats_btn.style.background="rgb(177, 216, 219)";
        ats_btn.style.color="black"

        ats.style.opacity="0"
        normal.style.opacity="0"
        setTimeout(() => {
            ats.style.display = "none";
            console.log("normal");
        }, 400);
        setTimeout(() => {
            normal.style.display = "flex";
        }, 500);
        setTimeout(() => {
            normal.style.opacity="1"
        }, 600);
    });
});






















window.addEventListener("scroll", function () {
    const topButton = document.querySelector(".top");
    if (window.scrollY >= window.innerHeight / 6) {
        topButton.style.display = "flex";
        setTimeout(() => {
            topButton.style.opacity="1"
        }, 100);
    } else {
        topButton.style.display = "none";
        setTimeout(() => {
            topButton.style.opacity="0"
        }, 100);
    }
});




























    document.querySelectorAll(".te-card .me").forEach(btn => {
    btn.addEventListener("click", openChoose);
    });

    let choose = document.querySelector(".choose")
    function openChoose() {
    choose.style.display = "flex";
    // reflow بسيط علشان الترانزيشن يشتغل
    choose.offsetHeight;
    choose.style.width   = "100vw";
    choose.style.height  = "100vh";
    choose.style.opacity = "1";

        if (choose.style.display="flex") {
            body.style.overflowY="hidden"
        }
        else{
            body.style.overflowY="auto"
        }

    }




































    document.getElementById("contact-form").addEventListener("submit", function(event){
        event.preventDefault();
        let arrow_icon = document.getElementById("arrow_icon")
        let send = document.getElementById("send")
        let not_send = document.getElementById("not_send")
        let loader = document.getElementById("loader")

        loader.style.display = "block";
        arrow_icon.disabled = true;

        emailjs.sendForm("direct-message", "template_dwzuvu4", this)
        .then(function() {
            loader.style.display = "none";
            arrow_icon.style.display="none"
            send.style.display="flex"
        }, function(error) {
            loader.style.display = "none";
            arrow_icon.style.display="none"
            not_send.style.display="flex"
        });
        if (loader.style.display = "block") {
            arrow_icon.style.display="none"
            send.style.display="none"
            not_send.style.display="none"
        }
    });
