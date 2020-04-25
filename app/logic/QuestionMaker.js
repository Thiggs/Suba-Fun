import { trialMaker } from './TrialMaker.js'

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