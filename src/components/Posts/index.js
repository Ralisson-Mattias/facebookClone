import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Avatar from '../../../assets/images/img_avatar.png'
import Img_1 from '../../../assets/images/img_1.jpg'
import Img_2 from '../../../assets/images/img_2.jpg'
import { AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import colors from '../../functions/colors'

const { width, height } = Dimensions.get('window')

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <View style={styles.headerLeft}>
                    <Image source={Avatar} style={styles.avatar} />

                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.headerLeftUser}>Usuario</Text>

                        <View style={styles.headerLeftInfosArea}>
                            <Text style={styles.headerLeftHour}>20 h</Text>
                            <Entypo name="dot-single" size={15} color={colors.gray_dark} />
                            <MaterialIcons name="public" size={15} color={colors.gray_dark} />
                        </View>
                    </View>

                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="dots-horizontal" size={30} color={colors.gray_dark} />
                </TouchableOpacity>

            </View>

            <View style={styles.areaDescription}>
                <Text 
                    style={styles.description}
                    numberOfLines={4}
                    >Do incididunt aliqua anim adipisicing incididunt deserunt id laborum proident incididunt culpa. Aute pariatur eiusmod irure Lorem sint minim adipisicing sunt dolore dolor veniam ad officia sint. Amet magna et sint sint sunt ex ut do aute incididunt culpa anim aliquip qui. Reprehenderit velit tempor velit nisi reprehenderit aute aliqua. Reprehenderit ipsum voluptate Lorem eu. Nisi culpa elit laborum velit. Nisi ipsum deserunt eiusmod minim veniam dolor.</Text>
            </View>

            <View>
                <Image
                    source={Img_1}
                    style={styles.imagePost}
                />
            </View>

            <View style={styles.areaInteractions}>
                <TouchableOpacity style={styles.buttonViewLikes}>
                    <AntDesign name="like1" size={15} color="#fff" style={{
                        width: 25,
                        height: 25,
                        borderRadius: width / 2,
                        textAlign: 'center',
                        alignItems: 'center',
                        padding: 3,
                        backgroundColor: colors.primary
                    }} />
                    <Text style={[styles.interactionText, { marginLeft: 10 }]}>1,5 mil</Text>
                </TouchableOpacity>

                <View style={styles.areaInteractionsInfos}>
                    <Text>215 comentários</Text>
                    <Entypo name="dot-single" size={15} color={colors.gray_dark} />
                    <Text>57 compartilhmentos</Text>
                </View>
            </View>

            <View style={styles.areaInteractionsButtons}>

                <TouchableOpacity style={styles.buttonInteraction}>
                    <AntDesign name="like2" size={24} color={colors.gray_dark} />
                    <Text style={styles.buttonInteractionText}>Curtir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonInteraction}>
                    <MaterialCommunityIcons name="comment-outline" size={24} color={colors.gray_dark}/>
                    <Text style={styles.buttonInteractionText}>Comentários</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonInteraction}>
                    <MaterialCommunityIcons name="share-outline" size={24} color={colors.gray_dark} />
                    <Text style={styles.buttonInteractionText}>Compartilhar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLeftUser: {
        fontWeight: 'bold',
        fontSize: 20
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: width / 2
    },
    headerLeftInfosArea: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerLeftHour: {
        color: colors.gray_dark
    },
    areaDescription: {
        padding: 10,
    },
    description: {
        fontSize: 15
    },
    imagePost: {
        height: width / 3 * 4,
        resizeMode: 'cover'
    },
    areaInteractions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray_light
    },
    buttonViewLikes: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
    },
    interactionText: {
        color: colors.gray_dark,
    },
    areaInteractionsInfos: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    areaInteractionsButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    },
    buttonInteraction: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonInteractionText: {
        marginLeft: 5,
        color: colors.gray_dark
    }
})