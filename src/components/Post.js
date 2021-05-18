import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { APP_COLORS } from '../constants'
import { AppLoader } from './ui/AppLoader'

export const Post = ({ post, onOpen, isLoad }) => {

    let chooseRenderComponent = (
        isLoad 
            ? <TouchableOpacity onPress={() => onOpen(post)}>
                <ImageBackground style={styles.image} source={{uri: post.src.original}}>
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>{post.photographer}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            : <AppLoader />
    )

    return (
        <View style={styles.post}>
            {chooseRenderComponent}
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        flex: 1,
        padding: 8
    },
    image: {
        width: '100%',
        height: 180,
        borderWidth: 0.8,
        borderRadius: 16, 
        borderColor: APP_COLORS.BROWN,
        overflow: 'hidden'
    },
    textWrap: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: APP_COLORS.TRANSPARENT_BLACK,
        opacity: 0.8
    },
    title: {
        color: APP_COLORS.WHITE,
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center'
    }
})