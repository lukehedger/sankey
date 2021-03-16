import React from "react";
import { render } from "react-dom";
import { ResponsiveSankey } from "@nivo/sankey";

const data = {
  nodes: [
    { id: "Income" },
    { id: "Bill" },
    { id: "Food" },
    { id: "Travel" },
    { id: "Going Out" },
    { id: "Misc" },
    { id: "Savings" },
  ],
  links: [
    {
      source: "Income",
      target: "Bill",
      value: 50,
    },
    {
      source: "Income",
      target: "Food",
      value: 10,
    },
    {
      source: "Income",
      target: "Travel",
      value: 7,
    },
    {
      source: "Income",
      target: "Going Out",
      value: 8,
    },
    {
      source: "Income",
      target: "Misc",
      value: 20,
    },
    {
      source: "Income",
      target: "Savings",
      value: 45,
    },
  ],
};

const App = () => {
  return (
    <ResponsiveSankey
      data={data}
      margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
      align="justify"
      colors={{ scheme: "accent" }}
      nodeOpacity={1}
      nodeThickness={18}
      nodeInnerPadding={3}
      nodeSpacing={24}
      nodeBorderWidth={0}
      nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
      linkOpacity={0.5}
      linkHoverOthersOpacity={0.1}
      enableLinkGradient={true}
      labelPosition="outside"
      labelOrientation="vertical"
      labelPadding={16}
      labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 130,
          itemWidth: 100,
          itemHeight: 14,
          itemDirection: "right-to-left",
          itemsSpacing: 2,
          itemTextColor: "#999",
          symbolSize: 14,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

render(<App />, document.getElementById("react-root"));
