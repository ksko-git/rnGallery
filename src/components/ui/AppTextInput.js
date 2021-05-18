// вариант представления TextInput
import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { APP_COLORS } from '../../constants'

export const AppTextInput = props => (
    <TextInput         
        style={{ ...styles.default, ...props.style }}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        maxLength={props.maxLength}
        autoCorrect={props.autoCorrect}
    >
        {props.children}
    </TextInput>
)

const styles = StyleSheet.create({
    default: {
        height: 50,
        borderWidth: 0.8,
        borderRadius: 16,
        borderBottomColor: APP_COLORS.BROWN,
        padding: 8
    }
})