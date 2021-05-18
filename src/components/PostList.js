import React from 'react'
import { FlatList } from 'react-native'
import { Post } from './Post'
import { NothingIsHere } from './NothingIsHere'

export const PostList = ({ data, openPost, isLoad }) => {

    if (!data.length) {
        return (
            <NothingIsHere />
        )
    }

    return (
        <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => <Post post={item} onOpen={openPost} isLoad={isLoad} />}
        />
    )
}