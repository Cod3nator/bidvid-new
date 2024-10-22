"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Dash_Navbar";
import withAuth from "./components/withAuth";

// Sample dummy data for the table
const dummyData = [
  {
    DSP: "AdPlatform A",
    seat: "Seat 1",
    advertiser: "Advertiser X",
    intersection_order: "Order 001",
    media_cost_d1: 1500,
    fit_score: 85,
    bidvid_status: "Active",
  },
  {
    DSP: "AdPlatform B",
    seat: "Seat 2",
    advertiser: "Advertiser Y",
    intersection_order: "Order 002",
    media_cost_d1: 2000,
    fit_score: 90,
    bidvid_status: "Paused",
  },
  {
    DSP: "AdPlatform C",
    seat: "Seat 3",
    advertiser: "Advertiser Z",
    intersection_order: "Order 003",
    media_cost_d1: 2500,
    fit_score: 75,
    bidvid_status: "Inactive",
  },
  {
    DSP: "AdPlatform A",
    seat: "Seat 4",
    advertiser: "Advertiser X",
    intersection_order: "Order 004",
    media_cost_d1: 3000,
    fit_score: 80,
    bidvid_status: "Active",
  },
  {
    DSP: "AdPlatform B",
    seat: "Seat 5",
    advertiser: "Advertiser Y",
    intersection_order: "Order 005",
    media_cost_d1: 3500,
    fit_score: 95,
    bidvid_status: "Paused",
  },
  {
    DSP: "AdPlatform C",
    seat: "Seat 6",
    advertiser: "Advertiser Z",
    intersection_order: "Order 006",
    media_cost_d1: 4000,
    fit_score: 70,
    bidvid_status: "Inactive",
  },
];
const DashboardPage = () => {
 

  return (
    <>
    <Navbar />
          <div className="p-4">
            <div className="flex justify-between items-center mt-20 mb-4">
              <div className="flex space-x-4 items-center">
                <div className="search-filter">
                  <div className="relative flex items-center h-12  border rounded-lg focus-within:shadow-lg bg-white overflow-hidden w-96">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                      type="text"
                      id="search"
                      placeholder="Search"
                    />
                  </div>
                </div>

                {/* Refresh button */}
                <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-filter"
                  >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                  </svg>
                </button>

                {/* Filtered Items and My Items */}
                <div className="text-gray-700">
                  <span className="mr-4">Filtered Items</span>
                  <span>My Items</span>
                </div>
              </div>

              {/* Usage progress bar */}
              <div className="w-48">
                <h2 className="text-lg font-semibold mb-2">
                  Usage Progress(%)
                </h2>
                <div className="h-2 bg-gray-200">
                  <div
                    className="h-full bg-gray-600"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Table */}
            <table className="min-w-full bg-white  border-gray-100">
              <thead>
                <tr className="bg-gray-000 text-gray-600">
                  <th className="py-2 px-4 border-b text-start">DSP</th>
                  <th className="py-2 px-4 border-b text-start">Seat</th>
                  <th className="py-2 px-4 border-b text-start">Advertiser</th>
                  <th className="py-2 px-4 border-b text-start">
                    Intersection Order
                  </th>
                  <th className="py-2 px-4 border-b text-start">
                    Media Cost D1
                  </th>
                  <th className="py-2 px-4 border-b text-start" t>
                    Fit Score
                  </th>
                  <th className="py-2 px-4 border-b text-start">
                    BidVid Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-3 px-4  ">{item.DSP}</td>
                    <td className="py-3 px-4">{item.seat}</td>
                    <td className="py-3 px-4">{item.advertiser}</td>
                    <td className="py-3 px-4">{item.intersection_order}</td>
                    <td className="py-3 px-4">${item.media_cost_d1}</td>
                    <td className="py-3 px-4">{item.fit_score}</td>
                    <td className="py-3 px-4">{item.bidvid_status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </>
  );
};


export default withAuth(DashboardPage);
