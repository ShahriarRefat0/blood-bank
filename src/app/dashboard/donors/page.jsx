
"use client";

import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import DonorCard from "../../../../public/Components/DonorCard";

export default function AvailableDonors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios.get("/api/donor").then((res) => {
      console.log("API Response:", res.data);
      setDonors(res.data.donors);
    });
  }, []);

  // console.log(donors);
  return (
    <div className="min-h-screen w-11/12 mx-auto my-8">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center text-red-500">
          Available Donors.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {donors.map((donor, i) => (
          <DonorCard key={i} donor={donor}></DonorCard>
        ))}
      </div>
    </div>
  );
}
