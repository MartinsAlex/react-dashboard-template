import React, { useState } from "react";
import { ResponsiveRadar } from "@nivo/radar";

// You can define a similar structure for "Cash Flow" data

export default function RadarChart({ data }) {
  return (
    <>
      <ResponsiveRadar
        data={data}
        keys={Object.keys(data[0]).filter((key) => key !== "indicatorName")}
        indexBy="indicatorName"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [] }}
        gridLabelOffset={20}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        dotBorderColor={{ from: "color", modifiers: [] }}
        colors={{ scheme: "set1" }}
        fillOpacity={0.2}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 12,
            symbolShape: "circle",
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
        tooltip={({ datum }) => (
          <div style={{ color: "black" }}>
            <strong>{datum.indexValue}</strong>: {datum.value}% of target
            achieved
            <br />
            Current Value:{" "}
            {data.find((d) => d.indicator === datum.indexValue).currentValue}
          </div>
        )}
      />
    </>
  );
}
