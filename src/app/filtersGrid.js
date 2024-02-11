import { Select } from "antd";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import React, { useState } from "react";
import { Dropdown, Menu, Button, Tooltip } from "antd";
import {
  DownOutlined,
  QuestionCircleOutlined,
  DownloadOutlined,
  UserOutlined
} from "@ant-design/icons";

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const businessLineOptions = [
  { label: "Retail Banking", value: "RetailBanking" },
  { label: "Commercial Banking", value: "CommercialBanking" },
  { label: "Investment Banking", value: "InvestmentBanking" },
  { label: "Wealth Management", value: "WealthManagement" },
  { label: "Asset Management", value: "AssetManagement" },
];

const departmentOptions = [
  { label: "Loan Operations", value: "LoanOperations" },
  { label: "Mortgage Services", value: "MortgageServices" },
  { label: "Equity Research", value: "EquityResearch" },
  { label: "Corporate Finance", value: "CorporateFinance" },
  { label: "Risk Management", value: "RiskManagement" },
  { label: "Compliance", value: "Compliance" },
  { label: "Client Services", value: "ClientServices" },
  { label: "Portfolio Management", value: "PortfolioManagement" },
  { label: "Fund Administration", value: "FundAdministration" },
];

const unitOptions = [
  // Existing units
  { label: "Personal Loans", value: "PersonalLoans" },
  { label: "Business Loans", value: "BusinessLoans" },
  { label: "Home Loans", value: "HomeLoans" },
  { label: "Credit Analysis", value: "CreditAnalysis" },
  { label: "IPO Advisory", value: "IPOAdvisory" },
  { label: "Mergers & Acquisitions", value: "MergersAcquisitions" },
  { label: "Market Compliance", value: "MarketCompliance" },
  { label: "Customer Support", value: "CustomerSupport" },
  { label: "High Net Worth Management", value: "HighNetWorthManagement" },
  {
    label: "Institutional Asset Management",
    value: "InstitutionalAssetManagement",
  },

  // Additional units
  { label: "Derivatives Trading", value: "DerivativesTrading" },
  { label: "Foreign Exchange", value: "ForeignExchange" },
  { label: "Private Equity", value: "PrivateEquity" },
  {
    label: "Financial Planning & Analysis",
    value: "FinancialPlanningAnalysis",
  },
  { label: "Corporate Treasury", value: "CorporateTreasury" },
  { label: "Regulatory Affairs", value: "RegulatoryAffairs" },
  { label: "Internal Audit", value: "InternalAudit" },
  { label: "Technology Infrastructure", value: "TechnologyInfrastructure" },
  { label: "Data Analytics", value: "DataAnalytics" },
  { label: "Sustainable Finance", value: "SustainableFinance" },
];

const teamOptions = [
  // Existing teams
  { label: "Underwriting Team", value: "UnderwritingTeam" },
  { label: "Loan Processing Team", value: "LoanProcessingTeam" },
  { label: "Equity Research Analysts", value: "EquityResearchAnalysts" },
  { label: "Debt Capital Markets Team", value: "DebtCapitalMarketsTeam" },
  { label: "Compliance Audit Team", value: "ComplianceAuditTeam" },
  { label: "Client Onboarding Team", value: "ClientOnboardingTeam" },
  { label: "Fund Accounting Team", value: "FundAccountingTeam" },
  { label: "Portfolio Analysts", value: "PortfolioAnalysts" },
  {
    label: "Client Relationship Managers",
    value: "ClientRelationshipManagers",
  },

  // Additional teams
  { label: "Options Strategies Team", value: "OptionsStrategiesTeam" },
  { label: "FX Risk Management", value: "FXRiskManagement" },
  { label: "Venture Capital Analysts", value: "VentureCapitalAnalysts" },
  {
    label: "Budgeting and Forecasting Team",
    value: "BudgetingForecastingTeam",
  },
  { label: "Liquidity Management Group", value: "LiquidityManagementGroup" },
  { label: "Regulatory Compliance Team", value: "RegulatoryComplianceTeam" },
  { label: "Audit and Assurance Group", value: "AuditAssuranceGroup" },
  { label: "IT Security Team", value: "ITSecurityTeam" },
  { label: "Business Intelligence Unit", value: "BusinessIntelligenceUnit" },
  { label: "Green Financing Team", value: "GreenFinancingTeam" },
];

const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};


const FiltersGrid = (props) => {



  return (
    <div className="flex flex-wrap mb-4 gap-4 mt-3">
      <div className="flex items-center gap-2">
        <small className="whitespace-nowrap text-slate-500 font-medium">
          Month
        </small>
        <DatePicker picker="month" size="small" />
      </div>

      <div className="flex items-center gap-2">
        <small className="whitespace-nowrap text-slate-500 font-medium">
          Business line
        </small>
        <Select
          size="small"
          mode="multiple"
          className="w-full"
          maxTagCount="responsive"
          placeholder="Please select"
          defaultValue={businessLineOptions.map((item) => item.value)}
          options={businessLineOptions}
        />
      </div>

      <div className="flex items-center gap-2">
        <small className="whitespace-nowrap text-slate-500 font-medium">
          Department
        </small>
        <Select
          size="small"
          mode="multiple"
          className="w-full"
          placeholder="Please select"
          defaultValue={departmentOptions.map((item) => item.value)}
          maxTagCount="responsive"
          options={departmentOptions}
        />
      </div>

      <div className="flex items-center gap-2">
        <small className="whitespace-nowrap text-slate-500 font-medium">
          Unit
        </small>
        <Select
          size="small"
          mode="multiple"
          className="w-full"
          placeholder="Please select"
          defaultValue={unitOptions.map((item) => item.value)}
          maxTagCount="responsive"
          options={unitOptions}
        />
      </div>

      <div className="flex items-center gap-2">
        <small className="whitespace-nowrap text-slate-500 font-medium">
          Team
        </small>
        <Select
          size="small"
          mode="multiple"
          className="w-full"
          maxTagCount="responsive"
          placeholder="Please select"
          defaultValue={teamOptions.map((item) => item.value)}
          options={teamOptions}
        />
      </div>

      {/* Buttons at the top right */}
      <div className="ml-auto flex items-center gap-2">
        {/* More Filters Dropdown */}
        <Dropdown menu={menuProps} >
          <Button size="small">
            <Space>
              More filters
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        {/* Help Button with Tooltip */}
        <Tooltip title="Explanation about the data">
          <Button size="small" icon={<QuestionCircleOutlined />} />
        </Tooltip>

        {/* Export Button */}
        <Button size="small" icon={<DownloadOutlined />}>
          Export
        </Button>
      </div>
    </div>
  );
};

export default FiltersGrid;
