import React, { useState } from "react";
import { Pressable, Text, TextInput, View, Image, Alert } from "react-native";
import { auth } from "../Controllers/firebaseConfig";
import { styles } from "../Models/Styles";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginView = ({ route, navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginClicked = () => {
        console.log(`email ${email.length}, password ${password.length}`);
        if (email.length <= 0 || password.length <= 0) {
            Alert.alert("Please enter email and password")
            return
        }
        signInWithEmailAndPassword(auth, email, password).then(() => {
            if (auth.currentUser !== null) {
                navigation.navigate("Drawer")
            }
        })
    };

    return (
        <View style={styles.loginContainer}>
            <Image
                source={require("../assets/smartshop.png")}
                style={styles.loginHeaderImg}
                alt="Logo"
            />
            <Text style={styles.loginLabel}>Email</Text>

            <TextInput
                style={styles.loginInput}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />

            <Text style={styles.loginLabel}>Password</Text>

            <TextInput
                style={styles.loginInput}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <Pressable style={styles.loginButton} onPress={onLoginClicked}>
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
        </View>
    );
};

export default LoginView;
