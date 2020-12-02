import React from 'react';
import {
    Container, Title, Card,
    Name, Price, Pause, Delete, Edit,
    Options, Optionss, PriceContainer, PriceText,
    ValueText
} from './styles';

import PauseIcon from '../../icons/pause.svg';
import DeleteIcon from '../../icons/delete.svg';
import Create from '../../icons/create.svg';

export default () => {

    return (
        <Container>
            <Title>Meus itens cadastrados</Title>

            <Card>
                <Name>Whiskey jack daniels</Name>

                <PriceContainer>
                    <ValueText>Valor:</ValueText>
                    <PriceText>R$ </PriceText>
                    <Price>10,00</Price>
                </PriceContainer>

                <Optionss>
                    <Options>
                        <PauseIcon width="24" height="24" fill="#0085FF" /><Pause>Pausar vendas</Pause>
                    </Options>
                    <Options>
                        <DeleteIcon width="24" height="24" fill="#FF0000" /><Delete>Excluir item</Delete>
                    </Options>
                    <Options>
                        <Create width="24" height="24" fill="#636363" /><Edit>Editar</Edit>
                    </Options>
                </Optionss>
            </Card>
        </Container >
    );
}