import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import Separator from '../../components/Separator'

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            
            <Header />

            <Separator />
            
        </View>
    )
}

export default Home