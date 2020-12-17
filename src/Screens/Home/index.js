import React from 'react';
import { FlatList, Image, StyleSheet, Dimensions, View } from 'react-native';
import { Container } from './styles';
import Tips from '../../Components/Tips';
import Product from '../../Components/Product';
import SearchBar from '../../Components/SearchBar';
import { ScrollView, Option, Img, Label } from './styles';

import img1 from '../../imagens/jack.jpg';
import img2 from '../../imagens/vinho.png';
import img3 from '../../imagens/hei.jpg';
import img4 from '../../imagens/martini.jpg';
import img5 from '../../imagens/jack.jpg';
import img6 from '../../imagens/vinho.png';
import img7 from '../../imagens/martini.jpg';

import SwiperFlatList from 'react-native-swiper-flatlist';
import { cat, fox } from '../../imagens';

const { width, height } = Dimensions.get('window');
const newImage = [fox, cat];
const image = index => ({ image: newImage[index % newImage.length] });
const itemsz = Array.from(Array(2)).map((_, index) => image(index));

const items = [
    {
        key: String(Math.random()),
        img: img1,
        label: 'Whisky',
    },
    {
        key: String(Math.random()),
        img: img2,
        label: 'Vinho',
    },
    {
        key: String(Math.random()),
        img: img3,
        label: 'Cerveja',
    },
    {
        key: String(Math.random()),
        img: img4,
        label: 'Licor',
    },
    {
        key: String(Math.random()),
        img: img5,
        label: 'Energir',
    },
    {
        key: String(Math.random()),
        img: img6,
        label: 'Pagar Conta',
    },
    {
        key: String(Math.random()),
        img: img7,
        label: 'Cobrar',
    },
];

export default () => {
    state = {
        images: [
            "https://www.mh-distillery.com/wp-content/uploads/2019/12/its-here-website-banner-desktop.jpg",
            // Network image
            //require('../../imagens/bannerhei.png'),// Local image
        ]
    }
    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <SearchBar />

                        <View style={styles.container}>
                            <View style={styles.container}>
                                <SwiperFlatList
                                    autoplay
                                    autoplayDelay={8}
                                    index={0}
                                    autoplayLoop={true}
                                    paginationStyleItem={styles.dot}
                                    paginationActiveColor={'#0B83C7'}
                                    paginationDefaultColor={'#C4C4C4'}
                                    data={itemsz}
                                    renderItem={({ item }) => <Image style={styles.image} source={item.image} />}
                                    showPagination
                                />
                            </View>
                        </View>

                        <ScrollView showsHorizontalScrollIndicator={false}>
                            {items.map((item) => (
                                <Option key={item.key}>
                                    <Img source={item.img} />
                                    <Label>{item.label}</Label>
                                </Option>
                            ))}
                        </ScrollView>

                        <Product />
                        <Tips />
                    </>}
            />
        </Container>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
    },
    image: {
        marginBottom: 30,
        height: 165,
        width,
        margin: 0,
    },
    dot: {
        height: 10,
        width: 10,
    }

});
