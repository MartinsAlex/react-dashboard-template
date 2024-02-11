import { ResponsiveLine } from "@nivo/line";

const fullData = [
  {
    id: "Asset Management",
    color: "#59a4a4",
    data: [
      {
        x: "January",
        y: 10,
      },
      {
        x: "February",
        y: 276,
      },
      {
        x: "March",
        y: 87,
      },
      {
        x: "April",
        y: 154,
      },
      {
        x: "May",
        y: 222,
      },
      {
        x: "June",
        y: 38,
      },
      {
        x: "July",
        y: 34,
      },
      {
        x: "August",
        y: 179,
      },
      {
        x: "September",
        y: 101,
      },
      {
        x: "October",
        y: 120,
      },
      {
        x: "November",
        y: 156,
      },
      {
        x: "December",
        y: 205,
      },
    ],
  },
  {
    id: "Wealth Management",
    color: "#6076A1",
    data: [
      {
        x: "January",
        y: 273,
      },
      {
        x: "February",
        y: 266,
      },
      {
        x: "March",
        y: 213,
      },
      {
        x: "April",
        y: 269,
      },
      {
        x: "May",
        y: 267,
      },
      {
        x: "June",
        y: 96,
      },
      {
        x: "July",
        y: 193,
      },
      {
        x: "August",
        y: 191,
      },
      {
        x: "September",
        y: 136,
      },
      {
        x: "October",
        y: 201,
      },
      {
        x: "November",
        y: 175,
      },
      {
        x: "December",
        y: 104,
      },
    ],
  },
  {
    id: "Investment Banking",
    color: "#b5c0d3",
    data: [
      {
        x: "January",
        y: 249,
      },
      {
        x: "February",
        y: 86,
      },
      {
        x: "March",
        y: 20,
      },
      {
        x: "April",
        y: 148,
      },
      {
        x: "May",
        y: 228,
      },
      {
        x: "June",
        y: 75,
      },
      {
        x: "July",
        y: 267,
      },
      {
        x: "August",
        y: 209,
      },
      {
        x: "September",
        y: 153,
      },
      {
        x: "October",
        y: 175,
      },
      {
        x: "November",
        y: 99,
      },
      {
        x: "December",
        y: 256,
      },
    ],
  },
  {
    id: "Commercial Banking",
    color: "#9a9a9a",
    data: [
      {
        x: "January",
        y: 31,
      },
      {
        x: "February",
        y: 285,
      },
      {
        x: "March",
        y: 221,
      },
      {
        x: "April",
        y: 219,
      },
      {
        x: "May",
        y: 154,
      },
      {
        x: "June",
        y: 82,
      },
      {
        x: "July",
        y: 247,
      },
      {
        x: "August",
        y: 26,
      },
      {
        x: "September",
        y: 80,
      },
      {
        x: "October",
        y: 181,
      },
      {
        x: "November",
        y: 226,
      },
      {
        x: "December",
        y: 150,
      },
    ],
  },
  {
    id: "Retail Banking",
    color: "#c47373",
    data: [
      {
        x: "January",
        y: 261,
      },
      {
        x: "February",
        y: 161,
      },
      {
        x: "March",
        y: 264,
      },
      {
        x: "April",
        y: 30,
      },
      {
        x: "May",
        y: 142,
      },
      {
        x: "June",
        y: 61,
      },
      {
        x: "July",
        y: 21,
      },
      {
        x: "August",
        y: 156,
      },
      {
        x: "September",
        y: 16,
      },
      {
        x: "October",
        y: 275,
      },
      {
        x: "November",
        y: 235,
      },
      {
        x: "December",
        y: 158,
      },
    ],
  },
];

const LineChart = () => (
  <>
    <ResponsiveLine
      data={fullData}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridY={false}
      colors={(d) => d.color}
      pointColor={{ theme: "background" }}
      pointBorderWidth={1}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: -20,
          translateY: -36,
          itemsSpacing: 50,
          itemDirection: "left-to-right",
          itemWidth: 93,
          itemHeight: 19,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={(data) => {
        // The month for which the tooltip is being displayed
        const hoveredMonth = data.point.data.x;
      
        // Assuming `fullData` is the full dataset available in this context
        const valuesAndColorsForMonth = fullData.map((item) => {
          const monthData = item.data.find((d) => d.x === hoveredMonth);
          // Include the color in the returned object
          return monthData ? { text: `${item.id}: ${monthData.y}`, color: item.color } : null;
        }).filter(Boolean); // Filter out any null values if the month was not found
      
        return (
          <div className="bg-white border border-slate-300 rounded-md p-1">
            <p className="text-semibold text-slate-600">
              {hoveredMonth}
            </p>
            <ul className="text-sm list-disc pl-5">
              {valuesAndColorsForMonth.map((value, index) => (
                // Use the specific color for each item.id
                <li key={index} style={{ color: value.color }}>
                  {value.text}
                </li>
              ))}
            </ul>
          </div>
        );
      }}
      
      
    />
  </>
);

export default LineChart;
