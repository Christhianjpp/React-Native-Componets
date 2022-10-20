import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLighTheme, theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Theme' />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <TouchableOpacity
                    onPress={setLighTheme}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'

                    }}
                    activeOpacity={0.8}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                        Ligh
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={setDarkTheme}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'

                    }}
                    activeOpacity={0.8}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22,
                    }}>
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
