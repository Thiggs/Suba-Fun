import React from 'react';
import {StyleSheet,View} from "react-native" ;
import { Problem } from './app/views/Problem.js';
import { Choices } from './app/views/Choices.js';


export default class App extends React.Component {
  //handle is answer correct?
  //if correct, move to known if in learning. Move to learning if in unknown. Give point. 
      //if in learning, give buck (if one is available), set buck to 0 so it is never given again.
  //if incorrect, repeat problem as errorless, then distractor, then repeat problem as learning. 
      //If in learning, Keep in learning if correct but give point, repeat this if incorrect.
      //if in unknown, move to learning.
  constructor(props) {
    super(props);
    //state is the selected answer
    let initQuestion=questionMaker();
    this.state = {
      question: initQuestion.questions,
      choices: initQuestion.choiceSet,
    }
  }

  handlePress = (val)=> {
    this.setState({
      userAnswer: val
    });
  var newQuestion =  answerChecker(val, this.state.question);
    this.setState({
      question: newQuestion.questions,
      choices: newQuestion.choiceSet
    });
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.rows}>
        <Problem question = {this.state.question}/>
        </View>
        <View style={styles.rows}>
        <Choices onPress={this.handlePress.bind(this)} choices={this.state.choices} />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  rows: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  }
});

function answerChecker(userAnswer, correctAnswer){
  var newChoices;
  if (userAnswer == correctAnswer){
    newChoices=questionMaker();
  }
  else {
    newChoices={
      questions: correctAnswer,
      choiceSet: [correctAnswer.toString()]
    }
  }
  return newChoices;
};

let trialQuestions=[4,2,7,6,5];
let trialAnswers=[[4,1,2,3],[2,1,4,3],[7,1,2,3],[6,1,2,3],[5,1,2,3]];

function questionMaker(){
  if(trialQuestions.length==0){
      trialMaker();
  }
  var questions=trialQuestions[0];
  var choiceSet=trialAnswers[0].map(d=>d.toString());

  trialQuestions.shift();
  trialAnswers.shift();

  return { questions, choiceSet }
}

function trialMaker(){
  trialQuestions=[4,2,7,6,5];
  trialAnswers=[[4,1,2,3],[2,1,4,3],[7,1,2,3],[6,1,2,3],[5,1,2,3]];
} 