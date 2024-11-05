import React from 'react';
import { StyleSheet, Text, ViewStyle, TextStyle, ActivityIndicator, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, SF, SH, SW } from '../utils';

interface ButtonProps {
  icon?: string;
  unFilled?: boolean;
  label: string;
  style?: ViewStyle;
  onPress: () => void;
  labelStyle?: TextStyle;
  isLoading?: boolean;
}

export default function Button({
  icon,
  unFilled,
  label,
  style,
  onPress,
  labelStyle,
  isLoading
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, unFilled ? styles.unFilled : {}, style]}
    >
      {icon && (
        <Feather
          name={icon}
          size={SF(20)}
          color={unFilled ? Colors.black : Colors.white}
        />
      )}
      {!isLoading ? (
        <Text
          style={[
            styles.label,
            unFilled ? styles.unFilledLabel : {},
            labelStyle,
          ]}
        >
          {`${label}`.toUpperCase()}
        </Text>
      ) : (
        <ActivityIndicator size={"large"} color={Colors.white} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SH(50),
    backgroundColor: Colors.primary,
    borderRadius: SW(5),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: SH(10),
    paddingHorizontal: SW(50),
  },
  label: {
    fontSize: SF(16),
    fontWeight: '300',
    color: Colors.white,
    letterSpacing: SW(2),
  },
  unFilled: {
    backgroundColor: 'transparent',
    borderWidth: SW(0.7),
    borderColor: Colors.primary,
  },
  unFilledLabel: {
    color: Colors.black,
  },
});
