import React from 'react';
import { problems, answers } from '../datasets/Data.js'

var unknown = problems
var learning = []
var known = []

var questions =[];
var choices = [];

//repeat trials of 5 until game is won. Game is won when learning and unknown are all moved to known.
if(unknown.length==0&&learning.length==0){
    questions="You Win!"
    choices="Congratulations!"
}

//For each trial - present 4 known (or present all known if <4)...
else {
    questions=shuffleArray(known).slice(0,5);

   //... then 1 learning, if present
    if(learning.length){questions.push(learning[0])}

    //then if there are any questions at this point, make answer choices for them
    if (questions){
        questions.forEach(d=>{
            choices.push(choiceMaker(d));
        })
    }

    //if fewer than 5 items, fill with unknown as errorless then move that to learning
    if (questions.length<5){
        for(var i=questions.length; i<5; i++){
           if(unknown[0]){
                questions.push(unknown[0]);
               //present as only answer choice (errorless)
               choices.push(unknown[0]);
               //because unknowns are errorless, we can shift them to learning now. We know user will get correct.
               learning.push(unknown[0]);
                //and remove it from the unknown array. It is learning now.
               unknown.shift();
           }
        }
    }

}


//points - 1 point for each correct answer (e.g., coins)
//1 special point (e.g., bucks) for correct answer if learning

//error correction: (insert - does not count in 5 trials above) - errorless trial, 
//distractor, represent as learning. if fail on represent, repeat error correction; 
//if succeed, keep in learning, provide coin (not buck) and continue with trial. 
//If it was a known, we should not provide a buck the next time it is moved to known.



export { questions, choices }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function choiceMaker(correctAnswer){
    var choiceSet = [correctAnswer];
    var possibleChoices=shuffleArray(answers).slice(0, 4)
        for(var i=0; i<3; i++){
            var incorrectChoice;
            if(possibleChoices[i]!==correctAnswer){incorrectChoice=possibleChoices[i]}
            else incorrectChoice=possibleChoices[3]
            choiceSet.push(incorrectChoice);
        }
    return shuffleArray(choiceSet);
}
