import { questionMaker } from './QuestionMaker.js'

let choiceSetHolder;
let questionHolder;

function answerChecker(userAnswer, currentState){
    var newState = currentState;
    if (currentState.distractor == 2){
        newState.question=0;
        newState.prompt= "Right! Let's try again to be sure.";
        newState.choices=["Tap to Continue"];
        newState.distractor= 1;
    }
    else if (currentState.distractor == 1){
        newState.question=questionHolder;
        newState.choices=choiceSetHolder;
        newState.distractor=0;
        newState.prompt=null;
    }
    else if (userAnswer == currentState.question){
      var nextQuestion=questionMaker();
      newState.question=nextQuestion.questions;
      newState.choices=nextQuestion.choiceSet;
    }
    else {
    choiceSetHolder=currentState.choices;
    questionHolder=currentState.question;
    newState.choices= [currentState.question.toString()];
    newState.distractor= 2;
      }
    return newState;
  };
  
  export { answerChecker };