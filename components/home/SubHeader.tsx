import { View } from "react-native";
import Filters from "./Filters";
import LastOrders from "./LastOrders";

export default function SubHeader() {
  return (
    <View style={{ rowGap: 10, marginBottom: 16 }}>
      <LastOrders />
      <Filters />
    </View>
  );
}
