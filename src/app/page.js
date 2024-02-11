"use client";
import { EllipsisOutlined } from "@ant-design/icons";
import React, { useRef, useState, useEffect } from "react";
import { Select, Button, Divider, Space, Tour } from "antd";
import FiltersGrid from "./filtersGrid";
import DataTable from "./components/DataTable";
import {
  radarChartData
} from "./components/RadarChartData";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import RadarChart from "./components/RadarChart";
import SankeyChart from "./components/SankeyChart";

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [open, setOpen] = useState(true);
  const steps = [
    {
      title: "Welcome to Your Dashboard",
      description:
        "Get ready to explore your dashboard's features. This quick tour will guide you through key functionalities to enhance your experience.",
      target: null,
    },
    {
      title: "Customize Your View",
      description:
        "Tailor the data you see by using various filters. Adjust these settings to focus on the information that matters most to you.",
      target: () => ref1.current,
    },
    {
      title: "Overview of Key Metrics",
      description:
        "Here's where you can view the main Key Performance Indicators (KPIs). These metrics give you a quick snapshot of your overall performance.",
      target: () => ref2.current,
    },
    {
      title: "Interactive Data Visualization",
      description:
        "Explore different data aspects by adjusting the measures and breakdowns. Use the selection widget to switch between various visual representations.",
      target: () => ref3.current,
    },
    {
      title: "Export Data Easily",
      description:
        "Need a copy of your data? Here you can export the data into various formats for your reporting and analysis needs.",
      target: () => ref4.current,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Financial Health');
  const [chartData, setChartData] = useState(radarChartData);
  
  useEffect(() => {
    const selectedData = radarChartData[0][selectedCategory]
    setChartData(selectedData);
  }, [selectedCategory]);

  const handleDomainChange = value => {
    setSelectedCategory(value);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col p-4 align-middle items-center bg-[#f5f5f5]">
        <Tour
          open={open}
          onClose={() => setOpen(false)}
          steps={steps}
          indicatorsRender={(current, total) => (
            <span>
              {current + 1} / {total}
            </span>
          )}
        />

        <div className="dashboard-title">Finance - Indirect costs</div>

        <div className="w-full max-w-[1653px] mx-auto min-h-[1200px]">
          <div ref={ref1}>
            <FiltersGrid/>
          </div>

          <div
            className="grid mb-4 grid-cols-4 gap-4 font-mono text-sm text-center font-bold leading-6"
            ref={ref2}
          >
            <div className="dashboard-block">
              <p className="dashboard-kpi-title">Total Revenue</p>
              <p className="dashboard-kpi-figure">$500k</p>
              <span className="dashboard-kpi-delta-value">+5.4%</span>
              <span className="dashboard-kpi-delta-text">vs Jan.23 | </span>
              <span className="dashboard-kpi-delta-value"> +1.4%</span>
              <span className="dashboard-kpi-delta-text">vs Feb.23 </span>
            </div>

            <div className="dashboard-block">
              <p className="dashboard-kpi-title">Net Cash Flow</p>
              <p className="dashboard-kpi-figure">$150k</p>
              <span className="dashboard-kpi-delta-value">+1.1%</span>
              <span className="dashboard-kpi-delta-text">vs Jan.23 | </span>
              <span className="dashboard-kpi-delta-value"> +0.4%</span>
              <span className="dashboard-kpi-delta-text">vs Feb.23 </span>
            </div>

            <div className="dashboard-block">
              <p className="dashboard-kpi-title">Gross Profit</p>
              <p className="dashboard-kpi-figure">$300k</p>
              <span className="dashboard-kpi-delta-value">+1.1%</span>
              <span className="dashboard-kpi-delta-text">vs Jan.23 | </span>
              <span className="dashboard-kpi-delta-value"> +0.4%</span>
              <span className="dashboard-kpi-delta-text">vs Feb.23 </span>
            </div>

            <div className="dashboard-block">
              <p className="dashboard-kpi-title">EBITDA</p>
              <p className="dashboard-kpi-figure">$330k</p>
              <span className="dashboard-kpi-delta-value">+1.1%</span>
              <span className="dashboard-kpi-delta-text">vs Jan.23 | </span>
              <span className="dashboard-kpi-delta-value"> +0.4%</span>
              <span className="dashboard-kpi-delta-text">vs Feb.23 </span>
            </div>
          </div>

          <div className="grid mb-4 grid-cols-6 gap-4 min-h-[400px]">
            <div className="col-span-4 dashboard-block">
              <div className="flex" ref={ref3}>
                <div className="flex-none w-42">
                  <Select
                    size="small"
                    defaultValue="Total Revenue"
                    className=""
                    style={{
                      minWidth: 220,
                    }}
                    //onChange={handleChange}
                    options={[
                      {
                        value: "Total Revenue",
                        label: "Total Revenue",
                      },
                      {
                        value: "Net Cash Flow",
                        label: "Net Cash Flow",
                      },
                      {
                        value: "Gross Profit",
                        label: "Gross Profit",
                      },
                      {
                        value: "EBITDA",
                        label: "EBITDA",
                      },
                    ]}
                  />
                </div>
                <div className="flex-initial">
                  <h2 className="text-start text-semibold text-lg mx-3">by</h2>
                </div>
                <div className="flex-initial w-32 ...">
                  <Select
                    size="small"
                    defaultValue="Business line"
                    className=""
                    style={{
                      width: 220,
                    }}
                    //onChange={handleChange}
                    options={[
                      {
                        value: "Business line",
                        label: "Business line",
                      },
                    ]}
                  />
                </div>
              </div>

              <div className="h-[400px] w-full">
                <LineChart />
              </div>
            </div>

            <div className="col-span-2 dashboard-block">
              <div className="flex">
                <div className="flex-none w-42">
                  <Select
                    size="small"
                    defaultValue="Total Revenue"
                    className=""
                    style={{
                      minWidth: 150,
                    }}
                    //onChange={handleChange}
                    options={[
                      {
                        value: "Total Revenue",
                        label: "Total Revenue",
                      },
                      {
                        value: "Net Cash Flow",
                        label: "Net Cash Flow",
                      },
                      {
                        value: "Gross Profit",
                        label: "Gross Profit",
                      },
                      {
                        value: "EBITDA",
                        label: "EBITDA",
                      },
                    ]}
                  />
                </div>
                <div className="flex-initial">
                  <h2 className="text-start text-semibold text-lg mx-3">by</h2>
                </div>
                <div className="flex-initial w-32 ...">
                  <Select
                    size="small"
                    defaultValue="Business line"
                    className=""
                    style={{
                      width: 120,
                    }}
                    //onChange={handleChange}
                    options={[
                      {
                        value: "Business line",
                        label: "Business line",
                      },
                    ]}
                  />
                </div>
              </div>

              <div style={{ height: 400 }}>
                <BarChart />
              </div>
            </div>
          </div>

          <div className="grid mb-4 grid-cols-6 gap-4">
            <div className="col-span-2 dashboard-block">
              <div className="flex">
                <div className="flex-initial">
                  <h2 className="text-start text-semibold text-lg mx-3">
                    Indicators type:
                  </h2>
                </div>
                <div className="flex-none w-42">
                  <Select
                    // other props
                    onChange={handleDomainChange}
                    defaultValue={selectedCategory}
                    options={[
                      { value: "Financial Health", 
                        label: "Financial Health" },
                      {
                        value: "Operational Efficiency",
                        label: "Operational Efficiency",
                      },
                    ]}
                  />
                </div>
              </div>
              <div style={{ height: 400 }}>
                <RadarChart data={chartData} />
              </div>
            </div>

            <div className="col-span-4 dashboard-block">
              <div className="flex">
                <div className="flex-initial">
                  <h2 className="text-start text-semibold text-lg mx-3">
                  Income statement
                  </h2>
                </div>
              </div>
              <div style={{ height: 400 }}>
                <SankeyChart/>
              </div>

            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 min-h-[400px]">
            <div className="col-span-1 dashboard-block h-[600px]">
            <div className="flex">
                <div className="flex-initial">
                  <h2 className="text-start text-semibold text-lg mx-3 mb-4">
                    Detailed table
                  </h2>
                </div>
              </div>
              <DataTable />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
