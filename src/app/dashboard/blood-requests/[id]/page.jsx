export const dynamic = "force-dynamic";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongoDb";
import { connectDB } from "@/lib/mongoDb";
import { MdBloodtype, MdOutlineSpeakerNotes } from "react-icons/md";
import { PiBuildingApartmentBold } from "react-icons/pi";
import { FaPhoneAlt, FaHeart, FaExclamationCircle } from "react-icons/fa";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";


export default async function RequestDetails({ params }) {
  const { id } = await params;

  const client = await clientPromise;
  const db = client.db("blood-bankDB");
  const requests = db.collection("bloodRequests");

  const req = await requests.findOne({ _id: new ObjectId(id) });

  // console.log(req);

  return (
    <div className=" bg-red-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden border border-red-200">
        {/* TOP BANNER */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6 rounded-b-3xl">
          <div className="flex justify-between items-start">
            <div>
              <span className="bg-[#ffffff65] border border-white text-xs px-3 py-1 rounded-full">
                URGENT
              </span>
              <p className="mt-2 text-3xl font-extrabold">Blood Request</p>

              <p className="text-xs opacity-80">
                Posted {new Date(req.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="text-right bg-[#ffffff35] border border-white p-2 rounded-xl">
              <p className="flex items-center gap-1 text-lg font-bold">
                <MdBloodtype size={22} /> {req.bloodGroup}
              </p>
              <p className="text-sm">
                Need: <span className="font-semibold">{req.amount} Bags</span>
              </p>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="p-6 space-y-6">
          {/* Patient + Hospital */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 shadow-md rounded-xl  flex items-center gap-3">
              <FaUser className="text-2xl text-gray-500 hover:text-red-500" />
              <div>
                <p className="text-xs text-gray-500">PATIENT NAME</p>
                <p className="font-bold text-gray-700">{req.patientName}</p>
              </div>
            </div>

            <div className="p-4 bg-gray-100 shadow-md rounded-xl flex items-center gap-3">
              <PiBuildingApartmentBold className="text-2xl text-red-500" />
              <div>
                <p className="text-xs text-gray-500">HOSPITAL</p>
                <p className="font-bold text-gray-700">{req.hospitalName}</p>
              </div>
            </div>
          </div>

          <h2 className="font-bold text-gray-700 text-lg">Critical Details</h2>

          {/* Critical info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date Needed */}
            <div className="p-4 bg-gray-100 shadow-md rounded-xl flex items-center gap-3">
              <FaCalendarAlt className="text-3xl text-red-500" />
              <div>
                <p className="text-xs text-gray-500">Date Needed</p>
                <p className="font-semibold text-gray-800">{req.date}</p>
              </div>
            </div>

            {/* Location */}
            <div className="p-4 bg-gray-100 shadow-md rounded-xl flex items-center gap-3">
              <FaMapMarkerAlt className="text-3xl text-green-600" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-semibold text-gray-800">
                  {req.userCity}, {req.userDistrict}
                </p>
                <p className="text-sm text-gray-600">{req.userDivision}</p>
              </div>
            </div>
          </div>

          {/* Contact Number */}
          <div className="p-4 bg-gray-100 shadow-md rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-red-500" />
              <div>
                <p className="text-xs text-gray-500">Contact Number</p>
                <p className="font-bold text-gray-800">{req.phoneNo}</p>
              </div>
            </div>
            <a
              href="tel:+8801712345678"
              className="px-4 py-2 rounded-xl bg-black text-white text-sm"
            >
              Call Now
            </a>
          </div>

          {/* Additional Notes */}
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-300 flex items-start gap-3">
            <MdOutlineSpeakerNotes className="text-yellow-600 mt-1" />{" "}
            <p className="text-sm text-yellow-700 font-bold">Notes:</p>
            <p className="text-sm text-yellow-700">{req.notes}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold flex items-center justify-center gap-2">
              <FaHeart /> I’ll Donate Blood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
