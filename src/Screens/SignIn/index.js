import React from 'react';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import SignInput from '../../Components/SignInput'

// Icon's
import BiritaLogo from '../../assets/birita.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    return (
        <Container>
            <BiritaLogo width="100%" height="100" />

            <InputArea>
               <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
               />

               <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    password={true}
               />

                <CustomButton>
                    <CustomButtonText>Entrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}