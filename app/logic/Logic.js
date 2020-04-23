import React from 'react';
import { data } from '../datasets/Data.js'

let problems = data.map(value => value.problem);
let answers = data.map(value => value.answer);

let unknown = problems
let learning = [3]
let known = [1,5,6,9]

let questions =[];
let choices = [];

//repeat trials of 5 until game is won. Game is won when learning and unknown are all moved to known.
if(unknown.length==0&&learning.length==0){
    questions="You Win!"
    choices="Congratulations!"
}


               //because unknowns are errorless, we can shift them to learning now. We know user will get correct.
               learning.push(unknown[0]);
                //and remove it from the unknown array. It is learning now.
               unknown.shift();
           }
        }
    }

}

var choiceSet=choices[0].map(d=>d.toString());
questions = questions[0];

export { questions, choiceSet }


