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

export const Text = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Img = styled.Image`
    width: 100px;
    height: 150px;
    margin-left: 20px;
    margin-top: 35px;
    margin-right: 15px;
    border-radius: 10px;
    justify-content: space-between;
    flex-direction: column;
    border: 1px;
    border-color: #EBEBEB;
    margin-bottom: 0px
`;

export const ButtonText = styled.View`
    width: 250px;
    height: 190px;
    margin: 0;
    margin-top: 35px;
    margin-right: 0px;
    justify-content: space-between;
    flex-direction: column;
   
`;

export const Cifrao = styled.Text`
    color: #165A07;
`;

export const Footer = styled.View`
    height: 215px;
    width: 100%;
    background-color: red;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
`;

export const Title = styled.Text`
    color: #000;
    justify-content: space-between;
    flex-direction: column;
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #000;
    margin-top: 80px;
    margin-left: 150px;
    justify-content: flex-start;
    font-weight:700;
`;

export const Value = styled.Text`
    color: #000;
    font-weight: bold;
    flex: 1;
    justify-content: flex-end;
    margin-top: 0px;
    margin-left: 150px;
    margin-right: 0px;
    font-size: 18px;
`;
