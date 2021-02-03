import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Separator from '../../components/Separator'
import Story from '../../components/Story'
import ViewPeoples from '../../components/ViewPeoples'

const Home = () => {
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <Header />
            <Separator />
            <ViewPeoples />
            <Separator />
            <Story />
            <Separator />
            <Posts />
            <Separator />
            <Posts />
        </ScrollView>
    )
}

export default Home