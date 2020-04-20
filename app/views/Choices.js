import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { choices } from '../logic/Logic.js';

export class Choices extends React.Component {
    render(){
        return (
        <View>
            <Text>{ choices }</Text>
            <Text>I am words</Text>
            <Text>More words</Text>
        </View>
        );
    }
}
