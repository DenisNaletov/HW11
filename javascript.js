// task 1
let f1 = function(a, b) {
    if(a > b) {
        alert("a > b");
    } else if (a < b) {
            alert("a < b");
        }
    else if (a===b) {
        alert("a === b")
    }
    else alert("a == b");
}
console.log(f1(4, 4));

// task2
let f2 = function (){
    let num = prompt('Input number', 'number');
    let res = typeof (+num);
    if(res === 'number' && num % 10 === 0) {
        console.log("TRUE");
    } else console.log("FALSE")
}
// task 3
let f3 = function (){
    for(let i = 1; i < 10; i++) {
        alert(i);
    }
}

// task 4
let f4 = function () {
    let num = prompt('Input number', 'number');
    if (isNaN(num)){
        num = 1;
    }
    for(let i = +num; i < 20; i++) {
        alert(i);
    }
}



