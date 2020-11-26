import React from 'react';
import { Container, Scroller } from './styles';
import Product from '../../Components/Product';
import SearchBar from '../../Components/SearchBar';

export default () => {
    return (
        <Container>
            <Scroller
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            >
                <SearchBar/>
                <Product/>
            </Scroller>
        </Container>
    );
}