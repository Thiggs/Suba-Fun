import React from 'react';
import { sfData } from '../../games/SubaFun/SubaFunData.js';
import { snData } from '../../games/SpanishNouns/SpanishNounData.js';
import { knData } from '../../games/KlingonNouns/KlingonNounData.js';
import { ffData } from '../../games/FiveFrames/FiveFrameData.js';

var UserData=[  
    {problem: "Select a game", answer: "SubaFun" , type: "learning"}, 
    {problem: "Select a game", answer:"SpanishNouns", type: "known"}, 
    {problem: "Select a game", answer:"KlingonNouns", type: "known"},
    {problem: "Select a game" ,answer: "FiveFrame", type: "known" }
];

var totalPoints=0;
var totalBucks=0;
var notKnownTotal=UserData.length;
var game = "";

function gameSelector (selectedGame){
    var gameList= [ "SubaFun", "SpanishNouns", "KlingonNouns", "FiveFrame" ]
    var getDataFunc = [sfData, snData, knData,ffData]

    gameList.forEach((d, i)=>{if (d===selectedGame){
        UserData=getDataFunc[i]();
        game=d;
        notKnownTotal=UserData.length;
    }})



}

function updateData (dataToUpdate){
 
    let objIndex = UserData.findIndex((obj => obj._id == dataToUpdate[0]._id));

    for (var property in dataToUpdate[0]){
        UserData[objIndex][property]=dataToUpdate[0][property];
    }

}

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



export { game, updateData, updateStats, UserData, totalPoints, totalBucks, notKnownTotal, gameSelector }