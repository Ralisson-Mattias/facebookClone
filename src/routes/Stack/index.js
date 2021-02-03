import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopNavigator from '../TopNavigator'

import { AntDesign, FontAwesome, Fontisto } from '@expo/vector-icons'
import colors from '../../functions/colors'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'

const { Navigator, Screen } = createStackNavigator()

const { width, height } = Dimensions.get('window')

export default () => {
    return (
        <Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                }
            }}
        >
            <Screen
                name="TopNavigator"
                component={TopNavigator}
                options={{
                    headerTitle: () => <AntDesign name="facebook-square" size={30} color={colors.primary} />,
                    headerRight: () => {
                        return (
                            <View style={styles.headerRight}>
                                <TouchableOpacity style={styles.headerRightButton}>
                                    <FontAwesome name="search" size={24} color="black" />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.headerRightButton}>
                                    <Fontisto name="messenger" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        )
                    },
                }}
            />
        </Navigator>
    )
}

const styles = StyleSheet.create({
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerRightButton: {
        marginRight: 15,
        backgroundColor: colors.gray_light,
        padding: 10,
        borderRadius: width / 2
    }
})