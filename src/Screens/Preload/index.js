import React from 'react';
import { Container, LoadingIcon, Text } from './styles';
import { StyleSheet } from "react-native";

import BiritaLogo from '../../icons/birita.svg';

export default () => {
    return (
        <Container>
            <BiritaLogo width="100%" height="110" />
            <LoadingIcon size="large" color="#000" />
            <Text>From Kennedy</Text>
        </Container >
    );
}