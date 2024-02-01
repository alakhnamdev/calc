let num = document.querySelectorAll(".value");
let res = document.getElementById("res");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");
let output = "";
let main = 0;
let temp = 0;
let result = false;
let display = document.getElementById("display");
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", () => {
        if (result === false) {
            output += (num[i].innerHTML);
        }
        else {
            output = "";
            output += (num[i].innerHTML);
            result = false;
        }
        display.innerHTML = output;
    });
}
res.addEventListener("click", () => {
    if (result === false) {
        display.innerHTML = eval(output);
        output = "";
        result = true;
    }
});
del.addEventListener("click", () => {
    output = output.slice(0, output.length - 1);
    display.innerHTML = output;
});
clear.addEventListener("click", () => {
    output = "";
    display.innerHTML = output;
});