import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { totalPoints, totalBucks, worker, thinker } from '../datasets/UserData.js';


export class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    burgerPress = value => {
        this.props.onPress();
       }

render(){
var points = totalPoints;
var bucks = totalBucks;
var workerColor = worker;
var thinkerColor = thinker;
var wBackColor = '#ffffff';
var tBackColor = '#ffffff';

if (worker === '#000000'){
    wBackColor = '#FFDF00';
}

if (thinker === '#000000'){
    tBackColor = '#FFDF00';
}


    return(
        <View style={styles.row}>
            <View style={styles.column}> 
            <Image source={require('../../assets/effort.png')}  style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: workerColor, backgroundColor: wBackColor}}/>
            </View>
            <View style={styles.column}> 
            <Image source={require('../../assets/gradCap.png')}  style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: thinkerColor, backgroundColor: tBackColor}}/>
            </View>
            <Text style={styles.column}>
                <Image source={require('../../assets/coins.png')}  style={{ width: 30, height: 30, resizeMode: 'contain'}}/> 
                 {"  "}{ points }
            </Text> 
            <Text style={styles.column}>
                <Image source={require('../../assets/bills.png')}   style={{ width: 40, height: 40, resizeMode: 'contain'}}/> 
                {"  "}{ bucks }
            </Text>
            <View style={styles.column}>
            <TouchableOpacity onPress={() => this.burgerPress()} style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/hamburger.png')} resizeMode={'contain'} style={{ width: 40, height: 40, backgroundColor: 'lightblue', tintColor: '#ffffff',  justifyContent: 'center', alignItems: 'center'}}/>
            </TouchableOpacity>
            </View>
        </View>
        );
};
};

const styles={
    row: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#000000",
        padding: 5,
        justifyContent: 'center'
    },
    column: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}


//Credit: All Navbar icons found for free using https://www.iconfinder.com/