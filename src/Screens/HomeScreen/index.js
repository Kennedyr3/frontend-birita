import React from 'react';
import { } from 'react-native'
import { Container, Scroller, } from './styles';

// Componets
import Category from '../../Components/Category';
import Tips from '../../Components/Tips';
import Product from '../../Components/Product';
import SearchBar from '../../Components/SearchBar';
import Slide from '../../Components/Slide';

// imagens
import img1 from '../../imagens/jack.jpg';
import img2 from '../../imagens/vinho.png';
import img3 from '../../imagens/hei.jpg';
import img4 from '../../imagens/martini.jpg';
import img5 from '../../imagens/jack.jpg';
import img6 from '../../imagens/vinho.png';
import img7 from '../../imagens/martini.jpg';

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
    return (
        <>
        <Container>
            <Scroller
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <SearchBar />
                <Slide />
                <Category/>
                <Product />
                <Tips />
            </Scroller>
        </Container>
        </>
    );
}