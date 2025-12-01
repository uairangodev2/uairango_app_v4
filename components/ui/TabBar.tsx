import { AntDesign, Entypo } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemeColors, useTheme } from "@/context/ThemeContext";

import Logo from "@/assets/images/tabBar/logo.svg";
import Order from "@/assets/images/tabBar/order.svg";

export function TabBar() {
  const theme = useTheme();
  const styles = useStyle(theme);

  const iconConfig = {
    size: 20,
    color: theme.colors.icons,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <AntDesign name="heart" {...iconConfig} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Entypo name="compass" {...iconConfig} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Logo width={30} height="100%" color={iconConfig.color} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Order
          width={iconConfig.size + 4}
          height={iconConfig.size + 4}
          color={iconConfig.color}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Entypo name="menu" {...iconConfig} />
      </TouchableOpacity>
    </View>
  );
}

const useStyle = ({ colors }: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: 50,
      position: "absolute",
      bottom: 24,
      left: 0,
      right: 0,
      marginHorizontal: 30,
      paddingHorizontal: 5,
      backgroundColor: colors.primary[500],
      borderRadius: 50,
    },
    icon: {
      alignItems: "center",
      justifyContent: "center",

      width: 40,
      height: 40,
    },
  });
