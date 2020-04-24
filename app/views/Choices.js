import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
                    <TouchableOpacity onPress={() => this.handlePress(d)} style={styles.choiceButton} key={"button"+d}>
                    <Text>{d.toString()}</Text>
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