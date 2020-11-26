import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    justify-content: center;
`;

export const Scroller = styled.ScrollView``;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

//Category
export const ScrollViewCategory = styled.ScrollView.attrs(() => ({
    horizontal: true,
    HorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background: #fff;
    height: 130px;
`;

export const Option = styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center;
`;
export const Img = styled.Image`
    width: 80px;
    height: 80px;
    borderWidth: 1px;
    borderRadius: 40px;
    borderColor: #E0E0E0;
`; 
export const Label = styled.Text`
    color: #000;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
`;