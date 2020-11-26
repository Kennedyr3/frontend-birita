import { StyleSheet } from "react-native";
import React from 'react';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  text_white: {
    color: "#FFFFFF",
  },
  text_primary: {
    fontSize: 14,
    color: "#3483FA",
  },
  text_secundary: {
    color: "#000",
  },
  drawer_content: {
    flex: 1,
    backgroundColor: "#CDCDCD",
  },
  drawer_header: {
    flex: 2,
    backgroundColor: "#ffe600",
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  drawer_body: {
    flex: 6,
    backgroundColor: "#fff",
  },
  mercado_pago: {
    backgroundColor: "#FFF589",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "100%",
    height: 30,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  mercado_pago_text: {
    marginLeft: 20,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: "#c1c1c1",
    backgroundColor: "#FFF",
  },
  input_search: {
    backgroundColor: "#fff",
    borderRadius: 25,
    width: "100%",
    height: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    justify-content: center;
   
`;
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
    border: 1px;
    border-color: #EBEBEB;
    margin-bottom: 20px
`;

export const ButtonText = styled.View`
    width: 190px;
    height: 220px;
    margin: 0;
    margin-top: 10px;
    margin-right: -20px;
    justify-content: space-between;
    flex-direction: column;
`;

export const Cifrao = styled.Text`
    color: #165A07;
`;

export const Title = styled.Text`
    color: #000;
    justify-content: space-between;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #000;
    margin-top: 90px;
    margin-left: 100px;
    justify-content: flex-start;
    font-weight:700;
`;

export const Value = styled.Text`
    color: #000;
    font-weight: bold;
    flex: 1;
    justify-content: flex-end;
    margin-top: 0px;
    margin-left: 100px;
    margin-right: 5px;
    font-size: 18px;
`;

export const Image = styled.Text`
  background: red;
 
  
    
   
   
   
`;

export default styles;