import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    Amount, Price, Total, BoxValue,
    Divider, Img, Title, ButtonText, Value, Description,
    Cifrao, Footer, ScrollView, Container
} from './styles';

import product from '../../imagens/jack.jpg';
import InputSpinner from "react-native-input-spinner";

export default Cart = () => {
    const [number, setNumber ] = useState(5)
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Container>
                <ScrollView>
                    <Divider style={styles.Divider}>
                        <Img source={product} />
                        <ButtonText>
                            <Title>Whiskey Jack Daniels</Title>
                            <Description>Preço:</Description>
                            <Value><Cifrao>R$ </Cifrao>200,00</Value>
                        </ButtonText>
                        <BoxValue>
                            <InputSpinner
                                max={100}
                                min={1}
                                step={1}
                                buttonStyle={{ height: 25, width: 25, marginTop: 13 }}
                                inputStyle={{ fontSize: 20, }}
                                style={{ height: 50, width: 90 }}
                                colorMax={"#f04048"}
                                colorMin={"gray"}
                                value={number}
                                onChange={(num) => {
                                    console.log(num);
                                }}
                            />
                        </BoxValue>
                    </Divider>

                </ScrollView>
            </Container>
            <Footer>
                <Total>
                    <Amount>Total:</Amount>
                    <Cifrao>R$ <Price>200,00</Price></Cifrao>
                </Total>
                <Text
                    style={styles.Button}
                    title="Comprar"
                    onPress={() => Alert.alert('Buy meu querido')}
                >
                    Continuar
                </Text>
            </Footer>
        </View>
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
        bottom: 10,
        right: 0,
        left: 0,
        position: "absolute",
    },
    Divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
        borderTopWidth: 1,
        borderTopColor: '#EBEBEB',

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