"use client"
import React, { useEffect, useState } from "react";

import ClientDashboard from "../components/ClientDashboard";

export const dynamic = 'force-dynamic';


const DashboardPage = async() => {
  const campaignData = await fetch('https://devapi.bidvid.in/campaign_reports', {
    cache: 'no-store', 
  }).then((res) => res.json());

  const headers = Object.keys(campaignData[0]).map((key) =>
    key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
  );
 
  return (
  <ClientDashboard campaignData={campaignData} headers={headers} />
  );
};


export default DashboardPage;
