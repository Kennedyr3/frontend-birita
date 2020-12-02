import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    justify-content: center;
    marginBottom: 130px;
`;

export const Scroller = styled.ScrollView``;

export const ScrollView = styled.ScrollView``;

export const Total = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 15px;
`;

export const Divider = styled.View`
    flex-direction: row;
    marginBottom: 10px;
`;

export const Text = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Price = styled.Text`
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
`;

export const Amount = styled.Text`
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
`;

export const Img = styled.Image`
    width: 100px;
    height:110px;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 15px;
    justify-content: space-between;
    flex-direction: column;
`;

export const ButtonText = styled.View`
    width: 250px;
    height: 126px;
    margin: 0;
    margin-top: 5px;
    margin-right: 0px;
    justify-content: space-between;
    flex-direction: column;
    background-color: #fff;
`;

export const Cifrao = styled.Text`
    color: #165A07;
`;

export const Footer = styled.View`
    height: 120px;
    width: 100%;
    background-color:#fff;
    borderTopWidth: 1px;
    borderTopColor: #ddd;
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
    margin-top: 0px;
`;

export const Description = styled.Text`
    color: #000;
    margin-top: 48px;
    margin-left: 0px;
    justify-content: flex-start;
    font-weight:700;
`;

export const BoxValue = styled.Text`
    color: #000;
    margin-top: 80px;
    margin-left: -110px;
    font-weight:700;
`;

export const Value = styled.Text`
    color: #000;
    font-weight: bold;
    flex: 1;
    justify-content: flex-end;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 18px;
`;

export const Address = styled.View`
    width: 95%;
    height: 135px;
    background-color: #fff;
    padding: 20px;
    border: 1px;
    borderRadius: 10px;
    borderColor: #f0f0f0;
    margin-left: 10px;
    marginBottom: 10px;
`;

export const TitleAddress = styled.Text`
    font-weight: bold;
    marginBottom: 5px;
`;

export const TextAddress = styled.Text`
    marginBottom: 5px;
`;

export const Summary = styled.View`
    width: 95%;
    height: 135px;
    background-color: #fff;
    padding: 20px;
    border: 1px;
    borderRadius: 10px;
    borderColor: #f0f0f0;
    margin-left: 10px;
`;

export const TitleSummary = styled.Text`
    font-weight: bold;
    marginBottom: 5px;
`;

export const TextSummary = styled.Text`
    marginBottom: 5px;
    flex-direction: row;
`;

export const ValueTotal = styled.Text`
`;

export const ContainerSummary = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;