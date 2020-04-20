import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { questions } from '../logic/Logic.js';

export class Problem extends React.Component {
    render(){
        return (
        <View>
            <ol>
      {questions.map(d => <li>{d}</li>)}
    </ol>
            <Text>I am words</Text>
            <Text>More words</Text>
        </View>
        );
    }
}
