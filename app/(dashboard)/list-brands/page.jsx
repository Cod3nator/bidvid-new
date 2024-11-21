"use client";
import React, { useState } from 'react'
import Navbar from '../components/Dash_Navbar'
import { ChevronDown, Search } from 'lucide-react';
import Pagination from '../components/pagination';

const BrandsTable= () => {
  
  const [dropdownOpen, setDropdownOpen] = useState({
    sort: false,
    fitScore: false,
    date: false,
  });
  const [selectedSort, setSelectedSort] = useState("Newest");
  const sortBy = ["Newest", "Oldest", "A-Z", "Z-A"];
  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const dummyClient = [
    {
      campaignName: "Brand 1",
      createdBy: "John Doe",
      lastEdited: "2024-11-15",
      reportId: "12345",
    },
    {
      campaignName: "Brand 2",
      createdBy: "Jane Smith",
      lastEdited: "2024-11-16",
      reportId: "67890",
    },
    {
      campaignName: "Brand 3",
      createdBy: "Michael Brown",
      lastEdited: "2024-11-17",
      reportId: "11223",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 h-screen">
        <div
          className="table-container bg-white p-8 rounded-lg mt-20 mb-4"
          style={{ borderRadius: "24px" }}
        >
          <div className="table-header flex justify-between items-center mb-8">
            <div className="table-header-title flex flex-col space-y-2">
              <div className="table-brand-name text-xl font-bold">
                List of Clients
              </div>
              <span className="table-report-id text-green-400 text-sm">
                Active Members
              </span>
            </div>

            <div className="filter-wrapper flex space-x-4 items-center">
              <div className="max-w-md rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                  <div className="w-full p-3">
                    <div className="relative">
                      <Search className="absolute top-2 left-2 text-gray-400" />
                      <input
                        type="text"
                        className="bg-white h-10 w-full text-sm px-12 rounded-lg focus:outline-none hover:cursor-pointer placeholder-gray-500"
                        placeholder="Search"
                        style={{ background: "#F9FBFF" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="sort-by">
                <button
                  style={{ background: "#F9FBFF" }}
                  type="button"
                  onClick={() => toggleDropdown("sort")}
                  className="flex space-x-4 ml-2 bg-white py-2 rounded-md shadow-sm px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Sort by:{" "}
                  <span className="font-bold pl-2">{selectedSort}</span>
                  <ChevronDown className="inline ml-2" size={20} />
                </button>
                {dropdownOpen.sort && (
                  <div className="absolute z-10 mt-2 w-36 bg-white shadow-lg border rounded-md">
                    <ul className="py-1 text-sm text-gray-700">
                      {sortBy &&
                        sortBy.map((sort, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setSelectedSort(sort);
                              toggleDropdown("sort");
                            }}
                          >
                            {sort}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* table header ends ^ */}
          {/* Table */}
          <table
            className="min-w-full bg-white border-gray-100 rounded "
            style={{
              borderSpacing: "30px",
              whiteSpace: "nowrap",
            }}
          >
            <thead>
              <tr className="bg-white text-gray-400 font-regular">
                <th className="py-2 border-b text-start text-sm font-medium">
                  Brand Name
                </th>
                {/* <th
                  className="py-2 border-b text-start text-sm font-medium relative"
                  style={{ paddingLeft: "14px", paddingRight: "54px" }}
                >
                  Fit Score
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      onClick={() => toggleDropdown("fitScore")}
                      className="ml-2 bg-white  rounded-md shadow-sm px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <ChevronDown size={18} />
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
                </th> */}
                <th className="py-2 border-b text-start text-sm font-medium">
                  Created By
                </th>
                <th className="py-2 border-b text-start text-sm font-medium">
                  Last Edited
                </th>
                <th className="py-2 border-b text-start text-sm font-medium">
                  Report Id
                </th>
                <th className="py-2 border-b text-start text-sm font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyClient &&
                dummyClient.map((client, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-6 px-2 text-sm ">
                      {client.campaignName}
                    </td>
                    <td className="py-6 px-2 text-sm">{client.createdBy}</td>
                    <td className="py-6 px-2 text-sm">{client.lastEdited}</td>
                    <td className="py-6 px-2 text-sm">{client.reportId}</td>
                    <td className="py-6 px-2 text-sm">
                      <button
                        style={{
                          background: "#16C09861",
                          border: "1px solid #00B087",
                          color: "#008767",
                        }}
                        className=" text-white font-semibold py-2 px-8 rounded-md hover:bg-green-600"
                        onClick={() => {
                          window.location.href = "/dashboard";
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
    </>
  );
};


export default BrandsTable