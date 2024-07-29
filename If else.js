let mark = 85; // You can change this value to test different marks
let grade;

if (mark >= 90 && mark <= 100) {
    grade = "A";
} else if (mark >= 80 && mark < 90) {
    grade = "B";
} else if (mark >= 70 && mark < 80) {
    grade = "C";
} else if (mark >= 60 && mark < 70) {
    grade = "D";
} else if (mark >= 50 && mark < 60) {
    grade = "E";
} else if (mark < 50) {
    grade = "F";
} else {
    grade = "Invalid mark";
}

console.log("The grade is: " + grade);
