import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { totalPoints, totalBucks } from '../datasets/UserData.js';

export class Navbar extends React.Component {

render(){
var points = totalPoints;
var bucks = totalBucks;
var menu = "Hamburger"
    return(
        <View style={styles.row}>
            <Text style={styles.column}>{ points } points</Text> 
            <Text style={styles.column}>{ bucks } bucks</Text>
            <Button onPress={()=>console.log("Thank you for clicking the hamburger")} title={menu} key="menuButton" style={styles.column}/>
        </View>
        );
};
};

const styles={
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
}