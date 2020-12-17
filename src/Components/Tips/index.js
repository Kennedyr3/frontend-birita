import React from 'react';
import {
    ScrollView, Option, Title, Img, BodyOffer, Name,
    Details, DollarSign, Price, Header
} from './styles';

import img8 from '../../imagens/martini.jpg';
import img9 from '../../imagens/jack.jpg';
import img10 from '../../imagens/vinho.png';
import img11 from '../../imagens/vinho.png';
import img12 from '../../imagens/vinho.png';

const items = [
    {
        key: String(Math.random()),
        img: img8,
    },

    {
        key: String(Math.random()),
        img: img9,
    },

    {
        key: String(Math.random()),
        img: img10,
    },

    {
        key: String(Math.random()),
        img: img11,
    },

    {
        key: String(Math.random()),
        img: img12,
    },
]

export default () => {
    return (
        <>
            <Header>
                <Title>Ofertas para você:</Title>
            </Header>
            <ScrollView showsHorizontalScrollIndicator={false}>
                {items.map((item) => (
                    <Option key={item.key} bgColor={item.bgColor}>
                        <Img source={item.img} />
                        
                        <BodyOffer>
                            <Name>Cerveja Jiante</Name>
                            <Details>
                                <Price><DollarSign>R$ </DollarSign>18,00</Price>
                            </Details>
                        </BodyOffer>

                    </Option>
                ))}
            </ScrollView>
        </>
    );
}