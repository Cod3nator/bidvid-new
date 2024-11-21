"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Dash_Navbar";
import withAuth from "../components/withAuth";
import Pagination from "../components/pagination";
const brand = {
  name: "Brand Name",
  reportId: "123456789",
};
const dummyData = [
  {
    fitScore: "85%",
    impressions: "150,000",
    cpm: "$12.50",
    reach: "80,000",
    frequency: "2.5",
    ctrVtr: "1.5%",
    completionRate: "75%",
    location: "United States",
    conversion: "5%",
    campaignData: "Campaign A",
    clicks: "500",
    date: "2024-11-18",
    range: "Last 7 Days",
    dailyReport: "Report Link",
    costPerReach: "$0.15",
  },
  {
    fitScore: "85%",
    impressions: "150,000",
    cpm: "$12.50",
    reach: "80,000",
    frequency: "2.5",
    ctrVtr: "1.5%",
    completionRate: "75%",
    location: "United States",
    conversion: "5%",
    campaignData: "Campaign A",
    clicks: "500",
    date: "2024-11-18",
    range: "Last 7 Days",
    dailyReport: "Report Link",
    costPerReach: "$0.15",
  },
];

const DashboardPage = () => {
  const [campaignData, setCampaignData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://devapi.bidvid.in/campaign_reports");
        const res = await data.json();
        console.log(res);
        setCampaignData(res);
      } catch (error) {
        console.error("Error fetching campaign reports:", error);
      }
    };
    fetchData();
  }, []);
  const [headers, setHeaders] = useState();

  useEffect(() => {
    if (campaignData) {
      const keys = Object.keys(campaignData[0]);
      console.log(keys);
      setHeaders(
        keys.map((key) =>
          key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
        )
      );
    }
  }, [campaignData]);

  const [dropdownOpen, setDropdownOpen] = useState({
    fitScore: false,
    location: false,
    date: false,
  });

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
   <div className="h-auto">
       <Navbar />
      <div className="p-8 bg-gray-100  h-screen">
        <div className="flex justify-between items-center mt-20 mb-4">
          <div className="text-sm space-x-4 flex ml-4 mb-4">
            {/* <a href="/list-brands">
              <button>{"<"} Return to the brands list</button>
            </a> */}
          </div>
        </div>
        <div
          className="table-container bg-white p-8 rounded-lg"
          style={{ borderRadius: "24px" }}
        >
          <div className="table-header flex justify-between items-center mb-8">
            <div className="table-header-title flex flex-col space-y-2">
              <div className="table-brand-name text-xl font-bold">
                {/* {brand.name} */}
                Campaigns
              </div>
              {/* <span className="table-report-id text-green-400 text-sm">
                Report ID: {brand.reportId}
              </span> */}
            </div>
          </div>
          <div className="table-wrapper  overflow-x-auto">
            <table
              className="min-w-full bg-white border-gray-100 rounded "
              style={{
                borderSpacing: "30px",
                whiteSpace: "nowrap", // Prevents wrapping
              }}
            >
              <thead>
                {/* <tr className="bg-white text-gray-400 font-regular">
                  <th
                    className="py-2 border-b text-start text-sm font-medium relative"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Fit Score
                    <div className="relative inline-block text-left">
                      <button
                        type="button"
                        onClick={() => toggleDropdown("fitScore")}
                        className="ml-2 bg-white border border-gray-300 rounded-md shadow-sm px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        ▼
                      </button>
                      {dropdownOpen.fitScore && (
                        <div className="absolute z-10 mt-2 w-36 bg-white shadow-lg border rounded-md">
                          <ul className="py-1 text-sm text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              High
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Medium
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Low
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </th>

                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Impressions
                  </th>

                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    CPM
                  </th>

                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Reach
                  </th>
                   <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Frequency
                  </th>
                    <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    CTR / VTR
                  </th>

  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Completion Rate
                  </th>
                  <th
                    className="py-2 border-b text-start text-sm font-medium relative"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Location
                    <div className="relative inline-block text-left">
                      <button
                        type="button"
                        onClick={() => toggleDropdown("location")}
                        className="ml-2 bg-white border border-gray-300 rounded-md shadow-sm px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        ▼
                      </button>
                      {dropdownOpen.location && (
                        <div className="absolute z-10 mt-2 w-36 bg-white shadow-lg border rounded-md">
                          <ul className="py-1 text-sm text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              USA
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Europe
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Asia
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </th>

                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Conversion
                  </th>
  
                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Campaign wise data
                  </th>
                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Click
                  </th>
                

                  <th
                    className="py-2 border-b text-start text-sm font-medium relative"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Date
                    <div className="relative inline-block text-left">
                      <button
                        type="button"
                        onClick={() => toggleDropdown("date")}
                        className="ml-2 bg-white border border-gray-300 rounded-md shadow-sm px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        ▼
                      </button>
                      {dropdownOpen.date && (
                        <div className="absolute z-10 mt-2 w-36 bg-white shadow-lg border rounded-md">
                          <ul className="py-1 text-sm text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Today
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Last Week
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Last Month
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </th>

               
                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Range
                  </th>
                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Specific Daily Report
                  </th>
                  <th
                    className="py-2 border-b text-start text-sm font-medium"
                    style={{ paddingLeft: "14px", paddingRight: "54px" }}
                  >
                    Cost Per Reach
                  </th>
                </tr> */}
                <tr className="bg-white text-gray-400 font-regular">
                  {headers &&
                    headers.map((header, index) => (
                      <th
                        key={index}
                        className="py-2 border-b text-start text-sm font-medium"
                        style={{ paddingLeft: "14px", paddingRight: "54px" }}
                      >
                        {header}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {campaignData &&
                  campaignData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-6 px-4 text-sm">{item.id}</td>
                      <td className="py-6 px-4 text-sm">
                        {item.campaign_name}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.insertion_order}
                      </td>
                      <td className="py-6 px-4 text-sm">{item.line_item}</td>
                      <td className="py-6 px-4 text-sm">{item.campaign_id}</td>
                      <td className="py-6 px-4 text-sm">
                        {item.insertion_order_id}
                      </td>
                      <td className="py-6 px-4 text-sm">{item.line_item_id}</td>
                      <td className="py-6 px-4 text-sm">{item.Impressions}</td>
                      <td className="py-6 px-4 text-sm">
                        {item.cpm_fee_one_usd}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.click_rate_ctr}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.completion_rate_audio}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.completion_rate_video}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.complete_listens_audio}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.complete_views_video}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.total_conversions}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.post_view_conversions}
                      </td>
                      <td className="py-6 px-4 text-sm">
                        {item.post_click_conversions}
                      </td>
                      <td className="py-6 px-4 text-sm">{item.clicks}</td>
                      <td className="py-6 px-4 text-sm">{item.created_at}</td>
                      <td className="py-6 px-4 text-sm">{item.updated_at}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* <div className="pagination flex justify-between mt-8">
            <div></div>
            <div className="text-sm flex items-center space-x-4">
              <span className="whitespace-nowrap">
                Showing data 1 to 8 of 256k entries
              </span>
              <Pagination />
            </div>
          </div> */}
        </div>
      </div>
      <style jsx>{`
        .table-wrapper::-webkit-scrollbar {
          margin-top: 14px;
          height: 6px;
        }
        .table-wrapper::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 4px;
        }
        .table-wrapper::-webkit-scrollbar-track {
          background-color: #f1f1f1;
        }
        table tr {
          border-bottom: 1px solid #ccc;
        }
        table tr:nth-last-child(1) {
          border-bottom: none;
        }
      `}</style>
   </div>
  );
};

const AuthenticatedDashboardPage = withAuth(DashboardPage);

export default AuthenticatedDashboardPage;
{
  /* <div className="my-4" style={{
                    height: "1px",
                    width: "100% !important",
                    backgroundColor: "gray",
                    border: "none",
                  }}></div> */
}
