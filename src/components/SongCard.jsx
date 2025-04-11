import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { fontfamilies } from '../constants/fonsts'
import { fontSize, spacing } from '../constants/dimentions'
const img = "https://linkstorage.linkfire.com/medialinks/images/374fc4ba-fe39-4bcf-9cf0-74c87c879ed0/artwork-440x440.jpg"
const SongCard = ({containerStyle, imageStyle}) => {
    
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Image source={{uri: img}} style={[styles.coverImage, imageStyle]}/>
      <Text style={styles.title}>Darkside</Text>
      <Text style={styles.artist}>Alan Walker</Text>
    </TouchableOpacity>
  )
}

export default SongCard

const styles = StyleSheet.create({
    container: {
        // height: 350,
        // width: 270,
        marginVertical: 30
    },
    coverImage: {
        width: 250,
        height: 250,
        borderRadius: 10
    },
    title: {
      color: colors.textPrimary,
      fontFamily: fontfamilies.meduim,
      textAlign: "center",
      fontSize: fontSize.lg,
      paddingVertical: spacing.sm
    },
    artist: {
      color: colors.textSecondary,
      textAlign: "center",
      fontSize: fontSize.md,
      fontFamily: fontfamilies.regular
    }
})