import React from 'react';

let trialQuestions=[4,2,7,6,5];
let trialAnswers=[[4,1,2,3],[2,1,4,3],[7,1,2,3],[6,1,2,3],[5,1,2,3]];

let questions;
let choiceSet;

function questionMaker(){
  console.log("here");

if(trialQuestions.length==0){
    trialQuestions=[4,2,7,6,5];
    trialAnswers=[[4,1,2,3],[2,1,2,3],[7,1,2,3],[6,1,2,3],[5,1,2,3]];
}
questions=trialQuestions[0];
choiceSet=trialAnswers[0].map(d=>d.toString());

trialQuestions.shift();
trialAnswers.shift();

}

questionMaker();

export { questions, choiceSet }