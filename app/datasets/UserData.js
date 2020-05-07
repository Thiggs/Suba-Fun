import React from 'react';
import { sfData } from '../../games/SubaFun/SubaFunData.js';
import { snData } from '../../games/SpanishNouns/SpanishNounData.js';
import { knData } from '../../games/KlingonNouns/KlingonNounData.js';
import { ffData } from '../../games/FiveFrames/FiveFrameData.js';
import { AsyncStorage } from 'react-native';


/////////////////////////////////
//NOTES ABOUT DATA INPUTS
/////////////////////////////////

//ideally the game data would be on a database, but I'm not sure what to use for mobile, and our datasets are small.
//inputs are an array of objects containing keys named "problem" and "answer"

//In a web app, I could see this allowing users to input their own Q and A sets



//////////////////////////////////////
//USER DATA (Persists across games)
//////////////////////////////////////

var totalPoints=0;
var totalBucks=0;


//stores UserData to be used if they return to the game
var dataStore={};


//achievements bought from the store. Variables store hex color codes of current achievement
var worker="#ffffff";
var thinker="#ffffff";

//all color codes....bronze, silver, gold, platinum
var achievementColors=["#ffffff", "#b08d57", '#C0C0C0', '#FFDF00', '#000000' ];

//retrieve saved game data (if any)
async () => {
    try {
      const value = await AsyncStorage.getItem('allData');
      console.log(value);
      if (value !== null) {
          allData=JSON.parse(value)
          totalPoints=allData._totalPoints;
          totalBucks=allData._totalBucks;
          dataStore=allData._dataStore;
          worker = allData._worker;
          thinker = allData._thinker;
      }
    } catch (error) {
    }
  };

/////////////////////////////////
//CURRENT GAME DATA
/////////////////////////////////

//Name of current game
var game = "menu";

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

    if(game !== ("menu" || "store")){
        dataStore[game]=UserData;
        _storeData;
    }

    gameList.forEach((d, i)=>{if (d===selectedGame){
        if (dataStore[d]){
            UserData=dataStore[d];
            var knownCount=0;
           UserData.map(f=>{if(f.type!=="known"){knownCount++}});
            notKnownTotal=knownCount;
        }

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
    }
    });
    game=selectedGame;
}

//update data in UserData to reflect learned questions, etc.
function updateData (dataToUpdate){
 
    let objIndex = UserData.findIndex((obj => obj._id == dataToUpdate[0]._id));

    for (var property in dataToUpdate[0]){
        UserData[objIndex][property]=dataToUpdate[0][property];
    }
    _storeData();
}

//update total points, bucks, and game progress
function updateStats(statsToUpdate){
    if(statsToUpdate.practice){
        notKnownTotal=UserData.length;
    };
    if(statsToUpdate.worker){
        var newWorker="#ffffff";
        achievementColors.forEach((d, i)=>{
            if (d===worker){
                newWorker=achievementColors[i+1];
            }
        })
        worker=newWorker;
    }
    if(statsToUpdate.thinker){
        var newThinker="#ffffff";
        achievementColors.forEach((d, i)=>{
            if (d===thinker){
                newThinker=achievementColors[i+1];
            }
        })
        thinker=newThinker;
    }
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

//function to save the game
const _storeData = async () => {
    var allData={};
    allData._totalPoints=totalPoints;
    allData._totalBucks=totalBucks;
    allData._dataStore=dataStore;
    allData._worker=worker;
    allData._thinker=thinker;
    try {
      await AsyncStorage.setItem(
        'allData',
        JSON.stringify(allData)
      );
    } catch (error) {
    }
  };

  //reset game
  function resetGame(){
    totalPoints=0;
    totalBucks=0;
    dataStore;
    worker="#ffffff";
    thinker="#ffffff";
    game = "menu";
    UserData=[  
        {problem: "Select a game", answer: "SubaFun" , type: "learning"}, 
        {problem: "Select a game", answer:"SpanishNouns", type: "known"}, 
        {problem: "Select a game", answer:"KlingonNouns", type: "known"},
        {problem: "Select a game" ,answer: "FiveFrame", type: "known" }
    ];
    var notKnownTotal=4;
    return; 
  }

//////////////////////////////////////////////////////////////////
//EXPORT VARIABLES AND FUNCTIONS FOR USE ELSEWHERE IN APP
//////////////////////////////////////////////////////////////////

export { game, updateData, updateStats, UserData, totalPoints, totalBucks, notKnownTotal, gameSelector, thinker, worker, resetGame }