import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shortUrl = (await params).shorturl;

  // Connect to MongoDB client and collection
  const client = await clientPromise;
  const db = client.db("Bit-Links");
  const collection = db.collection("Bit-Links");

  // Check if the shortUrl already exists in the database
  const existingDoc = await collection.findOne({ shortUrl: shortUrl });

  if (!existingDoc) {
    return redirect("http://localhost:3000/");
  }

  // Redirect to the original URL
  return redirect(existingDoc.url);
}
