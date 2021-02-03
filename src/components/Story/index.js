import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import Avatar from '../../../assets/images/img_avatar.png'
import Img_1 from '../../../assets/images/img_1.jpg'
import Img_2 from '../../../assets/images/img_2.jpg'
import colors from '../../functions/colors'

const { width, height } = Dimensions.get('window')

export default () => {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.areaLeft}>
                <Image source={Avatar} style={styles.imageLeft} />


                <View style={styles.areaLeftDown}>
                    <View style={styles.areaFloatButton}>
                        <Entypo name="plus" size={30} color="#fff" />
                    </View>
                    <Text style={styles.areaLeftDownText}>Criar um story</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardStory}>
                <ImageBackground  source={Img_1} style={styles.storys}>

                    <Image source={Avatar} style={styles.cardStoryAvatar}/>

                    <Text style={styles.cardStoryText}>Nome de usuário</Text>

                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardStory}>
                <ImageBackground  source={Img_2} style={styles.storys}>

                    <Image source={Avatar} style={styles.cardStoryAvatar}/>

                    <Text style={styles.cardStoryText}>Nome de usuário</Text>

                </ImageBackground>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.cardStory}>
                <ImageBackground  source={Img_1} style={styles.storys}>

                    <Image source={Avatar} style={styles.cardStoryAvatar}/>

                    <Text style={styles.cardStoryText}>Nome de usuário</Text>

                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
    areaLeft: {
        height: 180,
        width: 120,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.gray
    },
    imageLeft: {
        width: '100%',
        height: '60%',
    },
    areaLeftDown: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1
    },
    areaLeftDownText: {
        fontWeight: 'bold',
        marginVertical: 10
    },
    areaFloatButton: {
        position: 'absolute',
        top: -20,
        zIndex: 10,
        backgroundColor: colors.primary,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width / 2,
        borderWidth: 3,
        borderColor: '#fff'
    },
    cardStory: {
        height: 180,
        width: 120,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.gray,
        marginHorizontal: 10
    },
    storys: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'
    },
    cardStoryAvatar: {
        width: 40,
        height: 40,
        borderRadius: width / 2,
        borderWidth: 3,
        borderColor: colors.primary
    },
    cardStoryText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})