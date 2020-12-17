import styled from 'styled-components/native';

export const View = styled.View`
    borderTopWidth: 1px;
    borderBottomWidth: 1px;
    borderColor: #F1F1F1;
    justify-content: center;
    marginBottom: 30px;
`;

export const ScrollView = styled.ScrollView.attrs(() => ({
    horizontal: true,
    HorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background: #fff;
    height: 130px;
    border-color: red;
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