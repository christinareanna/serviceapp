import React from "react";
import { Image, View, ScrollView} from 'react-native';


function HomeScreen({ navigation, color }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                {/* <MaterialCommunityIcons name="arrow-left" color={color} size={30} onPress={() => navigation.goBack()} /> */}
                {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
                {/* <MaterialCommunityIcons name="home" color={color} size={size} /> */}
                {/* <Text>Home Screen</Text> */}
                {/* can use to update users on a list maybe? */}
                {/* <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
        /> */}

                <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                    <Image
                        style={{ height: 400, width: 400 }}
                        source={require('../components/coffee.jpg')} />
                    <Image
                        style={{ height: 400, width: 400 }}
                        source={require('../components/food.jpg')} />
                    <Image
                        style={{ height: 400, width: 400 }}
                        source={require('../components/cheers.jpg')} />
                </View>
                {/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              style={{ height: 400, width: 400, flex: 3 }}
              source={require('./components/coffee.jpg')} />
            <Image
              style={{ height: 400, width: 400, flex: 3 }}
              source={require('./components/food.jpg')} />
            <Image
              style={{ height: 400, width: 400, flex: 3 }}
              source={require('./components/cheers.jpg')} />
          </View> */}
                {/* navigation.setParams({
            query: 'someText',
          });
        } */}
                {/* <UserRegistration /> */}

            </View >
            {/* <MyStack /> */}
        </ScrollView>
    );
}

export default HomeScreen;