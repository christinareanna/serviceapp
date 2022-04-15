import { Button, View, Text, Image, ScrollView, TextInput, Modal, Alert } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from './screens/home';
import RegistrationScreen from './UserRegistration';
// import LoginScreen from './components/login';
// import Signup from './components/signup';
// import Dashboard from './components/dashboard';
// import { decode, encode } from 'base-64'
// if (!global.btoa) { global.btoa = encode }
// if (!global.atob) { global.atob = decode }


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const SettingsStack = createNativeStackNavigator();
// const HomeStack = createNativeStackNavigator();





// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Name</Text>
//       <Button
//         title="Go to Profile"
//         color="black"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }





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
                        source={require('./coffee.jpg')} />
                    <Image
                        style={{ height: 400, width: 400 }}
                        source={require('./food.jpg')} />
                    <Image
                        style={{ height: 400, width: 400 }}
                        source={require('./cheers.jpg')} />
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

// export default HomeScreen;




function NotificationScreen({ navigation, color }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ textAlign: "center", fontSize: 24 }}><MaterialCommunityIcons name="heart" color={color} size={24} />Nicole liked your post</Text>
            <Text style={{ textAlign: "center", fontSize: 24 }}><MaterialCommunityIcons name="heart" color={color} size={24} />Jamie liked your post</Text>
            <Text style={{ textAlign: "center", fontSize: 24 }}><MaterialCommunityIcons name="hand-heart" color={color} size={24} />Leah matched with you</Text>
            <Text style={{ textAlign: "center", fontSize: 24 }}><MaterialCommunityIcons name="calendar" color={color} size={24} />Terry invited you to an event</Text>
            <Text style={{ textAlign: "center", fontSize: 24 }}><MaterialCommunityIcons name="calendar" color={color} size={24} />Lara invited you to an event</Text>
            <Text style={{ textAlign: "center", fontSize: 24 }}><MaterialCommunityIcons name="calendar" color={color} size={24} />Ken invited you to an event</Text>
            {/* <Button
        title="Go to Settings"
        color="black"
        onPress={() => navigation.navigate('Settings')}
      /> */}
        </View>
    );
}

function MessageScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text>Messages</Text> */}
            {/* <Button
        title="Messages"
        color="black"
        onPress={() => navigation.navigate('Messages')}
      /> */}
            <TextInput
                style={{
                    borderColor: '#CCCCCC',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    height: 50,
                    fontSize: 25,
                    paddingLeft: 20,
                    paddingRight: 20
                }}
                placeholder="Name"
                maxLength={20}
            />
            <TextInput
                style={{
                    borderColor: '#CCCCCC',
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    height: 50,
                    fontSize: 25,
                    paddingLeft: 20,
                    paddingRight: 20
                }}
                placeholder="Message"
                maxLength={20}
            />
        </View>
    );
}


// function DetailsScreen({ route, navigation }) {
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to details again"
//         color="black"
//         onPress={() =>
//           navigation.push("Details", {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
// <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }


function ProfileScreen({ navigation }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Christina</Text>
            <Image
                style={{ width: 300, height: 300 }}
                source={require('./barista.jpg')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            {/* <Button
            title="Go to Settings"
            color="black"
            onPress={() => navigation.navigate('Settings')}
      /> */}
        </View>
    );
}





export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                // headerShown: false,
                headerStyle: {
                    backgroundColor: "pink",
                },
                tabBarActiveTintColor: 'coral',
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Register"
                component={RegistrationScreen}
                options={{
                    tabBarLabel: 'Register',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="pencil" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={MessageScreen}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="message" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                    tabBarBadge: 6,
                }}
            />
        </Tab.Navigator>
    )
}


