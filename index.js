// 1. Find the Product....
let arr1 = [1, 2, 3, 4, 5]
let str1 = arr1[0]
let extracetdArray = arr1.slice(1)

extracetdArray.map((x) => {
    str1 *= x;
})
console.log(str1);







// 2. Find the sum.....
let arr2 = [1, 2, 3, 4, 5]
let str2 = 0;

arr2.map((x) => {
    str2 += x;
})
console.log(str2);

// Another way to approach----
// arr2.filter((x) => {
//     str2 += x;
// })
// console.log(str2);





// 3. Count occurence.......
let count = 0;
let arr3 = [3, 3, 1, 2]
arr3.map((x) => {
    if (x == 3) {
        count++;
    }
})
console.log(count);






// 4. Even Odd.......
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let B = [];
let even = 0;
let odd = 0;

let xz = arr4.map((x) => {
    if (x % 2 == 0) {
        even += x;
    }
    else {
        odd += x;
    }

})
B.push(even)
B.push(odd)
console.log(B);








// 5 Find whether the number is present or not.....
let arr5 = [5, 1, 2, 3, 4, 5, 2]
let a = 6;
for (let i = 0; i < arr5.length; i++) {
    if (a == arr5[i]) {
        console.log("Yes");
        break;
    }
    else {
        console.log("No");
        break;
    }
}

// WRONG APPROACH you can't break a statement in map function.
// console.log(arr5.map((x) => {
//     if (a == x) {
//         return true;
//         break;   //illegal break statement.
//     }
//     else {
//         return false;
//     }
// }) )






// 6. Higher Age......
let arr6 = [6, 11, 23, 3, 45, 72, 68]

let ageGreater18 = arr6.filter((x) => {
    return x >= 18;
})
console.log(ageGreater18);








// 7. Increment the array elements.....
let arr7 = [1, 2, 3, 4, 5]

let incrementBy1 = arr7.map((x) => {
    return x + 1;
})
console.log(incrementBy1);








// 8. Pass or Fail........
let arr8 = [7, 13, 89, 45, 98, 67, 45, 54]

for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] >= 32) {
        console.log("Yes");
        break;
    }
    else {
        console.log("No");
        break;
    }
}


// WRONG APPROACH-----------Syntax error.
// let passFail = arr8.filter((x) => {
//     if (x >= 32) {
//         console.log("Yes");
//         break;
//     }
//     else {
//         console.log("No");
//         break;
//     }
// })
// console.log(passFail);








// 9 Unique color shirt......
let arr9 = [3, 2, 4, 1, 2, 3];
let uniqueValue = [];
let count9 = 0;

arr9.map((x) => {
    if (!uniqueValue.includes(x)) {
        uniqueValue.push(x)
    }
    else {
        count9 = count9 + 2;
    }
}
) 
console.log(count9);  //It gives count of duplicate values.
console.log(uniqueValue);  //It gives array of unique values.
console.log(arr9.length - count9);  //It subtracts array length to count9 to give result of unique values in the main array.







// 10 Min and Max.........
let arr10 = [66, 33, 11, 44, 66, 22, 77];
let max = 0;
let min = 1000;
let maxMin = [];

arr10.map((x) => {
    if (x > max) {
        max = x;
    }
    if (x < min) {
        min = x;
    }
})
maxMin.push(min);
maxMin.push(max);
console.log(maxMin);
