import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const List = () => {
    const initialList = [
        {
            id: '1',
            name: 'Robin',
            occupation: "Barista",
        },
        {
            id: '2',
            name: 'Dennis',
            occupation: "Barista",
        },
        {
            id: '3',
            name: 'Christina',
            occupation: "Barista",
        },
    ];
    const [list, setList] = useState(initialList);
    const [modalVisible, setModalVisible] = useState(false);


    const onRemove = (e) => {
        const name = e.target.getAttribute("name")
        setList(list.filter(item => item.name !== name));
    };

    return (
        <ScrollView style={styles.list}>
            {list.map((item) => (
                <span name={item.name} style={{
                    flex: 1,
                    // flexDirection: "row",
                    color: "black",
                    fontWeight: "bold",
                    // backgroundColor: "coral",
                    fontSize: 25,
                }} onClick={onRemove} key={item.name}>
                    {item.name}
                    {/* <Icon
                        style={styles.view}
                        name="star"
                        size={30}
                        // color="#CD853F"
                        // backgroundColor={'#27285C'}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    /> */}
                    {/* <span>{item.occupation}</span>  */}
                </span>
            ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "coral",
        // flex: 1,
        paddingLeft: 30,
    }
})

export default List;