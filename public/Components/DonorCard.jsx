"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoPerson } from "react-icons/go";
import { MdBloodtype, MdLocationOn } from "react-icons/md";

export default function DonorCard({ donor }) {
  return (
    <Link href={`/dashboard/donors/${donor._id}`}>
      <div className="w-full max-w-md bg-white shadow-lg hover:shadow-xl rounded-xl p-5  flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 border-2 border-red-500 transition-all duration-300 hover:border-red-600 hover:-translate-y-1 cursor-pointer">
        {/* Profile Photo */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center border-4 border-red-500 rounded-full shadow-md">
          {donor?.photoURL ? (
            <Image
              src={donor?.photoURL?.trim() || " "}
              alt={donor?.donorName || "Donor"}
              width={120}
              height={120}
              className="object-cover rounded-full"
              unoptimized
            />
          ) : (
            <GoPerson className="text-red-500" size={45} />
          )}
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-2.5 text-center sm:text-left w-full sm:w-auto">
          {/* Name */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-bold text-gray-700 text-sm uppercase tracking-wide">
              Name:
            </span>
            <span className="text-gray-900 font-semibold text-base sm:text-lg break-words">
              {donor?.donorName}
            </span>
          </div>

          {/* Blood Group */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-bold text-gray-700 text-sm uppercase tracking-wide flex items-center justify-center sm:justify-start gap-1">
              <MdBloodtype className="text-red-500" size={18} />
              Group:
            </span>
            <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
              {donor.bloodGroup}
            </span>
          </div>

      
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-bold text-gray-700 text-sm uppercase tracking-wide flex items-center justify-center sm:justify-start gap-1">
              <MdLocationOn className="text-red-500" size={18} />
              Location:
            </span>
            <span className="text-gray-800 font-medium text-sm break-words">
              {donor.userDistrict}, {donor.userDivision}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
