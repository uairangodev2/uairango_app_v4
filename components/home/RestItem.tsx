import { ThemeColors, useTheme } from "@/context/ThemeContext";
import { convertReal } from "@/helpers/number";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
  item: Estabelecimento;
};

export default function RestItem({ item }: Props) {
  const theme = useTheme();
  const styles = useStyle(theme);

  const router = useRouter();

  const ThemedTextWithStyle = useCallback(
    (props: React.ComponentProps<typeof ThemedText>) => (
      <ThemedText style={styles.text} {...props}>
        {props.children}
      </ThemedText>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.navigate(`/estab/${item.id_estabelecimento}`)}
    >
      <Image
        style={styles.estabLogo}
        source={{ uri: item.logo }}
        contentFit="cover"
        transition={1000}
      />
      <View style={styles.content}>
        <View>
          <ThemedText style={[styles.text, styles.title]}>
            {item.nome}
          </ThemedText>
        </View>
        <View style={styles.row}>
          <ThemedTextWithStyle>{item.nota}</ThemedTextWithStyle>
          <ThemedTextWithStyle>|</ThemedTextWithStyle>
          <ThemedTextWithStyle>
            {item.categorias.join(", ")}
          </ThemedTextWithStyle>
        </View>
        <View style={styles.row}>
          <ThemedTextWithStyle>
            Delivery: {item.delivery.min}
          </ThemedTextWithStyle>
          <ThemedTextWithStyle>●</ThemedTextWithStyle>
          <ThemedTextWithStyle>
            Entrega a partir de {convertReal(item.min_taxa)}
          </ThemedTextWithStyle>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const useStyle = ({ colors }: ThemeColors) =>
  StyleSheet.create({
    item: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 24,
      marginVertical: 4,
    },
    estabLogo: {
      width: 56,
      height: 56,
      borderRadius: 25,
      backgroundColor: colors.gray[200],
    },
    content: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "space-evenly",
      marginLeft: 12,
      paddingVertical: 4,
    },
    title: {
      fontWeight: "600",
      color: colors.gray[600],
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    text: {
      fontSize: 14,
    },
  });
