import clientPromise from "@/lib/mongodb";

export async function GET(request) {
  try {
    // Connect to MongoDB client and collection
    const client = await clientPromise;
    const db = client.db("Bit-Links");
    const collection = db.collection("Bit-Links");

    // Get all the short URLs
    const shortUrls = await collection.find({}).toArray();

    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: "Successfully fetched all short URLs",
        data: shortUrls,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error inserting data into the database:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "Failed to insert data",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
