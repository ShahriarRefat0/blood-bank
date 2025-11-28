"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MdDelete, MdVisibility } from "react-icons/md";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthContext";
import LoadingSpinner from "../../../../public/Components/LoadingSpinner";

export default function ManageRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`/api/blood-request?user=${user.email}`)
      .then((res) => {
        setRequests(res.data?.requests || []);
      })
      .catch((err) => console.log("Fetch error", err))
      .finally(() => setLoading(false));
  }, [user]);

const handleDelete = async (id) => {
  // Step 1: Confirm first
  const confirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#6e7881",
    confirmButtonText: "Yes, delete it!",
  });

  if (!confirm.isConfirmed) return; // cancelled

  try {
    // Step 2: Now call API
    const res = await axios.delete(`/api/blood-request/${id}`);

    console.log("Delete response:", res.data);

    if (res.data.success) {
      // Step 3: Remove from UI using functional state update
      setRequests((prev) => prev.filter((r) => r._id !== id));

      Swal.fire("Deleted!", "Your request has been deleted.", "success");
    } else {
      Swal.fire("Failed!", "Could not delete the request.", "error");
    }
  } catch (e) {
    console.log("Delete error:", e);
    Swal.fire("Error!", "Something went wrong.", "error");
  }
};



  if (loading) return <LoadingSpinner />;

  return (
    <div className="w-11/12 mx-auto min-h-screen py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-10 text-center">
        Manage Your Blood Requests
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto shadow-lg rounded-xl border border-red-200">
        <table className="w-full bg-white rounded-xl overflow-hidden">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Patient</th>
              <th className="py-3 px-4 text-left">Blood Group</th>
              <th className="py-3 px-4 text-left">District</th>
              <th className="py-3 px-4 text-left">Date Needed</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr key={req._id} className="border-b hover:bg-red-50 transition">
                <td className="py-3 px-4">{req.patientName}</td>

                <td className="py-3 px-4 font-bold text-red-600">
                  {req.bloodGroup}
                </td>

                <td className="py-3 px-4">
                  {req.userDistrict}, {req.userDivision}
                </td>

                <td className="py-3 px-4">{req.date}</td>

                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <Link
                      href={`/dashboard/blood-requests/${req._id}`}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <MdVisibility size={20} /> View
                    </Link>

                    <button
                      onClick={() => handleDelete(req._id)}
                      className="text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <MdDelete size={20} /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid  md:hidden grid-cols-1 gap-6 mt-6">
        {requests.map((req) => (
          <div
            key={req._id}
            className="bg-white p-6 rounded-xl shadow-md border border-red-200"
          >
            <h2 className="text-xl font-semibold text-red-600">
              {req.patientName}
            </h2>

            <p className="text-gray-700 mt-2">
              <span className="font-medium">Blood Group:</span> {req.bloodGroup}
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Location:</span> {req.userCity},{" "}
              {req.userDistrict}
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Needed On:</span> {req.date}
            </p>

            <div className="flex gap-4 mt-5">
              <Link
                href={`/dashboard/blood-requests/${req._id}`}
                className="w-1/2 bg-gray-200 text-black py-2 rounded-lg flex items-center justify-center gap-1 font-medium"
              >
                <MdVisibility /> View
              </Link>

              <button
                onClick={() => handleDelete(req._id)}
                className="w-1/2 bg-red-600 text-white py-2 rounded-lg flex items-center justify-center gap-1 font-medium"
              >
                <MdDelete /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
