import React, { useState } from 'react'
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, Switch, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {

    const { theme: { colors, dividerColor } } = useContext(ThemeContext)

    const { onChange, state, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>

                <View style={styles.globalMargin}>
                    <HeaderTitle title="TextInputs" />

                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text,
                        }}
                        placeholder='Ingrese su nombre'
                        autoCorrect={false}
                        autoCapitalize='words'
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholderTextColor={dividerColor}
                    />
                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text,
                        }}
                        placeholder='Ingrese su email'
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onChangeText={(value) => onChange(value, 'email')}
                        placeholderTextColor={dividerColor}

                    />


                    <TextInput
                        style={{
                            ...stylesScreen.inputStyle,
                            borderColor: colors.text,
                            color: colors.text,
                        }}
                        placeholder='Ingrese su teléfono'
                        keyboardType='phone-pad'
                        onChangeText={(value) => onChange(value, 'phone')}
                        placeholderTextColor={dividerColor}

                    />
                    <View style={stylesScreen.switchRow} >
                        <Text style={stylesScreen.switchText}>Suscribirse</Text>
                        <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                    </View>
                    <HeaderTitle title={JSON.stringify(state, null, 3)} />



                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,

    },
    switchText: {
        fontSize: 25
    }
})