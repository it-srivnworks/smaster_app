import React from 'react'
import { Text, View } from 'react-native'
import LibraryHome from '../library/LibraryHome'
import Dashboard from './Dashboard'

const HomePage = () => {
  return (
    <View>
      <LibraryHome></LibraryHome>
      <Dashboard></Dashboard>
    </View>
  )
}

export default HomePage
