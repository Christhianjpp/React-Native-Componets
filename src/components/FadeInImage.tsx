import React, { useContext } from 'react'
import { ActivityIndicator, Animated, Image, ImageStyle, StyleProp, View } from 'react-native';
import { useAnmation } from '../hooks/useAnmation';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { theme: { colors, dividerColor } } = useContext(ThemeContext)


    const { opacity, fadeIn } = useAnmation()

    const [isLoading, setIsLoading] = useState(true)

    const finishLoading = () => {
        setIsLoading(false)
        fadeIn()
    }

    return (

        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
                isLoading &&
                <ActivityIndicator
                    color={colors.primary}
                    size={30}
                    style={{
                        position: 'absolute'
                    }}
                />
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}

                style={{
                    ...style as any,
                    opacity
                }}
            />

        </View>
    )
}
