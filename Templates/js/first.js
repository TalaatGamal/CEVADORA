



let header = document.getElementById("header")
let main = document.getElementById("main")
let title = document.querySelector(".main .title")
let body = document.getElementById("body")
let co = document.getElementById("container")
let co_ina = document.getElementById("co-ina")
window.onload = function(){

    setTimeout(() => {
        co.style.width="90vw"
        co.style.minWidth="90vw"
        co.style.padding="30px"
        co.style.paddingTop="70px"
        main.style.paddingTop="22vh"
        title.style.opacity="1"
        
        header.style.top="10px"
    }, 400);
    setTimeout(() => {
                co_ina.style.opacity="1"

    }, 1000);
}






// let header = document.getElementById("header")
// let main = document.getElementById("main")
// let body = document.getElementById("body")

    // window.onload = function() {
    //             header.style.top="10px"
    //             main.style.marginTop="0vh"
    //         setTimeout(() => {
    //         body.style.overflowY="auto"
    //         }, 1000);

        
    // }; 

