import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { problemData } from '../logic/Logic.js';

export class Problem extends React.Component {
    render(){
        return (
        <View>
            <Text>{ problemData }</Text>
            <Text>I am words</Text>
            <Text>More words</Text>
        </View>
        );
    }
}
