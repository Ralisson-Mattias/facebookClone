import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import colors from '../../functions/colors'
import Avatar from '../../../assets/images/img_avatar.png'

const { width, height } = Dimensions.get('window')

export default () => {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.containerStory}>
                <View style={styles.areaLeft}>
                    <TouchableOpacity style={styles.buttonLeft}>
                        <MaterialCommunityIcons name="video-plus" size={35} color={colors.purple} />
                        <Text style={styles.buttonLeftText}>Programar uma sala</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaRight}>
                    <TouchableOpacity>
                        <Image source={Avatar} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Avatar} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Avatar} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Avatar} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Avatar} style={styles.image} />
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        overflow: 'hidden'
    },
    containerStory: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    areaLeft: {
        width: 140
    },
    buttonLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: colors.blue_light,
    },
    buttonLeftText: {
        flex: 1,
        marginLeft: 5,
        color: colors.primary,
        flexWrap: 'wrap'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: width / 2,
        marginHorizontal: 10
    },
    areaRight: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})