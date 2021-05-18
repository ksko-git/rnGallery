import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { APP_COLORS } from '../constants'

export const NothingIsHere = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.title}>
                Пока что здесь ничего нет!
            </Text>
            <AntDesign name="smileo" size={100} color={APP_COLORS.BROWN} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        fontSize: 18,
        color: APP_COLORS.BROWN,
        fontWeight: '700',
        marginBottom: 10
    },
})