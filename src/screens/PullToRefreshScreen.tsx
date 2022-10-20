import React, { useContext } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

    const { theme: { colors, dividerColor } } = useContext(ThemeContext)


    const [refreshing, setRefreshing] = useState(false)

    const [data, setData] = useState<string>()

    const { top } = useSafeAreaInsets()

    const onRefresh = () => {

        setRefreshing(true)

        setTimeout(() => {
            console.log('terminamos')
            setRefreshing(false)
            setData('Hola mundo')
        }, 1500);
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressBackgroundColor={dividerColor}
                    colors={[colors.text]}
                    // style={{ backgroundColor: '#5856D6' }}
                    tintColor={colors.text}
                // title='Refreshing'
                // titleColor='white'
                />
            }
        >

            <View style={styles.globalMargin} >
                <HeaderTitle title='Pull to refresh' />
                {
                    data && <HeaderTitle title={data} />

                }
            </View>
        </ScrollView>
    )
}
