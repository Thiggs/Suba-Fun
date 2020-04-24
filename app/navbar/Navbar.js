import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { totalPoints, totalBucks } from '../datasets/UserData.js';

export class Navbar extends React.Component {

render(){
var points = totalPoints;
var bucks = totalBucks;

    return(
        <View style={styles.row}>
            <Text style={styles.column}>
                <Image source={require('../../assets/coins.png')}  style={{ width: 30, height: 30, resizeMode: 'contain'}}/> 
                 {"  "}{ points }
            </Text> 
            <Text style={styles.column}>
                <Image source={require('../../assets/bills.png')}   style={{ width: 40, height: 40, resizeMode: 'contain'}}/> 
                {"  "}{ bucks }
            </Text>
            <TouchableOpacity onPress={()=>console.log("Thank you for clicking the hamburger")} style={styles.column}>
                <Image source={require('../../assets/hamburger.png')}   style={{ width: 50, height: 50, resizeMode: 'contain', backgroundColor: 'lightblue', tintColor: 'white'}}/> 
            </TouchableOpacity>
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
        borderColor: "black",
        padding: 5,
    },
    column: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column',
    }
}
