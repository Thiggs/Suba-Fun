import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { questions } from '../logic/Logic.js';

export class Problem extends React.Component {
    render(){
        return (
        <View>
            <Text>{questions}</Text>
            <Text>I am words</Text>
            <Text>More words</Text>
        </View>
        );
    }
}
