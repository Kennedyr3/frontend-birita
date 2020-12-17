import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    justify-content: center;
   
`;

export const Scroller = styled.ScrollView``;
export const View = styled.View``;

export const Divider = styled.View`
    flex-direction: row;
`;

export const Img = styled.Image`
    width: 150px;
    height: 220px;
    margin-left: 20px;
    margin-top: 10px;
    margin-right: 15px;
    border-radius: 10px;
    justify-content: space-between;
    flex-direction: column;
    borderWidth: 1px;
    border-color: #EBEBEB;
    margin-bottom: 20px
`;

export const ButtonText = styled.View`
    width: 190px;
    height: 220px;
    margin: 0;
    margin-top: 10px;
    margin-right: -20px;
    /*justify-content: space-between;*\
    flex-direction: column;
`;

export const Cifrao = styled.Text`
    color: #165A07;
    position: absolute;
`;

export const Title = styled.Text`
    color: #000;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #000;
    margin-top: 115px;
    margin-left: 0;
    justify-content: flex-start;
    font-weight:700;
    position: absolute;

`;

export const Value = styled.Text`
    color: #000;
    font-weight: bold;
    flex: 1;
    margin-top: 135px;
    margin-left: 0;
    margin-right: 5px;
    font-size: 18px;
    position: absolute;
`;

export const Actions = styled.View`
    margin-bottom: 30px;
`;

export const Option = styled.View`
    flex-direction: row;
`;

export const FavoriteTouch = styled.TouchableOpacity`
    margin-left: 150px;
    margin-top: 25px;
`;

export const TextEvaluate = styled.Text`
    font-weight: bold;
    font-size: 20px;
    padding-left: 20px;
    margin-bottom: 0px;
`;


// export const Buy = styled.View`
//     background: red;
//     width: 100%;
//     height: 300px;
// `;
