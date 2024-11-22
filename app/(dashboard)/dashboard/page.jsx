"use client"
import React, { useEffect, useState } from "react";
import ClientDashboard from "../components/ClientDashboard";

export const dynamic = 'force-dynamic';

const DashboardPage = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://devapi.bidvid.in/campaign_reports', {
          cache: 'no-store',
        });
        const data = await response.json();
        setCampaignData(data);
        
        const headers = Object.keys(data[0]).map((key) =>
          key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
        );
        setHeaders(headers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <ClientDashboard campaignData={campaignData} headers={headers} />
  );
};

export default DashboardPage;
