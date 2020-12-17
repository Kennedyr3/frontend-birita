import React, { useState } from 'react';
import {
    Container, Scroller, Divider, Img,
    Title, ButtonText, Value, Description,
    View, Cifrao, Actions, Option, FavoriteTouch,
    TextEvaluate
} from './styles';

import product from '../../imagens/jack.jpg';
import { Text, Alert, StyleSheet, Dimensions } from 'react-native';
import Tips from '../../Components/Tips';
import Star from '../../icons/star.svg';
import Favorite from '../../icons/favorite.svg';
import { Rating, AirbnbRating } from 'react-native-ratings';
const WATER = require('../../icons/star.svg')


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default () => {
    const [isVisible, setIsVisible] = useState(true);
    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

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
                            <FavoriteTouch onPress={handleToggleVisibility}>
                                <Favorite name={isVisible ? 'Favorite' : 'eye-off'} width="28" height="28" fill="#D40000" color="#FFC107" />
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
                        </View>
                    </View>
                    <TextEvaluate>Avaliar produto</TextEvaluate>

                    <Actions>
                        <AirbnbRating
                            count={5}
                            reviews={["Bad", "Meh", "Good", "Very Good", "Amazing"]}
                            defaultRating={5}
                            size={50}
                            reviewColor={'black'}
                        />

                    </Actions>
                    <Tips style={styles.Tips} />
                </Scroller>
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    star: {
        marginLeft: 18,

        marginBottom: 20,
    },
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