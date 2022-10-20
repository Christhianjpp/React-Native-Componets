import { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, themeReducer, ThemeState, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void
    setLighTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)



export const ThemeProvider = ({ children }: any) => {

    const colorScheme = useColorScheme()


    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme)


    useEffect(() => {
        (colorScheme === 'light')
            ? setLighTheme()
            : setDarkTheme()
    }, [colorScheme])


    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('SetDarkTheme')
    }
    const setLighTheme = () => {
        dispatch({ type: "set_light_theme" })
        console.log('SetLighTheme')

    }


    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLighTheme,
        }} >
            {children}
        </ThemeContext.Provider>)
}