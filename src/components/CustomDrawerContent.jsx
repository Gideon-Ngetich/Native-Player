import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { colors } from "../constants/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { fontSize, iconSizes, spacing } from "../constants/dimentions";
import OctoIcons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { fontfamilies } from "../constants/fonsts";
import { useNavigation } from "@react-navigation/native";

const CustomDrawerContent = (props) => {
  const darkMode = true;
  const navigation = useNavigation()

  const toggleDrawer = () => {
    props.navigation.toggleDrawer()
  }

  const handleChangeScreen = () => {
    navigation.navigate("LIKE_SCREEN")
  }
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign
            name={"close"}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <OctoIcons
            name={darkMode ? "moon" : "sun"}
            color={colors.iconPrimary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.drawerItemContainer}>
        <DrawerItem
          label={"Profile"}
          icon={() => (
            <FontAwesome
              name={"user"}
              size={fontSize.lg}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />

        <DrawerItem
          label={"Liked Songs"}
          icon={() => (
            <AntDesign
              name={"hearto"}
              size={fontSize.lg}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={handleChangeScreen}
        />

        <DrawerItem
          label={"Language"}
          icon={() => (
            <FontAwesome
              name={"envelope-o"}
              size={fontSize.lg}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />

        <DrawerItem
          label={"Settings"}
          icon={() => (
            <FontAwesome
              name={"cog"}
              size={fontSize.lg}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />

        <DrawerItem
          label={"FAQs"}
          icon={() => (
            <FontAwesome
              name={"question-circle-o"}
              size={fontSize.lg}
              color={colors.iconSecondary}
            />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelStyle: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
    fontFamily: fontfamilies.meduim,
  },
  drawerItem: {
    marginVertical: spacing.sm,
  },
  drawerItemContainer: {
    marginVertical: spacing.xl,
  },
});
