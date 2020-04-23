import { questionMaker } from './QuestionMaker.js'

function answerChecker(userAnswer, correctAnswer){
    var newChoices;
    if (userAnswer == correctAnswer){
      newChoices=questionMaker();
    }
    else {
      newChoices={
        questions: correctAnswer,
        choiceSet: [correctAnswer.toString()]
      }
    }
    return newChoices;
  };
  
  export { answerChecker };