/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from 'react';
import Navigation from "./src/stacks/Navigation";
import { StatusBar } from "react-native";

export default () => {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
    <Navigation />
    </>
  );
}