
//functiom with peramiter/argoment+++++++++++++++

function morshed(x1, x2, x3, x4) {
    return (((x1 + x2) * x3) % x4);
}
console.log(morshed(5, 5, 3, 9));
console.log("break")
//Function with Swith
function subo(type, x1, x2) {
    switch (type) {
        case 'add':
            return x1 + x2;
        case 'sub':
            return x1 - x2;
        case 'mul':
            return x1 * x2;
        case 'div':
            return x1 / x2;
    }
}
console.log(subo("add", 10, 20));
console.log(subo("sub", 100, 20));
console.log(subo("mul", 10, 20));
console.log(subo("div", 100, 20));
//new........................///
//Funcition calld in own(recursive function )
function number(num) {
    console.log(num);
    if (num > 0) {
        number(num - 1);
    }
}
number(3);
//new........................///
// controlflow++++++++++++++++++++++++++++
//if---------------------
var age = -9;
if (age <= 0) {
    console.log("You are  not bron");
} else if (age == 1 && age < 18) {
    console.log("You are a Child")
} else if (age >= 18 && age <= 35) {
    console.log("Cngratulation, You are a Adult");
} else if (age > 35 && age <= 50) {
    console.log("You are a Half Old Man");
} else if (age > 50 && age <= 65) {
    console.log("Now You are a Old Man");
}
else {
    console.log("You are not in the world");
}
//Nested If--------
var age = 7;
var gender = "Female";
if (age >= 18) {
    if (gender === "Female") {
        console.log("You are a Adult Woman");
    } else if (age >= 23) {
        if (gender === "Male") {
            console.log("You are a Adult Man");
        }
    }
} else {
    console.log("You are not a Adult");
}

//Switch------------------
var Man = 2;
switch (Man) {
    case 1:
        console.log("Morshed");
        break;
    case 2:
        console.log("Rakib");
        break;
    case 3:
        console.log("Rohim")
        break;
}


//loop++++++++++++++++++++++++++++++++++++
//while-----------------
var start = 1;
while (start < 2) {
    console.log("3" + " X " + start + " = " + (3 * start));
    start++;
}


//for-------------------


//even number
for (let i = 0; i < 2; i += 2) {
    console.log(i);
}
console.log("break")
//odd number
for (let i = 1; i < 2; i += 2) {
    console.log(i);
}
console.log("break")
//number 0-9
for (let i = 0; i < 2; i++) {
    console.log(i);
}
console.log("break")
//number 10-1
for (let i = 2; i > 0; i--) {
    console.log(i);
}
console.log("break")
//match
//1-100 all number dived by 7 and dived last 5 As all number
for (let i = 1; i < 51; i++) {
    if (i > 7 && i % 7 == 5) {
        console.log(i);
    }
}
//ghor
var ghor = 9;
let i = 1;
for (i; i <= 3; i++) {
    console.log(ghor + " x " + i + " = " + (i * ghor));
}
//break
console.log("If break")
for (var i1 = 0; i1 < 10; i1++) {
    if (i1 == 5) {
        break;
    }
    console.log(i1);
}
//break
console.log("If Continue")
for (var i1 = 3; i1 < 8; i1++) {
    if (i1 == 5) {
        continue;
    }
    console.log(i1);
    //where is 5?..!!
}

//Array++++++++++++++++++++++++++++
var names = ["Morshed", "Rahim", "Karim", "Sanjid",
    "Anika"];
// console.log(ArraySubo[2]);
for (var j = 0; j < names.length; j++) {
    console.log(names[j]);
}

//10- boro 50 theke chto
var work = [1, 7, 44, 22, 33, 33, 22, 66, 50, 10, 11, 59]
for (let x = 0; x < work.length; x++) {
    let x1 = work[x];
    if (x1 > 10 && x1 < 50) {
        console.log(x1);
    }
}
//
console.log("even")
//even number
var work = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let x = 0; x < work.length; x++) {
    let x1 = work[x];
    if (x1 % 2 == 0) {
        console.log(x1);
    }
}
console.log("odd")
//odd number
var work = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let x = 0; x < work.length; x++) {
    let x1 = work[x];
    if (x1 % 2 == 1) {
        console.log(x1);
    }
}
//task......(break and Continue)
console.log("Task")
var task = [7, 10, 17, 22, 24, 27, 32, 31, 35, 40, 55, 45, 59, 65, 66];
for (let x = 0; x < task.length; x++) {
    let A = task[x];
    if (A % 7 == 3) {
        if (A % 6 == 3) {
            console.log("last value = " + A)
            break;
        }
        continue;
    }
    console.log(A)
}

function a(){
    let a=3;
    let b=5;
    console.log(a+b);
};

//readline++++++++++++++++++++++++++++++++++++
//Get data from user

/*const readline = require('readline');
const Test = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
Test.question('Please Morshed Enter the First value = ', (first) => {
    Test.question('Please Morshed Enter the Second value = ', (second) => {
        const sum = parseInt(first) + parseInt(second);
        console.log(`Congratulation Morshed Your Result is = ${sum}`);
        Test.close();
    });
});*/
