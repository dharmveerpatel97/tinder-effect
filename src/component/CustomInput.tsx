import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TextInputProps, ViewStyle } from 'react-native';
import Label from './Label';
import { Colors, SF, SH, SW } from '../utils';

interface CustomInputProps extends TextInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  InputStyle?: ViewStyle;
  IconRight?: React.ComponentType;
  IconLeft?: React.ComponentType;
  label?: string;
  containerStyle?: ViewStyle;
}

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  InputStyle,
  IconRight,
  IconLeft,
  label,
  containerStyle
}: CustomInputProps) {
  const [focused, setFocused] = useState(false);
  
  const onFocus = () => {
    setFocused(!focused);
  };

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        focused ? styles.activeBorder : styles.blurBorder,
      ]}
    >
      {label && (
        <View style={{ paddingVertical: SH(10) }}>
          <Label style={{ color: Colors.darkGray }} text={label} />
        </View>
      )}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {IconLeft && <IconLeft />}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          style={[styles.input, InputStyle]}
          onBlur={onFocus}
          onFocus={onFocus}
        />
        {IconRight && <IconRight />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderBottomWidth: SW(0.4),
  },
  input: {
    paddingVertical: SH(10),
    fontSize: SF(14),
  },
  blurBorder: {
    borderColor: Colors.darkGray,
  },
  activeBorder: {
    borderColor: Colors.primary,
    borderBottomWidth: SW(1),
  },
});
