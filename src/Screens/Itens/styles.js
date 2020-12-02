import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background-color: #fff;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 20px;
`;

export const Card = styled.View`
    padding: 10px;
    width: 95%;
    height: 120px;
    background-color: #F0F0F0;
    borderRadius: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const Name = styled.Text`
    flex: 1;
    display: flex;
    margin-left: 10px;
    font-size: 16px;
    flex-direction: row;
`;

export const Price = styled.Text`
    justify-content: flex-end;
    flex: 1;
    display: flex;
    color: #165A07;
    font-weight: bold;
`;

export const Pause = styled.Text`
    justify-content: flex-end;
    flex: 1;
    display: flex;
    color: #0085FF;
`;

export const Delete = styled.Text`
    justify-content: flex-end;
    flex: 1;
    display: flex;
    color: #FF0000;
`;

export const Edit = styled.Text`
    justify-content: flex-end;
    flex: 1;
    display: flex;
    color: #636363;
`;

export const Options = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Optionss = styled.View`
    flex: 1;
    flex-direction: row;
    width:350px;
    padding: 10px;
    align-items: center;
`;

export const PriceContainer = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const PriceText = styled.Text`
    margin-left: 10px;
    color: #165A07;
    font-weight: bold;
`;

export const ValueText = styled.Text`
    margin-left: 10px;
    font-weight: bold;
    color: #000;
`;