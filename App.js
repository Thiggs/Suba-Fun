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
    this.state={};
  }
  render(){
    return (
      <View style={styles.container}>
        <Problem />
        <Choices />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});