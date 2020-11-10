import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 20px
    margin-top: 90px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 50px;
    background-color: #053956;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #000;
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #0B83C7;
    font-weight: bold;
    margin-left: 5px;
`;