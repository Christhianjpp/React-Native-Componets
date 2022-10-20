import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, View, Text, Easing } from 'react-native';
import { useAnmation } from '../hooks/useAnmation';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation102Screen = () => {

    const { opacity, position, fadeIn, fadeOn, startMovingPosition } = useAnmation()
    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,

                marginBottom: 20,
                opacity,
                transform: [{
                    translateY: position
                }]
            }} />
            <Button
                title='Fade In'
                onPress={() => {
                    fadeIn()
                    startMovingPosition(100)
                }}
                color={colors.primary}
            />
            <Button
                title='Fade On'
                onPress={fadeOn}
                color={colors.primary}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150
    }
})