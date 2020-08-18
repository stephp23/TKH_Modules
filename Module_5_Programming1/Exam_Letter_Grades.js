//Exam Letter Grades

//Prompt for numerical exam Grades
let Numerical_Exam_Grade = parseInt(prompt("What is the numerical exam grade?"));
if (Numerical_Exam_Grade == null || isNaN(Numerical_Exam_Grade) == true){
  Numerical_Exam_Grade = parseInt(prompt("Please enter a number. What is the numerical exam grade?"));
} else {
      console.log()
}
//Letter Grades
switch (true) {
  case (Numerical_Exam_Grade > 95):
    console.log("A+");
    break;
  case (Numerical_Exam_Grade > 88 && Numerical_Exam_Grade <= 90):
    console.log("A");
    break;
  case (Numerical_Exam_Grade > 84 && Numerical_Exam_Grade <= 88):
    console.log("B+");
    break;
  case (Numerical_Exam_Grade > 76 && Numerical_Exam_Grade <= 84):
    console.log("C+");
    break;
  case (Numerical_Exam_Grade > 70 && Numerical_Exam_Grade <= 76):
    console.log("C");
    break;
  case (Numerical_Exam_Grade > 67 && Numerical_Exam_Grade <= 70):
    console.log("D+");
    break;
  case (Numerical_Exam_Grade > 64 && Numerical_Exam_Grade <= 67):
    console.log("D");
    break;
  case (Numerical_Exam_Grade <= 64):
    console.log("F");
    break;
  default:
    console.log("Exam Grade Was Not Given");
}
