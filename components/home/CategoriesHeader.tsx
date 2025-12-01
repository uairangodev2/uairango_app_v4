import { View } from "react-native";
import Categories from "./Categories";

export default function CategoriesHeader() {
  return (
    <View style={{ rowGap: 10 }}>
      <Categories />
    </View>
  );
}
