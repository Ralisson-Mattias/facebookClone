import { Entypo, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Avatar from '../../../assets/images/img_avatar.png'
import colors from '../../functions/colors'

const { width, height } = Dimensions.get('window')

const Header = () => {
    return (
        <View style={styles.container}>

            <View style={styles.headerTop}>
                <Image source={Avatar} style={styles.image} />

                <TouchableOpacity style={styles.buttonHeaderTop}>
                    <Text style={styles.buttonHeaderText}>No que você está pensando?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.headerBottom}>

                <TouchableOpacity style={styles.buttonHeaderBottom}>

                    <Entypo name="video-camera" size={24} color={colors.red} />
                    <Text style={styles.buttonHeaderBottomText}>Ao vivo</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonHeaderBottom}>

                    <Fontisto name="photograph" size={24} color={colors.green} />
                    <Text style={styles.buttonHeaderBottomText}>Foto</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonHeaderBottom}>

                    <MaterialCommunityIcons name="video-plus" size={24} color={colors.purple} />
                    <Text style={styles.buttonHeaderBottomText}>Sala</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    headerTop: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray_light
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: width / 2
    },
    buttonHeaderTop: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.gray,
        marginLeft: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20
    },
    headerBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    buttonHeaderBottom: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonHeaderBottomText: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: colors.gray_dark
    }
})

export default Header