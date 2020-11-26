import styled from 'styled-components';

export const Product = styled.View``;

export const Img = styled.Image`
    width: 165px;
    height: 220px;
    border-radius: 20px;
    borderWidth: 1px;
    borderColor: #E0E0E0;
`;

export const CardBody = styled.View`
    margin-top: 5px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
    color: #A1A1A1;
    font-size: 14px;
    font-weight: bold;
/* margin-top: 15px; */
`;

export const DollarSign = styled.Text`
    color: #165A07;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    flex-direction: row;
`;
export const Option = styled.View`
    flex-direction: row;
`;
