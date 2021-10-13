// JavaScript Basics 3 Homework
//
// 1. Create a function that adds up the integers in the following array
var sum = 0;
var numbers = [10, 20, 30, 40, 50];
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
//
//
// 2. Create a function that reverses the following array
var array2 = [];
var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < array1.length; i++) {
  array2.unshift(array1[i]);
}
console.log(array2);
//
//
// 3. Implement Fizz Buzz.
for (var i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
//
//
// 4. construct the following pattern
/* var s = "*";
var arrmain = [];
for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {

  }
  arrmain.push(s);
}

console.log(arrmain);
 */
// Never could get anything to work. Ended up looking online for solution.
// Turns out I was not even on the right track.
// I kept thinking I had to use an array for some reason.
//
/* var x, y, chr;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + "*";
  }
  console.log(chr);
  chr = "";
} */
