// Personal Budgeting App

//Prompts to gather financial info from customer

//Weekly Income
let Weekly_Income = parseInt(prompt("What is your Weekly Income?"));
if (Weekly_Income == null || isNaN(Weekly_Income) == true){
      Weekly_Income = prompt("Please enter a number. What is your Weekly Income?");
} else {
      console.log();
}
//Weekly Food Cost
let Food_Cost = parseInt(prompt("What is your Weekly Food Cost?"));
if (Food_Cost == null || isNaN(Food_Cost) == true){
      Food_Cost = prompt("Please enter a number. What is your Weekly Food Cost?");
} else {
      console.log();
}
//Weekly Housing Cost
let Housing_Cost = parseInt(prompt("What is your Weekly Housing Cost?"));
if (Housing_Cost == null || isNaN(Housing_Cost) == true){
      Housing_Cost = prompt("Please enter a number. What is your Weekly Housing Cost?");
} else {
      console.log();
}
//Weekly Transportation Cost
let Transportation_Cost = parseInt(prompt("What is your Weekly Transportation Cost?"));
if (Transportation_Cost == null || isNaN(Transportation_Cost) == true){
      Transportation_Cost = prompt("Please enter a number. What is your Weekly Transportation Cost?");
} else {
      console.log();
}

//Weekly Other Cost
let Other_Cost = parseInt(prompt("Do you have any Other Cost?"));
if (Other_Cost == null || isNaN(Other_Cost) == true){
      Other_Cost = prompt("Please enter a number. What is your Weekly Other Cost?");
} else {
      console.log();
}

//Yearly Savings Goal
let Goal_Yearly_Savings = parseInt(prompt("How much do you want to save in a year?"));
if (Goal_Yearly_Savings == null || isNaN(Goal_Yearly_Savings) == true){
      Goal_Yearly_Savings = prompt("Please enter a number. How much do you want to save in a year?");
} else {
      console.log();
}

const Weeks_per_NonLeap_Year = 52;

//Savings per Week
let Goal_Weekly_Savings = (Goal_Yearly_Savings / Weeks_per_NonLeap_Year);

let Total_Weekly_Cost = (Food_Cost + Housing_Cost + Transportation_Cost + Other_Cost);

let Real_Weekly_Savings = (Weekly_Income - Total_Weekly_Cost);

let Diff_Realsavings_vs_Goalsavings = (Goal_Weekly_Savings - Real_Weekly_Savings);


//Are we saving enough weekly, to meet our yearly savings goal?
let Savings_Status;
if (Real_Weekly_Savings > Goal_Weekly_Savings) {
      Savings_Status = ("You are on track to meet your Yearly Savings Goal!")
} else {
  Savings_Status = ("You need to save at least " + Diff_Realsavings_vs_Goalsavings + " more dollars per week to try and reach your weekly savings goal");
}

console.log(Savings_Status);
