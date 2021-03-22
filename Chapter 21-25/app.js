// // 1. Write a program that takes two user inputs for first and 
// // last name using prompt and merge them in a new variable 
// // titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter Full Name");
// var lastName = prompt("Enter Last Name");

// var fullName = ("Hello " + firstName + " " + lastName);

// document.write(fullName);



// // 2. Write a program to take a user input about his favorite 
// // mobile phone model. Find and display the length of user 
// // input in your browser

// var model = prompt("Enter Mobile Phone Model");

// var display = ("My favourite phone is: " + model);

// document.write(display);

// var length = model.length;
// document.write("<br>");
// document.write("Length of string: " + length);


// // 3. Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser .

// var str = "Pakistani";
// var display = str.indexOf("n");

// document.write(display);


// // 4. Write a program to find the last index of letter “l” in the 
// // word “Hello World” and display the result in your browser.

// var str = "Hello World";
// var n = str.lastIndexOf("l");

// document.write("String: " + str);
// document.write("<br>");
// document.write("Last index of 'l': " + n);
 


// // 5. Write a program to find the character at 3rd index in the 
// // word “Pakistani” and display the result in your browser.

// var str = "Pakistani";
// var index = str.charAt(3);

// document.write("String: " + str);
// document.write("<br>");
// document.write("Character at index 3: " + index);


// // 6. Repeat Q1 using string concat() method.


// var greet = "Hello ";
// var firstName = prompt("Enter Full Name");
// var empty = " ";
// var lastName = prompt("Enter Last Name");

// var fullName = greet.concat(firstName, empty, lastName);
// document.write(fullName);



// // 7. Write a program to replace the “Hyder” to “Islam” in the 
// // word “Hyderabad” and display the result in your browser.


// var str = "Hyderabad";
// var replace = str.replace("Hyder", "Islam");

// document.write("City: " + str);
// document.write("<br>");
// document.write("After replacement: " + replace);    



// // 8. Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.
// // var message = “Ali and Sami are best friends. They play cricket and 
// // football together.”;

// var str = "Ali and Sami are best friends. They play cricket and football together."
// var replace = str.replaceAll("and" , "&");

// document.write(replace);


// // 9. Write a program that converts a string “472” to a number 
// // 472. Display the values & types in your browser.

// var str = "472";
// var num = parseInt(str);

// document.write("Value: " + str);
// document.write("<br>");
// document.write("Type: " + typeof str);
// document.write("<br>");
// document.write("Value: " + num);
// document.write("<br>");
// document.write("Type: " + typeof num);


// // 10. Write a program that takes user input. Convert and 
// // show the input in capital letters.

// var input = prompt("Enter Any Word");
// var caps = input.toUpperCase();

// document.write("User input: " + input);
// document.write("<br>");
// document.write("Upper case: " + caps);


// // 11. Write a program that takes user input. Convert and 
// // show the input in title case.

// var str = prompt("Enter any word");

// document.write(

// str.split(' ')
//    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
//    .join(' ')

// )


// // 12. Write a program that converts the variable num to string.
// // var num = 35.36 ;
// // Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var replace = num.split(".").join("")
// var n = replace.toString();

// document.write("Number: " + num);
// document.write("<br>");
// document.write("Result: " + n);


// // 13. Write a program to take user input and store username 
// // in a variable. If the username contains any special symbol 
// // among [@ . , !], prompt the user to enter a valid username. 
// // For character codes of [@ .
// // Note:
// // ASCII code of ! is 33
// // ASCII code of , is 44
// // ASCII code of . is 46
// // ASCII code of @ is 64



// // 15. Write a program to take password as an input from 
// // user. The password must qualify these requirements:
// // a. It should contain alphabets and numbers
// // b. It should not start with a number
// // c. It must at least 6 characters long
// // If the password does not meet above requirements,
// // prompt the user to enter a valid password.
// // For character codes of a-z, A-Z & 0-9, refer to ASCII
// // table at the end of this document.




// // 16. Write a program to convert the following string to an 
// // array using string split method.
// // var university = “University of Karachi”;
// // Display the elements of array in your browser.

// var str = "University of Karachi";
// var method = str.split("");

// document.write(method);


// // 17. Write a program to display the last character of a user input.

// var str = prompt("Enter a word");
// var res = str.charAt(str.length-1);

// document.write("User input: " + str);
// document.write("<br>");
// document.write("Last character of input: " + res);


// // 18. You have a string “The quick brown fox jumps over the 
// // lazy dog”. Write a program to count number of 
// // occurrences of word “the” in given string

var str = "The quick brown fox jumps over the lazy dog";
var res = str.match(/the/);

document.write(res);
