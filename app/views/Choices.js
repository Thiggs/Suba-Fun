import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { choices } from '../logic/Logic.js';

export class Choices extends React.Component {
    render(){
        return (
        <View>
            <ol>
      {choices.map(d => <li>{d}</li>)}
    </ol>
            <Text>I am words</Text>
            <Text>More words</Text>
        </View>
        );
    }
}
