import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity,
    ScrollView, Button, Alert, ActivityIndicator
} from 'react-native';
import { StarFilled, FireFilled, ClockCircleTwoTone } from '@ant-design/icons';
// import Icon from '@mdi/react'
// import { mdiAccount } from '@mdi/js'
// import { Button } from '@mui/material';
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../database/firebase";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
// export default class Boxes2 extends React.Component {


// render(props) {
const DetalhesDois = (props) => {

    const initialState = {
        id: "",
        name: "",
        email: "",
        phone: "",

        titulo: "",
        sobre: "",
        tempo: "",
        cal: "",
        ingred: "",
        modop: ""
    };

    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(true);

    // const handleTextChange = (value, prop) => {
    //     setUser({ ...user, [prop]: value });
    // };

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection("database").doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({ ...user, id: doc.id });
        setLoading(false);
    };

    // const deleteUser = async () => {
    //     setLoading(true)
    //     const dbRef = firebase.db
    //         .collection("database")
    //         .doc(props.route.params.userId);
    //     await dbRef.delete();
    //     setLoading(false)
    //     props.navigation.navigate("UsersList");
    // };

    // const openConfirmationAlert = () => {
    //     Alert.alert(
    //         "Removing the User",
    //         "Are you sure?",
    //         [
    //             { text: "Yes", onPress: () => deleteUser() },
    //             { text: "No", onPress: () => console.log("canceled") },
    //         ],
    //         {
    //             cancelable: true,
    //         }
    //     );
    // };

    // const updateUser = async () => {
    //     const userRef = firebase.db.collection("database").doc(user.id);
    //     await userRef.set({
    //         name: user.name,
    //         email: user.email,
    //         phone: user.phone,
    //     });
    //     setUser(initialState);
    //     props.navigation.navigate("UsersList");
    // };

    useEffect(() => {
        getUserById(props.navigation.state.params.userId);
    }, []);

    // if (loading) {
    //     return (
    //         <View style={styles.loader}>
    //             <ActivityIndicator size="large" color="#9E9E9E" />
    //         </View>
    //     );
    // }

    //******************************************************************** */
    return (
        <View style={styles.container}>
          <View style={styles.button1}>
                <TouchableOpacity style={styles.bnt2} onPress={() => props.navigation.navigate("Detalhes", { userId: user.id,
                    })}>
                    <Icons style={styles.arrowleft} name="arrow-left" color="gray" size={23} />
                </TouchableOpacity>
            </View>
            {/* <ImageBackground source={require('../../../assets/pizza.png')} style={styles.imageBackground}> */}
                <View style={styles.box}>
                    <View style={styles.inner2}>
                        <View style={styles.icon1}>
                            <StarFilled style={{ color: '#FFB805', fontSize: '22px', marginRight: 290 }} />
                            <View style={styles.desc1}>
                                <Text style={{ fontSize: 15, color: 'black' }}>5.0</Text></View>
                        </View>
                        <View style={styles.icon2}>
                            <FireFilled style={{ color: 'red', fontSize: '20px' }} />
                            <View style={styles.desc2}>
                                <Text style={{ fontSize: 15, color: 'black' }}>{user.cal}</Text></View>
                        </View>
                        <View style={styles.icon3}>
                            <ClockCircleTwoTone style={{ fontSize: '20px' }} />
                            <View style={styles.desc3}>
                                <Text style={{ fontSize: 15, color: 'black' }}>{user.tempo}</Text>
                            </View>
                        </View>
                        <View style={styles.titulo4}><Text style={styles.texto4}>{user.titulo}</Text></View>
                        <View style={styles.inner3}>
                            <View style={styles.titulo3}><Text style={styles.texto3}>Ingredientes</Text></View>
                        </View>
                        <View style={styles.descricao3}><Text>{user.ingred}</Text>
                        </View>
                        <View style={styles.inner}>
                            <View style={styles.titulo}><Text style={styles.texto}>Modo de preparo</Text></View>
                        </View>
                        <View style={styles.descricao}><Text>{user.modop}</Text></View>
                    </View>
                </View>
            {/* </ImageBackground> */}
        </View>
    );
}
//}

export default DetalhesDois;

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // height: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'black',
        // justifyContent: 'center',
        // alignItems: 'center'
        // paddingBottom: 50
        // resizeMode: "cover",
    },
    box: {
        width: '100%',
        height: '100%',
        padding: 10,
        paddingBottom: 70,
        marginTop: 40,
        backgroundColor: 'black',

    },
    inner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        borderBottomRadius: 40,
        borderTopRadius: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    inner3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
    },
    inner2: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,


    },
    icon1: {
        top: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon2: {
        top: 98,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 120
    },
    icon3: {
        top: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -120
    },
    desc1: {
        bottom: 20,
        right: 115
    },
    desc2: {
        bottom: 20,
        right: -50
    },
    desc3: {
        bottom: 20,
        right: -52
    },
    titulo: {
        marginRight: 170,
        marginTop: 5,
    },
    titulo3: {
        marginRight: 210,
        marginTop: 140,
    },
    titulo4: {
        marginTop: -60,
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#615A5A',
        fontFamily: 'Pinyon Script'
    },
    texto3: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#615A5A',
        fontFamily: 'Pinyon Script'
    },
    texto4: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Pinyon Script'
    },
    descricao: {
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        color: '#7E7B7B',
        fontSize: 12,
        padding: 11,
        bottom: 60,
        fontFamily: 'Pinyon Script'
    },
    descricao3: {
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        color: '#7E7B7B',
        fontSize: 12,
        padding: 11,
        top: 10,
         fontFamily: 'Pinyon Script'

    },
    // imageBackground: {
    //     flex: 1,
    //     resizeMode: "cover",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: 730,
    //     width: 500
    // },
    sushi: {
        position: 'absolute',
        flex: 1,
        height: '110%',
        width: '85%',
        // marginTop: -100
        bottom: 320,
    },
    button1: {
        //marginBottom: 50,
        //marginRight: 800
    },
    bnt2: {
        backgroundColor: 'black',
        width: 70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        //marginLeft: 170,
        // backgroundColor: '#fff',
        //borderColor: '#f4f4f4',
        //shadowColor: 'gray',
        //shadowOffset: { width: 0, height: 1 },
        //shadowOpacity: 1.0,
        elevation: 1,
        borderRadius: 3,
        borderTopRadius: 5,
        marginTop: 3

    },
});
