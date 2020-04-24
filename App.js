import React from 'react';
import { StyleSheet, View, Text } from "react-native" ;

import { Navbar } from './app/navbar/Navbar.js';
import { Problem } from './app/views/Problem.js';
import { Choices } from './app/views/Choices.js';
import { Footerbar } from './app/navbar/Footerbar.js';

import { questionMaker } from './app/logic/QuestionMaker.js';
import { answerChecker } from './app/logic/AnswerChecker.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    let initQuestion=questionMaker().currentQuestion;
    this.state = {
      question: initQuestion.problem,
      answer: initQuestion.answer,
      choices: initQuestion.choiceSet,
      _id: initQuestion._id,
      buck: initQuestion.buck,
      type: initQuestion.type,
      prompt: null,
      distractor: 0
    }
  }

  handlePress = (val)=> {
  var newQuestion =  answerChecker(val, this.state);
    this.setState({
      newQuestion
    });
  }

  render(){

    return (
      <View style={styles.container}>
        <Navbar />
        <View style={styles.rows}>
          <Problem question = { this.state.question }/>
          </View> 
          <Text>{this.state.prompt}</Text>
        <View style={styles.rows}>
          <Choices onPress={this.handlePress.bind(this)} choices={ this.state.choices } />
        </View>
        <Footerbar />
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
  pad: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  rows: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  }
});
