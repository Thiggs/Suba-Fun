import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { choicesData } from '../logic/Logic.js';

export class Choices extends React.Component {
    render(){
        return (
        <View>
            <Text>{ choicesData }</Text>
            <Text>I am words</Text>
            <Text>More words</Text>
        </View>
        );
    }
}
