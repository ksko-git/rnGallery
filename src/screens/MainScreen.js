import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, StyleSheet, View, TextInput } from 'react-native'
import pexels from '../pexels'
import { APP_COLORS } from '../constants'
import { useState } from 'react'
import { PostList } from '../components/PostList'
import { loadPosts } from '../store/actions/postAction'
import { PostModalScreen } from './PostModalScreen'
import { AppTextInput } from '../components/ui/AppTextInput'

export const MainScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    // const allPosts = useSelector(state => state.post.allPosts)

    // маркер загрузки компонента
    const [isLoad, setIsLoad] = useState(false)
    // объект с фотографией
    const [photos, setPhotos] = useState([])
    // слово для поиска
    const [wordForSearch, setWordForSearch] = useState('cat')
    // номер страницы
    const [page, setPage] = useState(1)
    // переменная для видимости модального окна
    const [modal, setModal] = useState(false)
    // отдельный выбранный пост (по книку на touchableopacity)
    const [currentPost, setCurrentPost] = useState([])
    // картинка отдельного выбранного поста
    const [currentPostImage, setCurrentPostImage] = useState([])
    
    const updateSearch = async () => {
      try {
        setIsLoad(false) // начало загрузки
        const response = await pexels.get(`/v1/search`, {
          params: {
            query: wordForSearch,
            per_page: 5,
            page: page
          }
        })
        setPhotos(response.data.photos)
        setIsLoad(true) // конец загрузки
      } catch (e) {
        console.log(e)
      }
    }

    const openPostHandler = post => {
        setModal(true)
        setCurrentPost(post)
        setCurrentPostImage(post.src.original)
    }

    return (
        <View style={styles.container}>

            <View style={styles.rowContainer}>
                <AppTextInput
                    style={{width: '60%'}} 
                    placeholder="Type something to search..."
                    placeholderTextColor={APP_COLORS.LIGHT_GREY}
                    maxLength={16}
                    autoCorrect={false}
                    onChangeText={setWordForSearch}
                />
                <AppTextInput
                    style={{width: 50, textAlign: 'center'}} 
                    placeholder="Page"
                    placeholderTextColor={APP_COLORS.LIGHT_GREY}
                    maxLength={4}
                    onChangeText={setPage}
                />
                <Button color={APP_COLORS.BROWN} title="Search" onPress={updateSearch} />
            </View>

            <PostList data={photos} isLoad={isLoad} openPost={(post) => {openPostHandler(post)}} />

            <PostModalScreen isVisible={modal} post={currentPost} postImage={currentPostImage} onCancel={() => setModal(false)} />
        
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '16%',
    backgroundColor: '#fff',
  },
  rowContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 380,
    borderWidth: 0.8,
    borderRadius: 16, 
    borderColor: APP_COLORS.ORANGE,
    overflow: 'hidden'
  },
  headerTextWrap: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: APP_COLORS.TRANSPARENT_BLACK,
    opacity: 0.8
  },
  text: {
    color: APP_COLORS.WHITE,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: '1%'
  }
});
