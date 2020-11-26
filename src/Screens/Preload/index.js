import React from 'react';
import { Container, LoadingIcon } from './styles';

import BiritaLogo from '../../assets/birita.svg';

export default () => {
    return (
        <Container>
            <BiritaLogo width="100%" height="110" />
            <LoadingIcon size="large" color="#000" />
        </Container>
    );
}