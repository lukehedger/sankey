import React from "react";
import { render } from "react-dom";
import { ResponsiveSankey } from '@nivo/sankey'

const data = {
  "nodes": [
    {
      "id": "John",
      "color": "hsl(276, 70%, 50%)"
    },
    {
      "id": "Raoul",
      "color": "hsl(316, 70%, 50%)"
    },
    {
      "id": "Jane",
      "color": "hsl(119, 70%, 50%)"
    },
    {
      "id": "Marcel",
      "color": "hsl(207, 70%, 50%)"
    },
    {
      "id": "Ibrahim",
      "color": "hsl(103, 70%, 50%)"
    },
    {
      "id": "Junko",
      "color": "hsl(262, 70%, 50%)"
    }
  ],
  "links": [
    {
      "source": "Raoul",
      "target": "Jane",
      "value": 121
    },
    {
      "source": "Jane",
      "target": "John",
      "value": 176
    },
    {
      "source": "Jane",
      "target": "Junko",
      "value": 141
    },
    {
      "source": "Junko",
      "target": "Ibrahim",
      "value": 88
    },
    {
      "source": "Junko",
      "target": "John",
      "value": 59
    },
    {
      "source": "Marcel",
      "target": "Jane",
      "value": 164
    },
    {
      "source": "John",
      "target": "Ibrahim",
      "value": 162
    }
  ]
};

const App = () => {
  return (
    <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: 'category10' }}
        nodeOpacity={1}
        nodeThickness={18}
        nodeInnerPadding={3}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 130,
                itemWidth: 100,
                itemHeight: 14,
                itemDirection: 'right-to-left',
                itemsSpacing: 2,
                itemTextColor: '#999',
                symbolSize: 14,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
  )
}

render(<App />, document.getElementById("react-root"));
