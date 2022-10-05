import * as React from "react";
import { useState, setState } from "react";
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
// import Pizza from "../assets/pizza.png";

// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
// import Firebase from "../../../database/firebase";
import firebase from "firebase";

export default function Login({ navigation }) {
  let [fontsLoaded] = useFonts({
    PinyonScript_400Regular,
  });

  // const [user, setUser] = useState("");
  // const [senha, setSenha] = useState("");

  // function Entrar() {
  //   if (user === "nome" && senha === "123") {
  //     alert("LOGADO!");
  //     navigation.navigate("Menu");
  //   } else {
  //     alert("INVALIDO (user = nome / senha = 123)");
  //   }
  // }

  //Método Login Firebase
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  function Entrar() {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        if (user) {
          alert("Logado!")
          navigation.navigate("Menu")
        } else {
          alert("Inválido!")
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
  }

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {

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
              <Text style={styles.subtitulo}>Faça seu login</Text>
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

            <View style={styles.inputs}>
              <Input
                iconName={"account"}
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

              <Text style={styles.esqueceu}>Esqueceu sua senha?</Text>
            </View>
          </View>

          {/* <View style={styles.bnt}>
            <Button title="Entrar" color="#58A88B" onPress={() => Entrar()} />
          </View> */}

          <TouchableOpacity style={styles.btt} onPress={() => Entrar()}>
            <LinearGradient
              colors={["#58A88B", "#58A88B"]}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 15,
                borderColor: "#58A88B",
                borderWidth: 1,
                marginTop: 45,
              }}
            >
              <Text style={styles.textButton}> Entrar </Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
// }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    textAlign: "center",
  },
  titulo: {
    fontFamily: "PinyonScript_400Regular",
    color: "#ffff",
    fontSize: 65,
    height: 60,
    marginTop: 150,
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
  },
  linearGradient: {
    flex: 1,
  },
  inputs: {},
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
