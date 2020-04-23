import { questionMaker } from './QuestionMaker.js';
import { updateData } from '../datasets/UserData.js';

let choiceSetHolder;
let questionHolder;

function answerChecker(userAnswer, currentState){
    var newState = currentState;
    var dataUpdater =[];

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
    else if (userAnswer == currentState.answer){
      if(currentState.type=="unknown"){
          dataUpdater.push({_id: currentState._id, type: "learning"});
          newState.prompt="+1 point!";
      }
      else if(currentState.buck==1){
          newState.prompt="+1 buck and 1 point";
          dataUpdater.push({_id: currentState._id, buck: 0, type:"known"});
      }
      else {
          newState.prompt="+1 point!";
          dataUpdater.push({_id: currentState._id, type:"known"});
      }
      var nextQuestion=questionMaker().currentQuestion;
      newState.question=nextQuestion.problem;
      newState.answer=nextQuestion.answer;
      newState.choices=nextQuestion.choiceSet;
      newState._id=nextQuestion._id;
      newState.buck=nextQuestion.buck;
      newState.type=nextQuestion.type;
    }
    //if incorrect answer is given, we need to provide it errorlessly, then provide a distractor, then provide it again
    else {
    choiceSetHolder=currentState.choices;
    questionHolder=currentState.question;
    newState.choices= [currentState.question.toString()];
    newState.distractor= 2;
    newState.prompt = "This is "+currentState.question+".\n\n Tap "+currentState.question+" below to continue.";
    newState.type = "unknown"
      }

      if(dataUpdater.length>0){updateData(dataUpdater)};

    return {newState};
  };
  
  export { answerChecker };