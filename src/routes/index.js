import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from '../screens/home/index';
import Option from '../screens/option/index';
import Destinos from '../screens/destinos/index';
import Login from '../screens/Login/index';
import Cadastro from '../screens/Cadastro/index';
import CadReceitas from '../screens/CadastrarReceitas/index';
import Menu from '../screens/Menu/index';
// import MenuDois from '../screens/MenuDois/index';
import Detalhes from "../screens/Detalhes/Boxes";
import DetalhesDois from "../screens/Detalhes/Boxes2";

const Rotas = {
    Home: {
        nome: "Home",
        screen: Home
    },
    Destinos: {
        nome: "Destinos",
        screen: Destinos
    },
    Option: {
        nome: "Option",
        screen: Option
    },
    Login: {
        nome: "Login",
        screen: Login
    },
    Cadastro: {
        nome: "Cadastro",
        screen: Cadastro
    },
    CadReceitas:{
        nome: "CadReceitas",
        screen: CadReceitas
    },
    Menu:{
        nome: "Menu",
        screen: Menu
    },
    // MenuDois:{
    //     nome: "MenuDois",
    //     screen: MenuDois
    // },
    Detalhes:{
        nome:"Detalhes",
        screen: Detalhes
    },
    DetalhesDois:{
        nome:"DetalhesDois",
        screen: DetalhesDois
    }
   
};



// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);