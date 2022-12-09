// document.querySelector("#btn-1").addEventListener("click", test);

// function test() {
//   document.querySelector("#entered-data").innerHTML = "1";
// }
// var text = document.getElementById("input");
// var show = document.getElementById("text");
// input.addEventListener("keyup", function (event) {
//     console.log(event.getModifierState("CapsLock"))
//   if (event.getModifierState("CapsLock")) {
//     show.style.display = "block";
//   } else {
//     show.style.display = "none";
//   }
// });
// var btn1 = document.getElementById("btn-1").value;
// document.getElementById("entered-data").innerHTML = btn1;
// document.getElementById("button-one").addEventListener('click',test);
// function test (){
//     document.getElementById("input").innerHTML = "1";
// }
// var btn = document.getElementById("button-one").value;
// btn.addEventListener('click' ,test);
// function test(){
//     document.getElementById("input").innerHTML = btn;
// }

// document.getElementById("button-one").addEventListener("click" , display);
// function display(){
//     document.getElementById("input").innerHTML = Date();
// }


function myFunction(){
    var btn = document.getElementById("button-one").innerHTML;
    document.getElementById("input").value += btn;
}

function mybtntwo(){
    var btn = document.getElementById("button-two").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnthree(){
    var btn = document.getElementById("button-three").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnmul(){
    var btn = document.getElementById("button-multiply").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnfour(){
    var btn = document.getElementById("button-four").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnfive(){
    var btn = document.getElementById("button-five").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnsix(){
    var btn = document.getElementById("button-six").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnadd(){
    var btn = document.getElementById("button-add").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnseven(){
    var btn = document.getElementById("button-seven").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtneight(){
    var btn = document.getElementById("button-eight").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnnine(){
    var btn = document.getElementById("button-nine").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnsub(){
    var btn = document.getElementById("button-subtract").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnzero(){
    var btn = document.getElementById("button-zero").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtndbzero(){
    var btn = document.getElementById("button-d-zero").innerHTML;
    document.getElementById("input").value += btn;
}
function mybtnequal(){
    var btn = document.getElementById("input").value;
    document.getElementById("button-equal") = btn;
}
function mybtndiv(){
    var btn = document.getElementById("button-divide").innerHTML;
    document.getElementById("input").value += btn;
}
function myclearbtn(){
    document.getElementById("input").value = "";
}


console.log("This is a string\nthat spans across\nthree lines.");

const mixedTypedArray = [100, true, 'freeCodeCamp', {}];
console.log(mixedTypedArray);





