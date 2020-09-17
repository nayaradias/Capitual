import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const Width = Dimensions.get("window").width;
const Chart = () => {
  const data = {
    labels: ["21:00", "Hoje", "3:00", "6:00", "9:00", "12:00"],
    datasets: [
      {
        data: [20, 45, 28, 70, 20, 43],
      },
    ],
  };
  return (
    <View>
      <LineChart
        data={data}
        width={Width}
        height={160}
        withHorizontalLabels={false}
        withInnerLines={false}
        withOuterLines={false}
        chartConfig={{
          backgroundGradientFrom: "#1e1e27",
          backgroundGradientFromOpacity: 0.5,
          backgroundGradientTo: "#1e1e27",
          backgroundGradientToOpacity: 0.9,
          decimalPlaces: 2,
          color: (opacity = 0.2) => `rgba(242, 181, 10, ${opacity})`,
          labelColor: (opacity = 0.2) => `rgba(153, 153, 153, ${opacity})`,
          style: {
            borderRadius: 10,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "0",
            stroke: "#ffa726",
          },
        }}
      />
    </View>
  );
};

export default Chart;
