import React from 'react';
import { sfData } from '../../games/SubaFun/SubaFunData.js';
import { snData } from '../../games/SpanishNouns/SpanishNounData.js';
import { knData } from '../../games/KlingonNouns/KlingonNounData.js';
import { ffData } from '../../games/FiveFrames/FiveFrameData.js';

/////////////////////////////////
//NOTES ABOUT DATA INPUTS
/////////////////////////////////

//ideally the game data would be on a database, but I'm not sure what to use for mobile, and our datasets are small.
//the data files are all set up as an array of objects containing, question, answer, buck, and type keys
//in a database, buck and type would be set to default to default to "1" and "unknown"
//Then the inputs could just be arrays or array of objects containing Q and A lists.
//In a web app, I could see the benefit of this, allowing users to input their own Q and A sets
//On mobile, I'm not sure it matters. No one is going to type out Q and A sets on their phone.

/////////////////////////////////
//USER DATA
/////////////////////////////////

var totalPoints=0;
var totalBucks=0;

//stores UserData to be used if they return to the game
var dataStore ={};

/////////////////////////////////
//CURRENT GAME DATA
/////////////////////////////////

//Name of current game
var game = "";

//intializes with game list. Game selection probably shouldn't work like this, but it works, so why fix it? (for now)
//Will render up to 4 games as long as one is learning and the rest are known. This will need to change if games are added.
var UserData=[  
    {problem: "Select a game", answer: "SubaFun" , type: "learning"}, 
    {problem: "Select a game", answer:"SpanishNouns", type: "known"}, 
    {problem: "Select a game", answer:"KlingonNouns", type: "known"},
    {problem: "Select a game" ,answer: "FiveFrame", type: "known" }
];

//When this is 0, game is won
var notKnownTotal=UserData.length;


/////////////////////////////////
//FUNCTIONS TO UPDATE USER DATA
/////////////////////////////////


//updates current game on new selection either at start or in hamburger
function gameSelector (selectedGame){
    var gameList= [ "SubaFun", "SpanishNouns", "KlingonNouns", "FiveFrame" ]
    var getDataFunc = [sfData, snData, knData,ffData]

    //unless this is an initial pick, store current progress in the data store
    if(game){
        dataStore.game=UserData;
    }

    gameList.forEach((d, i)=>{if (d===selectedGame){
        game=d;
        if (dataStore.d){
            UserData=dataStore.d;
            notKnownTotal=UserData.Length-(UserData.map(f=>f.type==="known"))}
        else{
            var processData=getDataFunc[i]();
            processData.forEach((g,i)=>{
                g.buck=1;
                g.type="unknown"
                g._id=i
            })
            notKnownTotal=processData.length;
            UserData=processData
        };
    }})
}

//update data in UserData to reflect learned questions, etc.
function updateData (dataToUpdate){
 
    let objIndex = UserData.findIndex((obj => obj._id == dataToUpdate[0]._id));

    for (var property in dataToUpdate[0]){
        UserData[objIndex][property]=dataToUpdate[0][property];
    }

}

//update total points, bucks, and game progress
function updateStats(statsToUpdate){
    if(statsToUpdate.points){totalPoints+=statsToUpdate.points}
    if(statsToUpdate.bucks){totalBucks+=statsToUpdate.bucks}
    if(statsToUpdate.known){
        notKnownTotal-=statsToUpdate.known;
    }
    if (statsToUpdate.unknown){
        notKnownTotal+=statsToUpdate.unknown;
    }
    if(notKnownTotal==0){
        return "win";
    }
}

//////////////////////////////////////////////////////////////////
//EXPORT VARIABLES AND FUNCTIONS FOR USE ELSEWHERE IN APP
//////////////////////////////////////////////////////////////////

export { game, updateData, updateStats, UserData, totalPoints, totalBucks, notKnownTotal, gameSelector }