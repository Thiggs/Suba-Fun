import React from 'react';
import { data } from '../datasets/Data.js';

var UserData=data;
var totalPoints=0;
var totalBucks=0;
var knownTotal=0;
var notKnownTotal=data.length;

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
        knownTotal+=statsToUpdate.known;
        notKnownTotal-=statsToUpdate.known;
    }
    if (statsToUpdate.unknown){
        knownTotal-=statsToUpdate.unknown;
        notKnownTotal+=statsToUpdate.unknown;
    }
}



export { updateData, updateStats, UserData }