// // 1. Write a program that takes a positive integer from user &
// // display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var num = prompt("Enter Positive Number");
// var num2 = Math.round(num)
// var num3 = Math.floor(num);
// var num4 = Math.ceil(num);

// document.write("number: " + num);
// document.write("<br>");
// document.write("round off value: " + num2);
// document.write("<br>");
// document.write("floor value: " + num3); 
// document.write("<br>");
// document.write("ceil value: " + num4);


// // 2. Write a program that takes a negative floating point
// // number from user & display the following in your browser.
// // a. number
// // b. round off value of the number
// // c. floor value of the number
// // d. ceil value of the number

// var num = prompt("Enter Negative Number");
// var num2 = Math.round(num)
// var num3 = Math.floor(num);
// var num4 = Math.ceil(num);

// document.write("number: " + num);
// document.write("<br>");
// document.write("round off value: " + num2);
// document.write("<br>");
// document.write("floor value: " + num3); 
// document.write("<br>");
// document.write("ceil value: " + num4)


// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = Math.abs(-4);
// document.write("The absolute value of -4 is " + num);


// // 6. Write a program that shows a random number between 1 
// // and 100 in your browser.

// var randomNumber = Math.random();
// var improvedNumber = (randomNumber * 100) + 1;
// var num = Math.ceil(improvedNumber);
// document.write(num);



// // 8. Write a program that stores a random secret number from 
// // 1 to 10 in a variable. Ask the user to input a number 
// // between 1 and 10. If the user input equals the secret 
// // number, congratulate the user.

var num = Math.random() * 10;
var improvedNumber = Math.ceil(num);

var guessNumber = prompt("Guess the number between 1 and 10");
if(prompt === improvedNumber){
    document.write("Congratulations! Your answer is correct");
}
else{
    document.write("Not matched, the number was " + improvedNumber);
}