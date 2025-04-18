import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { fontSize, iconSizes, spacing } from "../constants/dimentions";
import { fontfamilies } from "../constants/fonsts";
import SongCard from "../components/SongCard";
import FloatingPlayer from "../components/FloatingPlayer";

const LikeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign
            name={"arrowleft"}
            color={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons
            name={"equalizer"}
            color={colors.iconPrimary}
            size={iconSizes.md}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        ListHeaderComponent={
          <Text style={styles.headingText}>Liked Songs</Text>
        }
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={() => (
          <SongCard
            containerStyle={{ width: "47%" }}
            imageStyle={{ height: 160, width: 160 }}
          />
        )}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 500, paddingHorizontal: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
      <FloatingPlayer />
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  headingText: {
    fontSize: fontSize.lg,
    color: colors.textPrimary,
    fontFamily: fontfamilies.bold,
  },
});
