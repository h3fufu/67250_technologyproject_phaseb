// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);

// var A = 'Hello ';
// var B = 'world!';
// var C = A + B;
// console.log(C);

// function sumnPrint(x1, x2) {
//     return x1 + x2;
// }

// console.log(sumnPrint(x, y));
// console.log(sumnPrint(A, B));

// if (C.length > z) {
//     console.log(C);
// } else if (C.length < z) {
//     console.log(z);   
// } else {
//     console.log('good job!')
// }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === "Banana") {
//             alert("Banana found at index " + i + "!");
//         }
//     }
// }

// findTheBanana(L1)
// findTheBanana(L2)

// L1.forEach((element, index) => {
//     if (element === "Banana") {
//         alert("We found a banana in the first array at index " + index + "!");
//     }
// });

// L2.forEach((element, index) => {
//     if (element === "Banana") {
//         alert("We found a banana in the first array at index " + index + "!");
//     }
// });

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var greet = document.getElementById("greeting");

    if (hour >= 5 && hour < 12) {
        greet.innerHTML = "Good morning. Welcome to Monomuse";
    } else if (hour >= 12 && hour < 18) {
        greet.innerHTML = "Good afternoon. Welcome to Monomuse";
    } else if (hour >= 18 && hour < 20) {
        greet.innerHTML = "Good evening. Welcome to Monomuse";
    } else {
        greet.innerHTML = 'Good night. Welcome to Monomuse';
    }
}

var currentPage = window.location.href;
console.log(currentPage);

if (currentPage.includes("index.html")) {
    greeting(hour);
}

function addYear() {
    var year = now.getFullYear();
    var footer = document.getElementById("copyYear");
    footer.innerHTML = "&copy; " + year + " Monomuse. All rights reserved.";
}

