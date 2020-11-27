import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Divider, Img,
    Title, ButtonText, Value, Description, Cifrao, Footer
} from './styles';

import product from '../../imagens/jack.jpg';

function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Divider style={styles.Divider}>
                <Img source={product} />
                <ButtonText>
                    <Title>Whiskey Jack Daniels</Title>
                    <Description>Preço:</Description>
                    <Value><Cifrao>R$ </Cifrao>200,00</Value>

                </ButtonText>
            </Divider>
            <Footer>
                <Text>Quantidade<Text>2</Text></Text>
            </Footer>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Balde de Compras" component={HomeScreen} />
            <Tab.Screen name="Favoritos" component={SettingsScreen} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    Button: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginRight: 1,
        marginLeft: 1,
        marginTop: 1,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#000',
        borderRadius: 25,
    },
    Divider: {
       
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
    },

    Title: {
        color: '#212121',
        marginTop: 40,
        marginLeft: 20,
        paddingLeft: 0,
        fontSize: 20,
        fontWeight: 'bold',
    },
    Text: {
        color: '#212121',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
        marginBottom: 10,
    },
});