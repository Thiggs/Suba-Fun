
//takes in data from dataset and shuffles it to avoid repeats, then filters it to an array of 5 objects, as follows:

function trialMaker(){
    let trialQuestions=[4,2,7,6,5];
    let trialAnswers=[[4,1,2,3],[2,1,4,3],[7,1,2,3],[6,1,2,3],[5,1,2,3]];
    return { trialQuestions, trialAnswers }
  } 

export {trialMaker};



//4 known (or all known if <4)


