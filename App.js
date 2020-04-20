import React from 'react';
import {StyleSheet,View} from "react-native" ;
import { Problem } from './app/views/Problem.js'
import { Choices } from './app/views/Choices.js'

export default function App() {
  return (
    <View>
      <Problem />
      <Choices />
    </View>
  );
};