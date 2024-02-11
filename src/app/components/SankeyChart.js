import { ResponsiveSankey } from "@nivo/sankey";

const data = {
  nodes: [
    {
      id: "Retail Banking Services",
      color: "hsl(233, 6%, 29%)",
    },
    {
      id: "Loan Products",
      color: "hsl(233, 6%, 29%)",
    },
    {
      id: "Investment Banking",
      color: "hsl(233, 6%, 29%)",
    },
    {
      id: "Wealth Management",
      color: "hsl(233, 6%, 29%)",
    },
    {
      id: "Asset Management",
      color: "hsl(233, 6%, 29%)",
    },
    {
      id: "Revenue",
      color: "hsl(233, 6%, 29%)",
    },
    {
      id: "Gross profit",
      color: "hsl(140, 81%, 27%)",
    },
    {
      id: "Cost of revenue",
      color: "hsl(0, 65%, 44%)",
    },
    {
      id: "Operating profit",
      color: "hsl(140, 81%, 27%)",
    },
    {
      id: "Operating expenses",
      color: "hsl(0, 65%, 44%)",
    },
    {
      id: "Tax",
      color: "hsl(0, 65%, 44%)",
    },
    {
      id: "Other",
      color: "hsl(0, 65%, 44%)",
    },
    {
      id: "Net profit",
      color: "hsl(140, 81%, 27%)",
    },
    {
      id: "R&D",
      color: "hsl(0, 65%, 44%)",
    },
    {
      id: "SG&A",
      color: "hsl(0, 65%, 44%)",
    },
  ],
  links: [
    {
      source: "Retail Banking Services",
      target: "Revenue",
      value: 50,
    },
    {
      source: "Loan Products",
      target: "Revenue",
      value: 150,
    },
    {
      source: "Investment Banking",
      target: "Revenue",
      value: 100,
    },
    {
      source: "Wealth Management",
      target: "Revenue",
      value: 50,
    },
    {
      source: "Asset Management",
      target: "Revenue",
      value: 50,
    },
    {
      source: "Revenue",
      target: "Gross profit",
      value: 100,
    },
    {
      source: "Revenue",
      target: "Cost of revenue",
      value: 300,
    },
    {
      source: "Gross profit",
      target: "Operating expenses",
      value: 80,
    },
    {
      source: "Gross profit",
      target: "Operating profit",
      value: 50,
    },
    {
      source: "Operating profit",
      target: "Net profit",
      value: 30,
    },
    {
      source: "Operating profit",
      target: "Tax",
      value: 15,
    },
    {
      source: "Operating profit",
      target: "Other",
      value: 5,
    },
    {
      source: "Operating expenses",
      target: "R&D",
      value: 40,
    },
    {
      source: "Operating expenses",
      target: "SG&A",
      value: 40,
    },
  ],
};

export default function SankeyChart() {
  return (
    <>
      <ResponsiveSankey
        data={data}
        margin={{ top: 30, right: 30, bottom: 20, left: 30 }}
        align="justify"
        sort="descending"
        colors={d => d.color}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]],
        }}
        nodeBorderRadius={3}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="inside"
        labelOrientation="horizontal"
        labelPadding={16}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1]],
        }}
        label={node => `${node.id}: ${node.value}`}

      />
    </>
  );
}
