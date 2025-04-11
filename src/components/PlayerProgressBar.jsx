import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { fontfamilies } from "../constants/fonsts";
import { fontSize, iconSizes, spacing } from "../constants/dimentions";
import { useSharedValue } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from "./PlayerControls";

const PlayerProgressBar = () => {
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>00:50</Text>
        <Text style={styles.timeText}>04:00</Text>
      </View>
      <Slider
        style={styles.sliderContainer}
        containerStyle={{ height: 7, borderRadius: spacing.sm }}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        thumbWidth={18}
        renderBubble={() => null}
        theme={{
          maximumTrackTintColor: colors.maximumTintColor,
          minimumTrackTintColor: colors.minimumTintColor,
        }}
      />

      <View style={styles.playerPauseContainer}>
        <GoToPreviousButton size={iconSizes.xl}/>
        <PlayPauseButton size={iconSizes.xl}/>
        <GoToNextButton size={iconSizes.xl}/>
      </View>
    </View>
  );
};

export default PlayerProgressBar;

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    marginTop: spacing.xl
  },
  timeText: {
    color: colors.textPrimary,
    fontFamily: fontfamilies.regular,
    fontSize: fontSize.sm,
    opacity: 0.75,
  },
  sliderContainer: {
    marginVertical: spacing.lg
  },
  playerPauseContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xl,
    marginTop: spacing.xxl
  }
});
