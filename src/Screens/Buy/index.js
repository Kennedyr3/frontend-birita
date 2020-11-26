import React from 'react';
import { Text, Alert, StyleSheet, Dimensions } from 'react-native';
import {
    Container, Scroller, Divider, Img,
    Title, ButtonText, Value, Description,
    View, Cifrao, Actions, Option, FavoriteTouch
} from './styles';

import Tips from '../../Components/Tips';

//Icons
import product from '../../imagens/jack.jpg';
import Star from '../../icons/star.svg';
import Favorite from '../../icons/favorite.svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {

    return (
        <>
            <Container>
                <Scroller
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Divider style={styles.Divider}>
                        <Img source={product} />
                        <ButtonText>
                            <Title>Whiskey Jack Daniels</Title>
                            <Actions>
                                <Option>
                                    <Star width="20" height="20" fill="#FFC107" color="#FFC107" />
                                    <Star width="20" height="20" fill="#FFC107" color="#FFC107" />
                                    <Star width="20" height="20" fill="#FFC107" color="#FFC107" />
                                    <Star width="20" height="20" fill="#FFC107" color="#FFC107" />
                                    <Star width="20" height="20" fill="#FFC107" color="#FFC107" />
                                </Option>
                            </Actions>
                            <Description>Preço:</Description>
                            <Value><Cifrao>R$ </Cifrao>200,00</Value>
                            <FavoriteTouch>
                                <Favorite width="28" height="28" fill="#D40000" color="#FFC107" />
                            </FavoriteTouch>
                            <Text
                                style={styles.Button}
                                title="Comprar"
                                onPress={() => Alert.alert('Buy meu querido')}
                            >
                                Comprar
                            </Text>
                        </ButtonText>
                    </Divider>

                    <View style={styles.More}>
                        <View>
                            <Text style={styles.Title}>
                                Descrição
                            </Text>
                            <Text style={styles.Text}>
                                Grandes marcas de Whisky como: Johnnie Walker,
                                Ballantines, Chivas Regal,
                                Jack Daniels, Logan, Buchanans, Dimple,
                                Grants, com o Melhor Preço
                            </Text>
                            <Tips style={styles.Tips} />
                        </View>
                    </View>
                </Scroller>
            </Container>
        </>
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
        marginTop: 163,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#000',
        borderRadius: 15,
        position: 'absolute'
    },
    Divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#EBEBEB',
    },

    Title: {
        color: '#212121',
        marginTop: 20,
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
        marginBottom: 50,
    }
});