import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Antdesign from "react-native-vector-icons/AntDesign";
import { fontSize, iconSizes, spacing } from "../constants/dimentions";
import { fontfamilies } from "../constants/fonsts";
import Feather from "react-native-vector-icons/Feather";
import PlayerRepeatToggle from "../components/PlayerRepeatToggle";
import PlayerShuffleToggle from "../components/PlayerShuffleToggle";
import PlayerProgressBar from "../components/PlayerProgressBar";

const img =
  "https://linkstorage.linkfire.com/medialinks/images/59cb0cf6-e46a-473b-ad5e-a863a46f5748/artwork-440x440.jpg";
const PlayerScreen = () => {
  const isLiked = true;
  const isMute = false;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Antdesign
            name={"arrowleft"}
            color={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Playing Now</Text>
      </View>

      <View style={styles.coverImageContainer}>
        <Image source={{ uri: img }} style={styles.coverImage} />
      </View>

      <View style={styles.titleRowHeartContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Beliver</Text>
          <Text style={styles.artist}>Alan Walker</Text>
        </View>

        <TouchableOpacity>
          <Antdesign
            name={isLiked ? "heart" : "hearto"}
            color={colors.iconSecondary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.playerControlContainer}>
        <TouchableOpacity style={styles.volumeWrapper}>
          <Feather
            name={isMute ? "volume-x" : "volume-1"}
            color={colors.iconSecondary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
        <View style={styles.repeateShuffleWrapper}>
          <PlayerRepeatToggle />
          <PlayerShuffleToggle />
        </View>
      </View>
      <View>
        <PlayerProgressBar />
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    width: "100%",
  },
  headerText: {
    color: colors.textPrimary,
    textAlign: "center",
    fontSize: fontSize.md,
    fontFamily: fontfamilies.meduim,
    flex: 1,
  },
  coverImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: spacing.lg,
  },
  coverImage: {
    height: 280,
    width: 280,
    borderRadius: 10,
  },
  title: {
    fontSize: fontSize.lg,
    color: colors.textPrimary,
    fontFamily: fontfamilies.bold,
  },
  artist: {
    fontSize: fontSize.md,
    fontFamily: fontfamilies.meduim,
    color: colors.textSecondary,
  },
  titleRowHeartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  volumeWrapper: {
    flex: 1,
  },
  repeateShuffleWrapper: {
    flexDirection: "row",
    gap: spacing.lg,
  },
  playerControlContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
});
