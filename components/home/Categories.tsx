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
} from "react-native";
import { SvgFromXml } from "react-native-svg";
import { ThemedText } from "../ThemedText";

export default function Categories() {
  const theme = useTheme();
  const styles = useStyle(theme);

  const brightnessMultiplier = useColorScheme() === "dark" ? 3 : 1;

  const { data } = useRequest<Categoria[]>({
    url: "/categories",
  });

  const { categoria, setCategoria } = useContext(HomeContext);

  const renderItem = ({ item }: { item: Categoria }) => {
    const isSelected = item.id === categoria?.id;

    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          {
            backgroundColor: isSelected
              ? hexToRGBA(item.color, 0.1 * brightnessMultiplier)
              : hexToRGBA(theme.colors.gray[300], 0.3 * brightnessMultiplier),
          },
        ]}
        onPress={() => setCategoria(item)}
      >
        <SvgFromXml
          xml={item.icon}
          color={isSelected ? item.color : theme.colors.gray[600]}
        />
        <ThemedText
          style={[
            styles.categoryText,
            { color: isSelected ? item.color : theme.colors.gray[600] },
          ]}
        >
          {item.name}
        </ThemedText>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{
        columnGap: 10,
        paddingHorizontal: 24,
        marginBottom: 10,
      }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

const useStyle = ({ colors }: ThemeColors) =>
  StyleSheet.create({
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
