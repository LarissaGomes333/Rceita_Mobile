import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity,
    ScrollView, Button, Alert, ActivityIndicator
} from 'react-native';
import sushi from "../../../assets/sushi.png";
// import Icon from 'react-native-vector-icons/AntDesign'
import { StarFilled, FireFilled, ClockCircleTwoTone } from '@ant-design/icons';
// import Icon from '@mdi/react'
// import { mdiAccount } from '@mdi/js'
// import { Button } from '@mui/material';
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../database/firebase";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";


// export default class Boxes extends React.Component {

// render(props) {
const Detalhes = (props) => {

    const initialState = {
        id: "",
        // name: "",
        // email: "",
        // phone: "",

        imagem: "",

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

    const deleteUser = async () => {
        setLoading(true)
        const dbRef = firebase.db
            .collection("database")
            .doc(props.navigation.state.params.userId);
        await dbRef.delete();
        setLoading(false)
        props.navigation.navigate("Menu");
    };

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
        // getUserById(props.route.params.userId);
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
                <TouchableOpacity style={styles.bnt2} onPress={() => props.navigation.navigate("Menu")}>
                    <Icons style={styles.arrowleft} name="arrow-left" color="white" size={23} />
                </TouchableOpacity>
            </View>
            {/* <ImageBackground source={require('../src/pizza.png')} style={styles.imageBackground}> */}
            <View style={styles.box}>

                <View style={styles.inner}>
                    <Image
                        //style={{width: 50, height: 50}}
                        style={styles.sushi}
                        source={{ uri: user.imagem }}
                    />
                    {/* <View style={styles.titulo}><Text style={styles.texto}>Sushi Japonês</Text></View> */}
                    <View style={styles.titulo}><Text style={styles.texto}>{user.titulo}</Text></View>
                    {/* <View style={styles.titulo}><TextInput style={styles.texto} value={user.titulo}></TextInput></View> */}
                </View>
                <View style={styles.inner2}>
                    <View style={styles.inner3}>
                        <StarFilled style={{ color: '#FFB805', fontSize: '22px', marginRight: 290 }} />
                        <View style={styles.desc1}>
                            <Text style={{ fontSize: 15, color: 'black' }}>5.0</Text></View>
                    </View>
                    <View style={styles.inner4}>
                        <FireFilled style={{ color: 'red', fontSize: '20px' }} />
                        <View style={styles.desc2}>
                            <Text style={{ fontSize: 15, color: 'black' }}>{user.cal}</Text>
                        </View>
                    </View>
                    <View style={styles.inner5}>
                        <ClockCircleTwoTone style={{ fontSize: '20px' }} />
                        <View style={styles.desc3}>
                            <Text style={{ fontSize: 15, color: 'black' }}>{user.tempo}</Text>
                        </View>
                    </View>

                    <View style={styles.descricao}><Text style={{ fontSize: 14 }}>{user.sobre}</Text></View>
                    <TouchableOpacity
                        style={{ backgroundColor: '#1a694d', height: 45, width: 300, borderRadius: 12, marginRight: 2, marginBottom: 5 }}
                        onPress={() => {
                            props.navigation.navigate("DetalhesDois", {
                                userId: user.id,
                            });
                        }}>
                        <Text style={{ fontSize: 15, color: '#fff', marginLeft: 110, marginTop: 12 }}>Ver a receita</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor: '#8B0000', height: 45, width: 300, borderRadius: 12, marginBottom: 30, justifyContent:'center', alignItems:'center' }}
                        onPress={() => deleteUser()}>
                        <Text style={{ fontSize: 15, color: '#fff', backgroundColor: '#8B0000' }}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </ImageBackground> */}
        </View>
    );
}
//}

export default Detalhes;

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // height: '85%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'black'
    },
    box: {
        width: '100%',
        height: '100%',
        padding: 10,
        marginTop: 40,
        backgroundColor: 'black'
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
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomRadius: 40,
        // borderTopRadius: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    inner2: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    inner3: {
        top: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -10
    },
    inner4: {
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 110
    },
    inner5: {
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -130
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
        marginRight: 10,
        marginTop: 300,
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Pinyon Script',
    },
    descricao: {
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        color: '#7E7B7B',
        padding: 11,
        marginBottom: 50,
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
        height: '80%',
        width: '80%',
        // marginTop: -100
        //bottom: 420,
        marginBottom: 100,
        borderRadius: "50%"
    }
});
