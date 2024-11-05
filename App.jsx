import { View, Text, Button, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import TinderSwipeDemo from './src/component/TinderSwipeDemo'
const {height, width} = Dimensions.get('window');

export default function App() { 
 
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={{height:height-100,backgroundColor:"red"}}>
        <TinderSwipeDemo/>
        
      </View>
      <View style={{height:height-100,backgroundColor:'blue'}}>
        <TinderSwipeDemo/>
      </View>
      <Button title="hghj"></Button>
      <Button title="hghj"></Button>
      <Button title="hghj"></Button>
      <Button title="hghj"></Button>
      <Button title="hghj"></Button>
    </ScrollView>
  )
}