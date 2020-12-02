import React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Image, Sitle } from './styles';
import { TouchableOpacity } from "react-native";

// Screens
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Buy from "../Screens/Buy";
import Cart from "../Screens/Cart";
import Preload from "../Screens/Preload";
import Itens from "../Screens/Itens";
import Confirm from "../Screens/Confirm";

// Icon's
import Arrow from '../icons/arrow_back_ios.svg';
import HomeIcon from '../icons/home.svg';
import SearchIcon from '../icons/search.svg';
import ShoppingCart from '../icons/shopping_cart.svg';
import IconCart from '../icons/shopping_cart.svg';

const optionsHeader = ({ navigation }) => ({
  headerTitleAlign: "center",
  headerTitle: 'Birita',

  headerStyle: {
    backgroundColor: "#fff",
    elevation: 0,
  },

  headerTintColor: "#000",
  // headerTitle: () => <SearchBarHeader />,
  drawerIcon: () => (

    <HomeIcon width="24" height="24" fill="#000" style={{ marginLeft: 10, }} />
  ),
  headerRight: () => (
    <TouchableOpacity
      style={{ marginRight: 20 }}
      onPress={() => navigation.navigate('Cart')}
      title="Info"
    >
      <IconCart width="24" height="24" fill="#000" />

    </TouchableOpacity>
  ),

  headerTitleContainerStyle: {
    flex: 1,
  },
});

const optionsHeaderSearch = ({ navigation }) => ({
  headerTitleAlign: "center",
  headerTitle: 'Search',

  headerStyle: {
    backgroundColor: "#fff",
    elevation: 0,
  },
  drawerIcon: () => (
    <SearchIcon width="24" height="24" fill="#000" style={{ marginLeft: 10, }} />
  ),
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      onPress={() => navigation.goBack()}
      title="Info"
    >
      <Arrow width="24" height="24" fill="#000" />
    </TouchableOpacity>
  ),

  headerTintColor: "#000",
  headerTitleContainerStyle: {
    flex: 1,
  },
});

const optionsHeaderBack = ({ navigation }) => ({
  headerTitleAlign: "center",
  headerTitle: '',
  Title: '',
  name: '',
  headerStyle: {
    backgroundColor: "#fff",
    elevation: 0,
  },
  drawerIcon: () => (

    <ShoppingCart width="24" height="24" fill="#000" style={{ marginLeft: 10, }} />
  ),
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      onPress={() => navigation.goBack()}
      title="Info"
    >
      <Arrow width="24" height="24" fill="#000" />
    </TouchableOpacity>
  ),
  headerTintColor: "#000",
  headerTitleContainerStyle: {
    flex: 1,
  },
});

const optionsHeaderCart = ({ navigation }) => ({
  headerTitleAlign: "left",
  headerTitle: 'Balde de Compras',
  Title: '',
  name: '',
  headerStyle: {
    backgroundColor: "#fff",
    elevation: 0,
  },
  drawerIcon: () => (
    <ShoppingCart width="24" height="24" fill="#000" style={{ marginLeft: 10, }} />
  ),
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      onPress={() => navigation.goBack()}
      title="Info"
    >
      <Arrow width="24" height="24" fill="#000" />
    </TouchableOpacity>
  ),
  headerTintColor: "#000",
  headerTitleContainerStyle: {
    flex: 1,
  },
});

const optionsHeaderConfirm = ({ navigation }) => ({
  headerTitleAlign: "left",
  headerTitle: 'Comfirmar',
  Title: '',
  name: '',
  headerStyle: {
    backgroundColor: "#fff",
    elevation: 0,
  },
  drawerIcon: () => (
    <ShoppingCart width="24" height="24" fill="#000" style={{ marginLeft: 10, }} />
  ),
  headerLeft: () => (
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      onPress={() => navigation.goBack()}
      title="Info"
    >
      <Arrow width="24" height="24" fill="#000" />
    </TouchableOpacity>
  ),
  headerTintColor: "#000",
  headerTitleContainerStyle: {
    flex: 1,
  },
});

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen drawerContent={props => <CustomDrawerContent {...props} />} name="Inicio" component={Home} options={optionsHeader} />
        <Drawer.Screen name="Buscar" component={Search} options={optionsHeaderSearch} />
        <Drawer.Screen name="Balde de Compras" component={Buy} options={optionsHeaderBack} />
        <Drawer.Screen name="Cart" component={Cart} options={optionsHeaderCart} />
        <Drawer.Screen name="Confirm" component={Confirm} options={optionsHeaderConfirm} />

        <Drawer.Screen name="Preload" component={Preload} options={optionsHeaderBack} />
        <Drawer.Screen name="Itens" component={Itens} options={optionsHeaderBack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
