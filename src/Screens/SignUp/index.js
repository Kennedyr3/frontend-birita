import React from 'react';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
} from './styles';

import SignInput from '../../Components/SignInput'

// Icons
import BiritaLogo from '../../assets/birita.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    return (
        <Container>
            <BiritaLogo width="100%" height="100" />
            <InputArea>
                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                />

                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                />
                <SignInput
                    placeholder="Digite sua senha"
                    IconSvg={LockIcon}
                    password={true}
                />

                <CustomButton>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton>
                <SignMessageButtonText>Já possui uma conta ?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}