import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { spacing } from "../constants/dimentions";
import SongCard from "./SongCard";
import { fontSize } from "../constants/dimentions";
import { colors } from "../constants/colors";
import { fontfamilies } from "../constants/fonsts";

const SongCardWithCategory = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{item.title}</Text>
      <FlatList
        data={item.songs}
        renderItem={SongCard}
        horizontal={true}
        ItemSeparatorComponent={<View style={{ marginHorizontal: 1 }} />}
        contentContainerStyle={{ paddingHorizontal: spacing.lg }}
      />
    </View>
  );
};

export default SongCardWithCategory;

const styles = StyleSheet.create({
  headingText: {
    fontSize: fontSize.lg,
    color: colors.textPrimary,
    fontFamily: fontfamilies.bold,
    paddingHorizontal: 30
  },
  container: {
    flex: 1
  }
});
