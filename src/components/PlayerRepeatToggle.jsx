import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/colors'
import { iconSizes } from '../constants/dimentions'

const PlayerRepeatToggle = () => {
  return (
    <TouchableOpacity>
      <MaterialCommunityIcons name='repeat' color={colors.iconSecondary} size={iconSizes.lg}/>
    </TouchableOpacity>
  )
}

export default PlayerRepeatToggle

const styles = StyleSheet.create({})