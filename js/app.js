'use strict';
let thetrue=0;
let userName=prompt("enter your name ").toLowerCase();
alert("you are welcome mr "+userName);
alert("please answer the next question with yes or no");
let myAge=prompt("do you know how old am I  ");
let university=prompt("do you think I study in the university");
let studying=prompt("do you think I can study alone  ");
let improvement =prompt("do you think I am self learner ");
let favcolor=prompt("do you know if the green is my  favourate color  ");

let Weight=prompt("can guess what is my Weight ");
let corectWeight=75;
let myWeight=parseInt(Weight);

let myhoppy=["reading","swimming","sport"];



for(let a=0;a<7;a++){
 let hopy=prompt("can you guess any of my  hoppies");

for(let i=1;i<4;i++){
   if(hopy==myhoppy[i]){
   alert("you gused it ");
   a=8;
}
}
}
alert ("my hobby are   "+myhoppy);


if(myWeight!=corectWeight){
   let counter=0;
   while((myWeight!=corectWeight)&&counter<5){
      myWeight=prompt("can guess what is my Weight ");
      if(myWeight>50 && myWeight<60){
         alert("you are far");
      }else if(myWeight>61 && myWeight<80){
         if(myWeight=75){
            alert("you are corect") ;
            counter=7;

         }else{
         alert("you are near the correct")
         }
      }
      else{
         alert("you are far")
      }
      counter++;
   }
   
if(counter>5){
   alert("the correct is 75")
}



}




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
