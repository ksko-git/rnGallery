import React from 'react'
import { View, Modal, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { APP_COLORS } from '../constants'

export const PostModalScreen = ({ isVisible, post, postImage, onCancel }) => {

    return (
        <Modal visible={isVisible} animationType='slide' >
            <Ionicons 
                style={styles.cancelIcon}
                onPress={onCancel}
                name="arrow-back-circle-sharp"
                size={36}
                color={APP_COLORS.BROWN}
            />
            <View >
                <ImageBackground style={{ width: '100%', height: Dimensions.get('window').width / post.width * post.height }} source={{uri: postImage}} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        paddingTop: 8
    },
    cancelIcon: {
        paddingTop: '14%', 
        marginLeft: 8
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
