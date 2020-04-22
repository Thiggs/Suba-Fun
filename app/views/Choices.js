import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { choices } from '../logic/Logic.js';

export class Choices extends React.Component {
    constructor(props){
        super(props);
    }
    handlePress = value => {
       this.props.onPress(value);
      }
      render(){
        return (
        <View>
            {choices.map(d=>(
                <Button onPress={() => this.handlePress(d)} title={d} key={d} />
            ))
            }
            <Text>I am a list of choices.</Text>
            <Text>If you click me, I should pass on what was clicked.</Text>
        </View>
        );
    }
}

