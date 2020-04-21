import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { questions } from '../logic/Logic.js';

export class Problem extends React.Component {
    render(){
        return (
        <View>
            <Text>{questions}</Text>
            <Text>I am a component that just renders a view of the current question</Text>
            <Text>I don't handle logic</Text>
        </View>
        );
    }
}
