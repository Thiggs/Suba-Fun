import React from 'react';
import {StyleSheet,View} from "react-native" ;

import { Navbar } from './app/navbar/Navbar.js'
import { Problem } from './app/views/Problem.js';
import { Choices } from './app/views/Choices.js';

import { questionMaker } from './app/logic/QuestionMaker.js'
import { answerChecker } from './app/logic/AnswerChecker.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
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
      <Navbar />
      <View style={styles.rows}>
        <Problem question = {this.state.question}/>
        </View> 
        <View style={styles.pad} />
        <View style={styles.rows}>
        <Choices onPress={this.handlePress.bind(this)} choices={this.state.choices} />
      </View>
      <View style={styles.pad} />
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
