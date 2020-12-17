import React from 'react';
import { FlatList } from 'react-native'
import { Container } from './styles';

//Components
import Product from '../../Components/Product';
import SearchBar from '../../Components/SearchBar';

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