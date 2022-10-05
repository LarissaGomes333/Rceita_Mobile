import React, { useState, useEffect } from "react";
import { Button, ImageBackground, Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { ListItem, Avatar, Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import TouchableScale from 'react-native-touchable-scale';
import { LinearGradient } from "expo-linear-gradient";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Firebase from "../../../database/firebase";
import firebase from 'firebase';
import { SwapRightOutlined } from "@ant-design/icons";

import {
  useFonts,
  PinyonScript_400Regular,
} from "@expo-google-fonts/pinyon-script";

const UserScreen = (props) => {
  let [fontsLoaded] = useFonts({
    PinyonScript_400Regular,
  });

  const [users, setUsers] = useState([]);

  function Sair() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      alert("Obrigado! Volte sempre.")
      navigation.navigate('Home')
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    Firebase.db.collection("database").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone, titulo, imagem } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
          titulo,
          imagem
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/lousa4.png")}
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={["#00000000", "#000000"]}
          style={{ height: "100%", width: "100%", alignItems: 'center' }}
        >
          <View style={{
            //borderWidth: 1, 
            //borderColor: 'white', 
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: 300,
            height: 80
          }}>
            <TouchableOpacity
              style={styles.button}
              //onPress={() => props.navigation.navigate("Home")}
              onPress={() => Sair()}
              title="Criar Receita">
              <Icons style={styles.arrowright} name="arrow-left" color="white" size={30} />
            </TouchableOpacity>

            <Text style={{ fontSize: 50, color: 'white', fontFamily: "PinyonScript_400Regular", }}>Menu</Text>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => props.navigation.navigate("CadReceitas")}
              title="Criar Receita">
              <Icons style={styles.arrowleft} name="plus" color="white" size={30} />
            </TouchableOpacity>
          </View>
          <ScrollView>


            <View style={styles.menu}>

              {users.map((user) => {
                return (

                  <ListItem
                    containerStyle={{ borderRadius: 8, overflow: 'hidden', }}
                    Component={TouchableScale}
                    style={styles.item}
                    key={user.id}
                    friction={90} //
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.95} //
                    linearGradientProps={{
                      colors: ['#fff', '#fff'],
                      start: { x: 1, y: 0 },
                      end: { x: 0.2, y: 0 },
                    }}
                    bottomDivider
                    ViewComponent={LinearGradient}
                    // bottomDivider
                    onPress={() => {
                      props.navigation.navigate("Detalhes", {
                        userId: user.id,
                      });
                    }}
                  //chevron={{ color: 'black' }}
                  >
                    {/* <ListItem.Chevron /> */}
                    
                      <Avatar
                        source={{ uri: user.imagem, }}
                        //source={{
                        //  uri:
                        //    "",
                        //
                        //}}
                        rounded
                      />
                      <ListItem.Content>
                        <ListItem.Title style={styles.legenda}>{user.name}</ListItem.Title>
                        <ListItem.Subtitle style={styles.legenda}>{user.titulo}</ListItem.Subtitle>
                        {/* <ListItem.Subtitle>{user.email}</ListItem.Subtitle> */}
                      </ListItem.Content>
                      <ListItem.Chevron />
                    
                  </ListItem>

                );
              })}
              {/* <Button
        onPress={() => props.navigation.navigate("CadReceitas")}
        title="Criar Receita"
      /> */}
            </View>

          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    textAlign: "center",
  },
  buttonImageIconStyle: {
    marginTop: -3,
    marginLeft: -5,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  legenda: {
    fontFamily: 'Pinyon Script',
    // fontWeight: 'bold',
    color: '#7E7B7B',
    fontSize: 15
  },
  menu: {
    width: '100%',
    alignItems: 'center',
    // bottom: 30
  },
  listaBtn: {
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',

  },
  button: {
    //justifySelf:'flex-start',
    //backgroundColor: '#fff',
    backgroundColor: '#00000000',
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 15,
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: 'blue',
    //marginLeft: 250
    // height: "100vh",
    // textAlign: "center",
  },
  button2: {
    backgroundColor: '#00000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: 'blue',
    //marginRight: 250,
    //bottom: 60
    // height: "100vh",
    // textAlign: "center",
  },
  text: {
    fontSize: 15,
    // textAlign: "center",
    // alignItems: "center",
    marginBottom: 40,
    color: "#fff",
  },
  item: {
    margin: '5px',
    // paddingTop: 30,
    //flexDirection: 'flex',
    width: '300px',
    height: '65px',
    //alignItems: 'center',
    //backgroundColor: 'black',
    //justifyContent: 'center',
    // borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',

  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default UserScreen;

