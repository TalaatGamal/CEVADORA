
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















    // let ats = document.querySelectorAll("ats");
    // let normal = document.getElementById("normal");

    // let ats_btn = document.querySelectorAll("ats-btn");
    // let normal_btn = document.getElementById("normal-btn");

    //     normal.style.display="flex"
    //     ats.style.display="none"

    //     ats.addEventListener("click", function() {
    //         ats.style.display = "flex";
    //         normal.style.display = "none";

    //         console.log("ats")
    //     });
        
    //     normal.addEventListener("click", function() {
    //         ats.style.display = "none";
    //         normal.style.display = "flex";

    //         console.log("normal")
    //     });
    //     if (normal.style.display="flex") {
    //         ats.style.display = "none";
    //     }
    //     else{
    //         ats.style.display="flex"
    //     }












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

