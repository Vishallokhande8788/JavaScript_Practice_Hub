// If-Else Practice Code in JavaScript

// Check if a number is positive, negative, or zero
function checkNumber(n) {
    if (n > 0) {
        console.log("Positive Number");
    } else if (n < 0) {
        console.log("Negative Number");
    } else {
        console.log("Zero");
    }
}

// Check if a number is even or odd
function checkEvenOdd(n) {
    if (n % 2 === 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

// Check age category
function checkAge(age) {
    if (age < 18) {
        console.log("Minor");
    } else if (age >= 18 && age < 60) {
        console.log("Adult");
    } else {
        console.log("Senior Citizen");
    }
}

// Assign grade based on marks
function gradeMarks(marks) {
    if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 75) {
        console.log("Grade: B");
    } else if (marks >= 50) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }
}

// Find the largest of three numbers
function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`Largest: ${a}`);
    } else if (b >= a && b >= c) {
        console.log(`Largest: ${b}`);
    } else {
        console.log(`Largest: ${c}`);
    }
}

// Check if a year is a leap year
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap Year`);
    } else {
        console.log(`${year} is not a Leap Year`);
    }
}

// Check if a character is a vowel or consonant
function checkVowelOrConsonant(char) {
    char = char.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(`${char} is a Vowel`);
    } else if (char >= 'a' && char <= 'z') {
        console.log(`${char} is a Consonant`);
    } else {
        console.log("Invalid Character");
    }
}

// Check if a person is eligible to vote
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible to Vote");
    }
}

// Check if a number is divisible by both 3 and 5
function checkDivisibleBy3And5(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`${num} is divisible by both 3 and 5`);
    } else {
        console.log(`${num} is not divisible by both 3 and 5`);
    }
}

// Test the functions
checkNumber(-5);
checkEvenOdd(10);
checkAge(45);
gradeMarks(82);
maxOfThree(5, 12, 8);
checkLeapYear(2024);
checkVowelOrConsonant('A');
checkVotingEligibility(20);
checkDivisibleBy3And5(15);
