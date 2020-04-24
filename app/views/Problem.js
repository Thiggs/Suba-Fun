import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { subaFunCircles } from '../../games/SubaFun/SFCircleMakerFunc.js';

export class Problem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var gameQuestionStyle = subaFunCircles(this.props.question);

        return (
        <View>
            <View style={styles.container}>
                {gameQuestionStyle}
            </View>
        </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        padding : 10
    }
});