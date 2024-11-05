import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, ViewStyle } from 'react-native';
import { SW } from '../utils';


interface ContainerProps {
    children: React.ReactNode;
    isScrollable: boolean;
    bodyStyle?: ViewStyle;
}

export default function Container({ children, isScrollable, bodyStyle }: ContainerProps) {
    return (
        <SafeAreaView style={styles.container}>
            {isScrollable ? (
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                    <View style={[styles.innerView, bodyStyle]}>
                        {children}
                    </View>
                </ScrollView>
            ) : (
                <View style={[styles.innerView, bodyStyle]}>{children}</View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerView: {
        flex: 1,
        paddingHorizontal: SW(20),
    },
});
