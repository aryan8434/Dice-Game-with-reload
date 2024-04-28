// alert("OK")

let y = Math.floor((Math.random() * 6)) + 1;
let x = Math.floor((Math.random() * 6)) + 1;

var rdi = "images/dice" + x + ".png";
var rdx = "images/dice" + y + ".png";

document.querySelectorAll("img")[0].setAttribute("src", rdi);
document.querySelectorAll("img")[1].setAttribute("src", rdx);
if (x > y) {

    document.querySelector("h1").innerHTML = "Player 1 win";
} else if (y > x) {
    document.querySelector("h1").innerHTML = "Player 2 win";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
// ttt = promt("Enter the time to reload")
// li = parseInt(ttpt)

window.setTimeout(function() {
    window.location.reload();
}, 1000);
i = 0;
console.log(i++)
    // var arr = [0, 0, 0, 0, 0, 0];
    // for (i = 0; i < 100000; i++) {
    //     arr[x - 1]++;
    // }
    // console.log(arr)

// console.log(x)
// console.log(y)

// document.createElement('<img src="dice6.png">')
// document.querySelector(".img2 src").setAttribute("images/dice3.png")