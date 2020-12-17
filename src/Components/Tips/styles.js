import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
    margin-top: 5px;
    `;

export const Option = styled.TouchableOpacity`
    background-color: #fff;
    width: 150px;
    height: 265px;
    border-radius:8px;
    padding: 10px;
    justify-content: space-between;
    margin-right: 10px;
`;

export const Header = styled.View`
    height: 20px;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #000;
    font-size: 25px;
    font-weight: bold;
    padding: 30px
`;

export const Img = styled.Image`
    align-self: center;
    width: 137px;
    height: 200px;
    borderWidth: 1px;
    borderRadius: 15px;
    borderColor: #E0E0E0;
`;

export const BodyOffer = styled.View`
    margin-top: -20px;
`;

export const Name = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: bold;
 `;

 export const Actions = styled.View`
    flex-direction: row;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
    color: #A1A1A1;
    font-size: 14px;
    font-weight: bold;
/* margin-top: 15px; */
`;

export const DollarSign = styled.Text`
    color: #165A07;
    font-size: 14px;
    font-weight: bold;
/* margin-top: 15px; */
`;