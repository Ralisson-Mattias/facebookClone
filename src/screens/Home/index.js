import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import Separator from '../../components/Separator'
import ViewPeoples from '../../components/ViewPeoples'

const Home = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Header />
            <Separator />
            <ViewPeoples />
            <Separator />
        </ScrollView>
    )
}

export default Home