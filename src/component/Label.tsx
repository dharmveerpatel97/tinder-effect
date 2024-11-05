import React from 'react'
import { StyleSheet, Text, TextStyle, } from 'react-native'
import { Colors, SF } from '../utils';

interface LabelProps {
    text: string;
    style?: TextStyle;
}
export default function Label({ text, style }:LabelProps) {
    return (
        <Text style={[styles.label, style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: SF(16),
        color: Colors.black,
    }
})
