import React from 'react';
import { Button, View, Text, Image } from 'react-native';


export default function ProfileScreen({ navigation }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Christina</Text>
            <Image
                style={{ width: 300, height: 300 }}
                source={require('./components/barista.jpg')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            {/* <Button
            title="Go to Settings"
            color="black"
            onPress={() => navigation.navigate('Settings')}
        /> */}
        </View>
    );
}

