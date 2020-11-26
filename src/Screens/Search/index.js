import React from 'react';
import { Container } from './styles';
import Product from '../../Components/Product';
import SearchBar from '../../Components/SearchBar';
import { FlatList } from 'react-native'

export default () => {
    return (
        <Container>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <SearchBar />
                        <Product />
                    </>}
            />
        </Container>

    );
}