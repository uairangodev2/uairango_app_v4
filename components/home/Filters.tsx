import { HomeContext } from "@/context/HomeContext";
import { ThemeColors, useTheme } from "@/context/ThemeContext";
import { hexToRGBA } from "@/helpers/color";
import { useRequest } from "@/hooks/useRequest";
import { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";

export default function Filters() {
  const theme = useTheme();
  const styles = useStyle(theme);

  const brightnessMultiplier = useColorScheme() === "dark" ? 3 : 1;

  const { filtro, setFiltro } = useContext(HomeContext);

  const { data } = useRequest<Filtro[]>({
    url: "/filters",
  });

  const renderItem = ({ item }: { item: Filtro }) => {
    const isSelected = item.id === filtro?.id;

    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          {
            backgroundColor: isSelected
              ? hexToRGBA(theme.colors.primary[600], 0.1 * brightnessMultiplier)
              : hexToRGBA(theme.colors.gray[300], 0.3 * brightnessMultiplier),
          },
        ]}
        onPress={() => setFiltro(item)}
      >
        <ThemedText
          style={[
            styles.categoryText,
            {
              color: isSelected
                ? theme.colors.primary[600]
                : theme.colors.gray[600],
            },
          ]}
        >
          {item.name}
        </ThemedText>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <ThemedText style={styles.header}>Lojas</ThemedText>
      <FlatList
        contentContainerStyle={{ columnGap: 10, paddingHorizontal: 24 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const useStyle = ({ colors }: ThemeColors) =>
  StyleSheet.create({
    header: {
      color: colors.gray[800],
      fontWeight: "600",
      paddingHorizontal: 24,
      paddingBottom: 12,
    },
    categoryButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 20,
    },
    categoryText: {
      fontSize: 12,
      lineHeight: 16,
    },
  });
