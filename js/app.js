'use strict'
let userName=prompt("enter your name ");
alert("you are welcome mr "+userName)
alert("please answer the next question with yes or no");
let learning=prompt("do you think the programming is hard ");
let university=prompt("do you think if you didnt study in the university you cant learn it");
let studying=prompt("do you want to start learning  ");
let improvement =prompt("do you want to ipmrove your live ");
let understood=prompt("did you understand the rules to became programmer  ")
checker(learning);
checker(university);
checker(studying);
checker(improvement);
checker(understood);




function checker(answer){
   if(answer=="yes"||answer=="no"||answer=="y"||answer=="n"||answer.toUpperCase()=="yes"||answer.toUpperCase()=="no"||answer.toUpperCase()=="y"||answer.toUpperCase()=="n"){
     
      console.log("your answer is correct")
   }else{
    alert("please change this answer  "+answer+"with yes or no  ") 
   }

}