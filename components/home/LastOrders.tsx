import { ThemeColors, useTheme } from "@/context/ThemeContext";
import { useRequest } from "@/hooks/useRequest";
import { Image } from "expo-image";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

export default function LastOrders() {
  const theme = useTheme();
  const styles = useStyle(theme);

  const { data } = useRequest<Estabelecimento[]>({
    url: "/orders/last",
    method: "GET",
  });
 
  const renderItem = ({ item }: { item: Estabelecimento }) => {
    return (
      <TouchableOpacity style={styles.estabButton}>
        <Image
          style={styles.estabLogo}
          source={{ uri: item.logo }}
          contentFit="cover"
          transition={1000}
        />
        <ThemedText style={styles.estabText} numberOfLines={2}>
          {item.nome}
        </ThemedText>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <ThemedText style={styles.header}>Últimos pedidos</ThemedText>
      <FlatList
        contentContainerStyle={{ columnGap: 10, paddingHorizontal: 24 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_estabelecimento.toString()}
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
    estabButton: {
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 8,
      paddingHorizontal: 5,
      paddingVertical: 8,
      borderRadius: 50,
      maxWidth: 80,
    },
    estabLogo: {
      width: 56,
      height: 56,
      borderRadius: 25,
      backgroundColor: colors.gray[200],
    },
    estabText: {
      fontSize: 12,
      lineHeight: 16,
      textAlign: "center",
    },
  });
