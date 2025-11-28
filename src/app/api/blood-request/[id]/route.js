export const dynamic = "force-dynamic";

import clientPromise from "@/lib/mongoDb";
import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    const client = await clientPromise;
    const db = client.db("blood-bankDB");

    const result = await db
      .collection("bloodRequests")
      .deleteOne({ _id: new ObjectId(id) });

    return Response.json({ success: !!result.deletedCount });
  } catch (e) {
    console.log("Delete error:", e);
    return Response.json({ success: false, error: e.message }, { status: 500 });
  }
}
