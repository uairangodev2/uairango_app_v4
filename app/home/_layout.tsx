import CategoriesHeader from "@/components/home/CategoriesHeader";
import RestItem from "@/components/home/RestItem";
import SubHeader from "@/components/home/SubHeader";
import { ThemedView } from "@/components/ThemedView";
import { Header } from "@/components/ui/Header";
import { TabBar } from "@/components/ui/TabBar";
import HomeProvider from "@/context/HomeContext";
import { useRequest } from "@/hooks/useRequest";
import {
  FlashList,
  FlashListProps,
  ListRenderItemInfo,
} from "@shopify/flash-list";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const HEADER_HEIGHT = 55;

const AnimatedFlashList =
  Animated.createAnimatedComponent<
    FlashListProps<Estabelecimento | HeaderType>
  >(FlashList);

type HeaderType = {
  type: "header" | "subheader";
};

export default function HomeLayout() {
  const scrollY = useSharedValue(0);
  const isScrollingDown = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (event.contentOffset.y > scrollY.value) {
        isScrollingDown.value = true;
      } else {
        isScrollingDown.value = false;
      }
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerStyle = useAnimatedStyle(() => {
    const shouldHide = isScrollingDown.value && scrollY.value > 0;
    return {
      height: withTiming(shouldHide ? 0 : HEADER_HEIGHT, {
        duration: 200,
      }),
      transform: [
        {
          translateY: withTiming(shouldHide ? -HEADER_HEIGHT : 0, {
            duration: 200,
          }),
        },
      ],
    };
  });

  const { data } = useRequest<Estabelecimento[]>({
    url: "/estabs",
    method: "GET",
  });

  const items = useMemo(() => {
    const headerItems: HeaderType[] = [
      { type: "header" },
      { type: "subheader" },
    ];

    return data ? [...headerItems, ...data] : headerItems;
  }, [data]);

  const renderItem = ({
    item,
  }: ListRenderItemInfo<Estabelecimento | HeaderType>) => {
    if ("type" in item) {
      if (item.type === "header") {
        return <CategoriesHeader />;
      } else if (item.type === "subheader") {
        return <SubHeader />;
      }
    } else {
      return <RestItem item={item} />;
    }
    return null;
  };

  return (
    <HomeProvider>
      <ThemedView style={styles.titleContainer}>
        <Header headerStyle={headerStyle} />
        <AnimatedFlashList
          contentContainerStyle={styles.scrollView}
          data={items}
          renderItem={renderItem}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        />
      </ThemedView>
      <TabBar />
    </HomeProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  scrollView: {
    paddingBottom: 80,
  },
});
