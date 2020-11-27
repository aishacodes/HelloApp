import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, Platform, Image, View } from 'react-native'

import pic from './assets/img.png'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxes}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
      <Image style={styles.pic} source={pic} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20
  },
  boxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 0
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  box1: {
    backgroundColor: '#D2B0E0'
  },
  box2: {
    backgroundColor: '#F5A492'
  },
  pic: {
    width: '90%',
    marginHorizontal: '5%',
    flex: 1,
    resizeMode: 'cover',
    marginBottom: 10
  }
})