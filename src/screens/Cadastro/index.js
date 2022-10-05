import * as React from "react";
import { useState, useEffect } from 'react';
import Input from "../../../componentes/input/index";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  PinyonScript_400Regular,
} from "@expo-google-fonts/pinyon-script";
import { LinearGradient } from "expo-linear-gradient";


import Face from "../../../assets/face.png";
import Insta from "../../../assets/insta.png";
import Google from "../../../assets/google.png";
import Pizza from "../../../assets/pizza.png";

// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
//import auth from "../../../database/firebase";
// import Firebase from "../../../database/firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase";
// require("firebase/auth")



export default function Cadastro({ navigation }) {
  let [fontsLoaded] = useFonts({
    PinyonScript_400Regular,
  });

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  //Web Version 9
  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, nome, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  function Cadastrar() {
    //Web Version 8
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        //console.log(user)
        if (user) {
          alert("CADASTRADO!")
          navigation.navigate("Login")
        }

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/pizza.png")}
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={["#00000000", "#000000"]}
          style={{ height: "100%", width: "100%" }}
        >
          <View style={{ marginLeft: "auto", marginRight: "auto" }}>
            <View>
              <Text style={styles.titulo}>BienVenue!</Text>
              <Text style={styles.subtitulo}>Faça seu cadastro</Text>
            </View>

            <View style={styles.containerImage}>
              <Image source={Insta} style={styles.images} />
              <Image source={Face} style={styles.images} />
              <Image source={Google} style={styles.images} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
              <View>
                <Text
                  style={{
                    width: 50,
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  OU
                </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
            </View>
            {/* <View style={styles.campos}>
                                <Icons
                                    name="home"
                                    style={styles.icon}
                                    size={26}
                                    color={"#444"}
                                />
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid='tranparent'
                                    placeholderTextColor={'gray'}
                                    placeholder="Digite sua senha"
                                />
                            </ View> */}
            <View style={styles.input}>
              <Input
                iconName={"account"}
                placeholder={"Digite seu nome"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(value) => setNome(value)}
              />

              <Input
                iconName={"email"}
                placeholder={"Digite seu Email"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(value) => setEmail(value)}
              />

              <Input
                iconName={"lock"}
                placeholder={"Digite sua Senha"}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                secureTextEntry
                onChangeText={(value) => setPass(value)}
              />

              {/* <Text style={styles.esqueceu}>Esqueceu sua senha?</Text> */}
            </View>
          </View>

          {/* <View style={styles.bnt}>
            <Button title="Cadastrar" color="#58A88B" 
            onPress={() => navigation.navigate("Home")}/>
          </View> */}

          {/* <View style={styles.ba}> */}
          <View>
            <TouchableOpacity
              style={styles.btt}
              //onPress={() => navigation.navigate("Home")}
              // onPress={() => alert(password)}
              onPress={() => Cadastrar()}
            >
              <LinearGradient
                colors={['#58A88B', '#58A88B']}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 15,
                  borderColor: "#58A88B",
                  borderWidth: 1,
                  marginTop: 45
                }}
              >
                <Text style={styles.textButton}> Cadastrar </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* <Button
              style={{ height: 50, width: 100 }}
              onPress={() => navigation.navigate("Home")}>VOLTAR</Button> */}
          </View>
        </LinearGradient>



      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100vh',
    textAlign: "center",
  },
  ba: {
    height: 200
  },
  titulo: {
    fontFamily: "PinyonScript_400Regular",
    color: "#ffff",
    fontSize: 65,
    height: 60,
    marginTop: 80,
    textAlign: "center",
    // fontWeight: 500,
  },
  subtitulo: {
    fontSize: 20,
    // textAlign: "center",
    color: "#ffff",
    // marginBottom: 40,
    textAlign: "center",
  },
  images: {
    width: 40,
    height: 40,
  },
  esqueceu: {
    color: "white",
    // width: 500,
    // position: 'absolute',
    marginLeft: "auto",
  },
  containerImage: {
    padding: 20,
    // border: "solid green",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  linearGradient: {
    flex: 1,
  },
  secret: {
    position: "absolute",
    right: 10,
    top: 12,
  },
  bnt: {
    width: 200,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 18,
    justifyContent: "center",
    // backgroundColor: "#58A88B",
    color: "white",
  },
  btt: {
    borderRadius: 15,
    width: "75%",
    height: 40,
    alignItems: "center",
    textAlign: "center",
    marginLeft: "13%",
    marginBottom: 15,
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    color: "#fff",
    marginTop: 3
  },
});
