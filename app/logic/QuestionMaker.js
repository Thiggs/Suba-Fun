import { trialMaker } from './TrialMaker.js'

//////////////////////////////////////////////////////////////////
//THIS FUNCTION TAKES A TRIAL OF 5 QUESTIONS FROM TRIAL-MAKER
//THEN RETURNS THOSE QUESTIONS ONE AT A TIME TO APP
//IT ASKS FOR A NEW TRIAL AFTER THE 5TH QUESTION
//////////////////////////////////////////////////////////////////

let currentTrial=[];

function questionMaker(clear){
  if(clear){
    currentTrial =[];

    trialMaker(clear)
  }
  if(currentTrial.length==0){
      currentTrial=trialMaker().trialData;
  }
  
  let currentQuestion=currentTrial[0]
  currentTrial.shift();
  return { currentQuestion }
}

export {questionMaker};