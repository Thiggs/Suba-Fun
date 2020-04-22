import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class Choices extends React.Component {
    constructor(props){
        super(props);
    }
    handlePress = value => {
       this.props.onPress(value);
      }
      render(){
        return (
        <View style={styles.answerContainer}>
            {this.props.choices.map(d=>(
                <View style={styles.buttonContainer}><Button onPress={() => this.handlePress(d)} title={d} key={d}/></View>
            ))
            }
        </View>
        );
    }
}

const styles ={
    answerContainer: {
        flex: 1
    },
    buttonContainer: {
        flex: 1
    }
}