import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Nav = () => {

    return (
        <View style={[styles.container, {
            flexDirection: "row",
        }]}>
            {/* <div> */}
            <Text style={styles.titleOne}>Name</Text>
            {/* </div> */}
            {/* <div> */}
            <Text style={styles.titleTwo}>Occupation</Text>
            <Text style={styles.titleThree}>Last online</Text>
            <Icon
                style={styles.titleFour}
                name="star"
                size={18}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingLeft: 20,
        textAlign: 'center',
        alignItems: "stretch",
        // backgroundColor: '#27285C',
        // paddingTop: 20,
        // justifyContent: 'center',
        // flexDirection: "column",
    },
    titleOne: {
        flex: 1,
        height: 100,
        backgroundColor: "coral",
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: "row",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    titleTwo: {
        backgroundColor: "skyblue",
        padding: 10,
        height: 100,
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    titleThree: {
        backgroundColor: "violet",
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        color: "white",
        fontWeight: "bold",
        height: 100,
        fontSize: 20,
    },
    titleFour: {
        backgroundColor: "orange",
        padding: 12,
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        height: 100,

    }
})

export default Nav;