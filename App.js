// // import { StatusBar } from 'expo-status-bar';
// import React, { useState, useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { Modal, ScrollView, Button, Platform, Pressable, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome'
// import List from './components/userList';
// import Nav from './components/navigation';
// import { NavigationContainer } from '@react-navigation/native';

// // const CustomAlert = () => {
// //   return (
// //     <Modal
// //       animationType='fade'
// //       transparent={true}
// //       // visible={modalVisible}
// //       onRequestClose={() => {
// //         setModalVisible(false);
// //       }}
// //     >
// //       </Modal>
// //       // {/* <Pressable
// //       //   style={[Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop, styles.backdrop]}
// //       //   onPress={() => props.setModalVisible(true)}>Show</Pressable>
// //       // <View> */}

// //       // {/* </View> */}
// //   )
// // }



// const App = (list) => {

//   const [name, setName] = useState('');
//   // const [users, setUsers] = useState(initialList);

//   // function handleChange(event) {
//   //   setName(event.target.value);
//   // }

//   // function handleAdd() {
//   //   const newList = list.concat({ name, id: uuidv4() });

//   //   setList(newList);

//   //   setName('');
//   // }

//   const handleAdd = (e) => {
//     const name = e.target.getAttribute("name");
//     setList(list.filter(item => item.name == name));
//   }
//   // setList([...list, name]);



//   {/*come back to onremove*/ }

//   // const onRemove = (id) => {
//   //   // const name = e.target.getAttribute("name")
//   //   setList(list => list.filter((item) => item.id !== id));
//   // };






//   // const onRemove = id => e => {
//   //   setUsers(users.filter(user => user.id !== id));
//   // };






//   // function handleDelete() {
//   //   const deleted = list.pop({ name, id: uuidv4() });
//   //   setList(deleted);
//   //   setName('');
//   // }

//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <NavigationContainer>
//       <Nav />
//       <View style={styles.iconContainer}>
//         <Modal
//           animationType={"slide"}
//           transparent={false}
//           visible={modalVisible}
//           onRequestClose={() => {
//             setModalVisible(false);
//           }}
//         >
//           <View style={styles.modal}>
//             <Text style={styles.text}>This is one of your Top Rated Matches! <br /> Would you like to add them to your list?</Text>
//             <View style={styles.viewButtons}>
//               <Pressable
//                 style={styles.button}
//                 // title="Cancel"
//                 onPress={() => {
//                   setModalVisible(!modalVisible);
//                 }}>
//                 Cancel
//               </Pressable>

//               <Pressable
//                 style={styles.button}
//                 // title="Yes, Please!"
//                 onChange={handleAdd}
//                 onPress={() => {
//                   setModalVisible(!modalVisible);
//                 }}>Add</Pressable>
//             </View>
//           </View>
//         </Modal>
//         <List />
//       </View>

//     </NavigationContainer>
//   );
// }

// {/* <TouchableOpacity
//           visible={modalVisible}
//           onPress={() => setModalVisible(true)}
//           onPress={CustomAlert}> */}

// {/* <Icon.Button
//           title="Click to open modal"
//           onPress={() => {
//             setModalVisible(!modalVisible);
//           }}
//         /> */}





// {/* // onPress={CustomAlert}  */ }

// {/* </TouchableOpacity> */ }


// {/* <CustomAlert
//           title={"Congratulations!"}
//           message={"You found a top rated match!"}
//           modalVisible={modalVisible}
//           setModalVisible={setModalVisible}
//         >click meeeeeeee</CustomAlert> */}
// {/* <StatusBar style="auto" /> */ }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 24,
//     backgroundColor: "black",
//     color: "white",
//     padding: 50,
//     textAlign: "center",
//     borderRadius: 20,
//   },
//   modal: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'violet',
//     padding: 100,
//   },
//   viewButtons: {
//     flexDirection: "row",
//     justifyContent: "center",
//     margin: 20,

//   },
//   button: {
//     backgroundColor: "aqua",
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20,
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     margin: 20,
//   },
//   icon: {
//     // backgroundColor: "white",
//     // padding: 2,
//   },
//   list: {
//     // textAlign: "center",
//     paddingTop: 40,
//   },
//   star: {
//     // float: "right"
//   },
//   view: {
//     // margin: 0,
//     // paddingLeft: 50,
//   },
//   // name: {
//   //   color: "white",
//   //   fontWeight: "bold",
//   // }
//   // iOSBackdrop: {
//   //   backgroundColor: "#000000",
//   //   opacity: 0.32
//   // },
//   // backdrop: {
//   //   position: 'absolute',
//   //   top: 0,
//   //   left: 0,
//   //   right: 0,
//   //   bottom: 0,
//   // }
//   // iconContainer: {
//   //   margin: 50,
//   //   flex: 1,
//   // },
//   // title: {
//   //   marginTop: 16,
//   //   paddingVertical: 8,
//   //   borderWidth: 4,
//   //   borderRadius: 6,
//   //   borderColor: "#FFF",
//   //   color: "#FFF",
//   //   textAlign: "center",
//   //   fontSize: 30,
//   //   fontWeight: "bold",
//   // }
// });

// export default App;


import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* can use to update users on a list maybe? */}
      {/* <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      /> */}
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "users on app",
          });
          // navigation.setParams({
          //   query: 'someText',
          // });
        }}
      />
    </View>
  );
}


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}


function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to details again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}






const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
        }}>
        <Tab.Screen name="User">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Navigation">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
      {/*       
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "coral",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home"
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;