import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { colors } from "../constants/colors";
import { fontfamilies } from "../constants/fonsts";
import { fontSize, spacing } from "../constants/dimentions";
import SongCard from "../components/SongCard";
import SongCardWithCategory from "../components/SongCardWithCategory";
import FloatingPlayer from "../components/FloatingPlayer";
import { songsWithCategory } from "../components/Data/SongsWithCategory";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={songsWithCategory}
        renderItem={SongCardWithCategory}
        contentContainerStyle={{ paddingBottom: 400 }}
      />
      <FloatingPlayer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  headingText: {
    fontSize: fontSize.lg,
    color: colors.textPrimary,
    fontFamily: fontfamilies.bold,
  },
});
