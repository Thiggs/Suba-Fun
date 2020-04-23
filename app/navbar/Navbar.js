import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export class Navbar extends React.Component {

render(){
var points = "57 points"
var bucks = "2 bucks"
var menu = "Hamburger"
    return(
        <View style={styles.row}>
            <Text style={styles.column}>{ points }</Text> 
            <Text style={styles.column}>{ bucks }</Text>
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