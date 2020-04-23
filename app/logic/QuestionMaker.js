import { trialMaker } from './TrialMaker.js'

let trialQuestions=[];
let trialAnswers=[];

function questionMaker(){
  if(trialQuestions.length==0){
      var getTrial=trialMaker();
      trialQuestions=getTrial.trialQuestions;
      trialAnswers=getTrial.trialAnswers;
  }
  var questions=trialQuestions[0];
  var choiceSet=trialAnswers[0].map(d=>d.toString());

  trialQuestions.shift();
  trialAnswers.shift();

  return { questions, choiceSet }
}

export {questionMaker};