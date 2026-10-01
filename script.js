// let num1 = 5;
// let num2 = 0;
// let operator = '/';
// if (operator === '+') {
//     console.log(num1 + num2);
// }
// else if (operator === '-') {
//     console.log(num1 - num2);
// }
// else if (operator === '*') {
//     console.log(num1 * num2);
// }
// else if (operator === '/') {
//     if (num2 !== 0) {
//         console.log(num1 / num2);
//     } else {
//         console.log('Error: Division by zero');
//     }
// }
// else {
//     console.log('Invalid operator');
// }



// store student mark
let mark = 44;

// add bouns mark
mark += 5;

// grade using if else
let grade;
if (mark >= 90 && mark <= 100) {
    grade = 'A';
}
else if (mark >= 70 && mark < 89) { 
    grade = 'B';
}
else if (mark >= 50 && mark < 69) {
    grade = 'C';
}
else {
    grade = 'F';
}

// pass or fail using ternary operator
let result = (mark >= 50) ? 'Pass' : 'Fail';

// grade using switch case
let remark;
switch (grade) {
    case 'A':
        remark = 'Excellent';
        break;
    case 'B':
        remark = 'Good';
        break;
    case 'C':
        remark = 'Average';
        break;
    case 'F':
        remark = 'Needs Improvement';
        break;
    default:
        remark = 'Invalid grade';
}
console.log('Mark:', mark);
console.log('Grade:', grade);
console.log('Result:', result);
console.log('Remark:', remark);