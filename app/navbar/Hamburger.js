import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { answerChecker } from '../logic/AnswerChecker.js'

var gameList = [ "SubaFun", "SpanishNouns", "KlingonNouns", "FiveFrame" ];

export class Hamburger extends React.Component {
    constructor(props){
        super(props);
    }
    burgerSelector = value => {
        this.props.onPress(value);
       }
      render(){
        return (
        <View style={styles.answerContainer}>
            {gameList.map(d=>(
                    <TouchableOpacity onPress={() => {this.burgerSelector(d)}} style={styles.choiceButton} key={"game"+d}>
                    <Text>{d}</Text>
                    </TouchableOpacity>
            ))
            }
        </View>
        );
    }
}

const styles ={
    answerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    choiceButton: {
        marginBottom: 10,
        marginLeft: '10%',
        flexDirection: 'row',
        width: "80%",
        backgroundColor: 'lightblue',
        height:50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
}