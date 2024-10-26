//Question one
// Step 1: Create a variable `number` and assign it an integer
/*let number = -5;

// Step 2: Use an if-else block to check if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
*/

//Question two
// Step 1: Create a variable `day` and assign it the name of any day
/*let day = 'Saturday';

// Step 2: Use a switch statement to determine if it's a weekday or weekend
switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log(day + " is a weekday.");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(day + " is a weekend.");
        break;
    default:
        console.log("Invalid day entered.");
}
*/

//Question three
// Step 1: Use a for loop to iterate from 1 to 10
/*for (let i = 1; i <= 10; i++) {
    // Step 2: Print each number in the loop
    console.log(i);
}
*/

//Question four
// Step 1: Create a variable `count` and initialize it to 1
/*let count = 1;

// Step 2: Use a while loop to print the multiplication table of 5 until 5 × 10
while (count <= 10) {
    // Step 3: Print each step of the multiplication table
    console.log(`5 × ${count} = ${5 * count}`);
    count++; // Increment count after each iteration
}
*/

//Question five
// Step 1: Declare and initialize a variable `number` with a value of 0
/*let number = 0;

// Step 2: Write a do-while loop that increments the number until it’s greater than 10
do {
    // Step 4: Print the current value of the number
    console.log("The number is:", number);
    
    // Step 3: Increment the number by 1
    number++;
} while (number <= 10);
*/

//Question six
// Step 1: Use a for loop to iterate from 1 to 10
/*for (let i = 1; i <= 10; i++) {
    // Step 2: Use a break statement to exit the loop when i is 5
    if (i === 5) {
        break;
    }
    
    // Step 3: Print each number in the loop
    console.log(i);
}
*/

//Question seven
// Step 1: Use a for loop to iterate from 1 to 20
/*for (let i = 1; i <= 20; i++) {
    // Step 2: Use a continue statement to skip odd numbers
    if (i % 2 !== 0) {
        continue;
    }
    
    // Step 3: Print each even number
    console.log(i);
}
*/

//Question eight
// Step 1: Define a function that takes two parameters
/*function divideNumbers(num1, num2) {
    try {
        // Step 2: Attempt division and throw an error if num2 is zero
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        
        // Division is successful, print the result
        let result = num1 / num2;
        console.log("The result of the division is:", result);
        
    } catch (error) {
        // Step 3: Catch the error and print an error message
        console.log("Error:", error.message);
        
    } finally {
        // Step 4: Finally block that runs regardless of success or failure
        console.log("Division attempt complete.");
    }
}

// Test the function with two numbers
divideNumbers(10, 2);  // Should print the result
divideNumbers(10, 0);  // Should print an error message
*/

//Question nine
// Step 1: Define the function `multiply`
/*function multiply(num1, num2) {
    // Step 2: Return the product of the two numbers
    return num1 * num2;
}

// Step 3: Call the function with any two numbers
let result = multiply(6, 7);

// Step 4: Print the result using console.log()
console.log("The product of the two numbers is:", result);
*/

//Question ten
// Step 1: Use a for loop to iterate from 1 to 30
for (let i = 1; i <= 30; i++) {
    // Step 2: Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Print 'FizzBuzz'
    }
    // Step 3: Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log("Fizz"); // Print 'Fizz'
    }
    // Step 4: Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz"); // Print 'Buzz'
    }
    // Step 5: If not divisible by 3 or 5, print the number itself
    else {
        console.log(i); // Print the number
    }
}
