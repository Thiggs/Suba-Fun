import { questionMaker } from './QuestionMaker.js'

let choiceSetHolder;
let questionHolder;

function answerChecker(userAnswer, currentState){
    var newState = currentState;
    //Provides a distractor if previous answer was incorrect
    if (currentState.distractor == 2){
        newState.question=0;
        newState.prompt= "Right! Let's try again to be sure.";
        newState.choices=["Tap to Continue"];
        newState.distractor= 1;
    }
    //re-presents the original problem after a distractor
    else if (currentState.distractor == 1){
        newState.question=questionHolder;
        newState.choices=choiceSetHolder;
        newState.distractor=0;
        newState.prompt=null;
    }
    //only if the answer is correct do we move on to the next question in the trial
    else if (userAnswer == currentState.question){
      var nextQuestion=questionMaker();
      newState.question=nextQuestion.questions;
      newState.choices=nextQuestion.choiceSet;
    }
    //if incorrect answer is given, we need to provide it errorlessly, then provide a distractor, then provide it again
    else {
    choiceSetHolder=currentState.choices;
    questionHolder=currentState.question;
    newState.choices= [currentState.question.toString()];
    newState.distractor= 2;
      }
    return newState;
  };
  
  export { answerChecker };