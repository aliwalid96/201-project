'use strict';
let thetrue=0;
let userName=prompt("enter your name ").toLowerCase();
alert("you are welcome mr "+userName);
alert("please answer the next question with yes or no");
let myAge=prompt("do you know how old am I  ");
let university=prompt("do you think I study in the university");
let studying=prompt("do you think I can study alone  ");
let improvement =prompt("do you think I am self learner ");
let favcolor=prompt("do you know if the green is my  favourate color  ")
checker(myAge);
checker(university);
checker(studying);
checker(improvement);
checker(favcolor);

alert("you answer corectly  "+thetrue +"time ");

function checker(answer){
   if(answer.toLowerCase()=="yes"||answer.toLowerCase()=="no"||answer.toLowerCase()=="y"||answer.toLowerCase()=="n"){
     
      console.log("your answer is correct")
   }else{
    alert("please change this answer  " +answer+" with yes or no  ") ;
    
    
   }
   if(answer.toLowerCase()=="yes"||answer.toLowerCase()=="y"){
      thetrue++;
}

}