import React from 'react';
import { data } from '../datasets/Data.js';

var UserData=data;

function updateData (dataToUpdate){
 
    let objIndex = UserData.findIndex((obj => obj._id == dataToUpdate[0]._id));

    for (var property in dataToUpdate[0]){
        UserData[objIndex][property]=dataToUpdate[0][property];
    }

}



export { updateData, UserData }