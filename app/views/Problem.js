import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { subaFunCircles } from '../../games/SubaFun/SFCircleMakerFunc.js';
import { game } from '../datasets/UserData.js'

export class Problem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var gameQuestionStyle;
        if (game==="SubaFun"){ gameQuestionStyle = subaFunCircles(this.props.question);}
        else {gameQuestionStyle= <Text>{this.props.question}</Text>}

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
        padding : 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});