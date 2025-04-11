import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { fontSize, iconSizes, spacing } from "../constants/dimentions";
import { fontfamilies } from "../constants/fonsts";
import {
  GoToNextButton,
  GoToPreviousButton,
  PlayPauseButton,
} from "./PlayerControls";
import { useSharedValue } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";
import MovingText from "./MovingText";
import { useNavigation } from "@react-navigation/native";

const img =
  "https://linkstorage.linkfire.com/medialinks/images/c8f932e1-30d1-4def-8661-ac0e8c281621/artwork-440x440.jpg";
const FloatingPlayer = () => {
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  const navigation = useNavigation()

  const handleOpenPlayerScreen = () => {
    navigation.navigate("PLAYER_SCREEN")
  }

  return (
    <>
      <View>
        <Slider style={styles.container} progress={progress} minimumValue={min} maximumValue={max} theme={{minimumTrackTintColor: colors.minimumTintColor, maximumTrackTintColor: colors.maximumTintColor}}/>
      </View>
      <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={handleOpenPlayerScreen}>
        <Image source={{ uri: img }} style={styles.coverImage} />
        <View style={styles.titleContainer}>
          {/* <Text style={styles.title}>Darkside</Text> */}
          <MovingText text={'Chaff and Dust and Alan'} animatedTreshhold={15} style={styles.title}/>
          <Text style={styles.artist}>Alan Walker</Text>
        </View>
        <View style={styles.playerContainer}>
          <GoToPreviousButton size={iconSizes.md} />
          <PlayPauseButton size={iconSizes.md} />
          <GoToNextButton size={iconSizes.md} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  coverImage: {
    height: 60,
    width: 60,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
    overflow: "hidden",
    marginLeft: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: fontfamilies.meduim,
    fontSize: fontSize.lg,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: fontSize.md,
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
});
