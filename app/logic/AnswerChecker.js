import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

import { questionMaker } from './QuestionMaker.js';
import { updateData, updateStats, gameSelector, totalBucks, totalPoints, worker, thinker, resetGame } from '../datasets/UserData.js';

//////////////////////////////////////////////////////////////////
//THIS FUNCTION HANDLES ALL LOGIC ONCE A USER SELECTS AN ANSWER
//////////////////////////////////////////////////////////////////

let choiceSetHolder;
let questionHolder;

function answerChecker(userAnswer, currentState){
    var newState = currentState;
    var dataUpdater =[];
    var statTracker={};

//if reset all games is selected
    if(userAnswer==="reset"){
        statTracker.practice=false;
        resetGame();
        var clear = true;
        var nextQuestion=questionMaker(clear).currentQuestion;
        newState.question=nextQuestion.problem;
        newState.answer=nextQuestion.answer;
        newState.choices=nextQuestion.choiceSet;
        newState.buck=nextQuestion.buck;
        newState.type=nextQuestion.type;
        newState.prompt="";
    }

    //if continue game after win is selected
   else if(userAnswer==="Press for extra practice."){
       statTracker.practice=true;
       var clear = true;
       var nextQuestion=questionMaker(clear).currentQuestion;
            newState.question=nextQuestion.problem;
            newState.answer=nextQuestion.answer;
            newState.choices=nextQuestion.choiceSet;
            newState._id=nextQuestion._id;
            newState.buck=nextQuestion.buck;
            newState.type=nextQuestion.type;
            newState.prompt="";
    }

    //if game was selected
    else if(currentState.question==="Select a game"&&userAnswer!=="store"){
        gameSelector (userAnswer);
        var clear = true;
        var nextQuestion=questionMaker(clear).currentQuestion;
        newState.question=nextQuestion.problem;
        newState.answer=nextQuestion.answer;
        newState.choices=nextQuestion.choiceSet;
        newState._id=nextQuestion._id;
        newState.buck=nextQuestion.buck;
        newState.type=nextQuestion.type;
        newState.prompt="";
    }
//if store was selected
       else if(currentState.question==="Select a game"){
          var newPrompt="";
          var newChoices=["Upgrade Worker Achievement: \n 50 points", "Upgrade Thinker Achievement: \n 5 bucks"];

           if (worker==="#000000"){
               newPrompt+=" You have purchased all the Worker Achievements! ";
               newChoices.shift();
           }
           if (thinker==="#000000"){
            newPrompt+="\n You have purchased all the Thinker Achievements! ";
            newChoices.pop();
        }
        gameSelector (userAnswer);
            newState.question="Select an upgrade";
            newState.answer="";
            newState.choices=newChoices;
            newState._id=""
            newState.buck=0;
            newState.type="known";
            newState.prompt=newPrompt;
        }
        //if item from store was selected
        else if(currentState.question==="Select an upgrade"){
            gameSelector ("menu");
            if(userAnswer==="Upgrade Worker Achievement: \n 50 points"){
                if (totalPoints>=50){
                statTracker.points = -50;
                statTracker.worker=true;
                newState.question="Select a game";
                newState.answer="";
                newState.choices=["KlingonNouns", "SpanishNouns", "SubaFun", "FiveFrame"];
                newState._id=""
                newState.buck=0;
                newState.type="known";
                newState.prompt="";
                }
                else newState.prompt="insufficient funds"
            }
            else if(userAnswer==="Upgrade Thinker Achievement: \n 5 bucks"){
                gameSelector ("menu");
                if (totalBucks>=5){
                    statTracker.bucks = -5;
                    statTracker.thinker = true;
                    newState.question="Select a game";
                    newState.answer="";
                    newState.choices=["KlingonNouns", "SpanishNouns", "SubaFun", "FiveFrame"];
                    newState._id=""
                    newState.buck=0;
                    newState.type="known";
                    newState.prompt="";
                    }
                    else newState.prompt="insufficient funds"
                }
        }


    //Provides a distractor if previous answer was incorrect
    else if (currentState.distractor == 2){
        newState.question="";
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
          newState.prompt=promptPoint;
          statTracker.points= 1;
      }
      else if(currentState.buck==1){
          newState.prompt=promptBuck;
          dataUpdater.push({_id: currentState._id, buck: 0, type:"known"});
          statTracker.points = 1;
          statTracker.bucks = 1;
          statTracker.known = 1
      }
      else {
          if(currentState.type !=="known"){statTracker.known = 1;};
          newState.prompt=promptPoint;
          dataUpdater.push({_id: currentState._id, type:"known"});
          statTracker.points = 1;
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
        if(currentState.type == "known"){statTracker.unknown = 1}
            choiceSetHolder=currentState.choices;
            questionHolder=currentState.question;
            newState.choices= [currentState.answer.toString()];
            newState.distractor= 2;
            newState.prompt = "This is "+currentState.answer+".\n\n Tap "+currentState.answer+" below to continue.";
            newState.type = "unknown";
      }
    //update userData if needed
    if(dataUpdater.length>0){
        updateData(dataUpdater)};
    if(statTracker){
        var win = updateStats(statTracker);
        if(win){
                newState.question= "";
                newState.choices= ["Press for extra practice."];
                newState.prompt= "Congratulations! You Win!";
                newState.answer= null;
                newState._id= null;
                newState.buck= null;
                newState.type= null;
                newState.distractor= 0;
        }
    };
    //return new state to App
    return {newState};
  };
  
  export { answerChecker };

  const promptPoint =    <Text>  {"+1  "}
  <Image source={require('../../assets/singleCoin.png')}   style={{ width: 30, height: 30, resizeMode: 'contain'}}/> 
</Text>

  const promptBuck = <Text>  {"+1  "}
  <Image source={require('../../assets/singleDollar.png')}   style={{ width: 30, height: 30, resizeMode: 'contain'}}/> 
</Text>