import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    "id": "Wealth Management",
    "label": "Wealth Management",
    "value": 104,
    "color": "#6076A1"
  },
  {
    "id": "Commercial Banking",
    "label": "Commercial Banking",
    "value": 150,
    "color": "#9a9a9a"
  },
  {
    "id": "Retail Banking",
    "label": "Retail Banking",
    "value": 158,
    "color": "#c47373"
  },
  {
    "id": "Asset Management",
    "label": "Asset Management",
    "value": 205,
    "color": "#59a4a4"
  },
  {
    "id": "Investment Banking",
    "label": "Investment Banking",
    "value": 256,
    "color": "#b5c0d3"
  },
];

export default function BarChart() {
  return (
    <> 
      <ResponsiveBar
        data={data}
        keys={['value']}
        indexBy="id"
        margin={{ top: 10, right: 20, bottom: 10, left: 120 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={({ data }) => data.color} // Correct way to access the color property
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        enableGridX={false}
        enableGridY={false}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        tooltip={() => {}}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in category: ${e.indexValue}`}
      />
    </>
  );
}
