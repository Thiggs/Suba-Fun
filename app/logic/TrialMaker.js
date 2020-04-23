import React from 'react';
import { data } from '../datasets/Data.js'
//takes in data from dataset and shuffles it to avoid repeats, then filters it to an array of 5 objects, as follows:

const possibleAnswers=data.map(value => value.answer);

function trialMaker(){
    let shuffledData = shuffleArray(data)
    let trialData =[]

    //get up to 4 known items
    for (var i=0; i<shuffledData.length; i++){
        if(shuffledData[i].type ==="known"){
            trialData.push(shuffledData[i])
            if (trialData.length==4){i=shuffledData.length}
        }
    }

    //add 1 learning, if present
    for (var i=0; i<shuffledData.length; i++){
        if(shuffledData[i].type ==="learning"){
            trialData.push(shuffledData[i])
            i=shuffledData.length;
        }
    }

       //then if there are any questions at this point, make answer choices for them
       if (trialData.length>0){
        trialData.forEach(d=>{
            d.choiceSet=(choiceMaker(d.answer));
        })
    }

        //fill trialData to 5 trials with unknowns
    for (var i=0; i<shuffledData.length; i++){
        if (trialData.length == 5){
            i=shuffledData.length;
        }
        else if (shuffledData[i].type ==="unknown"){
            shuffledData[i].choiceSet=[shuffledData[i].answer]
            trialData.push(shuffledData[i])
        }
    }

    return { trialData };
}

export {trialMaker};



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function choiceMaker(correctAnswer){
    var choiceSet = [correctAnswer];
    var possibleChoices=shuffleArray(possibleAnswers).slice(0, 4)
        for(var i=0; i<3; i++){
            var incorrectChoice;
            if(possibleChoices[i]!==correctAnswer){incorrectChoice=possibleChoices[i]}
            else incorrectChoice=possibleChoices[3]
            choiceSet.push(incorrectChoice);
        }
    return shuffleArray(choiceSet);
}