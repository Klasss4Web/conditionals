//Conditionals
//Students Grades
const jamesGrades = 100;
const peterGrades = 69;
const paulGrades = 50;

//Comparing Peter's grade to Paul's and Jame's
if(peterGrades > paulGrades && peterGrades > jamesGrades) 
{
  console.log("Peter is the best!");
}
//Checking for Peter's, James and Paul's overall position
else if(peterGrades > paulGrades && peterGrades < jamesGrades)
{
  console.log("James is the best but Peter is beter than Paul");
}
//Checking if Peter came out last in the class
else{
  console.log("Peter did worse this year");
}

//Using the Equality sign 
const specialNum = "100";
const numeral = 100;

if(specialNum == numeral) {
  console.log("Both are equivalent numbers")
}else {
  console.log("Both are not equivalent numbers")
}

//Using the Strict Equivalence
if(specialNum === numeral) {
  console.log("Both are exact numbers")
}else {
  console.log("We are not strictly equal");
}
