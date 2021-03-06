// import React, { FC, ReactElement, useState } from "react";
// import { Alert, Button, StyleSheet, TextInput } from "react-native";
// import Parse from "parse/react-native";

// export const UserRegistration = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const doUserRegistration = async function () {
//         // Note that these values come from state variables that we've declared before
//         const usernameValue = username;
//         const passwordValue = password;
//         // Since the signUp method returns a Promise, we need to call it using await
//         return await Parse.User.signUp(usernameValue, passwordValue)
//             .then((createdUser) => {
//                 // Parse.User.signUp returns the already created ParseUser object if successful
//                 Alert.alert(
//                     "Success!",
//                     `User ${createdUser.get("username")} was successfully created!`
//                 );
//                 return true;
//             })
//             .catch((error) => {
//                 // signUp can fail if any parameter is blank or failed an uniqueness check on the server
//                 Alert.alert("Error!", error.message);
//                 return false;
//             });
//     };

//     return (
//         <>
//             <TextInput
//                 style={styles.input}
//                 value={username}
//                 placeholder={"Username"}
//                 onChangeText={(text) => setUsername(text)}
//                 autoCapitalize={"none"}
//             />
//             <TextInput
//                 style={styles.input}
//                 value={password}
//                 placeholder={"Password"}
//                 secureTextEntry
//                 onChangeText={(text) => setPassword(text)}
//             />
//             <Button title={"Sign Up"} onPress={() => doUserRegistration()} />
//         </>
//     );
// };

// const styles = StyleSheet.create({
//     input: {
//         height: 40,
//         marginBottom: 10,
//         backgroundColor: "#fff",
//     },
// });



import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';

function RegistrationScreen({ navigation }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
        // come back and adjust and make a navigation page for a login 
    }

    const onRegisterPress = () => {
        // come back to make register possible 
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Full Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(fullName) => setFullName(fullName)}
                value={fullName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Phone Number'
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                value={phoneNumber}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(email) => setEmail(email)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(password) => setPassword(password)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onRegisterPress()}>
                <Text style={styles.buttonTitle}>Create account</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
            </View>
        </View>
    )
}

export default RegistrationScreen;