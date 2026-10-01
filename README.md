# 🎓 Student Grade Calculator
 
A simple JavaScript project that demonstrates the use of **variables**, **assignment operators**, **conditional statements**, **ternary operators**, and **switch statements** to evaluate student performance and generate meaningful results. 🚀
 
## ✨ Features
 
- 📝 Store student marks (0–100) in a variable.
- ➕ Add bonus marks using the `+=` assignment operator.
- 🎯 Determine the student's grade using `if...else` statements.
- ✅ Check Pass/Fail status using a ternary operator.
- 💬 Provide remarks using a `switch` statement.
- 🖥️ Display all results in the console.
 
## 📊 Grading Criteria
 
| Marks Range | Grade |
|------------|--------|
| 90–100 | 🏆 A |
| 70–89 | 🎉 B |
| 50–69 | 👍 C |
| Below 50 | ❌ F |
 
## ✅ Pass/Fail Criteria
 
```javascript
marks >= 50 ? "Pass" : "Fail";
```
 
## 💬 Remarks
 
| Grade | Remark |
|--------|---------|
| 🏆 A | Excellent! 🌟 |
| 🎉 B | Good 😊 |
| 👍 C | Average 😐 |
| ❌ F | Needs Improvement 📚 |
 
## 💻 Code Example
 
```javascript
// Store student marks
let marks = 75;
 
// Add bonus marks
marks += 5;
 
let grade;
 
// Determine grade
if (marks >= 90 && marks <= 100) {
grade = "A";
} else if (marks >= 70) {
grade = "B";
} else if (marks >= 50) {
grade = "C";
} else {
grade = "F";
}
 
// Determine Pass/Fail
let result = marks >= 50 ? "Pass" : "Fail";
 
// Give remarks based on grade
let remark;
 
switch (grade) {
case "A":
remark = "Excellent!";
break;
case "B":
remark = "Good";
break;
case "C":
remark = "Average";
break;
case "F":
remark = "Needs Improvement";
break;
default:
remark = "Invalid Grade";
}
 
// Print results
console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Remark:", remark);
```
 
## 📌 Sample Output
 
```text
Marks: 80
Grade: B
Result: Pass
Remark: Good
```
 
## 📚 Concepts Covered
 
- 🔹 Variables (`let`)
- 🔹 Assignment Operators (`+=`)
- 🔹 Conditional Statements (`if...else`)
- 🔹 Ternary Operator (`?:`)
- 🔹 Switch Statements
- 🔹 Console Output
 
## 🎯 Learning Objectives
 
By completing this project, you will learn:
 
1. 📝 How to store and update values in variables.
2. 🤔 How to make decisions using conditional statements.
3. ⚡ How to use the ternary operator for quick conditions.
4. 🔄 How to use switch statements for multiple outcomes.
5. 🖥️ How to display information in the console.
 
## 🚀 Getting Started
 
1. Clone this repository:
```bash
git clone https://github.com/your-username/student-grade-calculator.git
```
 
2. Navigate to the project folder:
```bash
cd student-grade-calculator
```
 
3. Run the JavaScript file:
```bash
node app.js
```

 ## 👨‍💻 Connect With Me
 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-SathishKumar%20SR-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sathishkumar-sr-a487a8220/)
