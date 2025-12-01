import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import LogoIA from "@/assets/images/header/logoIA.svg";
import { ThemeColors, useTheme } from "@/context/ThemeContext";
import Animated from "react-native-reanimated";
import { ThemedText } from "../ThemedText";

export function Header({ headerStyle }: any) {
  const theme = useTheme();
  const styles = useStyle(theme);

  return (
    <Animated.View style={headerStyle}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.IAButton}>
          <LogoIA width={35} height={35} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.adressButton}>
          <ThemedText style={styles.adressButtonText}>
            Selecione seu Endereço
          </ThemedText>
          <AntDesign name="down" size={16} color={theme.colors.gray[500]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search-outline" size={17} color={theme.colors.gray[900]} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const useStyle = ({ colors }: ThemeColors) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      height: "100%",
      paddingHorizontal: 24,
    },
    IAButton: {
      width: 35,
      height: 35,
    },
    adressButton: {
      flex: 1,
      gap: 4,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: 35,
    },
    adressButtonText: {
      fontSize: 14,
    },
    searchButton: {
      backgroundColor: colors.gray[100],
      width: 35,
      height: 35,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
    },
    scrollView: {
      flex: 1,
    },
    contentContainer: {
      paddingTop: 20,
    },
  });
