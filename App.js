import React from 'react';
import { StyleSheet, View, Text } from "react-native" ;

import { Hamburger } from './app/navbar/Hamburger.js';
import { Navbar } from './app/navbar/Navbar.js';
import { Problem } from './app/views/Problem.js';
import { Choices } from './app/views/Choices.js';
import { Footerbar } from './app/navbar/Footerbar.js';

import { questionMaker } from './app/logic/QuestionMaker.js';
import { answerChecker } from './app/logic/AnswerChecker.js';
import { gameSelector } from './app/datasets/UserData.js';


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
      distractor: 0,
      hamburgerOn: false
    }
  }

  handlePress = (val)=> {
  var newQuestion =  answerChecker(val, this.state);
    this.setState({
      newQuestion
    });
  };

  burgerPress = ()=>{
    this.setState({hamburgerOn: ! this.state.hamburgerOn}); 
  }

  burgerSelector = (val)=> {
      var burgerState = this.state;
      burgerState.question = "Select a game";
      this.burgerPress();
      var newQuestion = answerChecker(val, burgerState);
      this.setState({
        newQuestion
    })
  }

  render(){
    var display;
    if(this.state.hamburgerOn){
      display=
      <View style={styles.container}>
        <Navbar onPress={this.burgerPress.bind(this)} />
        <View style={styles.hamburger}>
          <Hamburger onPress={this.burgerSelector.bind(this)}/>
        </View>
        <Footerbar />
      </View>
    }
    else{
      display=
      <View style={styles.container}>
        <Navbar onPress={this.burgerPress.bind(this)} />
        <View style={styles.rows}>
          <Problem question = { this.state.question }/>
        </View> 
         <Text>{this.state.prompt}</Text>
        <View style={styles.rows}>
          <Choices onPress={this.handlePress.bind(this)} choices={ this.state.choices } />
        </View>
        <Footerbar />
      </View>
    }

    return (
      <View style={styles.container}>
        { display }
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
},
hamburger: {
  flex: 4,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection:'row',
}
});