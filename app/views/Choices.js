import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { choices } from '../logic/Logic.js';

export class Choices extends React.Component {
    render(){
        return (
        <View>
            <ol>
            <li><Button onPress={d=>console.log("pressed")} title={choices[0]} /></li>
            <li><Button onPress={d=>console.log("pressed")} title={choices[1]} /></li>
            <li><Button onPress={d=>console.log("pressed")} title={choices[2]} /></li>
            <li><Button onPress={d=>console.log("pressed")} title={choices[3]} /></li>
            </ol>
            <Text>I am a list of choices.</Text>
            <Text>If you click me, I should pass on what was clicked.</Text>
        </View>
        );
    }
}
